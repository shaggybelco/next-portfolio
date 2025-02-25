import type {Metadata} from "next";
import {Exo, Exo_2, Rubik, Rubik_Bubbles} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "next-themes";

const exo = Exo({
    variable: "--font-exo",
    subsets: ["latin"],
});

const exo2 = Exo_2({
    variable: "--font-amiri",
    subsets: ["latin"]
});

const rubik = Rubik_Bubbles({
    variable: "--font-rubik-bubbles",
    subsets: ["latin"], 
    weight: ['400']
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${exo.variable} ${exo2.variable} ${rubik.variable} antialiased`}>
        <ThemeProvider enableSystem={true} attribute={"class"}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
