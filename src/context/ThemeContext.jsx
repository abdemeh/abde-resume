import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext();

const THEME_STORAGE_KEY = 'theme';

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

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
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
