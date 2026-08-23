import { Star, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { companyInfo } from '../data/projectsData';

export default function ReviewsFaqPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Şeffaf & Güvenilir Hizmet</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Müşteri Deneyimleri ve <br />
          <span className="text-gold-gradient">
            Sıkça Sorulan Sorular
          </span>
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
          Kayseri genelinde teslim ettiğimiz mobilyalar hakkında müşterilerimizin görüşleri ve aklınıza takılabilecek tüm imalat/keşif sorularının yanıtları.
        </p>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

    </div>
  );
}
