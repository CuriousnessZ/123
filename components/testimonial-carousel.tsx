"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

import type { Locale } from "@/lib/i18n";
import { createTranslator } from "@/lib/i18n";
import type { TestimonialItem } from "@/lib/site-data";

type TestimonialCarouselProps = {
  items: TestimonialItem[];
  locale: Locale;
};

export function TestimonialCarousel({
  items,
  locale,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const t = createTranslator(locale);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const item = items[index];

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_30px_80px_rgba(20,16,12,0.07)] backdrop-blur md:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          <Quote className="h-3.5 w-3.5" />
          {t("Client Feedback")}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIndex((current) => (current - 1 + items.length) % items.length)}
            className="rounded-full border border-stone-200 p-2 text-stone-700 transition hover:bg-stone-100"
            aria-label={t("Previous testimonial")}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((current) => (current + 1) % items.length)}
            className="rounded-full border border-stone-200 p-2 text-stone-700 transition hover:bg-stone-100"
            aria-label={t("Next testimonial")}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.company}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="max-w-2xl text-2xl leading-10 text-stone-900 md:text-3xl">
              "{item.quote}"
            </p>
          </div>
          <div className="flex flex-col justify-end rounded-[1.75rem] bg-stone-900 p-6 text-white">
            <p className="text-lg font-semibold">{item.company}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-stone-300">
              {item.region}
            </p>
            <div className="mt-8 flex gap-2">
              {items.map((entry, dotIndex) => (
                <button
                  key={entry.company}
                  type="button"
                  aria-label={`${t("Go to testimonial")} ${dotIndex + 1}`}
                  onClick={() => setIndex(dotIndex)}
                  className={`h-2 rounded-full transition ${
                    dotIndex === index ? "w-10 bg-white" : "w-2 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
