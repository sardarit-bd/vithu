import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="SwitzerIT Logo"
                        width={100}
                        height={100}
                        className='h-10 w-auto'
                    />
                </Link>

                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-red-600 transition active">Accueil</Link>
                    <Link href="/services" className="hover:text-gray-900 transition">Services</Link>
                    <Link href="/about" className="hover:text-gray-900 transition">À propos</Link>
                    <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
                </nav>

                <Link
                    href="/contact"
                    className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Demander un devis
                </Link>

            </div>
        </header>
    );
}
