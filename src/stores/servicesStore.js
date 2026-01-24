import { create } from "zustand";
import { 
  Headphones, 
  Wrench, 
  Wifi, 
  Cloud, 
  Monitor, 
  FolderKanban,
  Shield 
} from 'lucide-react';

const useServicesStore = create((set) => ({
  services: [
    {
      icon: Headphones,
      title: "Assistance et support informatique",
      description: "Dépannage et assistance informatique pour résoudre efficacement vos problèmes, à distance ou sur place.",
      color: "bg-red-50"
    },
    {
      icon: Wrench,
      title: "Intégrations & maintenance IT",
      description: "Gestion et maintenance de votre environnement informatique pour assurer fiabilité et continuité.",
      color: "bg-red-50"
    },
    {
      icon: Shield,
      title: "Cybersécurité & protection des données",
      description: "Mise en place de solutions adaptées pour protéger vos données et réduire les risques informatiques.",
      color: "bg-red-50"
    },
    {
      icon: Wifi,
      title: "Réseaux & Wi-Fi",
      description: "Installation et optimisation de réseaux filaires et Wi-Fi fiables, sécurisés et adaptés à vos besoins.",
      color: "bg-red-50"
    },
    {
      icon: Cloud,
      title: "Cloud, messagerie & collaboration",
      description: "Solutions cloud et messagerie professionnelle pour faciliter la communication et le travail collaboratif.",
      color: "bg-red-50"
    },
    {
      icon: Monitor,
      title: "Équipements et solutions sur site",
      description: "Fourniture et installation d'équipements informatiques adaptés à votre environnement.",
      color: "bg-red-50"
    },
    {
      icon: FolderKanban,
      title: "Projets informatiques & outils tiers",
      description: "Accompagnement personnalisé pour vos projets informatiques, intégrer ou aider à collaborer.",
      color: "bg-red-50"
    }
  ],
  // Action to add a service
  addService: (service) => set((state) => ({ services: [...state.services, service] })),
  // Action to remove a service
  removeService: (title) => set((state) => ({ services: state.services.filter(s => s.title !== title) }))
}));

export default useServicesStore;
