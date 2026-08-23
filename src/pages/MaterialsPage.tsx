import { Link } from 'react-router-dom';
import { Sparkles, Shield, Layers, Cpu, Eye, Sun, CheckCircle2, MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import MaterialShowcase from '../components/MaterialShowcase';
import { companyInfo } from '../data/projectsData';

export default function MaterialsPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Kalite & Ustalık Standartları</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Kullandığımız 1. Sınıf <br />
          <span className="text-gold-gradient">
            Malzeme ve Mekanizma Standartları
          </span>
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
          EY Dizayn olarak ürettiğimiz her mobilyada uzun ömürlülük, pürüzsüz yüzey kalitesi ve sessiz konfor sağlayan dünya standartlarında donanımlar kullanıyoruz.
        </p>
      </div>

      {/* Main Material Showcase Grid */}
      <MaterialShowcase />

      {/* Quality Comparison / Why High Quality Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-stone-900/90 border border-stone-800 p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Neden Standart Fabrikasyon Değil, Özel İmalat?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light">
              Hazır paket mobilyalar ile özel atölye imalatı arasındaki temel farklar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800">
              <h3 className="text-lg font-bold text-amber-400 mb-2">%100 Özel Ölçü</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Hazır dolaplar standart 60-80-90 cm modüllerdir ve odanızda boşluklar bırakır. Biz tavan yüksekliğinize ve duvar boyunuza milimetrik sıfır oturacak şekilde üretiyoruz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800">
              <h3 className="text-lg font-bold text-fuchsia-400">Sararmaz Lake Boya</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Güneş ışığı ve mutfak buharından etkilenmeyen poliüretan astar ve fırın boya katmanları ile beyaz ve vizon kapaklarınız yıllarca ilk günkü parlaklığını korur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800">
              <h3 className="text-lg font-bold text-emerald-400">Ömür Boyu Frenli Raylar</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Çabuk sarkan ve ses yapan kalitesiz raylar yerine, 60 kg taşıma kapasiteli, yavaş ve sessiz kapanan Blum & Samet mekanizmaları standarttır.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-stone-800 text-center flex flex-wrap justify-center gap-4">
            <Link
              to="/fiyat-hesapla"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl transition-all"
            >
              <span>Hemen Fiyat Hesapla</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20malzemeler%20ve%20renk%20kartelası%20hakkında%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Kartela Danışmanı</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
