import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ContactForm from "@/app/components/contactForm";

const ContactPage = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Navbar />
            <main className="flex justify-center p-6">
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
