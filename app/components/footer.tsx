import React from 'react';
import styles from './footer.module.css';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={`${styles.footer} p-5`}>
            <div className='w-full flex justify-center gap-3'>
                <Link href={'https://www.linkedin.com/in/shaggysambo/'} className='flex gap-2 items-center cursor-pointer'>
                    <Image src={'/linkedin.svg'} alt={'linkedin'} width={30} height={30}/>Linkedin
                </Link>
                <Link href={'https://github.com/shaggybelco'} className='flex gap-2 items-center cursor-pointer'>
                    <Image src={'/git.svg'} alt={'Github'} width={30} height={30}/>Github
                </Link>
            </div>
        </footer>
    );
};

export default Footer;