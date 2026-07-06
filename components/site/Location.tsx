"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Location() {
  const hours = siteConfig.hours;
  const { address, city, phone, email } = siteConfig.contact;

  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Encuéntranos</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Visita el <span className="italic text-gold">Atelier</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-10 lg:p-14"
          >
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-gold flex-shrink-0 mt-1" size={20} strokeWidth={1.5} />
              <div>
                <p className="eyebrow text-cream/50 mb-1">Ubicación</p>
                <p className="text-cream">{address}</p>
                <p className="text-cream/60 text-sm">{city}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-10">
              <Phone className="text-gold flex-shrink-0 mt-1" size={20} strokeWidth={1.5} />
              <div>
                <p className="eyebrow text-cream/50 mb-1">Contacto</p>
                <p className="text-cream">{phone}</p>
                <p className="text-cream/60 text-sm">{email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold flex-shrink-0 mt-1" size={20} strokeWidth={1.5} />
              <div className="flex-1">
                <p className="eyebrow text-cream/50 mb-3">Horario</p>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li key={h.d} className="flex justify-between text-sm border-b border-border pb-2">
                      <span className="text-cream/80">{h.d}</span>
                      <span className="text-cream">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.a
              whileHover={{ x: 4 }}
              href="https://maps.google.com/?q=barbershop+new+york"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-gold text-xs tracking-[0.3em] uppercase border-b border-gold pb-1"
            >
              Cómo Llegar <ArrowRight size={14} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-h-[420px] overflow-hidden"
          >
            <iframe
              title="Mapa"
              src="https://maps.google.com/maps?q=barbershop+new+york&output=embed"
              className="w-full h-full min-h-[420px] grayscale contrast-125"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
