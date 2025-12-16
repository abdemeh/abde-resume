import { FaCommentDots } from "react-icons/fa6";
import { useLanguage } from '../context/LanguageContext';
import { LuMessageSquareText } from 'react-icons/lu';

const Header = () => {
    const { language, toggleLanguage, currentData } = useLanguage();

    return (
        <header className="sticky top-0 z-40 w-full md:border-none pointer-events-none">
            <div className="flex items-center justify-between py-6 pointer-events-auto">
                {/* Mobile Menu Trigger (could be added here if needed, keeping it simple for now) */}
                <div className="md:hidden text-xl font-bold bg-[#1a1a1a]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#222]">Menu</div>

                <nav className="hidden md:flex text-md font-bold items-center gap-8 mx-auto bg-[#1a1a1a]/80 backdrop-blur-md px-8 py-4 rounded-full border border-[#222] shadow-2xl">
                    <a href="#home" className="text-gray-400 hover:text-white transition-colors">{currentData.ui.nav.home}</a>
                    <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">{currentData.ui.nav.portfolio}</a>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">{currentData.ui.nav.about}</a>
                    <a href="#resume" className="text-gray-400 hover:text-white transition-colors">{currentData.ui.nav.resume}</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">{currentData.ui.nav.contact}</a>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] border border-[#222] hover:bg-[#222] hover:text-white transition-all font-bold text-md"
                    >
                        {language === 'fr' ? 'EN' : 'FR'}
                    </button>

                    <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] border border-[#222] hover:bg-[#e0c3fc] hover:text-black transition-all font-bold text-md">
                        {currentData.ui.header.letsTalk} <LuMessageSquareText />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
