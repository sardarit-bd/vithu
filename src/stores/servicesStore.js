import {
  Cloud,
  FolderKanban,
  Headphones,
  Monitor,
  Shield,
  Wifi,
  Wrench
} from 'lucide-react';
import { create } from "zustand";

const useServicesStore = create((set) => ({
  services: [
    {
      icon: Headphones,
      title: "Assistance et support informatique",
      description: "Dépannage et assistance informatique pour résoudre efficacement vos problèmes, àdistance ou sur site.",
      color: "bg-red-50",
      prestations: [
        "Support utilisateurs à distance (poste de travail, logiciels, messagerie, accès réseau)",
        "Interventions sur site en cas de besoin",
        "Gestion, suivi et priorisation des incidents",
        "Assistance à la prise en main et accompagnement des utilisateurs",
        "Diagnostic et résolution des incidents matériels et logiciels",
        "Support sur les outils courants (systèmes, applications, périphériques)",
        "Suivi des demandes et traçabilité des interventions"
      ],
      isLeft: true,
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769512983/itsupport_mklkjg.jpg"

    },
    {
      icon: Wrench,
      title: "Infogérance & maintenance IT",
      description: "Gestion et maintenance de votre environnement informatique pour assurer stabilité et continuité.",
      color: "bg-red-50",
      prestations: [
        "Supervision et suivi des infrastructures et services",
        "Maintenance préventive et corrective des systèmes",
        "Gestion des mises à jour systèmes et applicatives",
        "Suivi du parc et contrôle de l’état des environnements",
        "Anticipation des incidents et actions correctives",
        "Recommandations d’évolution et d’optimisation"
      ],
      isLeft: false,
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511869/maintaince_kn9cfu.jpg"

    },
    {
      icon: Shield,
      title: "Cybersécurité & protection des données",
      description: "Mise en place de solutions adaptées pour protéger vos données et réduire les risques informatiques.",
      color: "bg-red-50",
      prestations: [
        "Analyse de risques et évaluation de la posture de sécurité",
        "Accompagnement à la mise en conformité (ISO 27001, TISAX, bonnes pratiques SSI)",
        "Audits de sécurité techniques et organisationnels",
        "Sensibilisation et recommandations en matière de sécurité",
        "Analyse forensique et investigation après incident de sécurité",
        "Recommandations, plans de remédiation et renforcement des contrôles de sécurité"
      ],
      isLeft: true,
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511870/protected_nwvutf.jpg"
    },
    {
      icon: Wifi,
      title: "Réseaux & Wi-Fi",
      description: "Installation et optimisation de réseaux filaires et Wi-Fi fiables, sécurisés et adaptés à vos usages.",
      color: "bg-red-50",
      prestations: [
        "Conception et mise en place d’architectures réseau filaires",
        "Installation et configuration de switches, routeurs, pare-feu et équipements réseau",
        "Déploiement et optimisation de solutions Wi-Fi professionnelles (bornes, contrôleurs, couverture)",
        "Configuration et sécurisation des accès réseau",
        "Segmentation réseau (VLAN) et gestion des flux",
        "Installation et configuration de systèmes de vidéosurveillance (caméras, enregistreurs, accès)",
        "Mise en place de solutions de contrôle d’accès (badges, codes, lecteurs, gestion des droits)",
        "Diagnostic et résolution des problématiques réseau"
      ],
      isLeft: false,
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511867/network_mj4gw1.jpg"

    },
    {
      icon: Cloud,
      title: "Cloud, messagerie & collaboration",
      description: "Solutions cloud et messagerie professionnelle pour faciliter la communication et le travail collaboratif.",
      color: "bg-red-50",
      prestations: [
        "Migration et déploiement de solutions cloud (Microsoft 365, Google Workspace)",
        "Mise en place et gestion de la messagerie professionnelle",
        "Outils collaboratifs pour le partage de documents et le travail en équipe",
        "Gestion des accès, des droits et des utilisateurs",
        "Stockage cloud sécurisé et synchronisation des données"
      ],
      isLeft: true,
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511863/cloud_cqnltk.jpg"

    },
    {
      icon: Monitor,
      title: "Équipements et solutions sur site",
      description: "Fourniture et installation d’équipements informatiques adaptés à votre environnement.",
      color: "bg-red-50",
      prestations: [
        "Fourniture, installation et maintenance de postes de travail, imprimantes et périphériques",
        "Installation et configuration de serveurs, baies de brassage et équipements réseau",
        "Mise en service et intégration des équipements dans l’environnement existant",
        "Gestion et suivi du parc d’équipements",
        "Optimisation et évolution des solutions en place"
      ],
      isLeft: false,
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769601509/balok_hv8rkj.jpg"
    },
    {
      icon: FolderKanban,
      title: "Projets informatiques & solutions sur mesure",
      description: "Accompagnement personnalisé pour vos projets informatiques, simples ou plus complexes.",
      color: "bg-red-50",
      prestations: [
        "Analyse des besoins et des contraintes techniques",
        "Conseil et recommandations adaptées",
        "Pilotage et coordination des projets",
        "Mise en œuvre de solutions sur mesure"
      ],
      isLeft: true,
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769512985/custom_1_zgou8o.jpg"

    }
  ],
  // Action to add a service
  addService: (service) => set((state) => ({ services: [...state.services, service] })),
  // Action to remove a service
  removeService: (title) => set((state) => ({ services: state.services.filter(s => s.title !== title) }))
}));

export default useServicesStore;
