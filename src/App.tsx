import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import MaterialShowcase from './components/MaterialShowcase';
import QuoteWizard from './components/QuoteWizard';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-100 antialiased selection:bg-amber-400 selection:text-stone-950 pb-16 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <MaterialShowcase />
        <QuoteWizard />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
}
