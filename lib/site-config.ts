export const siteConfig = {
  name: "RËGAL CUTS — Barbería Premium",
  shortName: "RËGAL CUTS",
  description:
    "Donde la precisión se encuentra con el estilo. Cortes expertos, líneas limpias y un ritual que vale tu tiempo. Reserva tu sesión en RËGAL CUTS.",
  url: "https://regalcuts.example",
  established: 2018,
  contact: {
    address: "218 Mercer Street",
    city: "New York, NY 10012",
    phone: "+1 (212) 555-0184",
    email: "hola@regalcuts.co",
  },
  hours: [
    { d: "Lun – Vie", h: "9:00 AM – 8:00 PM" },
    { d: "Sábado", h: "8:00 AM – 9:00 PM" },
    { d: "Domingo", h: "10:00 AM – 6:00 PM" },
  ],
  nav: [
    { label: "Servicios", href: "#services" },
    { label: "Galería", href: "#gallery" },
    { label: "Nosotros", href: "#about" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Contacto", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
