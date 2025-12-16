import React from 'react';
import Section from './Section';
import { profileData } from '../data';
import { FaUser } from "react-icons/fa6";

const About = () => {
    return (
        <Section id="about">
            <div className="flex flex-col gap-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
                        Turning complex problems into <span className="text-gray-500">simple designs.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-[#111] rounded-[2.5rem] p-8 md:p-12 border border-[#222]">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Who am I?</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {profileData.longBio}
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I believe that design is about more than just making things look good—it's about solving problems and creating intuitive, enjoyable experiences for users.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-[#222]">
                                <h4 className="text-4xl font-bold mb-2 text-[#b9a0ff]">3+</h4>
                                <p className="text-gray-400 text-sm">Years of Experience</p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-[#222]">
                                <h4 className="text-4xl font-bold mb-2 text-[#ffb0e0]">10+</h4>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-[#222]">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Name</span>
                                <span className="font-bold">{profileData.name}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Email</span>
                                <span className="font-bold">{profileData.contact.email}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Location</span>
                                <span className="font-bold">{profileData.contact.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
