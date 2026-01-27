"use client"; // optional, but good if using hooks later

import useServicesStore from "@/stores/servicesStore";

export default function ServiceCards() {
    const { services } = useServicesStore();
    return (
        <div className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto space-y-8 px-3">
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={index} className="bg-gray-300 rounded-lg p-8 shadow-sm mb-10">
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                {/* Left Column - Title and Description */}
                                <div className="md:w-2/3">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-md text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Right Column - Prestations */}
                                <div className="hello md:w-1/3 rounded-lg">
                                    <h4 className="text-sm font-semibold mb-3">
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
