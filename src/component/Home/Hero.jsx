import Link from "next/link";
import Image from "next/image";
export default function Hero() {
    return (
        <section className="relative w-full h-[80vh] bg-cover bg-center bg-[url('/images/hero.png')] flex items-center">

            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center items-start px-6 md:px-0 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    L’informatique qui bosse pour vous, pas l’inverse
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Solutions informatiques professionnelles pour entreprises et particuliers.
                </p>
                <p className="text-sm md:text-base mb-8">
                    <span className="font-semibold">SwitzerIT</span> vous accompagne dans vos projets informatiques avec une approche professionnelle, sécurisée et adaptée à vos besoins. De la simple assistance technique à l'infogérance complète, nous mettons notre expertise au service de votre réussite.
                </p>

                {/* CTA Buttons */}
                <div className="flex space-x-4">
                    <Link href="/services">
                        <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                            Nos services →
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition">
                            Consultation gratuite
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
