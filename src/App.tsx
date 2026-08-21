import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-100 antialiased selection:bg-fuchsia-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
