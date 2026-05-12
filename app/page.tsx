import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CakesSection from '@/components/CakesSection';
import PastriesSection from '@/components/PastriesSection';
import DrinksSection from '@/components/DrinksSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CakesSection />
      <PastriesSection />
      <DrinksSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
