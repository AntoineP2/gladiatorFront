"use client";
import "./globals.css";
import react from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/navigation/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// ---------- VARIABLE ------------

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// ---------- COMPONENT ------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ---------- Hooks  ------------

  const [darkMode, setDarkMode] = react.useState(true);

  // ---------- FONCTION ------------

  const handleToggle = (params: String) => {
    setDarkMode(!darkMode);
  };

  // ---------- RENDER ------------
  return (
    <html lang="en">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <body className={inter.className}>
          <NavBar onToggle={handleToggle} darkModeState={darkMode} />
          <div className="pt-10 pl-20 pr-20 ">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}