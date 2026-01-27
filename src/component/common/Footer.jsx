import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const navigation = [
        { label: 'Accueil', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'À propos', href: '#' },
        { label: 'Contact', href: '#' }
    ];

    const services = [
        { label: 'Assistance et support', href: '#' },
        { label: 'Infogérance', href: '#' },
        { label: 'Cybersécurité', href: '#' },
        { label: 'Réseaux & Wi-Fi', href: '#' },
        { label: 'Cloud & collaboration', href: '#' },
        { label: 'Solutions sur mesure', href: '#' }
    ];

    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-3 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769509686/Screenshot_2026-01-27_162722_ld5h66.png"
                                alt="SwitzerIT Logo"
                                width={100}
                                height={100}
                                className='h-10 w-auto'
                            />
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Votre partenaire informatique de confiance en Suisse. Solutions professionnelles pour entreprises et particuliers.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {services.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:support@switzerit.com"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>support@switzerit.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+41779913873"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+41 77 991 38 73</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-2 text-sm text-gray-400">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Route de Villars 15<br />
                                        1867 Ollon, Suisse
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © 2026 SwitzerIT. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-white transition-colors"
                        >
                            Mentions légales
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-white transition-colors"
                        >
                            Politique de confidentialité
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}