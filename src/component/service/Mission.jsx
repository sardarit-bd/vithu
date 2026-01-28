'use client'

import { motion } from "framer-motion";

export default function MissionSection() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-3">
                <div

                    className="bg-red-600 rounded-3xl px-8 py-12 md:px-16 md:py-16 text-white text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            ease: "easeOut"
                        }}
                        className="text-4xl md:text-5xl font-bold mb-8">
                        Notre mission
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        className="text-lg md:text-xl leading-relaxed mb-6 max-w-4xl mx-auto">
                        Permettre à chaque entreprise et particulier de bénéficier d'une informatique fiable,
                        sécurisée et performante, en offrant un accompagnement professionnel et des
                        solutions adaptées à leurs besoins spécifiques.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: "easeOut"
                        }}
                        className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                        Nous croyons que la technologie doit être au service de l'humain et non l'inverse.
                        C'est pourquoi nous mettons un point d'honneur à proposer des solutions compréhensibles,
                        accessibles et parfaitement adaptées à chaque situation. Votre réussite est notre objectif.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}