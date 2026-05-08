import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

function Hero() {
    return ( 
        <section className="flex justify-center items-center p-6 pt-20 h-5/7">
            <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row justify-center gap-2 font-bold text-3xl">
                    <span className="text-blue-200">Ciao, </span>
                    <div>
                        <span className="text-blue-200">io sono </span>
                        <TypeAnimation 
                            sequence={[
                                "Edoardo...", 2000,
                                "uno sviluppatore web...", 2000,
                                "uno studente...", 2000
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-cyan-300"
                        />
                    </div>
                </div>
                <span className="text-blue-200/80">Ogni problema ha una soluzione e se non ha una soluzione allora non è un problema</span>
            </motion.div>
        </section>
    );
}

export default Hero;