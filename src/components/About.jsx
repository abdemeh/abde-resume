import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { currentData } = useLanguage();
    const { profile, ui } = currentData;

    return (
        <Section id="about">
            <div className="flex flex-col gap-16">
                <div>
                    <h2 className="text-4xl min-[1090px]:text-6xl font-bold max-w-4xl leading-tight">
                        {ui.about.title} <span className="text-[var(--text-soft)]">{ui.about.titleHighlight}</span>
                    </h2>
                </div>

                <div className="grid min-[1090px]:grid-cols-2 gap-12 bg-[var(--surface-1)] rounded-[2.5rem] p-8 min-[1090px]:p-12 border border-[var(--border-color)] transition-colors duration-300">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{ui.about.whoAmI}</h3>
                        <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                            {profile.longBio}
                        </p>
                        <p className="text-[var(--text-muted)] text-lg italic leading-relaxed">
                            {ui.about.quote}
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[var(--surface-2)] p-6 rounded-3xl border border-[var(--border-color)] transition-colors duration-300">
                                <h4 className="text-4xl font-bold mb-2 text-[#b9a0ff]">3+</h4>
                                <p className="text-[var(--text-muted)] text-sm">{ui.about.experienceLabel}</p>
                            </div>
                            <div className="bg-[var(--surface-2)] p-6 rounded-3xl border border-[var(--border-color)] transition-colors duration-300">
                                <h4 className="text-4xl font-bold mb-2 text-[#ffb0e0]">10+</h4>
                                <p className="text-[var(--text-muted)] text-sm">{ui.about.projectsLabel}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
