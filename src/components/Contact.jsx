
import React from 'react';
import Section from './Section';
import { profileData } from '../data';

const Contact = () => {
    return (
        <Section id="contact" className="pb-10">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#050505] rounded-[3rem] p-12 md:p-24 text-center border border-[#222] relative overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b9a0ff]/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">Contact Me</h2>

                    <p className="text-gray-400 text-xl mb-12">
                        I'm currently available for freelance projects and open to full-time opportunities.
                    </p>

                    <a href={`mailto:${profileData.contact.email}`} className="inline-block px-12 py-6 rounded-full font-bold text-black bg-white hover:bg-gray-200 transition-all text-xl hover:scale-105 shadow-xl">
                        {profileData.contact.email}
                    </a>

                    <div className="mt-24 pt-10 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            {profileData.social.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noreferrer" className="hover:text-white text-2xl transition-colors">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
