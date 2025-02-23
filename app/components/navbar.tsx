"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Correct import for App Router
import styles from "./navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname(); // ✅ Get current route

    return (
        <header className={styles.header}>
            <nav className="container mx-auto p-5">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Link href="/" className={`${styles.logoStyle} text-2xl font-bold`}>SB</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden relative">
                        <button onClick={() => setMenuOpen(!menuOpen)} onMouseEnter={() => setMenuOpen(true)}>
                            <Image src="/menu.svg" alt="menu" width={30} height={30}/>
                        </button>

                        {/* Dropdown Menu */}
                        <ul
                            className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 transition-all ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                            onMouseLeave={() => setMenuOpen(false)}
                        >
                            {pathname !== "/about" && (
                                <li className="py-2 px-3 hover:bg-gray-100 rounded">
                                    <Link href="/about">About</Link>
                                </li>
                            )}
                            {pathname !== "/contact" && (
                                <li className="py-2 px-3 hover:bg-gray-100 rounded">
                                    <Link href="/contact">Contact</Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
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
