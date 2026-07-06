"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import { gallery } from "@/lib/constants";

const cats = ["Todo", "Degradados", "Barbas", "Clásico"];

export function Gallery() {
  const [filter, setFilter] = useState("Todo");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = filter === "Todo" ? gallery : gallery.filter((g) => g.cat === filter);

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">El Portafolio</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            El Trabajo <span className="italic text-gold">Habla Por Sí Mismo</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 text-xs tracking-[0.25em] uppercase border transition-all ${
                filter === c
                  ? "border-gold bg-gold text-background"
                  : "border-border text-cream/60 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="columns-2 md:columns-3 gap-4 [&>*]:mb-4"
        >
          <AnimatePresence>
            {items.map((img, i) => (
              <motion.button
                layout
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(img.src)}
                className="group relative block w-full overflow-hidden"
              >
                <img src={img.src} alt={img.cat} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cream flex items-center gap-2 text-xs tracking-[0.25em] uppercase">
                    <Eye size={16} /> Ver
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-cream hover:text-gold"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
