"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroFilmProps = {
  className?: string;
};

export function HeroFilm({ className }: HeroFilmProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.015, 1.04]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [0.28, 0.12, 0.2]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-[2.8rem] border border-white/10 bg-black shadow-[0_45px_130px_rgba(10,8,6,0.28)]">
        <motion.div
          className="relative aspect-[16/11] w-full md:aspect-[16/8.4] lg:aspect-[16/7.4]"
          style={{ y, scale }}
        >
          <video
            className="h-full w-full object-cover"
            src="/video(4).mp4"
            poster="/cover.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.56),rgba(0,0,0,0.04)_42%,rgba(0,0,0,0.16))]"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
