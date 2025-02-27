'use client'

import Home from "@/app/components/home";
import ThemeChanger from "@/app/components/ThemeChanger";
import Navbar from "@/app/components/navbar";
import React from "react";
import Footer from "@/app/components/footer";

export default function App() {
    return (
        <div>
            <div className='fixed bottom-2 right-2'>
                <ThemeChanger/>
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
                <Navbar/>
                <main>
                    <Home/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

