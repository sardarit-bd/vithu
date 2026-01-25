"use client"
import useValueStore from "@/stores/valueStore";

export default function ValuesSection() {
    const { services } = useValueStore();

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Nos valeurs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900">
                                    {value.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
