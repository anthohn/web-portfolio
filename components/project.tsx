"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

type ProjectProps = (typeof projectsData)[number] & { priority?: boolean };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  priority,
  rebrand,
}: ProjectProps & { rebrand?: { before: any; after: any } }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const moved = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!rebrand || !containerRef.current || !isDraggingRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX;
    
    if (Math.abs(x - startX.current) > 5) {
      moved.current = true;
    }

    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 1), 99));
  }, [rebrand]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onEnd = () => {
      setIsDragging(false);
      isDraggingRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchend", onEnd);
    };
  }, [handleMove]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if ("button" in e && e.button !== 0) return;
    startX.current = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    moved.current = false;
    setIsDragging(true);
    isDraggingRef.current = true;
  };
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
      <Link 
        href={link} 
        target="_blank" 
        className="block"
        onDragStart={(e) => e.preventDefault()}
        onClick={(e) => {
          if (moved.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <article className="bg-white/70 backdrop-blur-[10px] border border-black/5 rounded-2xl overflow-hidden hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl sm:group-hover:scale-[1.02] flex flex-col-reverse sm:flex-row h-auto select-none">

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 sm:max-w-[50%]">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 transition-colors flex items-center gap-3">
                {title}
                {rebrand && (
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border border-amber-200">
                    Refonte
                  </span>
                )}
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
          <div 
            ref={containerRef}
            className="relative w-full sm:w-[50%] aspect-video overflow-hidden border-b sm:border-b-0 sm:border-l border-black/10 group/slider"
            onMouseDown={rebrand ? handleStart : undefined}
            onTouchStart={rebrand ? handleStart : undefined}
          >
            {rebrand ? (
              <div className="absolute inset-0 w-full h-full cursor-ew-resize select-none">
                {/* After Image (Full) */}
                <Image
                  src={rebrand.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  quality={95}
                  priority={priority}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                
                {/* Before Image (Clipped) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white/50 z-20 pointer-events-none"
                  style={{ width: `${sliderPos}%` }}
                >
                  <Image
                    src={rebrand.before}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ width: `${100 * (100 / sliderPos)}%` }}
                    quality={95}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded border border-white/20">
                    Avant
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm text-black text-[10px] uppercase tracking-widest px-2 py-1 rounded border border-black/10 z-10">
                  Après
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute inset-y-0 z-30 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-black/10 transition-transform group-hover/slider:scale-110">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-3 bg-gray-500 rounded-full" />
                      <div className="w-0.5 h-3 bg-gray-500 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute inset-y-0 w-0.5 bg-white/50 -translate-x-1/2" />
                </div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={imageUrl}
                  alt={`Project ${title}`}
                  quality={95}
                  priority={priority}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </>
            )}
          </div>

        </article>
      </Link>
    </motion.div>
  );
}