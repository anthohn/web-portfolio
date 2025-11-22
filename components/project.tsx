"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-8 sm:mb-16 last:mb-0 w-full max-w-[50rem] mx-auto"
    >
      <Link href={link} target="_blank" className="block h-full">
        <article className="bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 shadow-lg hover:shadow-xl flex flex-col sm:flex-row h-full">

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 sm:h-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-6">
                {description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.05] dark:bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-white/80 rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full sm:w-[45%] h-64 sm:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src={imageUrl}
              alt={`Project ${title}`}
              quality={95}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

        </article>
      </Link>
    </motion.div>
  );
}