"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("A propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>A propos</SectionHeading>
      <p className="mb-3">
      Ayant récemment obtenu mon{" "}
        <span className="font-medium">Certificat Fédéral de Capacité d&apos;informaticien d&apos;entreprise</span> en juillet 2023, 
        j&apos;ai décidé de suivre ma <span className="underline">passion</span> pour la programmation.
        Actuellement, je me prépare à intégrer une{" "}
        <span className="font-medium">école supérieure en développement d&apos;applications en 2024</span>.{" "}
        En ce moment, Je me concentre sur l&apos;apprentissage de{" "} <span className="font-medium"> React, Next.js & Django</span>
        . Je également familier avec le framework <span className="underline">Symfony</span> avec lequel j&apos;ai réalisé mon Travail pratique individuel 
        <span className="font-medium">(TPI)</span> où j&apos;ai obtenu la note de <span className="font-medium">5,6</span>
        . 
      </p>

      <p>
        Mon objectif est d&apos;approfondir mes <span className="font-medium">compétences en développement</span> et de 
        contribuer à des projets innovants.
        {" "}
        je suis <span className="font-medium underline">motivé</span> et <span className="font-medium underline">créatif</span>
         , prêt à relever de nouveaux défis dans le monde du développement d&apos;applications.
      </p>
    </motion.section>
  );
}