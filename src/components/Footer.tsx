import { Instagram, MapPin, Phone, MessageCircle, ChevronRight, Heart } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/projectsData';

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pt-2">
              Kayseri Mobilyakent’te mekana ve zevkinize özel tasarım mobilya imalatında kalitenin ve usta işçiliğin adresi. Hayalinizdeki yaşam alanını gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={companyInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all shadow-md"
                aria-label="Instagram Hesabımız"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20bilgi%20almak%20istiyorum.`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-md"
                aria-label="WhatsApp İletişim"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${companyInfo.phoneRaw}`}
                className="w-10 h-10 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-stone-950 transition-all shadow-md"
                aria-label="Telefon ile Ara"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">Hızlı Menü</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollTo('anasayfa')} className="text-stone-400 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                  <span>Ana Sayfa</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hizmetler')} className="text-stone-400 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                  <span>Hizmetlerimiz</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projeler')} className="text-stone-400 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                  <span>Referans Projeler</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hakkimizda')} className="text-stone-400 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                  <span>Hakkımızda</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('surec')} className="text-stone-400 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                  <span>Nasıl Çalışıyoruz?</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('iletisim')} className="text-stone-400 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                  <span>İletişim & Teklif</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">İmalat Alanları</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>• Özel Ölçü Lake & Akrilik Mutfak</li>
              <li>• Akustik Lambiri Yatak Başlıkları</li>
              <li>• Aynalı & Cam Kapaklı Gardıroplar</li>
              <li>• Lüks TV Üniteleri & Şaraplıklar</li>
              <li>• Baklava Aynalı Makyaj Masaları</li>
              <li>• CNC Oluklu Salon Dresuarları</li>
              <li>• Banyo & Özel Seperatör Sistemleri</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">Atölye İletişim</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href={`tel:${companyInfo.phoneRaw}`} className="text-white font-semibold hover:text-yellow-400 transition-colors">
                  {companyInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={companyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                  instagram.com/{companyInfo.instagram}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} EY Dizayn (Erkan Akpınar). Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1">
            <span>Kayseri Mobilyakent Özel İmalat</span>
            <Heart className="w-3.5 h-3.5 text-fuchsia-500 fill-fuchsia-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
