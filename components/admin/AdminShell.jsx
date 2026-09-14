import Link from "next/link";
import { FaThLarge, FaBriefcase, FaUsers, FaTrashAlt, FaSignOutAlt, FaExternalLinkAlt, FaKey, FaChevronRight } from "react-icons/fa";
import BrandLogo from "./BrandLogo";
import a from "@/styles/Admin.module.css";

export const ADMIN_VIEWS = [
  { id: "overview", label: "Overview", icon: FaThLarge },
  { id: "jobs", label: "Jobs", icon: FaBriefcase },
  { id: "applications", label: "Applications", icon: FaUsers },
  { id: "trash", label: "Trash", icon: FaTrashAlt },
];

export default function AdminShell({ user, view, onNavigate, onSignOut, onPasswordChange, children }) {
  const current = ADMIN_VIEWS.find(item => item.id === view);
  const navigation = ADMIN_VIEWS.map(({ id, label, icon: Icon }) =>
    <button type="button" key={id} aria-current={view === id ? "page" : undefined} onClick={() => onNavigate(id)}><Icon />{label}</button>);
  return <div className={`${a.root} ${a.shell}`} data-lenis-prevent>
    <aside className={a.sidebar}>
      <div className={a.sidebarBrand}><BrandLogo /></div>
      <span className={a.navLabel}>Workspace</span>
      <nav className={a.nav} aria-label="Admin navigation">{navigation}</nav>
      <div className={a.sidebarBottom}>
        <Link href="/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt />View website</Link>
        <button onClick={onSignOut}><FaSignOutAlt />Sign out</button>
      </div>
    </aside>
    <div className={a.workspace}>
      <header className={a.header}>
        <div className={a.mobileBrand}><BrandLogo /></div>
        <div className={a.breadcrumb}>Administration <FaChevronRight size={9} /><strong>{current?.label}</strong></div>
        <div className={a.headerRight}>
          <div className={a.account}><span className={a.avatar}>{user.email?.slice(0, 1).toUpperCase()}</span><span>{user.email}</span></div>
          <button type="button" className={a.passwordAction} onClick={onPasswordChange} title="Change password" aria-label="Change password"><FaKey /><span>Change password</span></button>
        </div>
      </header>
      <nav className={a.mobileNav} aria-label="Mobile admin navigation">{navigation}<button onClick={onSignOut} aria-label="Sign out" title="Sign out"><FaSignOutAlt /></button></nav>
      <main className={a.content}>{children}</main>
    </div>
  </div>;
}
