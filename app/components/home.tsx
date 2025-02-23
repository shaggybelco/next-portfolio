'use client'

import React from 'react';
import styles from './home.module.css';
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <div className={`flex justify-center items-center`}>
            <div className="p-5 md:w-9/12">
                {/* Title Section */}
                <article>
                    <h1 data-text="I'm Shaggy Belco Sambo" className={`${styles.introText} sm:my-2 md:my-5`}>
                        <span className={styles.mark}>I'm Shaggy Belco Sambo</span>
                    </h1>

                    <p className='mb-5'>Hi, I'm a Full-Stack Developer! 👨‍💻✨</p>

                    <p className='mb-5'>I build fast, interactive web apps with <b>Angular, Vue, React, and
                        Next.js</b> on the frontend
                        and
                        power
                        them with <b>ASP.NET, C#, Entity Framework, and Dapper</b> on the backend. I turn ideas into
                        seamless
                        digital experiences—clean code, smooth performance, and user-friendly design. 🚀
                    </p>

                    <p className='mb-5'>
                        Curious to learn more about me? I love collaborating on projects, discussing innovative tech,
                        and sharing knowledge. Let's connect and build something amazing together!
                    </p>
                </article>
                <Link href={'/about'} className='flex items-center gap-1 w-auto mb-5'>
                    <p className={`${styles.AboutMeLink}`}>Get to know more about me</p>
                    <Image className={styles.aboutMe} src={'/arrow-right.svg'} alt={'profile'} width={30} height={30}/>
                </Link>
            </div>
        </div>
    );
};

export default Home;