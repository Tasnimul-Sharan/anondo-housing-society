import formidable from "formidable";
import { fileTypeFromFile } from "file-type";
import { unlink } from "node:fs/promises";
import { MAX_CV_BYTES, RequestError } from "./validation.mjs";

export async function parseApplication(req, temporaryFiles) {
  const form = formidable({
    maxFileSize: MAX_CV_BYTES, maxTotalFileSize: MAX_CV_BYTES, maxFiles: 1,
    maxFields: 20, maxFieldsSize: 32 * 1024, allowEmptyFiles: false,
  });
  form.on("fileBegin", (_name, file) => temporaryFiles.push(file.filepath));
  let fields, files;
  try { [fields, files] = await form.parse(req); }
  catch { throw new RequestError("Upload one PDF, DOC or DOCX CV, up to 3 MB, and complete all fields."); }
  const input = {};
  for (const [key, values] of Object.entries(fields)) {
    if (values.length !== 1) throw new RequestError("Invalid form submission.");
    input[key] = values[0];
  }
  const cv = files.cv?.[0];
  if (!cv || Object.keys(files).length !== 1) throw new RequestError("Please upload your CV.");
  return { input, cv };
}

export async function validateCv(file) {
  if (!file.size || file.size > MAX_CV_BYTES) throw new RequestError("Your CV must be 3 MB or smaller.");
  let type;
  try { type = await fileTypeFromFile(file.filepath); }
  catch { throw new RequestError("This CV could not be read. Upload a valid PDF, DOC or DOCX document."); }
  const extension = file.originalFilename?.split(".").pop().toLowerCase();
  // Verify file contents, not just the MIME type supplied by the browser.
  const valid = (extension === "pdf" && type?.ext === "pdf") ||
    (extension === "docx" && type?.ext === "docx") ||
    (extension === "doc" && type?.ext === "cfb");
  if (!valid) throw new RequestError("Upload a valid PDF, DOC or DOCX document.");
  return extension;
}

export async function cleanTemporaryFiles(paths) {
  await Promise.all(paths.map(path => unlink(path).catch(() => {})));
}
