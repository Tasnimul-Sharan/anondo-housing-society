import { useState } from "react";
import { FaKey } from "react-icons/fa";
import Dialog from "@/components/recruitment/Dialog";
import PasswordField from "./PasswordField";
import { authClient, apiRequest } from "@/lib/recruitment/client";
import { changePassword } from "@/lib/recruitment/password.mjs";
import s from "@/styles/Recruitment.module.css";

export default function PasswordChangeDialog({ user, onClose, onSaved }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true); setError("");
    try {
      await apiRequest("/api/admin/session", {}, true);
      await changePassword(authClient(), user, values);
      onSaved();
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  return <Dialog title="Change password" onClose={onClose} busy={busy}>
    <form onSubmit={submit}>
      <div className="grid gap-5 py-6">
        <PasswordField label="Current password" name="currentPassword" autoComplete="current-password" required disabled={busy} />
        <PasswordField label="New password" name="newPassword" autoComplete="new-password" minLength={12} required disabled={busy} />
        <PasswordField label="Confirm new password" name="confirmPassword" autoComplete="new-password" minLength={12} required disabled={busy} />
      </div>
      {error && <p role="alert" className={s.error}>{error}</p>}
      <div className={s.actions}><button type="button" className={s.secondary} onClick={onClose} disabled={busy}>Cancel</button><button className={s.button} disabled={busy}><FaKey />{busy ? "Updating..." : "Update password"}</button></div>
    </form>
  </Dialog>;
}
