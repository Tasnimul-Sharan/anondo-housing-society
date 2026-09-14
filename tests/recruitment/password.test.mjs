import test from "node:test";
import assert from "node:assert/strict";
import { changePassword } from "../../lib/recruitment/password.mjs";

test("password change validates confirmation and reauthenticates the current account", async () => {
  const user = { id: "admin-id", email: "admin@example.test" };
  const values = { currentPassword: "old-password-123", newPassword: "new-password-123", confirmPassword: "new-password-123" };
  const calls = [];
  const client = { auth: {
    signInWithPassword: async credentials => { calls.push("verify"); assert.equal(credentials.email, user.email); return { data: { user } }; },
    updateUser: async payload => { calls.push("update"); assert.equal(payload.password, values.newPassword); return {}; },
  } };
  await assert.rejects(changePassword(client, user, { ...values, confirmPassword: "mismatch" }), /do not match/);
  await assert.rejects(changePassword(client, user, { ...values, newPassword: "short" }), /12 characters/);
  assert.equal(calls.length, 0);
  await changePassword(client, user, values);
  assert.deepEqual(calls, ["verify", "update"]);
  client.auth.signInWithPassword = async () => ({ error: new Error("invalid") });
  await assert.rejects(changePassword(client, user, values), /could not be verified/);
  assert.equal(calls.length, 2);
  client.auth.signInWithPassword = async () => ({ data: { user: { id: "other-id" } } });
  await assert.rejects(changePassword(client, user, values), /Account verification failed/);
  assert.equal(calls.length, 2);
});
