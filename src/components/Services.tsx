import { ChefHat, BedDouble, Sparkles, Tv, LayoutGrid, Layers, ArrowUpRight } from 'lucide-react';
import { servicesData, companyInfo } from '../data/projectsData';

const iconMap = {
  ChefHat,
  BedDouble,
  Sparkles,
  Tv,
  LayoutGrid,
  Layers,
};

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hizmetler" className="py-24 bg-stone-900/60 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            Uzmanlık Alanlarımız
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Evinizin Her Köşesine <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              Özel Üretim Mobilya Çözümleri
            </span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Kayseri Mobilyakent'teki imalathanemizde en kaliteli ahşap, lake ve mekanizma bileşenlerini usta ellerle buluşturuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Layers;
            return (
              <div 
                key={service.id}
                className="group relative rounded-3xl bg-stone-950/80 border border-stone-800/80 hover:border-fuchsia-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-fuchsia-950/30"
              >
                {/* Service Image Banner */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-stone-900/90 text-yellow-400 border border-yellow-500/30 backdrop-blur-md">
                    {service.badge}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-6 p-3 rounded-2xl bg-fuchsia-600/90 text-white shadow-lg backdrop-blur-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-stone-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-2 mb-6">
                      {service.details.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <a
                      href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20${encodeURIComponent(service.title)}%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-fuchsia-400 hover:text-fuchsia-300 flex items-center gap-1 group/link"
                    >
                      <span>Fiyat Teklifi İste</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <button 
                      onClick={scrollToContact}
                      className="text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Ölçü Talebi
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
