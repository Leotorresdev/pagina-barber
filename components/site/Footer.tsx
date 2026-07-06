"use client";

import { Instagram, Facebook, Music2 } from "lucide-react";
import { services } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

const exploreLinks = siteConfig.nav;

export function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-cream">RËGAL</span>
            <span className="text-xs tracking-[0.4em] text-gold font-light">CUTS</span>
          </div>
          <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
            Donde la precisión se encuentra con el estilo. Una barbería construida sobre el oficio,
            el ritual y el respeto.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Explorar</p>
          <ul className="space-y-3 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/70 hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Servicios</p>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.name} className="text-cream/70">
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Conecta</p>
          <p className="text-sm text-cream/70">
            {siteConfig.contact.address}
            <br />
            {siteConfig.contact.city}
          </p>
          <p className="text-sm text-cream/70 mt-3">{siteConfig.contact.phone}</p>
          <div className="flex gap-4 mt-6">
            {[Instagram, Facebook, Music2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-cream/70 hover:border-gold hover:text-gold transition-colors"
                aria-label="Red social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/40 tracking-wider">
        <p>© {new Date().getFullYear()} RËGAL CUTS. Todos los derechos reservados.</p>
        <p className="uppercase tracking-[0.3em]">Hecho Para Caballeros</p>
      </div>
    </footer>
  );
}
