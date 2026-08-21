import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/projectsData';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20özel%20mobilya%20imalatı%20için%20fiyat%20öğrenmek%20istiyorum.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-950/80 hover:scale-110 transition-all duration-300 group border-2 border-white/20"
      aria-label="WhatsApp'tan Erkan Usta'ya Ulaşın"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-16 px-3.5 py-2 bg-stone-900/95 text-white text-xs font-bold rounded-xl shadow-xl border border-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap backdrop-blur-md flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Erkan Usta'dan Fiyat Al</span>
      </span>

      {/* Ripple ring animation */}
      <span className="absolute -inset-1 rounded-full border border-emerald-400/50 animate-ping pointer-events-none opacity-40" />
    </a>
  );
}
