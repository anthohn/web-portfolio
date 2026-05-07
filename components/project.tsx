"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & { priority?: boolean };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  priority,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative mb-8 sm:mb-16 last:mb-0 w-full max-w-[60rem] mx-auto"
    >
      <Link href={link} target="_blank" className="block">
        <article className="bg-white/70 backdrop-blur-[10px] border border-black/5 rounded-2xl overflow-hidden hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl sm:group-hover:scale-[1.02] flex flex-col-reverse sm:flex-row h-auto">

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 sm:max-w-[50%]">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.05] px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-700 rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full sm:w-[50%] aspect-video overflow-hidden border-b sm:border-b-0 sm:border-l border-black/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src={imageUrl}
              alt={`Project ${title}`}
              quality={95}
              priority={priority}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

        </article>
      </Link>
    </motion.div>
  );
}