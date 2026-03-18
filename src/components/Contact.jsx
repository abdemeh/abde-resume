
import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { currentData } = useLanguage();
    const { profile, ui } = currentData;

    return (
        <Section id="contact" className="pb-10">
            <div className="bg-[image:var(--contact-gradient)] rounded-[3rem] p-12 md:p-24 text-center border border-[var(--border-color)] relative overflow-hidden group transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b9a0ff]/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">{ui.contact.title}</h2>

                    <p className="text-[var(--text-muted)] text-xl mb-12">
                        {ui.contact.text}
                    </p>

                    <a href={`mailto:${profile.contact.email}`} className="inline-block px-12 py-6 rounded-full font-bold text-[var(--button-primary-text)] bg-[var(--button-primary-bg)] hover:bg-[var(--button-primary-hover)] transition-all text-xl hover:scale-105 shadow-xl">
                        {profile.contact.email}
                    </a>

                    <div className="mt-24 pt-10 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center text-[var(--text-soft)] text-sm transition-colors duration-300">
                        <p>© {new Date().getFullYear()} {profile.name}. {ui.contact.copyright}</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            {profile.social.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] text-2xl transition-colors">
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
