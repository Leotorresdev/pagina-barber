"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

interface RelojVariante {
  id: string;
  color: string;
  precio: number;
  stock: number;
  foto_url: string;
}

interface Reloj {
  id: string;
  modelo: string;
  relojes_variantes: RelojVariante[];
}

// Mapa de colores comunes a códigos HEX para los puntos de color
const colorMap: Record<string, string> = {
  "negro": "#000000",
  "blanco": "#FFFFFF",
  "plata": "#C0C0C0",
  "plateado": "#C0C0C0",
  "oro": "#FFD700",
  "dorado": "#FFD700",
  "rosa": "#FFC0CB",
  "azul": "#0000FF",
  "rojo": "#FF0000",
  "verde": "#008000",
  "marron": "#8B4513",
  "marrón": "#8B4513",
  "gris": "#808080",
};

// Función para obtener el color de forma más flexible (ignorando espacios o combinaciones)
const getColorHex = (colorName: string) => {
  const normalized = colorName.toLowerCase().trim();
  
  // Si tiene formato "Dorado/Verde", el color distintivo suele ser el segundo (Verde)
  const mainPart = normalized.includes('/') ? normalized.split('/').pop()?.trim() : normalized;
  const target = mainPart || normalized;

  if (colorMap[target]) return colorMap[target];
  
  // Búsqueda parcial en la parte principal (ej. "fondo blanco" -> "blanco")
  for (const [key, value] of Object.entries(colorMap)) {
    if (target.includes(key)) return value;
  }

  // Fallback a buscar en todo el string por si acaso
  for (const [key, value] of Object.entries(colorMap)) {
    if (normalized.includes(key)) return value;
  }
  
  return '#444'; // Color gris por defecto
};

export function Catalog() {
  const [relojes, setRelojes] = useState<Reloj[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Estado para las variantes activas por cada reloj
  const [activeVariants, setActiveVariants] = useState<Record<string, string>>({});
  
  // Estado para paginación / mostrar más
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function fetchRelojes() {
      try {
        const { data, error } = await supabase
          .from('relojes')
          .select(`
            id, 
            modelo, 
            relojes_variantes (
              id,
              color,
              precio,
              stock,
              foto_url
            )
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setRelojes(data as Reloj[]);
      } catch (error: any) {
        console.error("Error fetching relojes:", error.message || error);
      } finally {
        setLoading(false);
      }
    }

    fetchRelojes();
  }, []);

  // Lógica para limitar cuántos mostrar
  const initialLimit = isMobile ? 4 : 8;
  const displayedRelojes = showAll ? relojes : relojes.slice(0, initialLimit);
  const hasMore = relojes.length > initialLimit;

  return (
    <section id="catalog" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-widest uppercase mb-4">
            Catálogo de Relojes
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="text-[#E0C398] text-xl animate-pulse">Cargando catálogo...</span>
          </div>
        ) : relojes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">No hay relojes disponibles en este momento.</p>
          </div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            >
              <AnimatePresence>
                {displayedRelojes.map((reloj, i) => {
                  const variantes = reloj.relojes_variantes || [];
                  const activeVariantId = activeVariants[reloj.id];
                  const activeVariant = activeVariantId 
                    ? variantes.find(v => v.id === activeVariantId) || variantes[0]
                    : variantes[0];

                  if (!activeVariant) return null;

                  return (
                    <motion.div
                      layout
                      key={reloj.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                      className="group flex flex-col items-center"
                    >
                      <a
                        href={`https://wa.me/584248442974?text=${encodeURIComponent(`Hola Jimmy, estoy muy interesado en adquirir el reloj modelo ${reloj.modelo} (Color: ${activeVariant.color}). ¿Me podrías brindar más información, por favor?`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full aspect-[4/5] bg-black/20 relative overflow-hidden mb-6 rounded shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_40px_rgba(224,195,152,0.15)] transition-all duration-500 cursor-pointer"
                      >
                        {activeVariant.foto_url ? (
                          <img 
                            key={activeVariant.foto_url}
                            src={activeVariant.foto_url} 
                            alt={`${reloj.modelo} - ${activeVariant.color}`}
                            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/20">
                            Sin imagen
                          </div>
                        )}
                        {activeVariant.stock === 0 && (
                          <div className="absolute top-4 right-4 bg-black/90 text-[#E0C398] text-[10px] px-3 py-1.5 backdrop-blur-md tracking-[0.2em] uppercase font-semibold border border-[#E0C398]/30 z-20">
                            AGOTADO
                          </div>
                        )}
                        
                        {/* Overlay and Button on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-center pb-8 z-10">
                          <span
                            className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out px-8 py-3 bg-[#E0C398] text-[#111] text-xs tracking-[0.2em] uppercase font-bold hover:bg-white"
                          >
                            CONSULTAR
                          </span>
                        </div>
                      </a>
                      
                      <div className="text-center flex-1 flex flex-col items-center w-full px-2">
                        <h3 className="font-sans text-sm md:text-base text-white tracking-[0.15em] uppercase font-light mb-2 truncate w-full" title={reloj.modelo}>
                          {reloj.modelo}
                        </h3>
                        <p className="text-[#E0C398] text-sm md:text-base font-semibold tracking-widest mb-4">
                          ${activeVariant.precio}
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-2 mt-auto w-full px-1">
                          {(() => {
                            const uniqueVariantes = [];
                            const seenColors = new Set();
                            for (const v of variantes) {
                              const hex = getColorHex(v.color);
                              if (!seenColors.has(hex)) {
                                seenColors.add(hex);
                                uniqueVariantes.push(v);
                              }
                            }
                            
                            return uniqueVariantes.map(v => {
                              const isSelected = activeVariant.id === v.id;
                              const colorHex = getColorHex(v.color);
                              
                              return (
                                <button
                                  key={v.id}
                                  onClick={() => setActiveVariants(prev => ({ ...prev, [reloj.id]: v.id }))}
                                  className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border transition-all duration-300 flex-shrink-0 ${
                                    isSelected 
                                      ? 'border-white scale-125 ring-2 ring-white/20 ring-offset-2 ring-offset-[#0A0A0A]' 
                                      : 'border-white/30 hover:scale-110 hover:border-white/80'
                                  }`}
                                  style={{ backgroundColor: colorHex }}
                                  title={v.color}
                                  aria-label={`Seleccionar color ${v.color}`}
                                />
                              );
                            });
                          })()}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
            
            {hasMore && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase font-semibold transition-colors hover:bg-white hover:text-black"
                >
                  {showAll ? "ver menos" : "ver más"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
