import { MapPin, Phone, MessageCircle, Instagram, Clock, Building } from 'lucide-react';
import Contact from '../components/Contact';
import { companyInfo } from '../data/projectsData';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>Mobilyakent / Kocasinan</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          İletişim & <br />
          <span className="text-gold-gradient">
            Atölye Keşif Randevusu
          </span>
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Erkan Usta ile doğrudan iletişime geçin, projenizin ölçülerini ve fotoğraflarını ileterek anında teklif alın veya atölyemizi ziyaret edin.
        </p>
      </div>

      {/* Main Contact Section */}
      <Contact />

    </div>
  );
}
