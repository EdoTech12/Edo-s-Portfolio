import GitHubButton from "../Buttons/Contact/GitHubButton";
import EmailButton from "../Buttons/Contact/EmailButton";

function Navbar() {
    return (
        // Navbar Desktop
        <nav className="fixed w-full p-4 flex flex-row justify-between border-b border-b-blue-200/30 bg-sky-950 z-50">
            <div className="flex flex-row gap-20 text-blue-200 font-semibold ml-20">
                <a href="#" className="hover:text-cyan-300">Edoardo</a>
                <ul className="flex flex-row gap-4">
                    <li className="hover:text-cyan-300"><a href="#">Home</a></li>
                    <li className="hover:text-cyan-300"><a href="#About">Chi sono</a></li>
                    <li className="hover:text-cyan-300"><a href="#Skills">Skills</a></li>
                    <li className="hover:text-cyan-300"><a href="#Experience">Esperienza</a></li>
                    <li className="hover:text-cyan-300"><a href="#Projects">Progetti</a></li>
                </ul>
            </div>
            <div className="flex flex-row gap-4 mr-20">
                <GitHubButton />
                <EmailButton />
            </div>
        </nav>
    );
}

export default Navbar;