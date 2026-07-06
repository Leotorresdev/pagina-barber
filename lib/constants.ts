import { Scissors, Sparkles, Clock, Shield, Star, Zap } from "lucide-react";

export const services = [
  { icon: Scissors, name: "Corte Clásico", desc: "El corte atemporal del caballero, ejecutado con cuidado quirúrgico.", price: "Desde $25" },
  { icon: Zap, name: "Degradado & Taper", desc: "Cortes degradados de precisión. Limpios, definidos, inconfundibles.", price: "Desde $30" },
  { icon: Sparkles, name: "Diseño de Barba", desc: "Da forma a tu sello con tijeras y pulso firme.", price: "Desde $20" },
  { icon: Star, name: "Paquete Royal", desc: "Corte, barba y toalla caliente — el ritual completo.", price: "Desde $65" },
  { icon: Shield, name: "Corte Niños", desc: "Suave, paciente y divertido para los pequeños caballeros.", price: "Desde $18" },
  { icon: Clock, name: "Tratamiento Capilar", desc: "Acondicionamiento profundo y cuidado del cuero cabelludo.", price: "Desde $35" },
];

export const barbers = ["Cualquiera disponible", "Carlos", "Miguel", "Andrés", "Luis"];

export const team = [
  { name: "Carlos Vega", title: "Barbero Maestro", specialty: "Clásico y Tijera", img: "https://i.pravatar.cc/300?img=12" },
  { name: "Miguel Soto", title: "Barbero Senior", specialty: "Degradados a Piel", img: "https://i.pravatar.cc/300?img=33" },
  { name: "Andrés Ruiz", title: "Especialista en Barba", specialty: "Diseño y Afeitado", img: "https://i.pravatar.cc/300?img=15" },
  { name: "Luis Marín", title: "Estilista", specialty: "Cortes Modernos con Textura", img: "https://i.pravatar.cc/300?img=68" },
];

export const testimonials = [
  { quote: "El corte más preciso que he tenido en una década. Esto no es una barbería — es un ritual.", name: "James Holloway", img: "https://i.pravatar.cc/100?img=51" },
  { quote: "Entré estresado, salí un hombre nuevo. Cada detalle está pensado.", name: "Marcus Chen", img: "https://i.pravatar.cc/100?img=52" },
  { quote: "Carlos entendió exactamente lo que quería antes de que terminara mi frase.", name: "Daniel Ortega", img: "https://i.pravatar.cc/100?img=53" },
  { quote: "Vale cada centavo. El ambiente por sí solo es razón para volver.", name: "Ethan Brooks", img: "https://i.pravatar.cc/100?img=54" },
  { quote: "Cruzo la ciudad por este lugar. Nada se le compara.", name: "Adrian Vale", img: "https://i.pravatar.cc/100?img=55" },
];

export const gallery = [
  { src: "https://picsum.photos/seed/barber1/600/700", cat: "Degradados" },
  { src: "https://picsum.photos/seed/barber2/600/500", cat: "Clásico" },
  { src: "https://picsum.photos/seed/barber3/600/800", cat: "Barbas" },
  { src: "https://picsum.photos/seed/barber4/600/600", cat: "Degradados" },
  { src: "https://picsum.photos/seed/barber5/600/700", cat: "Clásico" },
  { src: "https://picsum.photos/seed/barber6/600/500", cat: "Barbas" },
  { src: "https://picsum.photos/seed/barber7/600/800", cat: "Degradados" },
  { src: "https://picsum.photos/seed/barber8/600/600", cat: "Clásico" },
  { src: "https://picsum.photos/seed/barber9/600/700", cat: "Barbas" },
];

export const timeSlots = (() => {
  const slots: string[] = [];
  for (let h = 9; h <= 19; h++) {
    for (const m of [0, 30]) {
      if (h === 19 && m === 30) continue;
      slots.push(`${h.toString().padStart(2, "0")}:${m === 0 ? "00" : "30"}`);
    }
  }
  return slots;
})();
