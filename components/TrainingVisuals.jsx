export default function TrainingVisuals() {
  const visuals = [
    { title: "Parade Squad", caption: "A guard squad in parade formation" },
    { title: "Self-defence", caption: "Practical self-defence training session" },
    { title: "CCTV Room", caption: "CCTV monitoring control room" },
    { title: "Trainer", caption: "Trainer instructing recruits on metal detector use" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 custom-container mx-auto py-12">
      {visuals.map((v) => (
        <figure key={v.title} className="rounded-lg border p-4 bg-white/60">
          <div className="h-36 rounded-md bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-sm text-gray-500">
            Image: {v.title}
          </div>
          <figcaption className="text-gray-600 text-sm mt-3">{v.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}