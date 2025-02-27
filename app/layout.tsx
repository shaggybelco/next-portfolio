import type {Metadata} from "next";
import {Exo, Exo_2} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "next-themes";
import Head from "next/head";

const exo = Exo({
    variable: "--font-exo",
    subsets: ["latin"],
});

const exo2 = Exo_2({
    variable: "--font-exo2",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Shaggy Portfolio",
    description: "Get to know me",
    icons: {
        icon: '/favicon.png'
    }
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <Head>
            <link rel="icon" type="image/png" href="/favicon.png"/>
        </Head>
        <body className={`${exo.variable} ${exo2.variable} antialiased`}>
        <ThemeProvider enableSystem={true} attribute={"class"}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
