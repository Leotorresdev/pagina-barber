import { Scissors, Sparkles, Clock, Shield, Star, Zap } from "lucide-react";

export const services = [
  { icon: Scissors, name: "Corte Clásico", desc: "Corte tradicional a tijera o máquina con acabado impecable.", price: "$10" },
  { icon: Sparkles, name: "Corte Fade / Degradado", desc: "Degradado perfecto (Skin fade, Mid fade, Low fade).", price: "$12" },
  { icon: Shield, name: "Arreglo de Barba", desc: "Perfilado, rebajado y tratamiento para barba.", price: "$8" },
  { icon: Star, name: "Corte VIP + Barba", desc: "Servicio premium completo que incluye corte y barba.", price: "$18" },
  { icon: Zap, name: "Asesoría de Relojes", desc: "Consultoría para elegir tu reloj ideal.", price: "Gratis" },
];

export const barbers = ["Cualquiera disponible", "Jimmy Larez", "Asesor de Ventas"];

export const team = [
  { name: "Jimmy Larez", title: "Fundador & Coleccionista", specialty: "Relojes de Alta Gama", img: "/logo.jpg" },
  { name: "Equipo de Ventas", title: "Asesores", specialty: "Atención al Cliente", img: "https://i.pravatar.cc/300?img=33" },
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
