import { useState } from "react"
import { AnimatePresence, motion } from "motion/react";
import GroupsButton from "../Buttons/SkillsButtons/GroupsButton";
import Frontend from "./Groups/Frontend";
import Backend from "./Groups/Backend";
import Others from "./Groups/Others";

const groups = [
    {name: "Frontend", component: <Frontend/>},
    {name: "Backend", component: <Backend/>},
    {name: "Others", component: <Others/>}
]

function Skills() {
    const [group, setGroup] = useState("Frontend")

    return ( 
        <section className="w-full flex justify-center mt-24" id="Skills">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col w-full md:flex-row gap-8 p-8 lg:w-3/5 md:p-18"
            >
                <div className="w-full">
                    <h1 className="text-3xl text-cyan-300 font-bold">&lt; Skills /&gt;</h1>
                    
                    <div className="flex flex-col w-full mt-8">
                        <div className="flex w-full justify-center gap-8 lg:gap-14 text-lg text-blue-200">
                            <GroupsButton setGroup={setGroup} group="Frontend" activeGroup={group}>Frontend</GroupsButton>
                            <GroupsButton setGroup={setGroup} group="Backend" activeGroup={group}>Backend</GroupsButton>
                            <GroupsButton setGroup={setGroup} group="Others" activeGroup={group}>Tools e altro</GroupsButton>
                        </div>
                    </div>

                    <div className="mt-8 w-4/5 mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={group}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                            >
                                {groups.find(g => g.name === group)?.component}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;