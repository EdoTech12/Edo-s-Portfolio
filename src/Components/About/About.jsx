import { motion } from "motion/react";

function About() {
    return ( 
        <section className="w-full flex justify-center" id="About">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-8 justify-between items-center w-full p-8 lg:w-3/5 md:p-18"
            >
                <div className="flex flex-col">
                    <h1 className="text-3xl text-cyan-300 font-bold">&lt; Chi sono /&gt;</h1>
                    <div className="flex flex-col mt-8 text-lg text-blue-200/80 text-center lg:text-start">
                        <span>Ho 18 anni e vivo in provincia di Varese.</span>
                        <span>Mi alleno e scrivo codice</span>
                        <span>Molto dell'informatica l'ho imparato da solo, per curiosità</span>
                        <span>Ho sempre voglia di migliorarmi in tutto ciò che faccio</span>
                    </div>
                </div>
                <div className="w-1/3 hidden lg:block">
                    <img src="src/Assets/about_img.jpeg" alt="" className="rounded-2xl"/>
                </div>
            </motion.div>
        </section>
    );
}

export default About;