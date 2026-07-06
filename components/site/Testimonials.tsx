"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[i];

  return (
    <section id="testimonials" className="py-28 lg:py-36 bg-surface" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow mb-4">Voces</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream mb-16">
          Lo Que Dicen los <span className="italic text-gold">Caballeros</span>
        </h2>

        <div className="relative min-h-[260px] flex items-center justify-center">
          <button onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 text-cream/40 hover:text-gold transition-colors" aria-label="Anterior">
            <ChevronLeft size={28} />
          </button>


          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-12 max-w-2xl"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="font-display italic text-2xl md:text-3xl text-cream leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-1 ring-gold/40" />
                <div className="text-left">
                  <p className="text-cream text-sm">{t.name}</p>
                  <p className="text-xs text-gold tracking-[0.2em] uppercase">Cliente Verificado</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => setI((p) => (p + 1) % testimonials.length)} className="absolute right-0 text-cream/40 hover:text-gold transition-colors" aria-label="Siguiente">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonio ${k + 1}`}
              className={`h-px transition-all ${k === i ? "w-12 bg-gold" : "w-6 bg-cream/20 hover:bg-cream/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
