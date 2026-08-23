import { useState } from 'react';
import { Sparkles, ChefHat, BedDouble, Sparkles as StarIcon, Tv, LayoutGrid, Home, ArrowRight, ArrowLeft, Send, CheckCircle2, MessageCircle, Ruler } from 'lucide-react';
import { companyInfo } from '../data/projectsData';

const furnitureOptions = [
  { id: 'kitchen', label: 'Özel Mutfak Dolabı', sub: 'Ada, Lake veya Akrilik', icon: ChefHat },
  { id: 'bedroom', label: 'Akustik Lambiri & Yatak Başı', sub: 'Çıtalı Panel & Komodin', icon: BedDouble },
  { id: 'wardrobe', label: 'Giyinme Odası & Gardırop', sub: 'Cam/Aynalı & Gömme', icon: StarIcon },
  { id: 'tv-unit', label: 'TV Ünitesi & Salon Konsolu', sub: 'Füme Vitrinli & Şaraplık', icon: Tv },
  { id: 'vanity', label: 'Dresuar & Makyaj Masası', sub: 'Gold Ayaklı & Bizoteli Ayna', icon: LayoutGrid },
  { id: 'full-house', label: 'Komple Ev / Villa Mobilyası', sub: 'Anahtar Teslim Tüm Odalar', icon: Home },
];

const projectStatusOptions = [
  { id: 'new-flat', label: 'Sıfır Daire / Sıfır İmalat', desc: 'Yeni teslim alınan daire veya villa için ilk mobilya' },
  { id: 'renovation', label: 'Mevcut Evi / Odayı Yenileme', desc: 'Eski dolapların sökülüp yerine modern tasarım yapılması' },
  { id: 'have-dimensions', label: 'Yaklaşık Ölçülerim Belli', desc: 'Metraj veya oda ölçülerim hazır, fiyat teklifi istiyorum' },
  { id: 'need-measurement', label: 'Ücretsiz Yerinde Keşif İstiyorum', desc: 'Erkan Usta eve gelip lazerli hassas ölçü alsın' },
];

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureOptions[0].label);
  const [selectedStatus, setSelectedStatus] = useState(projectStatusOptions[0].label);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba Erkan Usta (EY Dizayn),\n\nWeb sitenizdeki Hızlı Fiyat Sihirbazından teklif oluşturdum:\n\n🛋️ Mobilya Türü: ${selectedFurniture}\n📐 Proje Durumu: ${selectedStatus}\n👤 İsim Soyisim: ${name || 'Belirtilmedi'}\n📞 Telefon: ${phone || 'Belirtilmedi'}\n📝 Ek Notlar / Detay: ${notes || 'Görüşmede detaylandırılacak'}\n\nKayseri içi keşif ve yaklaşık fiyat bilgisi alabilir miyim?`;

    const url = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="fiyat-sihirbazi" className="py-24 bg-stone-900/90 relative border-t border-stone-800/80 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hızlı & Kolay Teklif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            3 Adımda Özel Mobilya <br />
            <span className="text-gold-gradient">Fiyat ve Keşif Talebi</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Uzun formlarla uğraşmadan 30 saniyede projenizi seçin, Erkan Usta'ya doğrudan WhatsApp'tan ulaştırın.
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="rounded-3xl bg-stone-950 border border-stone-800 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400'}`}>
                1
              </div>
              <span className={`text-xs sm:text-sm font-semibold hidden sm:inline ${step >= 1 ? 'text-white' : 'text-stone-500'}`}>
                Mobilya Seçimi
              </span>
            </div>

            <div className="h-0.5 w-10 sm:w-16 bg-stone-800" />

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400'}`}>
                2
              </div>
              <span className={`text-xs sm:text-sm font-semibold hidden sm:inline ${step >= 2 ? 'text-white' : 'text-stone-500'}`}>
                Durum & Ölçü
              </span>
            </div>

            <div className="h-0.5 w-10 sm:w-16 bg-stone-800" />

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400'}`}>
                3
              </div>
              <span className={`text-xs sm:text-sm font-semibold hidden sm:inline ${step >= 3 ? 'text-white' : 'text-stone-500'}`}>
                WhatsApp Teklifi
              </span>
            </div>
          </div>

          {/* STEP 1: Select Furniture */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hangi mobilyayı yaptırmak istiyorsunuz?</h3>
                <p className="text-xs text-stone-400">İhtiyacınıza en uygun kategoriyi işaretleyin:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {furnitureOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedFurniture === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedFurniture(opt.label)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                        isSelected 
                          ? 'bg-amber-400/10 border-amber-400 text-white shadow-lg shadow-amber-950/30' 
                          : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-900'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                          {opt.label}
                        </p>
                        <p className="text-[11px] text-stone-400 mt-0.5">
                          {opt.sub}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 font-bold px-6 py-3.5 rounded-2xl text-sm shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  <span>Devam Et</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Status / Dimensions */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Projenizin mevcut durumu nedir?</h3>
                <p className="text-xs text-stone-400">Keşif ve fiyatlandırma sürecini hızlandırmak için seçin:</p>
              </div>

              <div className="space-y-3">
                {projectStatusOptions.map((opt) => {
                  const isSelected = selectedStatus === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedStatus(opt.label)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected 
                          ? 'bg-amber-400/10 border-amber-400 text-white shadow-lg shadow-amber-950/30' 
                          : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-900'
                      }`}
                    >
                      <div>
                        <p className={`text-sm font-bold ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                          {opt.label}
                        </p>
                        <p className="text-xs text-stone-400 mt-0.5">
                          {opt.desc}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-amber-400 bg-amber-400' : 'border-stone-700'}`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-stone-950" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-stone-400 hover:text-white px-4 py-2.5 text-xs font-semibold cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Geri Dön</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 font-bold px-6 py-3.5 rounded-2xl text-sm shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  <span>Son Adıma Geç</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & WhatsApp Send */}
          {step === 3 && (
            <form onSubmit={handleFinish} className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Seçimleriniz Hazır!</h3>
                <p className="text-xs text-stone-400">Bilgilerinizi Erkan Usta'nın WhatsApp hattına doğrudan aktaralım:</p>
              </div>

              {/* Summary Pill Box */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex flex-wrap gap-2 text-xs">
                <div className="px-3 py-1 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30 font-semibold">
                  {selectedFurniture}
                </div>
                <div className="px-3 py-1 rounded-lg bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/30 font-semibold">
                  {selectedStatus}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                    Adınız Soyadınız
                  </label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Örn: Mehmet Özkan"
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                    Telefon Numaranız
                  </label>
                  <input 
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XX XXX XX XX"
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  Varsa İstenen Ölçü, Renk veya Notunuz
                </label>
                <input 
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Örn: 4 metre vizon lake ada mutfak, LED aydınlatmalı vitrin olsun..."
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-stone-400 hover:text-white px-4 py-2.5 text-xs font-semibold cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Geri Dön</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-2xl text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>WhatsApp ile Erkan Usta'ya Gönder & Fiyat Al</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
