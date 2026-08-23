import { Sparkles, Shield, Layers, Cpu, Eye, Sun, CheckCircle2, MessageCircle } from 'lucide-react';
import { materialsData, companyInfo } from '../data/projectsData';

const iconMap = {
  Sparkles,
  Shield,
  Layers,
  Cpu,
  Eye,
  Sun,
};

export default function MaterialShowcase() {
  return (
    <section id="malzemeler" className="py-24 bg-stone-950 relative border-t border-stone-800/80 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>1. Sınıf İmalat Standardı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Gözle Görünmeyen Detaylarda Bile <br className="hidden sm:block" />
            <span className="text-gold-gradient">
              Kusursuz Malzeme ve Donanım
            </span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg leading-relaxed font-light">
            Mobilyanın ömrünü ve şıklığını belirleyen en önemli unsur iç yapısı ve mekanizmalarıdır. EY Dizayn olarak kaliteden ödün vermiyoruz.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materialsData.map((item) => {
            const IconComp = iconMap[item.iconName as keyof typeof iconMap] || Sparkles;
            return (
              <div 
                key={item.id}
                className="group relative rounded-3xl bg-stone-900/80 border border-stone-800/90 hover:border-amber-500/50 p-7 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:bg-stone-900 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.highlightColor} text-stone-950 shadow-md shadow-amber-950/40 group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-400/90 tracking-wide uppercase px-2.5 py-1 rounded-lg bg-stone-950/80 border border-stone-800">
                      Standardımız
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-stone-400 mb-3.5">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="pt-4 border-t border-stone-800/80 space-y-2">
                  {item.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 border border-stone-800/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Özel bir renk veya malzeme numunesi mi görmek istiyorsunuz?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400">
              Kayseri Mobilyakent atölyemize gelerek yüzlerce lake renk kartelasını ve kapak modellerini bizzat inceleyebilirsiniz.
            </p>
          </div>
          <a
            href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20atölyenizdeki%20malzeme%20ve%20lake%20renk%20kartelalarını%20incelemek%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-6 py-3.5 rounded-2xl text-xs sm:text-sm shadow-xl transition-all hover:scale-105 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Kartela & Numune Bilgisi Al</span>
          </a>
        </div>

      </div>
    </section>
  );
}
