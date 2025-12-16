import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { FaLaptopCode } from "react-icons/fa6";

const Portfolio = () => {
    const { currentData } = useLanguage();
    const { projects, ui } = currentData;

    return (
        <Section id="portfolio">
            <div className="flex flex-col gap-16">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#333] bg-[#111] text-sm mb-8">
                        <FaLaptopCode className="text-[#b9a0ff]" /> {ui.portfolio.badge}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight whitespace-pre-line">
                        {ui.portfolio.title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-[#111] border border-[#222] rounded-[2rem] overflow-hidden hover:border-[#b9a0ff]/50 transition-all hover:shadow-[0_0_30px_rgba(185,160,255,0.1)]">
                            <div className="p-8 md:p-10 h-full flex flex-col items-start min-h-[300px] justify-between z-10 relative">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a1a1a] border border-[#333] text-gray-400 group-hover:border-[#555] transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 group-hover:text-[#b9a0ff] transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold border-b border-transparent hover:border-white transition-all">
                                        {project.linkText} <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;
