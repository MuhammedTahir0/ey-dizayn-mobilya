import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/projectsData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
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

  const navLinks = [
    { name: 'Ana Sayfa', id: 'anasayfa' },
    { name: 'Hizmetlerimiz', id: 'hizmetler' },
    { name: 'Projelerimiz', id: 'projeler' },
    { name: 'Hakkımızda', id: 'hakkimizda' },
    { name: 'Nasıl Çalışıyoruz?', id: 'surec' },
    { name: 'İletişim', id: 'iletisim' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for quick contacts */}
      <div className={`hidden sm:block transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'bg-stone-900/90 border-b border-stone-800/80 py-1.5 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-stone-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>{companyInfo.address}</span>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a 
              href={companyInfo.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-fuchsia-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>@{companyInfo.instagram}</span>
            </a>
            <a 
              href={`tel:${companyInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{companyInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-stone-950/95 shadow-xl shadow-black/40 border-b border-stone-800/80 py-3 backdrop-blur-xl' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div 
              className="cursor-pointer"
              onClick={() => scrollTo('anasayfa')}
            >
              <Logo size="md" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium text-stone-200 hover:text-yellow-400 transition-colors relative py-1 group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-yellow-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Header Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a 
                href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20özel%20mobilya%20imalatı%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-md hover:shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button 
                onClick={() => scrollTo('iletisim')}
                className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg hover:shadow-fuchsia-600/30 cursor-pointer"
              >
                <span>Hemen Fiyat Al</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a 
                href={`tel:${companyInfo.phoneRaw}`}
                className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 sm:hidden"
                aria-label="Erkan Usta'yı Ara"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button 
                className="p-2.5 rounded-xl bg-stone-900/90 text-stone-100 border border-stone-700/80 hover:bg-stone-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menüyü Aç"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-stone-950/98 border-b border-stone-800 shadow-2xl backdrop-blur-2xl px-6 py-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="pb-3 border-b border-stone-800/80">
            <p className="text-xs text-stone-400 font-medium">{companyInfo.address}</p>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-base font-semibold text-stone-200 py-2 hover:text-yellow-400 hover:pl-2 transition-all rounded-lg"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-800/80 flex flex-col gap-3">
            <a 
              href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20özel%20mobilya%20imalatı%20için%20fiyat%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp ile Mesaj At</span>
            </a>
            <a 
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-yellow-500 text-stone-950 py-3 rounded-xl font-bold shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>{companyInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
