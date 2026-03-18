
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/images/profile.png';

const Sidebar = () => {
    const { currentData } = useLanguage();
    const { profile, ui } = currentData;

    return (
        <div className="flex flex-col h-full p-8 md:p-10 justify-between">
            {/* Header / Profile Info */}
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] transition-none">
                        {profile.name.split(' ')[0]}
                        <span className="block text-[var(--text-muted)] font-extrabold text-3xl transition-none">{profile.name.split(' ').slice(1).join(' ')}</span>
                    </h1>
                </div>

                <div className="mb-8">
                    <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 border border-[var(--border-color)] shadow-2xl transition-colors duration-300">
                        <img src={profileImg} alt={profile.name} className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="mb-10 text-center md:text-left">
                    <p className="text-[var(--text-muted)] text-sm mb-2">{profile.specializationLabel}</p>
                    <p className="font-bold text-[var(--text-primary)] text-lg leading-tight mb-6 whitespace-pre-line">
                        {profile.specialization}
                    </p>

                    <p className="text-[var(--text-muted)] text-sm mb-2">{profile.locationLabel}</p>
                    <p className="font-bold text-[var(--text-primary)] text-lg">{profile.contact.location}</p>
                </div>
            </div>

            {/* Navigation (Desktop hidden, could be added if needed, but per design usually icons or minimal) */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
                {profile.social.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-2xl transition-colors"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
