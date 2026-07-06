"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2400, suffix: "+", label: "Clientes Atendidos" },
  { value: 8, suffix: "", label: "Barberos Expertos" },
  { value: 6, suffix: "", label: "Años de Excelencia" },
  { value: 4.9, suffix: "★", label: "Calificación Promedio", decimals: 1 },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-gold font-bold">
      {n.toFixed(decimals)}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex flex-col items-center text-center px-4 ${i !== 0 ? "lg:border-l lg:border-gold/20" : ""}`}
          >
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            <span className="mt-3 eyebrow text-cream/60">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
