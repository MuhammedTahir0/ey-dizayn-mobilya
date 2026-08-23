import { useState } from 'react';
import { ArrowRight, Sparkles, MessageCircle, PhoneCall, CheckCircle2, ShieldCheck, MapPin, Ruler, Layers, Eye, Award } from 'lucide-react';
import { companyInfo } from '../data/projectsData';

const heroShowcaseProjects = [
  {
    id: 'h-kitchen',
    name: 'Ada Mutfak & LED Vitrin',
    category: 'Mutfak',
    image: '/images/projects/kitchen-led-1.jpeg',
    tag: 'Popüler Model',
    badge: 'Gizli Lineer LED & Mat Lake'
  },
  {
    id: 'h-bedroom',
    name: 'Akustik Çıtalı Yatak Başı',
    category: 'Lambiri',
    image: '/images/projects/bedroom-panel-1.jpeg',
    tag: 'Trend Tasarım',
    badge: 'CNC Oluklu Panel & Komodin'
  },
  {
    id: 'h-wardrobe',
    name: 'Cam Kapaklı Gardırop & Puf',
    category: 'Gardırop',
    image: '/images/projects/wardrobe-1.jpeg',
    tag: 'Özel Tasarım',
    badge: 'Füme Alüminyum & Kapitone'
  },
  {
    id: 'h-vanity',
    name: 'Baklava Aynalı Dresuar',
    category: 'Dresuar',
    image: '/images/projects/makeup-vanity-1.jpeg',
    tag: 'Lüks Seri',
    badge: 'Bizoteli Ayna & Gold Ayak'
  }
];

export default function Hero() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const activeProject = heroShowcaseProjects[activeProjectIdx];

  const scrollToProjects = () => {
    document.getElementById('projeler')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWizard = () => {
    document.getElementById('fiyat-sihirbazi')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Ambient background with dark radial lighting */}
      <div className="absolute inset-0 bg-stone-950 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Trust & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Location & Brand Badge */}
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-stone-900/90 border border-amber-500/30 text-stone-200 text-xs sm:text-sm font-medium shadow-xl backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Kayseri Mobilyakent
              </span>
              <span className="text-stone-600">•</span>
              <span className="text-fuchsia-300 font-medium">Erkan Akpınar Özel İmalat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Mekanınıza Özel <br />
              <span className="text-luxury-gradient">Kusursuz Tasarım</span> <br className="hidden sm:block" />
              ve Milimetrik Usta İmalatı
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-light">
              Fabrikasyon ve standart kalıplara mecbur kalmayın. Kayseri Mobilyakent'teki atölyemizde; <strong className="text-white font-medium">lüks mutfak dolapları</strong>, <strong className="text-white font-medium">akustik lambiri yatak odaları</strong>, <strong className="text-white font-medium">giyinme odaları</strong> ve <strong className="text-white font-medium">özel dresuarları</strong> evinize tam oturacak şekilde üretiyoruz.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20özel%20mobilya%20imalatı%20için%20ücretsiz%20keşif%20ve%20fiyat%20bilgisi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-emerald-950/60 hover:scale-[1.02] group text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Erkan Usta'dan Hızlı Fiyat Al</span>
              </a>

              <button 
                onClick={scrollToWizard}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-stone-900/90 hover:bg-stone-800 text-amber-300 rounded-2xl font-semibold transition-all duration-300 border border-amber-500/30 hover:border-amber-400 backdrop-blur-md shadow-lg cursor-pointer text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>3 Adımda Fiyat Hesapla</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800/80">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">15+</p>
                <p className="text-xs text-stone-400 font-medium">Yıl Ustalık & İmalat</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-fuchsia-400">450+</p>
                <p className="text-xs text-stone-400 font-medium">Teslim Edilen Ev</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">%100</p>
                <p className="text-xs text-stone-400 font-medium">Özel Ölçü Garantisi</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-purple-400">3D</p>
                <p className="text-xs text-stone-400 font-medium">Üretim Öncesi Onay</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backdrop behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70" />
            
            <div className="relative rounded-3xl bg-stone-900/90 border border-stone-700/80 overflow-hidden shadow-2xl backdrop-blur-xl">
              
              {/* Card Image Area */}
              <div className="relative aspect-[4/3] sm:aspect-[16/12] overflow-hidden bg-stone-950">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Tag pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeProject.tag}</span>
                </div>

                {/* Floating Craftsmanship Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-stone-950/90 border border-stone-700/80 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{activeProject.name}</p>
                    <p className="text-[11px] text-stone-400">{activeProject.badge}</p>
                  </div>
                  <a 
                    href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20anasayfadaki%20"${encodeURIComponent(activeProject.name)}"%20modeli%20hakkında%20fiyat%20öğrenmek%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Fiyat Sor</span>
                  </a>
                </div>
              </div>

              {/* Showcase Tab Selector */}
              <div className="p-4 bg-stone-950 border-t border-stone-800/80">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                  Örnek İmalatları İnceleyin:
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {heroShowcaseProjects.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveProjectIdx(idx)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all duration-300 text-center cursor-pointer truncate ${
                        activeProjectIdx === idx
                          ? 'bg-amber-400 text-stone-950 font-bold shadow-md shadow-amber-400/20'
                          : 'bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                      }`}
                    >
                      {item.category}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
