'use client';

import React, { createContext, use, useEffect, useState } from 'react';

interface ThemeProviderType {
    children: React.ReactNode;
}

export const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: (active: boolean) => {}
});

export const ThemeProvider = ({ children }: ThemeProviderType ) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //     setIsMounted(true);
    //     // create a function to get the theme from local storage (if there is one)
    // }, []);

    const toggleTheme = (active: boolean) => {
        setIsDarkMode(active);
        localStorage.setItem('theme', JSON.stringify(active));
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
