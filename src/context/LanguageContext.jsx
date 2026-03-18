import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { data } from '../data';

const LanguageContext = createContext();
const LANGUAGE_SWITCH_CLASS = 'language-switching';
const LANGUAGE_SWITCH_DURATION_MS = 320;

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

    const runLanguageTransition = () => {
        if (typeof document === 'undefined') {
            return;
        }

        const rootElement = document.documentElement;
        rootElement.classList.remove(LANGUAGE_SWITCH_CLASS);

        // Force reflow so repeated toggles retrigger the same CSS animation class.
        void rootElement.offsetWidth;

        rootElement.classList.add(LANGUAGE_SWITCH_CLASS);

        if (languageSwitchTimeoutRef.current) {
            window.clearTimeout(languageSwitchTimeoutRef.current);
        }

        languageSwitchTimeoutRef.current = window.setTimeout(() => {
            rootElement.classList.remove(LANGUAGE_SWITCH_CLASS);
        }, LANGUAGE_SWITCH_DURATION_MS);
    };

    const toggleLanguage = () => {
        runLanguageTransition();
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
