"use client"

import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form has been submitted")
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Envoyez-nous un message
                        </h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Entreprise
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sujet *
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition bg-white"
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="support">Consultation gratuite</option>
                                    <option value="devis">Support technique</option>
                                    <option value="info">Infogérance</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Décrivez-nous vos besoins..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition resize-none"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-200"
                            >
                                Envoyer le message
                            </button>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Informations de contact
                        </h2>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                    <a href="mailto:support@switzerit.com" className="text-red-600 hover:text-red-700">
                                        support@switzerit.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                                    <a href="tel:+41779913873" className="text-red-600 hover:text-red-700">
                                        +41 77 991 38 73
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                                    <p className="text-gray-600">
                                        Route de Villars 15<br />
                                        1867 Ollon, Suisse
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                                    <p className="text-gray-600">
                                        Lundi - Vendredi : 8h00 - 20h00<br />
                                        Samedi : 7h00 - 20h00<br />
                                        Dimanche : 7h00 - 20h00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Free Consultation Box */}
                        <div className="mt-8 bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Consultation gratuite
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Profitez d'une consultation gratuite pour évaluer vos besoins informatiques
                                et découvrir comment SwitzerIT peut vous accompagner.
                            </p>
                            <p className="text-red-600 font-semibold text-sm">
                                Sans engagement • Réponse sous 24h
                            </p>
                        </div>

                        {/* Emergency Support */}
                        <div className="mt-6 bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Support d'urgence
                            </h3>
                            <p className="text-gray-600 mb-2">
                                Pour nos clients en infogérance, un support d'urgence 24/7 est disponible.
                            </p>
                            <p className="text-gray-700">
                                Numéro d'urgence : <a href="tel:+41779666229" className="text-red-600 hover:text-red-700 font-semibold">+41 77 966 62 29</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}