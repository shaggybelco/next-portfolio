import React from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const AboutPage = () => {
    return (
        <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
            <Navbar/>
            <main className={"flex justify-center"}>
                <article className={"w-9/12"}>
                    <p>
                        Passionate about crafting seamless digital experiences, I build high-performance applications
                        that blend functionality with great user experience. From intuitive interfaces to efficient
                        backend systems, I turn ideas into scalable, impactful solutions. Problem-solving is my craft,
                        and code is my tool.
                    </p>
                </article>
            </main>
            <Footer/>
        </div>
    );
};

export default AboutPage;