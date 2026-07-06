"use client";

import { motion } from "framer-motion";
import { Target, Shield, RefreshCw } from "lucide-react";
import { team } from "@/lib/constants";

const pillars = [
  { icon: Target, name: "Precisión", desc: "Cada línea, cada ángulo, deliberado." },
  { icon: Shield, name: "Respeto", desc: "Tu tiempo, tu gusto, tu silla." },
  { icon: RefreshCw, name: "Consistencia", desc: "El mismo estándar. Cada visita." },
];

export function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop"
              alt="La barbería"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-gold/30 m-4 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">Nuestra Filosofía</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
              Más Que Un Corte. <br />
              <span className="italic text-gold">Es Un Ritual.</span>
            </h2>
            <p className="mt-8 text-cream/70 leading-relaxed">
              Durante casi una década, hemos construido nuestro oficio en torno a una idea: un gran
              corte es el detalle más pequeño que lo cambia todo. Cada visita a RËGAL es un ritual
              practicado — silencioso, preciso y enteramente tuyo. No nos apuramos. No hacemos
              concesiones.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {pillars.map((p) => (
                <div key={p.name}>
                  <p.icon className="text-gold mb-3" size={24} strokeWidth={1.4} />
                  <h4 className="font-display text-lg text-cream">{p.name}</h4>
                  <p className="text-xs text-cream/60 mt-1 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-28">
          <p className="eyebrow text-center mb-4">Las Manos Detrás del Oficio</p>
          <h3 className="font-display text-3xl md:text-4xl text-cream text-center mb-16">Conoce al Equipo</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="group text-center"
              >
                <div className="aspect-square overflow-hidden ring-1 ring-border group-hover:ring-2 group-hover:ring-gold transition-all">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="font-display text-lg text-cream mt-4">{m.name}</h4>
                <p className="text-xs text-gold tracking-[0.2em] uppercase mt-1">{m.title}</p>
                <p className="text-xs text-cream/50 mt-1">{m.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
