
import React from 'react';
import Section from './Section';
import { projectsData } from '../data';

const Portfolio = () => {
    return (
        <Section id="portfolio">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">Featured <br /> Projects</h2>
                    <p className="text-gray-400 text-lg max-w-md">
                        Check out some of the projects I've worked on, ranging from web development to cloud infrastructure.
                    </p>
                </div>

                <a href="https://github.com/abdemeh" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-[#333] hover:bg-white hover:text-black transition-colors self-start md:self-end">
                    View All Projects
                </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <div key={index} className="group relative h-full">
                        {/* Project Card */}
                        <div className="bg-[#111] rounded-[2.5rem] p-8 border border-[#222] hover:border-[#333] transition-all duration-500 overflow-hidden relative h-full flex flex-col">

                            {/* Image Area - Gradient Fallback */}
                            <div className="h-[250px] w-full rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 mb-8 flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#b9a0ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="text-6xl opacity-20 font-bold">{index + 1}</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full border border-[#333] bg-[#1a1a1a] text-xs text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#b9a0ff] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                                    {project.description}
                                </p>
                                <button className="self-start px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform text-sm">
                                    Open in GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Portfolio;
