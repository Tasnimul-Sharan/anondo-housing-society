export function notifyJobsChanged() {
  window.dispatchEvent(new Event("recruitment:jobs-changed"));
  try { localStorage.setItem("recruitment:jobs-changed", String(Date.now())); } catch {}
}
