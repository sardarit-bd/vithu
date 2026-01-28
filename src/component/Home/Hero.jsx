'use client'

import { motion } from "framer-motion";

import Link from "next/link";
export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] bg-cover bg-center object-top flex items-center heroBG">

            <div className="absolute inset-0 bg-black opacity-0"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-3 text-white aptos">
                <motion.h1
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0,
                        ease: "easeOut"
                    }}
                    className="text-4xl md:text-6xl w-3/4 font-bold mb-4">
                    L’informatique qui bosse pour vous, pas l’inverse
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="text-lg md:text-2xl mb-6">
                    Solutions informatiques professionnelles pour entreprises et particuliers.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="text-sm md:text-lg mb-8">
                    <span className="font-semibold">SwitzerIT</span> vous accompagne dans vos projets informatiques avec une approche professionnelle, sécurisée et adaptée à vos besoins. De la simple assistance technique à l'infogérance complète, nous mettons notre expertise au service de votre réussite.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.3,
                        ease: "easeOut"
                    }}
                    className="w-full flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
                    <Link href="/services" className="w-full md:w-auto text-center bg-white text-gray-900 text-lg px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-103">
                        Nos services
                    </Link>

                    <Link href="/contact" className="w-full md:w-auto text-center bg-red-600 text-white px-6 text-lg py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-300 hover:scale-103">
                        Consultation gratuite
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
