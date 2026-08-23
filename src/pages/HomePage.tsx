import Hero from '../components/Hero';
import ProjectSlider from '../components/ProjectSlider';
import Services from '../components/Services';
import MaterialShowcase from '../components/MaterialShowcase';
import QuoteWizard from '../components/QuoteWizard';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      {/* 1. Split Hero Giriş */}
      <Hero />

      {/* 2. Otomatik Animasyonlu Proje Slaytı */}
      <ProjectSlider />
      
      {/* 3. Hizmetlerimiz Özeti */}
      <Services />

      {/* 4. 1. Sınıf Malzeme Kartelası */}
      <MaterialShowcase />

      {/* 5. 3 Adımlı WhatsApp Teklif Sihirbazı */}
      <QuoteWizard />

      {/* 6. Hakkımızda & Erkan Usta */}
      <About />

      {/* 7. Müşteri Yorumları */}
      <Testimonials />

      {/* 8. Sıkça Sorulan Sorular */}
      <FAQ />

      {/* 9. İletişim & Harita */}
      <Contact />
    </div>
  );
}
