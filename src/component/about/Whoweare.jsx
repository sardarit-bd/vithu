import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Qui sommes-nous ?
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            SwitzerIT est une société suisse de services informatiques dédiée à
                            accompagner les entreprises et les particuliers dans la gestion complète
                            de leurs besoins IT.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Nous mettons notre expertise technique et notre approche professionnelle
                            au service de votre réussite, en proposant des solutions fiables,
                            sécurisées et adaptées à vos besoins.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Basés en Suisse, nous comprenons les exigences de qualité, de sécurité et
                            de professionnalisme qui caractérisent le marché suisse. Notre équipe
                            d'experts combine compétences techniques pointues et sens du service pour
                            vous garantir une expérience optimale.
                        </p>

                        <div className="pt-4">
                            <p className="text-gray-900">
                                <span className="font-bold">Notre promesse :</span>{' '}
                                <span className="text-gray-700">
                                    être à vos côtés pour que l'informatique devienne un atout pour votre
                                    activité, et non une contrainte.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-sm">
                        <Image
                            src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769428293/poster_s4crd3.png"
                            alt="Business professionals shaking hands"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}