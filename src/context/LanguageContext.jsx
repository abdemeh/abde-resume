import React, { createContext, useContext, useState, useEffect } from 'react';
import { data } from '../data';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Check localStorage or default to 'fr' (since user is French based on data)
    // User requested "remember which version was opened before"
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved === 'en' || saved === 'fr' ? saved : 'fr';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    };

    // Helper to get current data
    const currentData = data[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, currentData }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
