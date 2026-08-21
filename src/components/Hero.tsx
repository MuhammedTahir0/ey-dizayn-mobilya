import { ArrowRight, Sparkles, MessageCircle, PhoneCall, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { companyInfo } from '../data/projectsData';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToProjects = () => {
    document.getElementById('projeler')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="anasayfa" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background with real workshop & project showcase */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url("/images/projects/kitchen-led-1.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-900/25 via-transparent to-stone-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Location & Brand Pill */}
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-stone-900/90 border border-fuchsia-500/40 text-stone-200 text-xs sm:text-sm font-medium mb-6 shadow-xl backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 font-semibold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Kayseri Mobilyakent
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-fuchsia-300 font-medium">Erkan Akpınar Özel İmalat</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.15] max-w-5xl mx-auto">
          Mekanınıza Özel <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-yellow-400 bg-clip-text text-transparent">Kusursuz Tasarım</span> ve İnce İşçilik
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Fabrikasyon ve standart kalıplara bağlı kalmayın. Kayseri Mobilyakent'teki atölyemizde; <strong className="text-white font-medium">lüks mutfak dolapları</strong>, <strong className="text-white font-medium">akustik lambiri yatak odaları</strong>, <strong className="text-white font-medium">giyinme odaları</strong> ve <strong className="text-white font-medium">özel dresuarları</strong> milimetrik ölçüyle üretiyoruz.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12">
          <a 
            href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20mobilya%20yaptırmak%20istiyorum,%20ölçü%20ve%20fiyat%20alabilir%20miyim?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-emerald-950/50 hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>WhatsApp ile Fiyat Al</span>
          </a>

          <button 
            onClick={scrollToProjects}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-stone-900/80 hover:bg-stone-800 text-stone-100 rounded-2xl font-semibold transition-all duration-300 border border-stone-700/80 backdrop-blur-md shadow-lg cursor-pointer hover:border-yellow-400/50"
          >
            <span>Yapılan İşleri İnceleyin</span>
            <ArrowRight className="w-4 h-4 text-yellow-400" />
          </button>
        </div>

        {/* Highlight trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-stone-800/80 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400">İmalat</p>
              <p className="text-sm font-bold text-white">%100 Özel Ölçü</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400">Malzeme</p>
              <p className="text-sm font-bold text-white">1. Sınıf Kalite</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400">Montaj</p>
              <p className="text-sm font-bold text-white">Anahtar Teslim</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400">Doğrudan İletişim</p>
              <p className="text-sm font-bold text-white">Usta ile Birebir</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
