export default function SectionBadge({
  label = "",
  icon: Icon = "",
  className = "",
  iconClassName = "",
  textClassName = "",
}) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-3 rounded-full border border-secondary/10 bg-white px-5 py-2 shadow-[0_14px_45px_rgba(0,114,188,0.08)] ${className}`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ${iconClassName}`}
      >
        <Icon className="text-xs" />
      </span>

      <span
        className={`text-xs font-bold tracking-[0.12em] text-primary/90 sm:text-sm ${textClassName}`}
      >
        {label}
      </span>
    </div>
  );
}
