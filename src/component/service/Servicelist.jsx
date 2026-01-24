"use client"; // optional, but good if using hooks later

import React from 'react';
import { Monitor, Lightbulb } from 'lucide-react';

export default function ServiceCards() {
    const services = [
        {
            icon: Monitor,
            title: "Équipements et solutions sur site",
            description: "Fourniture, déploiement et intégration de solutions matérielles et d'équipements sur site afin d'assurer un environnement fiable, cohérent et évolutif, en lien avec l'infrastructure existante.",
            prestations: [
                "Fourniture, installation et maintenance de postes de travail, imprimantes et périphériques",
                "Installation et configuration de serveurs, baies de brassage et équipements réseau",
                "Mise en service et intégration des équipements dans l'environnement existant",
                "Gestion et suivi du parc d'équipements",
                "Optimisation et évolution des solutions en place"
            ]
        },
        {
            icon: Lightbulb,
            title: "Projets informatiques & solutions sur mesure",
            description: "Accompagnement personnalisé pour la conception, la mise en œuvre et le suivi de projets informatiques, en tenant compte de vos contraintes, de vos objectifs et de votre environnement existant.",
            prestations: [
                "Analyse des besoins et des contraintes techniques",
                "Conseil et recommandations adaptées",
                "Pilotage et coordination des projets",
                "Mise en œuvre de solutions sur mesure"
            ]
        }
    ];

    return (
        <div className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm">
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                {/* Left Column - Title and Description */}
                                <div className="md:w-1/2">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mt-2">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Right Column - Prestations */}
                                <div className="md:w-1/2 bg-gray-100 rounded-lg p-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                        Prestations incluses :
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.prestations.map((prestation, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                                                <span className="text-sm text-gray-700">{prestation}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Bottom CTA Section */}
                <div className="bg-pink-50 rounded-lg p-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Vous ne trouvez pas ce que vous cherchez ?
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 max-w-3xl mx-auto">
                        Cette liste n'est pas exhaustive. SwitzerIT vous accompagne sur l'ensemble de vos besoins informatiques. Chaque entreprise et chaque particulier a des besoins spécifiques. Notre équipe prend le temps d'écouter vos exigences pour vous proposer des solutions sur mesure, parfaitement adaptées à votre situation. Que votre projet soit simple ou complexe, standard ou atypique, nous avons l'expertise pour vous accompagner.
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                        N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques.
                    </p>
                </div>
            </div>
        </div>
    );
}
