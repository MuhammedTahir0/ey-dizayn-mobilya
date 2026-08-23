import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, ShieldCheck, PhoneCall, Star, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import MaterialShowcase from '../components/MaterialShowcase';
import QuoteWizard from '../components/QuoteWizard';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      {/* Services Section with Direct Link */}
      <Services />

      {/* Featured Projects Gallery */}
      <Gallery />

      {/* 1st Class Material Showcase */}
      <MaterialShowcase />

      {/* 3-Step Interactive Quote Wizard */}
      <QuoteWizard />

      {/* About & Craftsmanship Story */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <FAQ />

      {/* Contact & Map Section */}
      <Contact />
    </div>
  );
}
