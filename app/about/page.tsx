'use client'

import React from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ThemeChanger from "@/app/components/ThemeChanger";

const AboutPage = () => {
    return (
        <div>
            <div className='fixed bottom-2 right-2'>
                <ThemeChanger/>
            </div>
            <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
                <Navbar/>
                <main className="flex justify-center px-6">
                    <article className="md:w-9/12 space-y-6">
                        {/* About Me Section */}
                        <section>
                            <h1 className="text-3xl font-bold mb-3">About Me</h1>
                            <p>
                                Passionate about crafting seamless digital experiences, I build high-performance
                                applications
                                that blend functionality with great user experience. From intuitive interfaces to
                                efficient
                                backend systems, I turn ideas into scalable, impactful solutions. Problem-solving is my
                                craft,
                                and code is my tool.
                            </p>
                        </section>

                        {/* Experience Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                            <ul className="list-disc ml-6">
                                <li><strong>Junior Software Developer</strong> - Digital Solution Foundry (Mar 2023 -
                                    Present)
                                </li>
                                <li><strong>Junior Full-Stack Developer</strong> - Digital Academy (Jun 2022 - Mar 2023)
                                </li>
                                <li><strong>Intern</strong> - Ekhonnector Systems (Jan 2022 - Jun 2022)</li>
                            </ul>
                        </section>

                        {/* Skills Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                            <ul className="list-disc ml-6">
                                <li>Angular, React, Next.js, Vue, TypeScript, C# ASP.NET MVC</li>
                                <li>Node.js, ASP.NET Web API, Express, PostgreSQL, MySQL</li>
                                <li>CSS, SASS/SCSS, Tailwind CSS</li>
                                <li>RESTful APIs</li>
                                <li>Agile Development, CI/CD</li>
                            </ul>
                        </section>

                        {/* Education Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Education</h2>
                            <p><strong>National Diploma in Information Technology(Software
                                Development)</strong> -Tshwane University of Technology (2018 -
                                2022)</p>
                        </section>
                    </article>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default AboutPage;
