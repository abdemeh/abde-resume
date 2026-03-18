
import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { LuMessageSquareText } from 'react-icons/lu';
import { HiHome, HiUser, HiDocumentText, HiBriefcase, HiLightningBolt, HiMoon, HiSun } from "react-icons/hi";

const Header = () => {
    const { language, toggleLanguage, currentData } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const isDarkTheme = theme === 'dark';

    const themeToggleLabel = language === 'fr'
        ? (isDarkTheme ? 'Passer en mode clair' : 'Passer en mode sombre')
        : (isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode');

    const navItems = useMemo(() => ([
        { href: "#home", label: currentData.ui.nav.home, icon: <HiHome className="text-xl" /> },
        { href: "#portfolio", label: currentData.ui.nav.portfolio, icon: <HiBriefcase className="text-xl" /> },
        { href: "#about", label: currentData.ui.nav.about, icon: <HiUser className="text-xl" /> },
        { href: "#resume", label: currentData.ui.nav.resume, icon: <HiDocumentText className="text-xl" /> },
        { href: "#skills", label: currentData.ui.skills.badge, icon: <HiLightningBolt className="text-xl" /> },
    ]), [currentData]);

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const syncActiveSection = () => {
            const viewportMarker = window.scrollY + (window.innerHeight * 0.35);
            let nextActiveSection = navItems[0]?.href.replace('#', '') || 'home';

            navItems.forEach((item) => {
                const sectionId = item.href.replace('#', '');
                const sectionElement = document.getElementById(sectionId);

                if (sectionElement && viewportMarker >= sectionElement.offsetTop - 1) {
                    nextActiveSection = sectionId;
                }
            });

            setActiveSection((previousSection) => {
                return previousSection === nextActiveSection ? previousSection : nextActiveSection;
            });
        };

        syncActiveSection();
        window.addEventListener('scroll', syncActiveSection, { passive: true });
        window.addEventListener('resize', syncActiveSection);

        return () => {
            window.removeEventListener('scroll', syncActiveSection);
            window.removeEventListener('resize', syncActiveSection);
        };
    }, [navItems]);

    return (
        <>
            {/* --- Mobile Layout (< 1025px) --- */}

            {/* Mobile Bottom Bar: Nav+Contact | Lang */}
            <nav className="min-[1090px]:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-full px-6 py-4 shadow-2xl flex items-center gap-6 transition-colors duration-300">

                {/* Left: Navigation Icons + Contact */}
                <div className="flex items-center gap-5">
                    {navItems.map((item, index) => {
                        const sectionId = item.href.replace('#', '');
                        const isActive = sectionId === activeSection;

                        return (
                            <a
                                key={index}
                                href={item.href}
                                className={`transition-all ${
                                    isActive
                                        ? 'text-[var(--text-primary)]'
                                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                                }`}
                                aria-label={item.label}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item.icon}
                            </a>
                        );
                    })}
                    {/* Contact Icon as part of Nav */}
                    <a
                        href="#contact"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all"
                        aria-label="Contact"
                    >
                        <LuMessageSquareText className="text-xl" />
                    </a>
                </div>

                {/* Separator */}
                <div className="w-[1px] h-5 bg-[var(--border-strong)]"></div>

                {/* Right: Language Text Toggle */}
                <button
                    onClick={toggleLanguage}
                    className="text-[var(--text-muted)] font-bold text-sm hover:text-[var(--text-primary)] transition-colors"
                >
                    {language === 'fr' ? 'EN' : 'FR'}
                </button>

                <div className="w-[1px] h-5 bg-[var(--border-strong)]"></div>

                <button
                    onClick={toggleTheme}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    aria-label={themeToggleLabel}
                    title={themeToggleLabel}
                >
                    {isDarkTheme ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
                </button>
            </nav>


            {/* --- Desktop Layout (>= 1090px) --- */}

            <header className="hidden min-[1090px]:flex sticky top-8 z-50 items-center justify-between mb-12">

                {/* Nav Pill: Always Text, Bold Mode */}
                <nav className="flex items-center gap-8 text-md font-bold text-[var(--text-muted)] bg-[var(--glass-bg)] backdrop-blur-md px-8 py-4 rounded-full border border-[var(--glass-border)] shadow-2xl transition-all duration-300">
                    {navItems.map((item, index) => {
                        const sectionId = item.href.replace('#', '');
                        const isActive = sectionId === activeSection;

                        return (
                            <a
                                key={index}
                                href={item.href}
                                className={`inline-flex items-center whitespace-nowrap transition-colors ${
                                    isActive
                                        ? 'text-[var(--text-primary)]'
                                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                                }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {/* Icon for Compact Desktop (1090px - 1450px) */}
                                <span className="block min-[1450px]:hidden text-xl">
                                    {item.icon}
                                </span>
                                {/* Text for Large Desktop (>= 1450px) */}
                                <span className="hidden min-[1450px]:block">
                                    {item.label}
                                </span>
                            </a>
                        );
                    })}
                </nav>

                {/* Right Buttons Group */}
                <div className="ml-10 flex items-center gap-2">
                    <button
                        onClick={toggleLanguage}
                        className="flex h-12 items-center gap-2 px-6 py-3 text-[var(--text-muted)] rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] transition-all font-bold text-md"
                    >
                        {language === 'fr' ? 'EN' : 'FR'}
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="flex h-12 items-center gap-2 px-4 py-3 text-[var(--text-muted)] rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] transition-all font-bold text-md"
                        aria-label={themeToggleLabel}
                        title={themeToggleLabel}
                    >
                        {isDarkTheme ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
                    </button>
                    <a
                        href="#contact"
                        className="flex h-12 items-center gap-2 px-6 py-3 rounded-full bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] font-bold hover:bg-[var(--button-primary-hover)] transition-colors shadow-lg"
                    >
                        {currentData.ui.header.letsTalk} <LuMessageSquareText className="text-xl" />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
