
import React from 'react';
import Section from './Section';
import { experienceData, educationData } from '../data';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";

const ResumeItem = ({ title, subTitle, description, date }) => {
    return (
        <div className="group">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-8 rounded-3xl hover:bg-[#111] transition-colors border border-transparent hover:border-[#222]">
                <div className="md:w-48 flex-shrink-0">
                    <span className="inline-block px-4 py-2 rounded-full border border-[#333] text-sm text-gray-400 group-hover:text-white group-hover:border-[#555] transition-all">
                        {date}
                    </span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                    <p className="text-[#b9a0ff] mb-4 font-medium">{subTitle}</p>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Resume = () => {
    return (
        <Section id="resume">
            <div className="mb-16">
                <h2 className="text-5xl md:text-7xl font-bold mb-6">Education & <br /> Experience</h2>
            </div>

            <div className="flex flex-col gap-20">
                <div>
                    <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#b9a0ff] text-xl">
                            <FaGraduationCap />
                        </span>
                        Education
                    </h3>
                    <div className="space-y-4">
                        {educationData.map((item, index) => (
                            <ResumeItem
                                key={index}
                                date={item.period}
                                title={item.title}
                                subTitle={item.institution}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#b9a0ff] text-xl">
                            <FaBriefcase />
                        </span>
                        Experience
                    </h3>
                    <div className="space-y-4">
                        {experienceData.map((item, index) => (
                            <ResumeItem
                                key={index}
                                date={item.period}
                                title={item.title}
                                subTitle={item.company}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Resume;
