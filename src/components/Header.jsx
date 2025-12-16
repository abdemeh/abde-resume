
import { LuMessageSquareText } from "react-icons/lu";

const Header = () => {
    return (
        <header className="sticky top-0 z-40 w-full md:border-none pointer-events-none">
            <div className="flex items-center justify-between py-6 pointer-events-auto">
                {/* Mobile Menu Trigger (could be added here if needed, keeping it simple for now) */}
                <div className="md:hidden text-xl font-bold bg-[#1a1a1a]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#222]">Menu</div>

                <nav className="hidden md:flex items-center gap-8 mx-auto bg-[#1a1a1a]/80 backdrop-blur-md px-8 py-4 rounded-full border border-[#222] shadow-2xl">
                    <a href="#home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
                    <a href="#portfolio" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Portfolio</a>
                    <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About Me</a>
                    <a href="#resume" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Resume</a>
                    <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
                </nav>

                <a href="#contact" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] border border-[#222] hover:bg-[#e0c3fc] hover:text-black transition-all font-bold text-sm">
                    Let's Talk <LuMessageSquareText />
                </a>
            </div>
        </header>
    );
};

export default Header;
