"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsEnvelope, BsLinkedin, BsCopy, BsCheck2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [copied, setCopied] = useState(false);
  const email = "contact@anthony-it.ch";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Adresse e-mail copiée !");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center relative"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-gray-700 -mt-6 max-w-lg mx-auto">
        Un projet, une question ou une opportunité ? N&apos;hésitez pas à me contacter directement !
      </p>

      <div className="mt-8 bg-white borderBlack rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <a
            href={`mailto:${email}`}
            className="group flex-1 w-full sm:w-auto bg-gray-900 text-white px-6 py-3.5 flex items-center justify-center gap-2.5 rounded-xl outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition font-medium"
          >
            <BsEnvelope className="text-lg opacity-80 group-hover:scale-110 transition" />
            <span>{email}</span>
          </a>

          <button
            onClick={handleCopy}
            type="button"
            className="w-full sm:w-auto bg-gray-100 text-gray-700 px-5 py-3.5 flex items-center justify-center gap-2 rounded-xl borderBlack hover:bg-gray-200 active:scale-95 transition font-medium cursor-pointer"
            title="Copier l'adresse e-mail"
          >
            {copied ? (
              <>
                <BsCheck2 className="text-lg text-green-600" />
                <span className="text-green-700 text-sm">Copié !</span>
              </>
            ) : (
              <>
                <BsCopy className="text-base text-gray-600" />
                <span className="text-sm">Copier</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
            Réseaux
          </span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="https://www.linkedin.com/in/anthony-h%C3%B6hn/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-5 py-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-xl borderBlack hover:scale-105 active:scale-95 transition font-medium shadow-xs"
          >
            <BsLinkedin className="text-blue-600 text-lg" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/anthohn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-5 py-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-xl borderBlack hover:scale-105 active:scale-95 transition font-medium shadow-xs"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}