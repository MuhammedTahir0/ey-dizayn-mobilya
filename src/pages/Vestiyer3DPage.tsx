import { useState } from 'react';
import { Box, Layers, Maximize2, Sparkles, MessageCircle, Phone, CheckCircle2, Ruler, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/projectsData';

export default function Vestiyer3DPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const customWhatsAppMsg = encodeURIComponent(
    `Merhaba Erkan Usta, web sitenizdeki 3D Vestiyer Tasarımı (2150x2000 mm, 660->400 mm derinlik, 1000 mm Lambri Kapak) hakkında imalat süresi ve fiyat teklifi almak istiyorum.`
  );

  return (
    <div className="pt-24 lg:pt-28 pb-16 min-h-screen bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık & Açıklama */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Özel İmalat 3D Tasarım Simülatörü</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Özel Tasarım <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">3D Vestiyer Modeli</span>
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Atölye ölçüleri ve teknik eskiz standartlarına göre hazırlanan 3D vestiyer modelini 360° inceleyebilir, kapakları açıp kapatabilir, LED aydınlatmayı test edebilirsiniz.
          </p>
        </div>

        {/* 3D Görüntüleyici Konteyner */}
        <div className={`relative bg-slate-950 rounded-2xl sm:rounded-3xl border border-stone-800 shadow-2xl overflow-hidden transition-all duration-300 ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'w-full h-[600px] sm:h-[680px] lg:h-[720px]'
        }`}>
          {/* Tam Ekran Butonu */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="absolute top-4 right-4 z-20 bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 p-2.5 rounded-xl text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
            title={isFullscreen ? "Tam Ekrandan Çık" : "Tam Ekran Yap"}
          >
            <Maximize2 className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{isFullscreen ? "Küçült" : "Tam Ekran"}</span>
          </button>

          {/* 3D iframe */}
          <iframe
            src="/vestiyer_3d.html"
            title="3D Vestiyer Modeli"
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>

        {/* Ölçü & Teknik Özellikler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          
          <div className="bg-stone-900/60 border border-stone-800/80 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <Ruler className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-stone-400 font-medium">Toplam Ebatlar</span>
                <h3 className="text-base font-bold text-white">2150 × 2000 mm</h3>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              215 cm net genişlik ve 200 cm net gövde yüksekliği ile antreye tam oturur.
            </p>
          </div>

          <div className="bg-stone-900/60 border border-stone-800/80 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-stone-400 font-medium">Derinlik Geçişi</span>
                <h3 className="text-base font-bold text-white">660 ➔ 400 mm</h3>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Sol 66 cm derinlikten sağ 40 cm'ye açılı pah geçişi antre kapısını rahatlatır.
            </p>
          </div>

          <div className="bg-stone-900/60 border border-stone-800/80 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-stone-400 font-medium">Lambri Kapak</span>
                <h3 className="text-base font-bold text-white">1000 mm Özel Modül</h3>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              100 cm genişlikte 3D dikey çıtalı (lambri) kapaklı derin kaban saklama alanı.
            </p>
          </div>

          <div className="bg-stone-900/60 border border-stone-800/80 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-stone-400 font-medium">Donanım & Işık</span>
                <h3 className="text-base font-bold text-white">Frenli Ray & LED</h3>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Samet/Blum frenli menteşeler, gizli LED aydınlatma ve minderli puf alanı.
            </p>
          </div>

        </div>

        {/* Teklif ve Sipariş CTA Bölümü */}
        <div className="mt-10 bg-gradient-to-r from-amber-500/15 via-stone-900 to-amber-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Evinize Özel Ölçüde Yaptırmak İster Misiniz?
            </h2>
            <p className="text-stone-300 text-sm max-w-xl">
              Bu 3D vestiyeri kendi evinizin ölçülerine ve renk tercihlerinize göre Kayseri içi ücretsiz keşif ve montaj ile imal ediyoruz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${companyInfo.phoneRaw}?text=${customWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-950/40 transition-all text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp'tan Teklif Al</span>
            </a>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 font-bold px-6 py-3.5 rounded-2xl transition-all text-sm"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>{companyInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
