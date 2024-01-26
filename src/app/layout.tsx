import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ClientThemeProvider } from "@/context/ClientThemeProvider";
import HeaderToggleTheme from "@/components/HeaderToggleTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login Enrollment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeProvider>
            <HeaderToggleTheme />
            {children}
          </ClientThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
