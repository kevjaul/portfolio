const fr = {
  sections: {
    home: "Accueil",
    experience: "Expérience",
    projects: "Projets",
    contact: "Contact",
  },

  footer: {
    cv: "CV",
    contact: "Contactez-moi !",
    scrollCta: "Défile et explore",
  },

  hero: {
    hello: "Salut, je suis",
    collaborator: "votre futur collaborateur",
    title: "<0>Développeur Fullstack</0> Junior",
    presentation: `
    Passionné par la conception d'applications web modernes. 
    Je me spécialise en <0>Java/SpringBoot, React et DevOps</0> pour 
    delivrer des applications maintenables.
    `,
    aboutme: {
      title: "À propos de moi",
      content: `
      J'aime comprendre comment les systèmes logiciels fonctionnent
      au delà de la programmation. De la conception d'<0>APIs REST</0> à
      l'implémentation de la logique back-end et de l'infrastucture cloud,
      j'aime construire des applications complètes et maintenables. Je suis
      <0> curieux et aime apprendre de nouvelles technologies</0> afin de
      mieux comprendre comment les systèmes logiciels modernes fonctionnent dans leur ensemble.
      `,
      cta1: "Contactez moi",
      cta2: "Télécharger CV",
    },
    mainFacts: {
      experience: {
        title: "6 mois",
        subtitle: "d'expérience en tant que développeur Fullstack",
        content: "Php - Javascript - Cypress - MySQL - Gestion d'APIs",
      },
      project: {
        title: "1 Projet Personnel",
        content:
          "Spring Boot - PostgreSQL - JUnit - JPA/Hibernate - AWS - Pipeline CI/CD",
        cta: "Allez voir ça !",
      },
      formation: {
        title: "Formations Ingénieur/ Master",
        subtitle: "en Informatique et Cybersécurité",
        content: `
        Solides connaissances académique combinant les principes de l'ingénierie logiciel
        avec la cybersécurité, me permettant de construire des applications
        fiables et sécurisées.
        `,
      },
    },
  },

  experience: {
    wip: "En cours de développement",
  },

  projects: {
    featuredProject: {
      title: "Projet Principal",
      cardTitle: "API de gestion de crédit d'utilisation",
      cta: "Testez par vous-même",
      projectDescription: `
      Ce projet est une API backend développée en Spring Boot qui se concentre 
      sur la gestion sécurisée de crédits d'utilisation d'une application.
      Elle comporte une authentification par clé API, une gestion structurée des requêtes, 
      ainsi qu'une limite d'utilisation par utilisateur. Construit avec une superposition de couches
      architecturales, ce projet a été pensé pour être déployable en production et intègre une pipeline CI/CD complète.
      `,
    },
    otherProjects: {
      title: "Autres Projets",
      firstCard: {
        title: "Amélioration d'un CRM legacy (Stage)",
        description: `Pendant ce stage, j'ai contribué à l'évolution d'une plateforme CRM legacy en implémentant de <0>nouveaux services backend</0>, en integrant des APIs tiers, <0>en améliorant la pipeline CI/CD</0> et en <0> réduisant la dette technique</0>. L'une de mes contributions majeures étant la conception et l'implémentation d'un <0>système d'accès securisé par accessToken</0> qui est venu s'integrer dans l'architecture existante.
        `,
      },
      secondCard: {
        title: "CI/CD & plateforme pour le monitoring",
        description: `Projet fortement orienté DevOps, centré sur l'<0>automatisation de la pipeline CI/CD</0>, l'orchestration Kubernetes et le monitoring. La pipeline permettant le <0>déploiement automatique d'applications Dockerisées vers un cluster Kubernetes</0>. Dans le même temps, des dashboards Grafana <0>suivent de multiple KPIs clés des applications déployées</0>, offrant une vue d'ensemble continue sur l'état du système et la productivité de l'équipe sur le projet.`,
      },
      thirdCard: {
        title: "Coffre-fort numérique",
        description: `Coffre-fort numérique construit entierement en Python, comportant une <0>infrastructure de clé publique (PKI)</0>, une gestion des certificats, une authentification mutuelle par <0>protocole ZKP (Zero Knowledge Proof)</0>, et un chiffrement de bout en bout pour le <0>stockage de fichiers chiffrés</0>.
        `,
      },
    },
  },

  contact: {
    quickInfos: {
      phoneNumber: "N° Téléphone",
      researchLocation: "Secteur",
      locations: "Nantes et périphéries, Cholet, Saint-Nazaire",
    },
    contactForm: {
      title: "Travaillons ensemble !",
      subtitle:
        "Mon profil vous interresse ou vous voulez discuter d'une opportunité ? Je serais ravie d'échanger avec vous et étudier ensemble comment je peux contribuer à votre equipe.",
      placeholderName: "Nom / Prénom",
      placeholderEmail: "Email",
      placeholderPhone: "N° Téléphone (optionnel)",
      placeholderMessage: "Votre message",
      cta: "Envoyer",
      ctaWait: "En cours d'envoi ...",
      successMessage: "Message envoyé avec succès",
      successComplement:
        "Merci à vous, je reviens vers vous aussi vite que possible.",
    },
  },

  mainFooter: {
    title: "Développeur Fullstack • React / Spring",
    links: "Me retrouver",
    copyright: "Construit avec React, Tailwind & Resend",
  },

  card: {
    accordeonSchrink: "Voir moins",
    accordeonExpand: "Lire plus",
  },
};

export default fr;
