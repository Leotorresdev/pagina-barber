export const siteConfig = {
  name: "Jimmy Larez — Web Personal",
  shortName: "Jimmy Larez",
  description:
    "Colección exclusiva de relojes y modelos. Explora mi catálogo personal.",
  url: "https://jimmylarez.example",
  established: 2024,
  contact: {
    address: "Venezuela",
    city: "",
    phone: "0424-8442974",
    email: "",
  },
  hours: [
    { d: "Lunes a Sábado", h: "9:00 AM - 7:00 PM" }
  ],
  nav: [
    { label: "Inicio", href: "#top" },
    { label: "Catálogo", href: "#catalog" },
    { label: "Nosotros", href: "#about" },
    { label: "Reservar", href: "#booking" },
    { label: "Ubicación", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
