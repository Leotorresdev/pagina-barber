import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Catalog } from "@/components/site/Catalog";
import { About } from "@/components/site/About";
import { Booking } from "@/components/site/Booking";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
}
