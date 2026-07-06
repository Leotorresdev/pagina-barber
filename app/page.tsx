import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Booking } from "@/components/site/Booking";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Booking />
      <Gallery />
      <About />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
