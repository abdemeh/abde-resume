
import React from 'react';
import { profileData } from '../data';
import profileImg from '../assets/images/profile.png';
import { FaCode } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full p-8 md:p-10 justify-between">
            {/* Header / Profile Info */}
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        {profileData.name.split(' ')[0]}
                        <span className="block text-gray-400 font-extrabold text-3xl">{profileData.name.split(' ').slice(1).join(' ')}</span>
                    </h1>
                </div>

                <div className="mb-8">
                    <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 border border-[#222] shadow-2xl">
                        <img src={profileImg} alt={profileData.name} className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="mb-10 text-center md:text-left">
                    <p className="text-gray-400 text-sm mb-2">Specialization:</p>
                    <p className="font-bold text-white text-lg leading-tight mb-6">
                        Cloud Computing <br /> & Full Stack Dev
                    </p>

                    <p className="text-gray-400 text-sm mb-2">Based in:</p>
                    <p className="font-bold text-white text-lg">{profileData.contact.location}</p>
                </div>
            </div>

            {/* Navigation (Desktop hidden, could be added if needed, but per design usually icons or minimal) */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
                {profileData.social.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition-colors"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <a
                href="#contact"
                className="w-full py-4 bg-[#e0c3fc] hover:bg-[#d0b3ec] text-black font-bold text-center rounded-xl transition-colors shadow-[0_0_20px_rgba(224,195,252,0.3)]"
            >
                Let's Work Together!
            </a>
        </div>
    );
};

export default Sidebar;
