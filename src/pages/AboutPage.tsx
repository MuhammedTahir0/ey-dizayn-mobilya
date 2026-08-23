import { Sparkles, Award, MapPin, Phone, MessageCircle, Ruler, Shield, CheckCircle2 } from 'lucide-react';
import About from '../components/About';
import Process from '../components/Process';
import { companyInfo } from '../data/projectsData';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Erkan Akpınar • EY Dizayn</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Zanaatten Mekana: <br />
          <span className="text-gold-gradient">
            15+ Yıllık Ustalık ve İmalat Güvencesi
          </span>
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
          Kayseri Mobilyakent'teki modern imalathanemizde; her müşterimizin hayalindeki yaşam alanını birinci sınıf ahşap, sararmaz lake ve kaliteli mekanizmalarla gerçeğe dönüştürüyoruz.
        </p>
      </div>

      {/* Main About Component */}
      <About />

      {/* 4-Step Process Component */}
      <Process />

      {/* Workshop Location Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-amber-400" />
              <span>Atölyemize Kahveye Bekleriz</span>
            </h3>
            <p className="text-stone-400 text-sm max-w-xl">
              {companyInfo.address} adresindeki atölyemizde devam eden imalatları, boya kalitesini ve malzeme kartelalarını yerinde görebilirsiniz.
            </p>
          </div>
          <a
            href={companyInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-6 py-3.5 rounded-2xl text-sm shadow-xl transition-all shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span>Haritada Yol Tarifi Al</span>
          </a>
        </div>
      </div>

    </div>
  );
}
