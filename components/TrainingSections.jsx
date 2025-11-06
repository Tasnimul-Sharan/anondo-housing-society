import React from "react";

export default function TrainingSections() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Overview */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          The Training Academy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At the core of Anondo Universal Security Services Ltd lies its pride
          and strength — the
          <strong> Training Academy</strong>, a dedicated facility where men and
          women are transformed into disciplined, skilled, and confident
          security professionals.
        </p>
        <p className="mt-4 text-gray-600">
          Strategically located in Anondo Housing Society, Purbachal New Town,
          Dhaka, the Academy covers more than two acres and is designed to
          replicate real-world scenarios so guards graduate ready for
          deployment.
        </p>
      </div>

      {/* Key features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white/60 shadow-md">
          <h3 className="text-xl font-medium mb-2">
            Training Ground (2+ acres)
          </h3>
          <p className="text-gray-600">
            Large open fields for parades, fitness drills, and martial arts
            sessions.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white/60 shadow-md">
          <h3 className="text-xl font-medium mb-2">Dormitory Facilities</h3>
          <p className="text-gray-600">
            Long-stay accommodation supporting a disciplined 45-day residential
            program.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white/60 shadow-md">
          <h3 className="text-xl font-medium mb-2">
            Classrooms & Simulation Areas
          </h3>
          <p className="text-gray-600">
            Lecture halls, vehicle check zones, and CCTV monitoring rooms for
            hands-on learning.
          </p>
        </div>
      </div>

      {/* Curriculum section with accordion style */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">
          30-day Training Curriculum
        </h3>
        <p className="text-gray-600 mb-6">
          The program is structured around four major components — Field,
          Professional, Theoretical, and Personal Development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Field Training */}
          <article className="p-5 border rounded-lg">
            <h4 className="text-lg font-medium mb-3">A. Field Training</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Physical Fitness:</strong> Daily routines (running,
                push-ups, rope-climbing) and nutrition guidance.
              </li>
              <li>
                <strong>Parade & Drill:</strong> Marching, formations and
                ceremonial readiness.
              </li>
              <li>
                <strong>Discipline:</strong> Punctuality, responsibility and
                professional accountability.
              </li>
              <li>
                <strong>Self-Defence & Martial Arts:</strong> Safe restraint
                techniques and unarmed combat basics.
              </li>
            </ul>
          </article>

          {/* Professional Training */}
          <article className="p-5 border rounded-lg">
            <h4 className="text-lg font-medium mb-3">
              B. Professional Training
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Access Control & Visitor Checks</strong> — respectful
                frisking, screening and entry management.
              </li>
              <li>
                <strong>Object & Vehicle Screening</strong> — practical use of
                scanners and under-vehicle checks.
              </li>
              <li>
                <strong>Crowd Control & Event Security</strong> — safe crowd
                management and coordination with authorities.
              </li>
              <li>
                <strong>CCTV Surveillance</strong> — monitoring, detection and
                reporting workflows.
              </li>
            </ul>
          </article>

          {/* Theoretical Courses */}
          <article className="p-5 border rounded-lg">
            <h4 className="text-lg font-medium mb-3">C. Theoretical Courses</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Right of Private Defence & Property Rights (Bangladesh legal
                framework)
              </li>
              <li>
                Right of Arrest for Civil Persons & Suspect-handling protocols
              </li>
              <li>Police Rules, Reporting, and Liaison with law enforcement</li>
            </ul>
          </article>

          {/* Personal Development */}
          <article className="p-5 border rounded-lg">
            <h4 className="text-lg font-medium mb-3">
              D. Personal Development
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Behaviour, Etiquette, and Communication skills</li>
              <li>Hygiene & Grooming, Uniform maintenance</li>
              <li>
                Training on basic household tools to support domestic/office
                assignments
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <h5 className="font-semibold">Training Outcome</h5>
          <p className="text-gray-700 mt-2">
            Graduates emerge as physically fit, legally aware, professionally
            skilled, and ethically grounded guards — ready to inspire trust and
            confidence.
          </p>
        </div>
      </div>

      {/* Visual concepts for brochure */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Parade Squad",
            caption: "A guard squad in parade formation",
          },
          {
            title: "Self-defence",
            caption: "Practical self-defence training session",
          },
          { title: "CCTV Room", caption: "CCTV monitoring control room" },
          {
            title: "Trainer",
            caption: "Trainer instructing recruits on metal detector use",
          },
        ].map((v) => (
          <figure key={v.title} className="rounded-lg border p-4 bg-white/60">
            <div className="h-36 rounded-md bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-sm text-gray-500">
              Image: {v.title}
            </div>
            <figcaption className="text-gray-600 text-sm mt-3">
              {v.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-sky-50 to-white rounded-2xl">
        <div>
          <h4 className="text-xl font-semibold">Ready to learn more?</h4>
          <p className="text-gray-700">
            Request a brochure or schedule a visit to the Training Academy.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="/contact"
            className="px-5 py-2 rounded-lg border bg-white hover:shadow-sm"
          >
            Contact Us
          </a>
          <a
            href="/brochure.pdf"
            className="px-5 py-2 rounded-lg bg-sky-600 text-white"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

// import React from "react";

// function Overview() {
//   return (
//     <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
//       <h2 className="text-3xl md:text-4xl font-semibold mb-3">The Training Academy</h2>
//       <p className="text-gray-700 leading-relaxed">
//         At the core of Anondo Universal Security Services Ltd lies its pride and strength — the
//         <strong> Training Academy</strong>, a dedicated facility where men and women are transformed
//         into disciplined, skilled, and confident security professionals.
//       </p>
//       <p className="mt-4 text-gray-600">
//         Strategically located in Anondo Housing Society, Purbachal New Town, Dhaka, the Academy
//         covers more than two acres and is designed to replicate real-world scenarios so guards
//         graduate ready for deployment.
//       </p>
//     </div>
//   );
// }

// function KeyFeatures() {
//   const features = [
//     {
//       title: "Training Ground (2+ acres)",
//       desc: "Large open fields for parades, fitness drills, and martial arts sessions.",
//     },
//     {
//       title: "Dormitory Facilities",
//       desc: "Long-stay accommodation supporting a disciplined 45-day residential program.",
//     },
//     {
//       title: "Classrooms & Simulation Areas",
//       desc: "Lecture halls, vehicle check zones, and CCTV monitoring rooms for hands-on learning.",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//       {features.map((f) => (
//         <div
//           key={f.title}
//           className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white/60 shadow-md"
//         >
//           <h3 className="text-xl font-medium mb-2">{f.title}</h3>
//           <p className="text-gray-600">{f.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Curriculum() {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6">
//       <h3 className="text-2xl font-semibold mb-4">45-day Training Curriculum</h3>
//       <p className="text-gray-600 mb-6">
//         The program is structured around four major components — Field, Professional, Theoretical,
//         and Personal Development.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <article className="p-5 border rounded-lg">
//           <h4 className="text-lg font-medium mb-3">A. Field Training</h4>
//           <ul className="list-disc pl-5 text-gray-700 space-y-2">
//             <li>
//               <strong>Physical Fitness:</strong> Daily routines (running, push-ups, rope-climbing)
//               and nutrition guidance.
//             </li>
//             <li>
//               <strong>Parade & Drill:</strong> Marching, formations and ceremonial readiness.
//             </li>
//             <li>
//               <strong>Discipline:</strong> Punctuality, responsibility and professional
//               accountability.
//             </li>
//             <li>
//               <strong>Self-Defence & Martial Arts:</strong> Safe restraint techniques and unarmed
//               combat basics.
//             </li>
//           </ul>
//         </article>

//         <article className="p-5 border rounded-lg">
//           <h4 className="text-lg font-medium mb-3">B. Professional Training</h4>
//           <ul className="list-disc pl-5 text-gray-700 space-y-2">
//             <li>
//               <strong>Access Control & Visitor Checks</strong> — respectful frisking, screening and
//               entry management.
//             </li>
//             <li>
//               <strong>Object & Vehicle Screening</strong> — practical use of scanners and under-vehicle
//               checks.
//             </li>
//             <li>
//               <strong>Crowd Control & Event Security</strong> — safe crowd management and coordination
//               with authorities.
//             </li>
//             <li>
//               <strong>CCTV Surveillance</strong> — monitoring, detection and reporting workflows.
//             </li>
//           </ul>
//         </article>

//         <article className="p-5 border rounded-lg">
//           <h4 className="text-lg font-medium mb-3">C. Theoretical Courses</h4>
//           <ul className="list-disc pl-5 text-gray-700 space-y-2">
//             <li>Right of Private Defence & Property Rights (Bangladesh legal framework)</li>
//             <li>Right of Arrest for Civil Persons & Suspect-handling protocols</li>
//             <li>Police Rules, Reporting, and Liaison with law enforcement</li>
//           </ul>
//         </article>

//         <article className="p-5 border rounded-lg">
//           <h4 className="text-lg font-medium mb-3">D. Personal Development</h4>
//           <ul className="list-disc pl-5 text-gray-700 space-y-2">
//             <li>Behaviour, Etiquette, and Communication skills</li>
//             <li>Hygiene & Grooming, Uniform maintenance</li>
//             <li>Training on basic household tools to support domestic/office assignments</li>
//           </ul>
//         </article>
//       </div>

//       <div className="mt-6 p-4 bg-slate-50 rounded-lg">
//         <h5 className="font-semibold">Training Outcome</h5>
//         <p className="text-gray-700 mt-2">
//           Graduates emerge as physically fit, legally aware, professionally skilled, and ethically
//           grounded guards — ready to inspire trust and confidence.
//         </p>
//       </div>
//     </div>
//   );
// }

// function Visuals() {
//   const visuals = [
//     { title: "Parade Squad", caption: "A guard squad in parade formation" },
//     { title: "Self-defence", caption: "Practical self-defence training session" },
//     { title: "CCTV Room", caption: "CCTV monitoring control room" },
//     { title: "Trainer", caption: "Trainer instructing recruits on metal detector use" },
//   ];

//   return (
//     <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
//       {visuals.map((v) => (
//         <figure key={v.title} className="rounded-lg border p-4 bg-white/60">
//           <div className="h-36 rounded-md bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-sm text-gray-500">
//             Image: {v.title}
//           </div>
//           <figcaption className="text-gray-600 text-sm mt-3">{v.caption}</figcaption>
//         </figure>
//       ))}
//     </div>
//   );
// }

// function CTA() {
//   return (
//     <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-sky-50 to-white rounded-2xl">
//       <div>
//         <h4 className="text-xl font-semibold">Ready to learn more?</h4>
//         <p className="text-gray-700">Request a brochure or schedule a visit to the Training Academy.</p>
//       </div>
//       <div className="flex gap-3">
//         <a href="/contact" className="px-5 py-2 rounded-lg border bg-white hover:shadow-sm">
//           Contact Us
//         </a>
//         <a href="/brochure.pdf" className="px-5 py-2 rounded-lg bg-sky-600 text-white">
//           Download Brochure
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function TrainingSections() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <Overview />
//       <KeyFeatures />
//       <Curriculum />
//       <Visuals />
//       <CTA />
//     </section>
//   );
// }
