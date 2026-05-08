import { motion } from "motion/react";

const experiences = [
  {
    company: "Overbi S.r.l.",
    role: "Stage — Sviluppatore Web",
    period: "Febbraio 2026 · 2 settimane",
    points: [
      "Sviluppo di una web app con React e Tailwind CSS",
      "Approfondimento di C# e ASP.NET Core MVC",
      "Esperienza in un contesto professionale di sviluppo web per clienti business"
    ]
  }
];

function Experience() {
  return (
    <section className="w-full flex justify-center mt-18" id="Experience">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full gap-8 p-8 lg:w-3/5 md:p-18"
      >
        
        <h1 className="text-3xl text-cyan-300 font-bold">&lt; Esperienza /&gt;</h1>
        <div className="flex w-full justify-center">
            <div className="relative border-l border-gray-300 ml-4 mt-8">
            {experiences.map((exp, i) => (
                <div key={i} className="mb-10 ml-6">
                    <span className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-sky-900 border-2 border-white" />
                    <p className="text-blue-200 ">{exp.period}</p>
                    <h3 className="text-cyan-300 font-semibold">{exp.role}</h3>
                    <p className="text-blue-200">{exp.company}</p>
                    <ul className="mt-2 space-y-1">
                        {exp.points.map((p, j) => (
                            <li key={j} className="text-blue-200 text-sm">· {p}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}

export default Experience;