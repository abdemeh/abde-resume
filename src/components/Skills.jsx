import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { currentData } = useLanguage();
    const { skills, ui } = currentData;

    return (
        <Section id="skills">
            <div className="flex flex-col gap-10">
                <div>
                    <h2 className="text-4xl min-[1025px]:text-6xl font-bold leading-tight whitespace-pre-line">
                        {ui.skills.title}
                    </h2>
                </div>

                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#111] border border-[#222] hover:border-[#444] transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform" style={{ color: skill.color }}>{skill.icon}</span>
                            <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
