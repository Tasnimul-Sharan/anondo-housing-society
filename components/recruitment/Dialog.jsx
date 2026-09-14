import { useEffect, useRef, useId } from "react";
import { FaTimes } from "react-icons/fa";
import s from "@/styles/Recruitment.module.css";

export default function Dialog({ title, onClose, busy = false, children }) {
  const ref = useRef(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    const overflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog ref={ref} className={`${s.scope} ${s.modal}`} aria-labelledby={titleId} data-lenis-prevent
      onCancel={event => { event.preventDefault(); if (!busy) onClose(); }}>
      <div className={s.modalHeader}>
        <h2 id={titleId}>{title}</h2>
        <button type="button" className={s.iconButton} aria-label="Close dialog" title="Close" onClick={onClose} disabled={busy}><FaTimes /></button>
      </div>
      <div className={s.modalBody}>{children}</div>
    </dialog>
  );
}
