
import React from 'react';
import Section from './Section';
import { profileData } from '../data';

import { HiSparkles } from "react-icons/hi2";

const Hero = () => {
    return (
        <Section id="home" className="flex flex-col justify-center min-h-[60vh]">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                    I'm {profileData.name.split(' ')[0]} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b9a0ff] to-[#ffb0e0]">
                        Cloud Computing Student
                    </span>
                </h1>

                <p className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
                    {profileData.bio}
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                    <a href="#portfolio" className="px-8 py-4 rounded-2xl border border-[#333] bg-[#1a1a1a] hover:bg-[#222] hover:border-white transition-all flex items-center gap-3 font-bold group">
                        My Works
                        <span className="text-xl group-hover:rotate-45 transition-transform duration-300">↗</span>
                    </a>
                    <a href="#resume" className="px-8 py-4 font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                        Download CV
                        <span className="text-xl group-hover:translate-y-1 transition-transform">↓</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
