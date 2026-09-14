import { useId, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import s from "@/styles/Admin.module.css";

export default function PasswordField({ label = "Password", ...props }) {
  const [visible, setVisible] = useState(false);
  const id = useId();
  return <div className={s.field}>
    <label htmlFor={id}>{label}</label>
    <div className={s.passwordWrap}>
      <input {...props} id={id} type={visible ? "text" : "password"} className={s.input} />
      <button type="button" className={s.passwordToggle} onClick={() => setVisible(value => !value)}
        disabled={props.disabled} aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`}
        aria-pressed={visible} title={visible ? "Hide password" : "Show password"}>
        {visible ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  </div>;
}
