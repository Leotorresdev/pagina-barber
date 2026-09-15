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
    phone: "",
    email: "contacto@jimmylarez.com",
  },
  hours: [
    { d: "Lunes a Domingo", h: "24/7 Online" }
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
