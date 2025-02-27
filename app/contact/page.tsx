'use client'

import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ContactForm from "@/app/components/contactForm";
import ThemeChanger from "@/app/components/ThemeChanger";

const ContactPage = () => {
    return (
        <div>
            <div className='fixed bottom-2 right-2'>
                <ThemeChanger/>
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
                <Navbar/>
                <main className="flex items-center justify-center p-6 text-center gap-5 flex-col md:flex-row">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl font-bold mb-4">Let's Connect!</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Whether you're looking to collaborate on a project, have a question, or just want to say hello,
                            I'd love to hear from you. Let's build something amazing together!
                        </p>
                        <p className="mt-4 italic text-gray-500 dark:text-gray-400">
                            "Great things in business are never done by one person. They're done by a team of people." — Steve Jobs
                        </p>
                    </div>
                    <ContactForm/>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default ContactPage;
