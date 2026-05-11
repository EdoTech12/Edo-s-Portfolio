import MainCard from "./Card/MainCard";
import OptionsCard from "./Card/OptionsCard";
import WalletDashImg from "../../Assets/dashboard.png"
import OsteriaImg from "../../Assets/osteria.png"
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "WalletDash",
        imagePath: WalletDashImg,
        githubLink: "https://github.com/EdoTech12/WalletDash",
        description: "Web app per la gestione delle finanze personali. Permette di tracciare entrate e uscite, monitorare il saldo e impostare obiettivi finanziari con deadline.",
        technologies: "ASP.NET · Entity Framework Core",
        deploy: false,
        liveLink: ""
    },
    {
        id: 2,
        title: "Osteria del Naviglio | Busto Arsizio",
        imagePath: OsteriaImg,
        githubLink: "https://github.com/EdoTech12/osteria-del-naviglio",
        description: "Sito vetrina demo per ristorante italiano sviluppato come progetto portfolio.",
        technologies: "React · Vite · Tailwind CSS v4 · Framer Motion",
        deploy: true,
        liveLink: "https://osteria-del-naviglio.vercel.app/"
    }
];

function Projects() {
    const [index, setIndex] = useState(1);

    const project = projects[index-1];

    return (
        <section className="w-full flex justify-center mt-12" id="Projects">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col w-full md:flex-row gap-8 p-8 lg:w-3/5 md:p-18"
            >
                <div className="w-full">
                    <div className="lg:flex justify-between items-center">
                        <h1 className="text-3xl text-cyan-300 font-bold">&lt; Projects /&gt;</h1>
                        <a className="flex gap-2 items-center text-blue-200" target="_blanc" href="https://github.com/EdoTech12">
                            <span className="text-lg text-cyan-300/60 ">Vedi tutti i miei progetti</span>
                            <ArrowRight />
                        </a>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                        >
                            <MainCard title={project.title} deploy={project.deploy} liveLink={project.liveLink} imagePath={project.imagePath} description={project.description} technologies={project.technologies} githubLink={project.githubLink}/>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col lg:flex-row gap-3 mt-10 justify-center">
                        {projects.map(p => (
                            <OptionsCard title={p.title} key={p.id} liveLink={p.liveLink} deploy={p.deploy} description={p.description} githubLink={p.githubLink} id={p.id} technologies={p.technologies} setIndex={setIndex}/>
                        ))}
                    </div>
                    
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;