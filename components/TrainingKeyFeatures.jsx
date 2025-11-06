import React from "react";

export default function TrainingKeyFeatures() {
  const features = [
    {
      title: "Training Ground (2+ acres)",
      desc: "Large open fields for parades, fitness drills, and martial arts sessions.",
    },
    {
      title: "Dormitory Facilities",
      desc: "Long-stay accommodation supporting a disciplined 45-day residential program.",
    },
    {
      title: "Classrooms & Simulation Areas",
      desc: "Lecture halls, vehicle check zones, and CCTV monitoring rooms for hands-on learning.",
    },
  ];

  return (
    <section className="py-12 bg-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 custom-container mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-xl bg-gradient-to-br bg-white"
          >
            <h3 className="text-xl font-medium mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
