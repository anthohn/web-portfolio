import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import livraisonsLocalesImg from "@/public/livraisons-locales.png";
import P_APPRO_2Img from "@/public/P_APPRO_2.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "livraisons-locales",
    description:
      "J'ai travaillé en tant que ful-stack dev sur ce TPI. App web dotée d'un système de commande des produits auprès des agriculteurs, intégrant une API dédiée pour la gestion des livraisons.",
    tags: ["Symfony", "API Google", "PHP", "Tailwind", "MySQL"],
    imageUrl: livraisonsLocalesImg,
  },
  {
    title: "P_APPRO_2",
    description:
      "Plateforme de vente de chaussures élaborée avec Symfony, proposant une expérience utilisateur complète d'achat, un système de gestion des commandes robuste.",
    tags: ["Symfony", "DB-Main", "Tailwind", "MySQL"],
    imageUrl: P_APPRO_2Img,
  },
] as const;

export const skillsData = [
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
