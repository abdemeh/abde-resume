import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const ThemeContext = createContext();

const THEME_STORAGE_KEY = 'theme';
const THEME_SWITCH_CLASS = 'theme-switching';
const THEME_SWITCH_DURATION_MS = 380;

const getInitialTheme = () => {
    if (typeof window === 'undefined') {
        return 'dark';
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
    }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);
    const themeSwitchTimeoutRef = useRef();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    useEffect(() => {
        return () => {
            if (themeSwitchTimeoutRef.current) {
                window.clearTimeout(themeSwitchTimeoutRef.current);
            }
        };
    }, []);

    const runThemeTransition = () => {
        if (typeof document === 'undefined') {
            return;
        }

        const rootElement = document.documentElement;
        rootElement.classList.remove(THEME_SWITCH_CLASS);

        // Force reflow so repeated toggles retrigger the same CSS animation class.
        void rootElement.offsetWidth;

        rootElement.classList.add(THEME_SWITCH_CLASS);

        if (themeSwitchTimeoutRef.current) {
            window.clearTimeout(themeSwitchTimeoutRef.current);
        }

        themeSwitchTimeoutRef.current = window.setTimeout(() => {
            rootElement.classList.remove(THEME_SWITCH_CLASS);
        }, THEME_SWITCH_DURATION_MS);
    };

    const toggleTheme = () => {
        runThemeTransition();
        setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'));
    };

    const value = useMemo(() => {
        return {
            theme,
            setTheme,
            toggleTheme,
            isDark: theme === 'dark',
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
