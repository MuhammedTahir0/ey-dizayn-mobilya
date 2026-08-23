import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/projectsData';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 border-t border-stone-800/90 backdrop-blur-xl px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700/80 font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-md"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Erkan Usta'yı Ara</span>
        </a>

        {/* WhatsApp Quote Button */}
        <a
          href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20web%20sitenizden%20ulaşıyorum.%20Özel%20mobilya%20fiyatı%20almak%20istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-lg shadow-emerald-950/80"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp Fiyat Al</span>
        </a>

      </div>
    </div>
  );
}
