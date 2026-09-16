"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative w-full">
      {/* Professional Dark Section */}
      <div className="bg-[#111] pt-24 pb-20 px-6 lg:px-10 relative overflow-hidden">
        
        {/* Subtle background grain or glow if needed */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-[#E0C398]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Circles Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24">
            {[
              { src: "/corte1.jpg", label: "CORTES" },
              { src: "/corte2.jpg", label: "BARBAS" },
              { src: "/corte3.png", label: "ESTILOS" },
              { src: "/corte4.png", label: "TENDENCIA" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden group cursor-pointer shadow-2xl ring-1 ring-white/10 hover:ring-[#E0C398]/50 transition-all duration-500"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover grayscale-[30%] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity group-hover:bg-black/20">
                  <span className="text-white font-sans text-xs md:text-sm tracking-widest uppercase font-semibold">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main content: Video left, Text right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full flex justify-center lg:justify-end z-10"
            >
              <div className="relative w-full max-w-sm md:max-w-md shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden ring-1 ring-white/10 before:absolute before:-inset-2 before:border before:border-[#E0C398]/20 before:rounded-lg before:-z-10 group">
                <video 
                  src="/modelo.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left z-10"
            >
              <h2 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
                Maestría & <br />
                <span className="text-[#E0C398] italic font-normal">Tradición</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
                Ofrecemos más que un simple corte de cabello; brindamos una experiencia de cuidado personal de primer nivel. Nuestros barberos expertos combinan técnicas clásicas con las últimas tendencias para asegurar que cada detalle resalte tu estilo único. Relájate y deja tu imagen en manos de verdaderos profesionales.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 opacity-50">
                <div className="h-[1px] bg-white/30 w-12" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E0C398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                  <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                  <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                </svg>
                <div className="h-[1px] bg-white/30 w-12" />
              </div>

              <a
                href="#booking"
                className="inline-block px-10 py-4 border border-[#E0C398] text-[#E0C398] font-sans text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#E0C398] hover:text-[#111] transition-colors"
              >
                RESERVAR AHORA
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dark section: "MORE THAN A HAIRCUT..." */}
      <div className="bg-[#0A0A0A] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#E0C398] text-xs tracking-[0.2em] font-sans uppercase mb-4">SOBRE NOSOTROS</p>
          <h3 className="font-sans font-medium text-white text-2xl md:text-3xl tracking-widest uppercase mb-6 leading-relaxed">
            MÁS QUE UN ACCESORIO,<br /> ES UNA EXPERIENCIA
          </h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
            En Jimmy Larez combinamos técnicas clásicas con un estilo moderno para dar a cada cliente un look que aman. Desde cortes de precisión hasta asesoría de relojes, estamos aquí para mantenerte luciendo impecable y sintiéndote seguro de ti mismo.
          </p>
          <a href="#contact" className="inline-block text-[#E0C398] text-xs font-semibold tracking-widest uppercase border-b border-[#E0C398] pb-1 hover:text-white transition-colors">
            SABER MÁS
          </a>
        </div>
      </div>

    </section>
  );
}
