'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0,
                                ease: "easeOut"
                            }}
                            className="text-4xl font-bold text-gray-900 text-justify">
                            Qui sommes-nous ?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.2,
                                ease: "easeOut"
                            }}
                            className="text-gray-700 leading-relaxed text-justify">
                            SwitzerIT est une société suisse de services informatiques dédiée à
                            accompagner les entreprises et les particuliers dans la gestion complète
                            de leurs besoins IT.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.4,
                                ease: "easeOut"
                            }}
                            className="text-gray-700 leading-relaxed text-justify">
                            Nous mettons notre expertise technique et notre approche professionnelle
                            au service de votre réussite, en proposant des solutions fiables,
                            sécurisées et adaptées à vos besoins.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.6,
                                ease: "easeOut"
                            }}
                            className="text-gray-700 leading-relaxed text-justify">
                            Basés en Suisse, nous comprenons les exigences de qualité, de sécurité et
                            de professionnalisme qui caractérisent le marché suisse. Notre équipe
                            d'experts combine compétences techniques pointues et sens du service pour
                            vous garantir une expérience optimale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.8,
                                ease: "easeOut"
                            }}
                            className="pt-4">
                            <p className="text-gray-900 text-justify">
                                <b className="font-extrabold text-red-400">Notre promesse :</b>{' '}
                                <span className="text-gray-700">
                                    être à vos côtés pour que l'informatique devienne un atout pour votre
                                    activité, et non une contrainte.
                                </span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.10,
                            ease: "easeOut"
                        }}
                        className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-sm">
                        <Image
                            src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769597931/switzer_it_room_vccbst.png"
                            alt="Business professionals shaking hands"
                            fill
                            className="object-cover object-right"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section >
    );
}