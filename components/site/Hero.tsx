"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden grain">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-8"
        >
          Est. 2018 · Barbería Premium
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.7, 0, 0.2, 1] }}
          className="font-display font-bold text-cream leading-[1.05] text-[44px] md:text-[64px] lg:text-[80px] tracking-tight"
        >
          Donde la Precisión <br />
          <span className="italic font-normal text-gold">Encuentra el Estilo</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl text-cream/70 text-base md:text-lg"
        >
          Cortes expertos, líneas limpias y un ritual que vale tu tiempo.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#booking"
            className="px-8 py-4 bg-gold text-background text-xs tracking-[0.3em] uppercase font-semibold hover:bg-cream transition-colors"
          >
            Reserva Tu Sesión
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#gallery"
            className="gold-border-btn px-8 py-4 border border-gold text-gold text-xs tracking-[0.3em] uppercase font-semibold transition-colors"
          >
            Explora Nuestro Trabajo
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold/70 hover:text-gold"
        aria-label="Scroll"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
