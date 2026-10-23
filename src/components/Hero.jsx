
import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { HiEye } from 'react-icons/hi2';

const Hero = () => {
    const { currentData, language } = useLanguage();
    const { profile, ui } = currentData;

    return (
        <Section id="home" className="flex flex-col justify-center min-h-[60vh]">
            <div className="max-w-3xl">
                <p className="text-lg md:text-xl font-medium text-[var(--text-muted)] mb-4">
                    {ui.hero.titlePrefix} {profile.name.split(' ')[0]}.
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b9a0ff] to-[#ffb0e0]">
                        {ui.hero.titleSuffix}
                    </span>
                </h1>
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-[var(--surface-1)] px-5 py-3 mb-8">
                        <span className="text-sm md:text-base font-medium text-[var(--text-muted)]">{ui.hero.companyPrefix}</span>
                        <span
                            role="img"
                            aria-label="Atos"
                            className="inline-block h-6 w-[4.6rem] bg-gradient-to-r from-[#b9a0ff] to-[#ffb0e0]"
                            style={{
                                mask: `url(${import.meta.env.BASE_URL}assets/images/atos.svg) center / contain no-repeat`,
                                WebkitMask: `url(${import.meta.env.BASE_URL}assets/images/atos.svg) center / contain no-repeat`,
                            }}
                        />
                </div>

                <p className="text-[var(--text-muted)] text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
                    {profile.bio}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="inline-block px-8 py-4 bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] rounded-full font-bold hover:bg-[var(--button-primary-hover)] transition-colors">
                        {ui.hero.contactButton}
                    </a>
                    <a
                        href={`./assets/docs/resume_${language}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] text-[var(--text-primary)] font-bold hover:bg-[var(--surface-1)] hover:border-[var(--text-primary)] transition-all"
                    >
                        {ui.hero.downloadCv} <HiEye className="text-xl" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
