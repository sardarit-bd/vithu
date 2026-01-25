import { create } from "zustand";
import { Target, Heart, Award, Users } from 'lucide-react';

const useValueStore = create((set) => ({
    services: [
        {
            icon: Target,
            title: "Esprit familial",
            description: "Un partenaire de longue durée plutôt qu'un simple prestataire."
        },
        {
            icon: Heart,
            title: "Disponibilité",
            description: "Un interlocuteur unique, disponible et impliqué dans la durée."
        },
        {
            icon: Award,
            title: "Confiance",
            description: "Une relation durable basée sur la fiabilité et le respect."
        },
        {
            icon: Users,
            title: "Clarté",
            description: "Une communication simple, transparente et accessible à chaque étape."
        }
    ],
    addValue: (value) => set((state) => ({ services: [...state.services, value] })),
    removeValue: (title) => set((state) => ({ services: state.services.filter(s => s.title !== title) }))
}));

export default useValueStore;
