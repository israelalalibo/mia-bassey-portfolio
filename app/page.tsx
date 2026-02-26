import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeTicker from '@/components/MarqueeTicker';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
