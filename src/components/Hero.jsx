
import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { HiSparkles } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
    const { currentData, language } = useLanguage();
    const { profile, ui } = currentData;

    return (
        <Section id="home" className="flex flex-col justify-center min-h-[60vh]">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                    {ui.hero.titlePrefix} {profile.name.split(' ')[0]} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b9a0ff] to-[#ffb0e0]">
                        {ui.hero.titleSuffix}
                    </span>
                </h1>

                <p className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
                    {profile.bio}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                        {ui.hero.contactButton}
                    </a>
                    <a
                        href={`./assets/docs/resume_${language}.pdf`}
                        download={`Abdellatif_El_Mahdaoui_Resume_${language.toUpperCase()}.pdf`}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#333] bg-[#1a1a1a] text-white font-bold hover:bg-[#222] hover:border-white transition-all"
                    >
                        {ui.hero.downloadCv} <FaDownload />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
