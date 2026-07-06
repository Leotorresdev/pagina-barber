"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const links = siteConfig.nav;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-3">
            <img src="/icono.png" alt="Barber Monkey icon" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-cream">Barber Monkey</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wider text-cream/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="hidden lg:inline-flex gold-border-btn items-center px-6 py-2.5 border border-gold text-gold text-xs tracking-[0.25em] uppercase font-medium transition-colors"
          >
            Reservar
          </a>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="lg:hidden text-cream"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <span className="font-display text-2xl font-bold text-cream">
                RËGAL{" "}
                <span className="text-xs tracking-[0.4em] text-gold font-light ml-1">CUTS</span>
              </span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="text-cream"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-display text-4xl text-cream hover:text-gold transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-6 px-8 py-3 bg-gold text-background text-xs tracking-[0.25em] uppercase font-medium"
              >
                Reservar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
