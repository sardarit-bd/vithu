'use client'
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const navigation = [
        { label: 'Accueil', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'À propos', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ];

    const services = [
        { label: 'Assistance et support', href: '/services#0' },
        { label: 'Infogérance', href: '/services#1' },
        { label: 'Cybersécurité', href: '/services#2' },
        { label: 'Réseaux & Wi-Fi', href: '/services#3' },
        { label: 'Cloud & collaboration', href: '/services#4' },
        { label: 'Solutions sur mesure', href: '/services#5' }
    ];

    return (
        <footer className="bg-gray-200 text-gray-300">
            <div className="max-w-7xl mx-auto px-3 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease: "easeOut"
                            }}
                            className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769431251/my_logo_pagady.png"
                                alt="SwitzerIT Logo"
                                width={1000}
                                height={1000}
                                className='h-10 w-auto'
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: -45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: "easeOut"
                            }}
                            className="text-md text-gray-700 leading-relaxed">
                            Votre partenaire informatique de confiance en Suisse. Solutions professionnelles pour entreprises et particuliers.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease: "easeOut"
                            }}

                            className="text-gray-800 text-xl font-bold mb-4">Navigation</motion.h3>
                        <ul className="space-y-2">
                            {navigation.map((item, index) => (
                                <motion.li
                                    initial={{ opacity: 0, x: -45 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.2 * index,
                                        ease: "easeOut"
                                    }}
                                    key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease: "easeOut"
                            }}
                            className="text-gray-800 text-xl font-bold mb-4">Services</motion.h3>
                        <ul className="space-y-2">
                            {services.map((item, index) => (
                                <motion.li
                                    initial={{ opacity: 0, x: -45 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.2 * index,
                                        ease: "easeOut"
                                    }}
                                    key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease: "easeOut"
                            }}
                            className="text-gray-800 text-xl font-bold mb-4">Contact</motion.h3>
                        <ul className="space-y-3">
                            <motion.li
                                initial={{ opacity: 0, x: -45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.3,
                                    ease: "easeOut"
                                }}
                            >
                                <a
                                    href="mailto:support@switzerit.com"
                                    className="flex items-center gap-2 text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>support@switzerit.com</span>
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                <Link
                                    href="tel:+41779913873"
                                    target='_blank'
                                    className="flex items-center gap-2 text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+41 77 991 38 73</span>
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.7,
                                    ease: "easeOut"
                                }}
                            >
                                <Link target='_blank' href='https://maps.app.goo.gl/yY1bEsyDR6QpVvZ3A' className="flex items-start gap-2 text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Route de Villars 15<br />
                                        1867 Ollon, Suisse
                                    </span>
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.p
                        initial={{ opacity: 0, x: -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: "easeOut"
                        }}
                        className="text-md text-gray-700">
                        © 2026 SwitzerIT. Tous droits réservés.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: "easeOut"
                        }}
                        className="flex gap-6">
                        <a
                            href="#"
                            className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                        >
                            Mentions légales
                        </a>
                        <a
                            href="#"
                            className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                        >
                            Politique de confidentialité
                        </a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}