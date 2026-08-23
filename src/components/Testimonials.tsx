import { Star, Quote, CheckCircle, MapPin } from 'lucide-react';
import { testimonialsData } from '../data/projectsData';

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-24 bg-stone-950 relative border-t border-stone-800/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Müşteri Memnuniyeti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Kayseri'de Evine Değer Katan <br className="hidden sm:block" />
            <span className="text-gold-gradient">
              Müşterilerimizin Yorumları
            </span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg leading-relaxed font-light">
            Teslim ettiğimiz her mobilya projesinde ustalığımızın arkasında duruyor, kalıcı dostluklar kazanıyoruz.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div 
              key={item.id}
              className="rounded-3xl bg-stone-900/80 border border-stone-800/90 hover:border-amber-500/40 p-8 shadow-xl relative flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="absolute top-6 right-6 text-stone-700/40">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Project tag */}
                <div className="inline-block text-[11px] font-bold text-amber-400 bg-stone-950 px-2.5 py-1 rounded-lg border border-stone-800 mb-4">
                  {item.projectType}
                </div>

                {/* Comment */}
                <p className="text-stone-300 text-sm leading-relaxed font-light mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-stone-500" />
                    <span>{item.location}</span>
                  </p>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">
                  {item.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
