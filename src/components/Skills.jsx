import React, { useEffect, useMemo, useState } from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { currentData } = useLanguage();
    const { skills, ui } = currentData;

    const categories = useMemo(() => {
        const uiCategories = Object.entries(ui.skills?.categories || {});

        if (uiCategories.length > 0) {
            return uiCategories;
        }

        const inferredCategories = [...new Set(skills.map((skill) => skill.category).filter(Boolean))];
        return inferredCategories.map((category) => [category, category]);
    }, [skills, ui.skills]);

    const defaultCategory = categories[0]?.[0] || '';
    const [activeCategory, setActiveCategory] = useState(defaultCategory);

    useEffect(() => {
        setActiveCategory(defaultCategory);
    }, [defaultCategory]);

    const visibleSkills = useMemo(() => {
        if (!activeCategory) {
            return skills;
        }

        return skills.filter((skill) => skill.category === activeCategory);
    }, [skills, activeCategory]);

    return (
        <Section id="skills">
            <div className="flex flex-col gap-10">
                <div>
                    <h2 className="text-4xl min-[1090px]:text-6xl font-bold leading-tight whitespace-pre-line">
                        {ui.skills.title}
                    </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {categories.map(([categoryKey, categoryLabel]) => {
                        const isActive = categoryKey === activeCategory;

                        return (
                            <button
                                key={categoryKey}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setActiveCategory(categoryKey)}
                                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-white text-black border-white'
                                        : 'bg-[#111] text-gray-300 border-[#2c2c2c] hover:border-[#555] hover:text-white'
                                }`}
                            >
                                {categoryLabel}
                            </button>
                        );
                    })}
                </div>

                <div key={activeCategory || 'all'} className="flex flex-wrap gap-4 skills-grid-reveal">
                    {visibleSkills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#111] border border-[#222] hover:border-[#444] transition-all group">
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
