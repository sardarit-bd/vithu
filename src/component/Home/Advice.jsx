import { Calendar, Check } from 'lucide-react';

export default function CTASection() {
    return (
        <div className="w-full bg-red-600 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Besoin d'un avis ou d'un accompagnement ?
                </h2>

                {/* Subheading */}
                <p className="text-xl text-white mb-4">
                    Profitez d'une consultation gratuite pour évaluer vos besoins informatiques.
                </p>

                {/* Description */}
                <p className="text-white text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                    Nos experts analysent votre situation actuelle, identifient vos besoins et vous proposent des solutions adaptées, sans engagement de votre part. Un rendez-vous de 30 à 45 minutes qui peut transformer votre informatique.
                </p>

                {/* CTA Button */}
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-3 mx-auto mb-8">
                    <Calendar className="w-5 h-5" />
                    Planifier une consultation gratuite
                </button>

                {/* Features */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-white text-sm md:text-base">
                    <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>Sans engagement</span>
                    </div>
                    <div className="hidden sm:block text-white">•</div>
                    <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>Réponse sous 24h</span>
                    </div>
                    <div className="hidden sm:block text-white">•</div>
                    <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>Devis personnalisé gratuit</span>
                    </div>
                </div>
            </div>
        </div>
    );
}