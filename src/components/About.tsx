import { Link } from 'react-router-dom';
import { Shield, Sparkles, Ruler, Award, MapPin, Instagram, Phone, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/projectsData';
export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-stone-900/80 border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visuals & Business Card Display */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Showcase Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-700/80 bg-stone-950">
              <img 
                src="/images/brand/card.jpeg" 
                alt="EY Dizayn - Erkan Akpınar Kartvizit ve İletişim" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-stone-950 to-stone-900 text-white p-6 sm:p-7 rounded-3xl shadow-2xl border border-fuchsia-500/40 backdrop-blur-xl">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-yellow-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                {companyInfo.experienceYears}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-stone-300">
                Yıllık Ustalık<br/>& İmalat Tecrübesi
              </div>
            </div>

            {/* Location Tag */}
            <div className="mt-8 p-4 rounded-2xl bg-stone-950/80 border border-stone-800/80 flex items-center justify-between text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>Kayseri Mobilyakent İmalathanesi</span>
              </div>
              <a 
                href={companyInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-yellow-400 font-semibold hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@{companyInfo.instagram}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-4">
              Hakkımızda & Erkan Usta
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Mekana Ruh Katan <br />
              <span className="bg-gradient-to-r from-yellow-400 to-fuchsia-400 bg-clip-text text-transparent">
                Özel Üretim Mobilya Sanatı
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-300 mb-6 leading-relaxed font-light">
              <strong className="text-white font-medium">EY Dizayn</strong> olarak, kurucumuz ve ustamız <strong className="text-white font-medium">Erkan Akpınar</strong> öncülüğünde Kayseri Mobilyakent’teki modern atölyemizde kişiye ve mekana özel mobilya imalatı gerçekleştiriyoruz.
            </p>

            <p className="text-sm sm:text-base text-stone-400 mb-8 leading-relaxed">
              Her evin mimarisi, kullanım alışkanlıkları ve zevkleri farklıdır. Standart fabrikasyon kalıpların kısıtlamalarına girmeden; mutfak dolaplarından giyinme odalarına, akustik çıtalı lambiri yatak başlıklarından özel dresuarlara kadar her parçayı milimetrik hassasiyetle üretiyoruz.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-stone-800/80 pt-8">
              
              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-400">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">%100 Özel Ölçü</h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Evinize gelerek lazerli milimetrik ölçü alıyor, atıl alan bırakmadan maksimum depolama alanı tasarlıyoruz.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-fuchsia-500/10 text-fuchsia-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">1. Sınıf Malzeme</h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Çizilmeye ve neme dayanıklı MDF-Lam, birinci sınıf lake boya, masif dokular ve frenli mekanizmalar.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">3D Projelendirme</h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Üretime başlamadan önce mekanınızı 3 boyutlu modelleyip renk ve kulp seçeneklerini beğeninize sunuyoruz.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Usta Montajı & Garanti</h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  İmalatını yaptığımız her mobilyanın montajını kendi uzman ekibimizle temiz ve kusursuz şekilde yapıyoruz.
                </p>
              </div>

            </div>

            {/* About Page Link */}
            <div className="pt-6">
              <Link
                to="/hakkimizda"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm group"
              >
                <span>Erkan Usta'nın 15+ Yıllık Ustalık Hikayesi & 4 Adımlı İmalat Sürecini İnceleyin</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
