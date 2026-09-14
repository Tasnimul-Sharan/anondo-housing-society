import test from "node:test";
import assert from "node:assert/strict";
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { DOCX } from "./cv-fixtures.mjs";

test("CV validation works with only dependencies traced into the production function", async t => {
  const root = fileURLToPath(new URL("../../", import.meta.url));
  const manifestPath = join(root, ".next/server/pages/api/recruitment/applications.js.nft.json");
  let manifest;
  try { manifest = JSON.parse(await readFile(manifestPath, "utf8")); }
  catch (error) {
    if (error.code !== "ENOENT") throw error;
    t.skip("Run npm run build first to test the serverless dependency trace.");
    return;
  }
  const isolated = await mkdtemp(join(tmpdir(), "recruitment-production-"));
  try {
    // Outside the repository, Node cannot fall back to untraced local dependencies.
    const files = manifest.files.map(file => relative(root, resolve(dirname(manifestPath), file)))
      .filter(file => file.startsWith(`node_modules${sep}`));
    files.push("lib/recruitment/upload.mjs", "lib/recruitment/validation.mjs");
    for (const file of files) {
      const target = join(isolated, file);
      await mkdir(dirname(target), { recursive: true });
      await copyFile(join(root, file), target);
    }
    const { validateCv } = await import(pathToFileURL(join(isolated, "lib/recruitment/upload.mjs")));
    const filepath = join(isolated, "temporary-upload");
    const pdf = Buffer.from("%PDF-1.7\n" + "fixture content".repeat(30));
    await writeFile(filepath, pdf);
    assert.equal(await validateCv({ filepath, size: pdf.length, originalFilename: "cv.pdf" }), "pdf");
    await writeFile(filepath, DOCX);
    assert.equal(await validateCv({ filepath, size: DOCX.length, originalFilename: "cv.DOCX" }), "docx");
    await assert.rejects(validateCv({ filepath, size: DOCX.length, originalFilename: "cv.pdf" }), /valid PDF/);
    await writeFile(filepath, Buffer.from("MZ" + "executable".repeat(40)));
    await assert.rejects(validateCv({ filepath, size: 402, originalFilename: "cv.pdf" }), /valid PDF/);
  } finally { await rm(isolated, { recursive: true, force: true }); }
});
