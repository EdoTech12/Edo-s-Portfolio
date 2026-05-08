import { Menu } from "lucide-react";
import { useState } from "react";
import EmailButton from "../Buttons/Contact/EmailButton";
import GitHubButton from "../Buttons/Contact/GitHubButton";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <>
            <nav className="flex fixed bg-sky-950 w-full gap-4 text-blue-200 font-semibold p-4">
                <Menu className="hover:text-cyan-300" onClick={() => setIsOpen(true)}/>
                <a href="#" className="hover:text-cyan-300">Edoardo</a>
            </nav>
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
                    isOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsOpen(!isOpen)}
            />

            <aside
                className={`
                    fixed top-0 left-0 h-screen w-80
                    bg-sky-950 text-blue-200
                    z-50
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    transform transition-transform duration-300
                    lg:translate-x-0
                `}
            >
                <div className="flex justify-center p-4">
                    <a href="#" className="hover:text-cyan-300 text-xl">Edoardo</a>
                </div>
                <div className="flex flex-col gap-4 p-8">
                    <h3 className="text-lg text-cyan-300">&lt; Sezioni /&gt;</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="hover:text-cyan-300" onClick={() => setIsOpen(false)}><a href="#">Home</a></li>
                        <li className="hover:text-cyan-300" onClick={() => setIsOpen(false)}><a href="#About">Chi sono</a></li>
                        <li className="hover:text-cyan-300" onClick={() => setIsOpen(false)}><a href="#Skills">Skills</a></li>
                        <li className="hover:text-cyan-300" onClick={() => setIsOpen(false)}><a href="#Experience">Esperienza</a></li>
                        <li className="hover:text-cyan-300" onClick={() => setIsOpen(false)}><a href="#Projects">Progetti</a></li>
                    </ul>
                </div>
                <h3 className="text-lg text-cyan-300 ml-8 mb-4">&lt; Contatti /&gt;</h3>
                <div className="flex justify-center gap-8">
                    <GitHubButton />
                    <EmailButton />
                </div>
            </aside>
        </>
    );
}

export default Sidebar;