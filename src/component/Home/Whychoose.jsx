import React from 'react';
import { Building2, Shield, BookOpen, Users, Settings } from 'lucide-react';

export default function WhyChooseSwitzerIT() {
    const features = [
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Approche professionnelle et structurée",
            description: "Des méthodes claires et éprouvées pour garantir des prestations fiables et cohérentes."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Sécurité intégrée par défaut",
            description: "La sécurité est incluse dans toutes nos solutions, sans compromis ni option cachée."
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Transparence et pédagogie",
            description: "Explications claires et documentation complète à chaque étape."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Un interlocuteur unique",
            description: "Une personne de contact dédiée qui connaît votre entreprise et vos besoins."
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Solutions adaptées à chaque client",
            description: "Approche personnalisée, pas de solution standardisée imposée."
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Pourquoi choisir SwitzerIT ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-2">
                        Notre engagement pour votre réussite
                    </p>
                    <p className="text-sm text-gray-500 max-w-3xl mx-auto">
                        Faire appel à SwitzerIT, c'est choisir un partenaire informatique qui s'appuie sur l'écoute, la rigueur et la qualité de service. Notre approche est structurée, orientée résultats et adaptée à vos priorités. Découvrez ce qui fait notre différence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="bg-white rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                        Une expertise locale et accessible
                    </h3>
                    <p className="text-sm text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
                        Basés en Suisse, nous comprenons les exigences de qualité et de fiabilité du marché suisse. Notre équipe locale parle votre langue (français, anglais) et connaît les spécificités des entreprises suisses. Nous combinons l'excellence technique avec une relation de proximité pour vous offrir un service personnalisé et réactif. Votre satisfaction est notre priorité.
                    </p>
                </div>
            </div>
        </div>
    );
}