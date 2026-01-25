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
      title: "Support & assistance informatique",
      description: "Support informatique structuré pour accompagner les utilisateurs et assurer le bon fonctionnement quotidien des postes de travail, logiciels et services informatiques, à distance ou sur site.",
      color: "bg-red-50",
      prestations: [
        "Support utilisateurs à distance (poste de travail, logiciels, messagerie, accès réseau)",
        "Interventions sur site en cas de besoin",
        "Gestion, suivi et priorisation des incidents",
        "Assistance à la prise en main et accompagnement des utilisateurs",
        "Diagnostic et résolution des incidents matériels et logiciels",
        "Support sur les outils courants (systèmes, applications, périphériques)",
        "Suivi des demandes et traçabilité des interventions"
      ]

    },
    {
      icon: Wrench,
      title: "Infogérance & maintenance IT",
      description: "Gestion structurée des systèmes et services visant à assurer le bon fonctionnement quotidien de l’environnement, sa stabilité dans le temps et l’anticipation des évolutions nécessaires.",
      color: "bg-red-50",
      prestations: [
        "Supervision et suivi des infrastructures et services",
        "Maintenance préventive et corrective des systèmes",
        "Gestion des mises à jour systèmes et applicatives",
        "Suivi du parc et contrôle de l’état des environnements",
        "Anticipation des incidents et actions correctives",
        "Recommandations d’évolution et d’optimisation"
      ]

    },
    {
      icon: Shield,
      title: "Cybersécurité & protection des données",
      description: "Approche structurée de la cybersécurité visant à sécuriser les systèmes d’information et les données, en intégrant la prévention, la détection et la gestion des incidents dans un cadre conforme aux bonnes pratiques et aux standards de sécurité.",
      color: "bg-red-50",
      prestations: [
        "Analyse de risques et évaluation de la posture de sécurité",
        "Accompagnement à la mise en conformité (ISO 27001, TISAX, bonnes pratiques SSI)",
        "Audits de sécurité techniques et organisationnels",
        "Sensibilisation et recommandations en matière de sécurité",
        "Analyse forensique et investigation après incident de sécurité",
        "Recommandations, plans de remédiation et renforcement des contrôles de sécurité"
      ]
    },
    {
      icon: Wifi,
      title: "Réseaux & Wi-Fi",
      description: "Conception, déploiement et optimisation des infrastructures réseau et Wi-Fi afin d’assurer une connectivité stable, sécurisée et adaptée aux usages, aussi bien pour les environnements professionnels que résidentiels.",
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
      ]

    },
    {
      icon: Cloud,
      title: "Cloud, messagerie & collaboration",
      description: "Mise en place de solutions cloud et collaboratives modernes pour améliorer la communication, fluidifier le travail d’équipe et permettre un accès simple et sécurisé aux outils et aux données, où que vous soyez.",
      color: "bg-red-50",
      prestations: [
        "Migration et déploiement de solutions cloud (Microsoft 365, Google Workspace)",
        "Mise en place et gestion de la messagerie professionnelle",
        "Outils collaboratifs pour le partage de documents et le travail en équipe",
        "Gestion des accès, des droits et des utilisateurs",
        "Stockage cloud sécurisé et synchronisation des données"
      ]

    },
    {
      icon: Monitor,
      title: "Équipements et solutions sur site",
      description: "Fourniture, déploiement et intégration de solutions matérielles et d’équipements sur site afin d’assurer un environnement fiable, cohérent et évolutif, en lien avec l’infrastructure existante.",
      color: "bg-red-50",
      prestations: [
        "Fourniture, installation et maintenance de postes de travail, imprimantes et périphériques",
        "Installation et configuration de serveurs, baies de brassage et équipements réseau",
        "Mise en service et intégration des équipements dans l’environnement existant",
        "Gestion et suivi du parc d’équipements",
        "Optimisation et évolution des solutions en place"
      ]
    },
    {
      icon: FolderKanban,
      title: "Projets informatiques & solutions sur mesure",
      description: "Accompagnement personnalisé pour la conception, la mise en œuvre et le suivi de projets informatiques, en tenant compte de vos contraintes, de vos objectifs et de votre environnement existant.",
      color: "bg-red-50",
      prestations: [
        "Analyse des besoins et des contraintes techniques",
        "Conseil et recommandations adaptées",
        "Pilotage et coordination des projets",
        "Mise en œuvre de solutions sur mesure"
      ]

    }
  ],
  // Action to add a service
  addService: (service) => set((state) => ({ services: [...state.services, service] })),
  // Action to remove a service
  removeService: (title) => set((state) => ({ services: state.services.filter(s => s.title !== title) }))
}));

export default useServicesStore;
