import { Link } from 'react-router-dom';
import { ChefHat, BedDouble, Sparkles, Tv, LayoutGrid, Layers, CheckCircle2, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { servicesData, companyInfo } from '../data/projectsData';

const iconMap = {
  ChefHat,
  BedDouble,
  Sparkles,
  Tv,
  LayoutGrid,
  Layers,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Kayseri Mobilyakent İmalatı</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Evinizin Her Alanına Özel <br />
          <span className="text-gold-gradient">
            Lüks Mobilya Hizmetlerimiz
          </span>
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
          Standart ölçülerin sınırlarına takılmadan; mutfaktan giyinme odasına, akustik lambiri başlıklardan özel dresuarlara kadar tüm mobilyaları milimetrik hassasiyetle üretiyoruz.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((service, idx) => {
          const IconComp = iconMap[service.iconName as keyof typeof iconMap] || Layers;
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={service.id}
              className="rounded-3xl bg-stone-900/80 border border-stone-800/90 overflow-hidden shadow-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10 hover:border-amber-500/40 transition-colors"
            >
              {/* Image side */}
              <div className={`w-full lg:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] bg-stone-950 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-950/85 border border-amber-500/40 text-amber-300 text-xs font-bold backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{service.badge}</span>
                </div>
              </div>

              {/* Text side */}
              <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                  {service.description} Kayseri Mobilyakent atölyemizde birinci sınıf neme dayanıklı MDF-Lam, sararmaz lake ve Blum mekanizmaları kullanarak anahtar teslim üretiyoruz.
                </p>

                {/* Features */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                    Uygulama & İmalat Detayları:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20"${encodeURIComponent(service.title)}"%20hizmetiniz%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-6 py-3.5 rounded-2xl text-xs sm:text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Bu Hizmet İçin Fiyat Al</span>
                  </a>

                  <Link
                    to="/fiyat-hesapla"
                    className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-amber-300 border border-amber-500/30 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Fiyat Sihirbazında Hesapla</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </Link>
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 border border-stone-800 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Aklınızdaki Mobilyayı Birlikte Tasarlayalım
          </h3>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Kayseri içi tamamen ücretsiz keşif ve lazerli ölçü hizmetimizle evinize geliyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-6 py-3.5 rounded-2xl text-sm shadow-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Erkan Usta'yı Ara: {companyInfo.phoneFormatted}</span>
            </a>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white border border-stone-700 px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all"
            >
              <span>Atölye Adresi & İletişim</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
