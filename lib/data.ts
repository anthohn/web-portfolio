import livraisonsLocalesImg from "@/public/livraisons-locales.png";
import P_APPRO_2Img from "@/public/P_APPRO_2.png";

import mariusOllivierImg from "@/public/marius-ollivier.png";
import djangoXCloneImg from "@/public/django-x-clone.png";
import openhubImg from "@/public/openhub.png";
import humanaServicesImg from "@/public/humana-services.png";
import garageMaisonBlancheImg from "@/public/garage-maison-blanche.png";
import swissberryImg from "@/public/swissberry.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Garage Maison-Blanche",
    description: "Site vitrine moderne pour un garage de réparation de voitures, mettant en valeur les services proposés avec des animations fluides.",
    tags: ["Next.js", "Tailwind", "React", "TypeScript", "Framer Motion"],
    imageUrl: garageMaisonBlancheImg,
    link: "https://garage-maison-blanche.ch",
  },
  {
    title: "Swissberry",
    description: "Agence de création de sites web premium spécialisée dans le développement sur mesure, l'optimisation SEO et la maintenance continue, offrant des solutions performantes et esthétiques.",
    tags: ["Next.js", "Tailwind", "React", "TypeScript", "Framer Motion"],
    imageUrl: swissberryImg,
    link: "https://swiss-berry.vercel.app/",
  },
  {
    title: "Humana Services",
    description:
      "Site vitrine moderne pour une entreprise de services à domicile, axé sur l'accessibilité et une présentation claire des prestations.",
    tags: ["Next.js", "Tailwind", "React", "TypeScript"],
    imageUrl: humanaServicesImg,
    link: "https://humana-services.ch",
  },
  {
    title: "Marius Ollivier",
    description:
      "Portfolio minimaliste et élégant pour un photographe suisse, mettant en valeur ses œuvres avec des animations fluides.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "React"],
    imageUrl: mariusOllivierImg,
    link: "https://marius-ollivier.ch",
  },
  {
    title: "OpenHub",
    description:
      "Plateforme collaborative dédiée aux outils libres, permettant aux utilisateurs de découvrir et partager des solutions open source.",
    tags: ["Laravel", "React", "Tailwind", "Full Stack", "Open Source", "Community"],
    imageUrl: openhubImg,
    link: "https://www.esig-sandbox.ch/2526_grep/t25_3_v2/",
  },
  {
    title: "Django X Clone",
    description:
      "Un clone fonctionnel de Twitter (X) développé avec Django, incluant les fonctionnalités sociales de base.",
    tags: ["Django", "Python", "HTML", "CSS", "SQLite"],
    imageUrl: djangoXCloneImg,
    link: "https://github.com/anthohn/django-x-clone",
  },
  {
    title: "livraisons-locales",
    description:
      "J'ai travaillé en tant que ful-stack dev sur ce TPI. App web dotée d'un système de commande des produits auprès des agriculteurs, intégrant une API dédiée pour la gestion des livraisons.",
    tags: ["Symfony", "API Google", "PHP", "Tailwind", "MySQL"],
    imageUrl: livraisonsLocalesImg,
    link: "https://github.com/anthohn/tpi-livraisons-locales",
  },
  {
    title: "P_APPRO_2",
    description:
      "Plateforme de vente de chaussures élaborée avec Symfony, proposant une expérience utilisateur complète d'achat, un système de gestion des commandes robuste.",
    tags: ["Symfony", "DB-Main", "Tailwind", "MySQL"],
    imageUrl: P_APPRO_2Img,
    link: "https://github.com/anthohn/P_APPRO_2",
  },
] as const;

export const skillsData = [
  "Laravel",
  "Next.js",
  "Symfony",
  "Django",
  "React",
  "Java",
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "DB-Main",
  "Oracle",
  "MySQL",
  "PhpMyAdmin",
  "Git",
] as const;
