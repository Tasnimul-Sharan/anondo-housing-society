import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowRight, FaThLarge, FaLock } from "react-icons/fa";
import { authClient, apiRequest } from "@/lib/recruitment/client";
import BrandLogo from "@/components/admin/BrandLogo";
import PasswordField from "@/components/admin/PasswordField";
import a from "@/styles/Admin.module.css";
import s from "@/styles/Recruitment.module.css";

export default function AdminLogin() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    let subscription;
    try {
      const client = authClient();
      if (new URLSearchParams(window.location.hash.slice(1)).get("type") === "recovery") setMode("recovery");
      subscription = client.auth.onAuthStateChange(event => {
        if (event === "PASSWORD_RECOVERY") setMode("recovery");
      }).data.subscription;
    } catch (err) { setError(err.message); }
    return () => subscription?.unsubscribe();
  }, []);
  async function submit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    setBusy(true); setError(""); setMessage("");
    try {
      const client = authClient();
      if (mode === "reset") {
        const { error } = await client.auth.resetPasswordForEmail(values.get("email"), { redirectTo: `${window.location.origin}/admin/login` });
        if (error) throw error;
        setMessage("If this email has an account, a password reset link will be sent.");
      } else if (mode === "recovery") {
        if (values.get("password") !== values.get("confirm")) throw new Error("Passwords do not match.");
        const { error } = await client.auth.updateUser({ password: values.get("password") });
        if (error) throw error;
        await client.auth.signOut();
        setMode("login"); setMessage("Password updated. Please sign in.");
      } else {
        const { error } = await client.auth.signInWithPassword({ email: values.get("email"), password: values.get("password") });
        if (error) throw error;
        try { await apiRequest("/api/admin/session", {}, true); }
        catch (err) { await client.auth.signOut(); throw err; }
        await router.replace("/admin");
      }
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  return <div className={`${s.scope} ${a.root} ${a.loginPage}`}>
    <Head><title>Admin login | Anondo Housing Society</title><meta name="robots" content="noindex,nofollow" /></Head>
    <header className={a.loginHeader}><BrandLogo /><span className={a.portalName}><FaThLarge />Administration</span></header>
    <main className={a.loginMain}><div className={a.loginContent}>
      <FaLock className={a.loginMark} />
      <h1>{mode === "login" ? "Welcome back" : mode === "reset" ? "Reset password" : "Set new password"}</h1>
      <p className={a.loginSubtitle}>Anondo Housing Society</p>
      {error && <p role="alert" className={s.error}>{error}</p>}
      {message && <p role="status" className={s.success}>{message}</p>}
      <form onSubmit={submit} key={mode} className={a.loginForm}>
        {mode !== "recovery" && <label className={a.field}>Email address<input className={a.input} name="email" type="email" autoComplete="username" required disabled={busy} /></label>}
        {mode !== "reset" && <PasswordField name="password" minLength={mode === "recovery" ? 12 : undefined} autoComplete={mode === "recovery" ? "new-password" : "current-password"} required disabled={busy} />}
        {mode === "recovery" && <PasswordField label="Confirm password" name="confirm" autoComplete="new-password" minLength={12} required disabled={busy} />}
        <button className={s.button} disabled={busy}>{busy ? "Please wait..." : mode === "login" ? "Sign in" : mode === "reset" ? "Send reset link" : "Update password"}<FaArrowRight /></button>
      </form>
      {mode === "reset" && <button className="mt-5 text-sm text-[#0072bc]" disabled={busy} onClick={() => { setMode("login"); setError(""); setMessage(""); }}>Back to sign in</button>}
    </div></main>
    <footer className={a.loginFooter}><Link href="/">Anondo Housing Society</Link> / Administration</footer>
  </div>;
}
AdminLogin.adminPage = true;
