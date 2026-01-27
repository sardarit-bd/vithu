"use client"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-white shadow sticky top-0 z-50 aptos">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769431251/my_logo_pagady.png"
                        alt="SwitzerIT Logo"
                        width={1000}
                        height={1000}
                        className='h-7 w-auto'
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-red-600 transition">Accueil</Link>
                    <Link href="/services" className="hover:text-red-600 transition">Services</Link>
                    <Link href="/about" className="hover:text-red-600 transition">À propos</Link>
                    <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
                </nav>


                <div className="flex items-center gap-4">
                    {/* <LanguessageShifter /> */}

                    <Link
                        href="/contact"
                        className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Demander un devis
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 hover:text-red-600 transition"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu start from here */}
            <div
                className={`md:hidden absolute top-18 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col space-y-4 px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-red-600 transition font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/services"
                        className="text-gray-700 hover:text-red-600 transition font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-red-600 transition font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        À propos
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-700 hover:text-red-600 transition font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-red-600 text-white px-5 py-2 hover:bg-red-700 transition text-center font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Demander un devis
                    </Link>
                </nav>
            </div>
        </header>
    );
}