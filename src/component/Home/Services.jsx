"use client";

import useServicesStore from "@/stores/servicesStore";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ITServicesSection() {
    const { services } = useServicesStore();

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos services informatiques
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Des solutions informatiques qui simplifient vraiment votre quotidien
                    </p>
                    <p className="text-gray-500 text-sm mt-2 max-w-3xl mx-auto">
                        Que vous soyez une entreprise à la recherche d'un partenaire IT fiable ou un
                        particulier nécessitant un accompagnement technique, SwitzerIT met son expertise
                        à votre service. Nous intervenons sur l'ensemble de vos problématiques
                        informatiques avec professionnalisme et réactivité.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 45 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.1,
                                    ease: "easeOut"
                                }}
                                key={index}
                                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <IconComponent className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action Box */}
                <motion.div
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.6,
                        ease: "easeOut"
                    }}
                    className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg
                                className="w-6 h-6 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                💡 Vous avez un besoin spécifique ?
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Cette liste n'est pas exhaustive. SwitzerIT vous accompagne sur l'ensemble de vos
                                besoins informatiques, quels qu'ils soient. N'hésitez pas à nous contacter pour
                                discuter de votre projet, même s'il ne figure pas dans cette liste. Notre équipe
                                d'experts trouvera la solution adaptée à votre situation. <Link className="text-red-600 font-semibold text-md" href="/contact">Contactez-nous</Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
