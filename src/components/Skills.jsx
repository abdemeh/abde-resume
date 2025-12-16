
import React from 'react';
import Section from './Section';
import { skillsData } from '../data';

const Skills = () => {
    return (
        <Section>
            <div className="bg-[#111] rounded-[2.5rem] p-10 md:p-16 border border-[#222]">
                <h2 className="text-4xl font-bold mb-12 text-center">Tools & Technologies</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-4xl group-hover:scale-110 group-hover:border-[#b9a0ff] transition-all duration-300 shadow-lg" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
