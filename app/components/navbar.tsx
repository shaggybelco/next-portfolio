'use client'

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTheme} from "next-themes";
import styles from "./navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const {theme, resolvedTheme} = useTheme(); // resolvedTheme helps detect the actual theme
    const [mounted, setMounted] = useState(false);

    // Ensure we're on the client before accessing theme
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className={styles.header}>
            <nav className="container mx-auto p-5">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Link href="/" className={`text-2xl font-bold`}>
                            {mounted && (
                                <Image
                                    src={(theme === "dark" || resolvedTheme === "dark") ? "/SB_logo_light.png" : "/SB_logo.png"}
                                    alt={'SB Logo'}
                                    width={100}
                                    height={100}/>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden relative">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {/* ✅ Render Image only after component mounts to avoid hydration error */}
                            {mounted && (
                                <Image
                                    src={(theme === "dark" || resolvedTheme === "dark") ? "/menu_light.svg" : "/menu.svg"}
                                    alt="menu"
                                    width={30}
                                    height={30}
                                />
                            )}
                        </button>

                        {/* Fullscreen Overlay Menu */}
                        {menuOpen && (
                            <div
                                className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-300"
                                onClick={() => setMenuOpen(false)} // Close menu when clicking outside
                            >
                                <ul
                                    className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg rounded-lg p-6 w-3/4 max-w-md"
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                                >
                                    {pathname !== "/" && (
                                        <li className="py-3 px-4 text-lg flex justify-center hover:scale-105 transition-all rounded cursor-pointer">
                                            <Link href="/" className={styles.navItem}>Home</Link>
                                        </li>
                                    )}

                                    {pathname !== "/about" && (
                                        <li className="py-3 px-4 text-lg flex justify-center hover:scale-105 transition-all rounded cursor-pointer">
                                            <Link href="/about" className={styles.navItem}>About</Link>
                                        </li>
                                    )}
                                    {pathname !== "/contact" && (
                                        <li className="py-3 px-4 text-lg flex justify-center hover:scale-105 transition-all rounded cursor-pointer">
                                            <Link href="/contact" className={styles.navItem}>Contact</Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {pathname !== "/" && (
                            <li>
                                <Link href="/" className={styles.navItem}>Home</Link>
                            </li>
                        )}
                        {pathname !== "/about" && (
                            <li>
                                <Link href="/about" className={styles.navItem}>About</Link>
                            </li>
                        )}
                        {pathname !== "/contact" && (
                            <li>
                                <Link href="/contact" className={styles.navItem}>Contact</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
