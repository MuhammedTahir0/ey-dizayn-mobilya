import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/projectsData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
    { name: 'Projelerimiz', path: '/projelerimiz' },
    { name: '✨ 3D Vestiyer', path: '/3d-vestiyer' },
    { name: 'Malzeme & Donanım', path: '/malzemelerimiz' },
    { name: 'Fiyat Sihirbazı', path: '/fiyat-hesapla' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Yorumlar & SSS', path: '/yorumlar-ve-sss' },
    { name: 'İletişim', path: '/iletisim' },
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
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.address}</span>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a 
              href={companyInfo.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-purple-400" />
              <span>@{companyInfo.instagram}</span>
            </a>
            <a 
              href={`tel:${companyInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 text-amber-300 font-semibold hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
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
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="cursor-pointer">
              <Logo size="md" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs lg:text-sm font-medium transition-colors relative py-1 group ${
                      isActive ? 'text-amber-400 font-bold' : 'text-stone-200 hover:text-amber-300'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Header Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a 
                href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20özel%20mobilya%20imalatı%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <Link 
                to="/fiyat-hesapla"
                className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-lg shadow-amber-950/40"
              >
                <span>Hızlı Fiyat Al</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a 
                href={`tel:${companyInfo.phoneRaw}`}
                className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 sm:hidden"
                aria-label="Erkan Usta'yı Ara"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button 
                className="p-2.5 rounded-xl bg-stone-900/90 text-stone-100 border border-stone-700/80 hover:bg-stone-800 cursor-pointer"
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
        <div className="lg:hidden bg-stone-950/98 border-b border-stone-800 shadow-2xl backdrop-blur-2xl px-6 py-6 flex flex-col space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[80vh] overflow-y-auto">
          <div className="pb-3 border-b border-stone-800/80">
            <p className="text-xs text-stone-400 font-medium">{companyInfo.address}</p>
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-left text-sm sm:text-base font-semibold py-2 transition-all rounded-lg ${
                  isActive ? 'text-amber-400 font-bold pl-2 bg-stone-900' : 'text-stone-200 hover:text-amber-300 hover:pl-2'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-stone-800/80 flex flex-col gap-3">
            <Link
              to="/fiyat-hesapla"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <span>3 Adımda Fiyat Hesapla</span>
            </Link>
            <a 
              href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20özel%20mobilya%20imalatı%20için%20fiyat%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp ile Mesaj At</span>
            </a>
            <a 
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-stone-900 text-amber-300 border border-stone-700 py-3 rounded-xl font-bold text-sm shadow-md"
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
