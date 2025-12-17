
import { useLanguage } from '../context/LanguageContext';
import { LuMessageSquareText } from 'react-icons/lu';
import { HiHome, HiUser, HiDocumentText, HiBriefcase, HiLightningBolt } from "react-icons/hi";

const Header = () => {
    const { language, toggleLanguage, currentData } = useLanguage();

    const navItems = [
        { href: "#home", label: currentData.ui.nav.home, icon: <HiHome className="text-xl" /> },
        { href: "#portfolio", label: currentData.ui.nav.portfolio, icon: <HiBriefcase className="text-xl" /> },
        { href: "#about", label: currentData.ui.nav.about, icon: <HiUser className="text-xl" /> },
        { href: "#resume", label: currentData.ui.nav.resume, icon: <HiDocumentText className="text-xl" /> },
        { href: "#skills", label: currentData.ui.skills.badge, icon: <HiLightningBolt className="text-xl" /> },
    ];

    return (
        <>
            {/* --- Mobile Layout (< 1025px) --- */}

            {/* Mobile Bottom Bar: Nav+Contact | Lang */}
            <nav className="min-[1090px]:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#222] rounded-full px-6 py-4 shadow-2xl flex items-center gap-6">

                {/* Left: Navigation Icons + Contact */}
                <div className="flex items-center gap-5">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-gray-400 hover:text-white transition-all"
                            aria-label={item.label}
                        >
                            {item.icon}
                        </a>
                    ))}
                    {/* Contact Icon as part of Nav */}
                    <a
                        href="#contact"
                        className="text-gray-400 hover:text-white transition-all"
                        aria-label="Contact"
                    >
                        <LuMessageSquareText className="text-xl" />
                    </a>
                </div>

                {/* Separator */}
                <div className="w-[1px] h-5 bg-[#444]"></div>

                {/* Right: Language Text Toggle */}
                <button
                    onClick={toggleLanguage}
                    className="text-gray-400 font-bold text-sm hover:text-white transition-colors"
                >
                    {language === 'fr' ? 'EN' : 'FR'}
                </button>
            </nav>


            {/* --- Desktop Layout (>= 1025px) --- */}

            <header className="hidden min-[1090px]:flex fixed top-0 left-0 right-0 z-50 items-center justify-between py-6 px-8 max-w-[1400px] mx-auto pointer-events-none">

                {/* Nav Pill: Always Text, Bold Mode */}
                <nav className="pointer-events-auto flex items-center gap-8 text-md font-bold text-gray-400 bg-[#1a1a1a]/80 backdrop-blur-md px-8 py-4 rounded-full border border-[#222] shadow-2xl mx-auto transition-all duration-300">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Right Buttons Group */}
                <div className="pointer-events-auto flex items-center gap-4 absolute right-8 top-6">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-6 py-3 text-gray-400 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-[#222] hover:bg-[#222] hover:text-white transition-all font-bold text-md"
                    >
                        {language === 'fr' ? 'EN' : 'FR'}
                    </button>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-lg"
                    >
                        {currentData.ui.header.letsTalk} <LuMessageSquareText className="text-xl" />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
