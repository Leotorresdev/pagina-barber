"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="eyebrow mb-4">Lo Que Ofrecemos</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Servicios con Oficio, <span className="italic text-gold">Hechos Para Ti</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative bg-background p-10 transition-all duration-500 hover:bg-surface"
              >
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-colors pointer-events-none" />
                <Icon className="text-gold mb-6" size={32} strokeWidth={1.4} />
                <h3 className="font-display text-2xl text-cream mb-3">{s.name}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-6">{s.desc}</p>
                <p className="text-gold text-xs tracking-[0.25em] uppercase">{s.price}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
