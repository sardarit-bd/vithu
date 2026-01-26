"use client";

import useServicesStore from "@/stores/servicesStore";
import Link from "next/link";

export default function ITServicesSection() {
    const { services } = useServicesStore();

    return (
        <section className="py-16 px-4 bg-white comic">
            <div className="max-w-7xl mx-auto px-3">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos services informatiques
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Nos solutions informatiques sont adaptées à chacune pour le quotidien
                    </p>
                    <p className="text-gray-500 text-sm mt-2 max-w-3xl mx-auto">
                        Que votre besoin soit stratégique à la recherche d'un partenaire IT fiable ou un particulier cherchant un accompagnement
                        technique, LocalIT met son expertise à votre service. Nous intervenons sur l'ensemble de vos problématiques informatiques
                        avec professionnalisme et réactivité.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
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
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Box */}
                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
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
                                Vous avez un besoin spécifique ?
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                LocalIT n'est pas uniquement. Si votre besoin particulier n'est l'ensemble de nos besoins informatiques,
                                quelle qu'elle soient. N'hésitez pas à nous contacter pour en savoir + nous pouvez le savoir si nous pouvons
                                accompagner à votre demande, à savoir résoudre la votre résoudre là nous demande. <Link className="text-red-600 font-semibold text-md" href="/contact">Contactez-nous</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
