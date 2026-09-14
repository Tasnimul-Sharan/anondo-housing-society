import { FaEdit, FaTrashAlt, FaUndo, FaEye, FaUsers } from "react-icons/fa";
import { Status } from "./DashboardOverview";
import a from "@/styles/Admin.module.css";
import s from "@/styles/Recruitment.module.css";

export default function RecordsTable({ items, view, onEdit, onDelete, onRestore, onReview, onApplications, busy }) {
  const applications = view === "applications";
  return <div className={a.tableWrap}><table className={a.table}>
    <thead><tr><th>{applications ? "Candidate" : "Position"}</th><th className={a.secondaryColumn}>{applications ? "Position" : "Location"}</th><th>Status</th><th className={a.secondaryColumn}>{applications ? "Received" : "Deadline"}</th><th><span className="sr-only">Actions</span></th></tr></thead>
    <tbody>{items.map(item => <tr key={item.id}>
      <td><div className={a.recordTitle}>{applications ? item.full_name : item.title}</div><div className={a.recordMeta}>{applications ? item.email : `${item.department} / ${item.type}`}</div></td>
      <td className={a.secondaryColumn}>{applications ? item.recruitment_jobs?.title : item.location}</td>
      <td><Status value={item.status} /></td>
      <td className={a.secondaryColumn}>{applications ? new Date(item.created_at).toLocaleDateString("en-GB") : item.deadline || "No deadline"}</td>
      <td><div className="flex items-center justify-end gap-1">
        {applications ? <button className={s.iconButton} title="Review application" aria-label={`Review ${item.full_name}`} onClick={() => onReview(item.id)}><FaEye /></button> : view === "trash" ? <>
          <button disabled={busy} className={s.iconButton} title="Restore as draft" aria-label={`Restore ${item.title}`} onClick={() => onRestore(item)}><FaUndo /></button>
          <button disabled={busy} className={`${s.iconButton} ${a.danger}`} title="Permanently delete" aria-label={`Permanently delete ${item.title}`} onClick={() => onDelete(item)}><FaTrashAlt /></button>
        </> : <>
          <button className={s.iconButton} title="Applications" aria-label={`Applications for ${item.title}`} onClick={() => onApplications(item)}><FaUsers /></button>
          <button className={s.iconButton} title="Edit job" aria-label={`Edit ${item.title}`} onClick={() => onEdit(item)}><FaEdit /></button>
          <button className={`${s.iconButton} ${a.danger}`} title="Delete job" aria-label={`Delete ${item.title}`} onClick={() => onDelete(item)}><FaTrashAlt /></button>
        </>}
      </div></td>
    </tr>)}</tbody>
  </table>{!items.length && <p className={s.empty}>{view === "trash" ? "Trash is empty." : applications ? "No applications match this view." : "No positions match this view."}</p>}</div>;
}
