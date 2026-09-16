"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] lg:h-screen w-full overflow-hidden bg-[#111] flex items-center pt-20">
      
      {/* Background Image / Model (Right aligned) */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/95 to-transparent z-10 w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/90 via-[#111]/20 to-transparent z-10 h-[25vh]" />
        <img 
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1920&auto=format&fit=crop" 
          alt="Model" 
          className="absolute inset-y-0 right-0 w-full lg:w-[50%] h-full object-cover object-center lg:object-right opacity-70 lg:opacity-100"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center h-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-[110px] text-[#E0C398] font-normal leading-none mb-4 md:-ml-4"
          >
            Bienvenido!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xs sm:text-sm md:text-base font-sans tracking-[0.2em] uppercase font-semibold mb-6"
          >
            UN GRAN ESTILO. UN MEJOR TÚ.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-sm md:text-base font-sans leading-relaxed mb-10 max-w-md"
          >
            Descubre el punto de encuentro perfecto entre el cuidado personal y la elegancia. Combinamos el arte de la barbería clásica con una exclusiva selección de relojes de lujo. Relájate en la silla, define tu estilo y encuentra la pieza perfecta que marque tu tiempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <a
              href="#catalog"
              className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-3 bg-white text-black font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-white border border-white transition-colors text-center"
            >
              VER CATÁLOGO
            </a>
            <a
              href="#booking"
              className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-3 border border-white/50 text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors text-center"
            >
              RESERVAR
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
