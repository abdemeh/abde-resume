import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { data } from '../data';

const LanguageContext = createContext();
const LANGUAGE_SWITCH_CLASS = 'language-switching';
const FADE_DURATION_MS = 180;

export const LanguageProvider = ({ children }) => {
    // Check localStorage or default to 'fr' (since user is French based on data)
    // User requested "remember which version was opened before"
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved === 'en' || saved === 'fr' ? saved : 'fr';
    });
    const languageSwitchTimeoutRef = useRef();

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    useEffect(() => {
        return () => {
            if (languageSwitchTimeoutRef.current) {
                window.clearTimeout(languageSwitchTimeoutRef.current);
            }
        };
    }, []);

    const toggleLanguage = () => {
        if (typeof document === 'undefined') return;
        if (languageSwitchTimeoutRef.current) {
            window.clearTimeout(languageSwitchTimeoutRef.current);
        }

        const root = document.documentElement;
        root.classList.add(LANGUAGE_SWITCH_CLASS);

        // Swap language while content is invisible, then fade back in
        languageSwitchTimeoutRef.current = window.setTimeout(() => {
            setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
            languageSwitchTimeoutRef.current = window.setTimeout(() => {
                root.classList.remove(LANGUAGE_SWITCH_CLASS);
            }, FADE_DURATION_MS);
        }, FADE_DURATION_MS);
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
