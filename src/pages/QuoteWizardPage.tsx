import { Sparkles, Phone, MessageCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';
import QuoteWizard from '../components/QuoteWizard';
import { companyInfo } from '../data/projectsData';

export default function QuoteWizardPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Anında WhatsApp Fiyatı</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          3 Adımda Özel Mobilya <br />
          <span className="text-gold-gradient">
            Fiyat ve Keşif Talebi
          </span>
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          İhtiyacınız olan mobilyayı ve proje durumunuzu seçin, Erkan Usta mekanınıza özel yaklaşık maliyet ve keşif bilgisini WhatsApp'tan iletsin.
        </p>
      </div>

      {/* Main Interactive Wizard */}
      <QuoteWizard />

      {/* Direct Contact Alternatives */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Doğrudan Telefonla Arayın</h4>
            <a href={`tel:${companyInfo.phoneRaw}`} className="text-xs text-amber-400 hover:underline">
              {companyInfo.phoneFormatted} (Erkan Usta)
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Fotoğraf Gönderip Fiyat Sorun</h4>
            <a 
              href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20istediğim%20mobilyanın%20fotoğrafını%20iletiyorum.`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-emerald-400 hover:underline"
            >
              WhatsApp'tan Görsel İletin
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
