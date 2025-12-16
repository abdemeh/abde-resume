
import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { HiSparkles } from "react-icons/hi2";

const Hero = () => {
    const { currentData } = useLanguage();
    const { profile, ui } = currentData;

    return (
        <Section id="home" className="flex flex-col justify-center min-h-[60vh]">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#333] bg-[#111] text-sm mb-8 animate-fade-in hover:border-[#b9a0ff] transition-colors cursor-default">
                    <HiSparkles className="text-[#b9a0ff]" /> {ui.hero.badge}
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                    {ui.hero.titlePrefix} {profile.name.split(' ')[0]} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b9a0ff] to-[#ffb0e0]">
                        {ui.hero.titleSuffix}
                    </span>
                </h1>

                <p className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
                    {profile.bio}
                </p>

                <a href="#contact" className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                    {ui.hero.contactButton}
                </a>
            </div>
        </Section>
    );
};

export default Hero;
