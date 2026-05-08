import { motion } from "motion/react";

function GroupsButton({children, setGroup, group, activeGroup}) {
    return ( 
        <button onClick={() => setGroup(group)} className="flex flex-col items-center gap-1 text-blue-200">
            <span>{children}</span>
            <div className="h-0.5 w-full relative">
                {activeGroup === group && (
                    <motion.div
                        layoutId="indicator"
                        className={`absolute inset-0 rounded-full bg-cyan-300`}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                )}
            </div>
        </button>
    );
}

export default GroupsButton;