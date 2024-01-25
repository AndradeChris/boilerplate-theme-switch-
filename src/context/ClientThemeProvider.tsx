'use client'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

interface ClientThemeProviderType {
    children: React.ReactNode;
}

export const ClientThemeProvider = ({ children }: ClientThemeProviderType) => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div id='client-theme-provider' data-theme={isDarkMode ? 'dark' : 'light'}>
            {children}
        </div>
    )
}