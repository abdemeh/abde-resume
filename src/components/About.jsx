import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { FaUser } from "react-icons/fa6";

const About = () => {
    const { currentData } = useLanguage();
    const { profile, ui } = currentData;

    return (
        <Section id="about">
            <div className="flex flex-col gap-16">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#333] bg-[#111] text-sm mb-8">
                        <FaUser className="text-[#b9a0ff]" /> {ui.about.badge}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
                        {ui.about.title} <span className="text-gray-500">{ui.about.titleHighlight}</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-[#111] rounded-[2.5rem] p-8 md:p-12 border border-[#222]">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">{ui.about.whoAmI}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {profile.longBio}
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {ui.about.quote}
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-[#222]">
                                <h4 className="text-4xl font-bold mb-2 text-[#b9a0ff]">3+</h4>
                                <p className="text-gray-400 text-sm">{ui.about.experienceLabel}</p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-[#222]">
                                <h4 className="text-4xl font-bold mb-2 text-[#ffb0e0]">10+</h4>
                                <p className="text-gray-400 text-sm">{ui.about.projectsLabel}</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-[#222]">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Name</span>
                                <span className="font-bold">{profile.name}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Email</span>
                                <span className="font-bold">{profile.contact.email}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Location</span>
                                <span className="font-bold">{profile.contact.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
