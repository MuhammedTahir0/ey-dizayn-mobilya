import { useState } from 'react';
import { Phone, MapPin, Instagram, MessageCircle, Send, Clock, CheckCircle2, Building } from 'lucide-react';
import { companyInfo } from '../data/projectsData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    furnitureType: 'Mutfak Dolabı',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba Erkan Usta (EY Dizayn),\n\nWeb sitenizden teklif formu doldurdum:\n- İsim: ${formData.name || 'Belirtilmedi'}\n- Telefon: ${formData.phone || 'Belirtilmedi'}\n- İstenen Mobilya: ${formData.furnitureType}\n- Ölçü ve Notlar: ${formData.notes || 'Detaylar görüşülecek'}\n\nFiyat ve keşif hakkında bilgi alabilir miyim?`;
    
    const whatsappUrl = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="iletisim" className="py-24 bg-stone-900/90 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            İletişim & Teklif
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Erkan Usta ile İletişime Geçin, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Hemen Fiyat Alın
            </span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Kayseri Mobilyakent'teki atölyemizi ziyaret edebilir, telefon veya WhatsApp üzerinden projenizi ileterek hızlıca fiyat teklifi alabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Business Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-stone-950 border border-stone-800/80 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-fuchsia-400" />
                <span>Atölye & Firma Bilgileri</span>
              </h3>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-fuchsia-600/15 text-fuchsia-400 rounded-2xl border border-fuchsia-500/20 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Atölye Adresi</p>
                    <p className="text-sm font-semibold text-white mt-1 leading-snug">
                      {companyInfo.address}
                    </p>
                    <p className="text-xs text-yellow-400 mt-1">Kocasinan / KAYSERİ</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/15 text-yellow-400 rounded-2xl border border-yellow-500/20 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Telefon & Arama</p>
                    <a 
                      href={`tel:${companyInfo.phoneRaw}`} 
                      className="text-lg font-bold text-white hover:text-yellow-400 transition-colors block mt-1"
                    >
                      {companyInfo.phoneFormatted}
                    </a>
                    <p className="text-xs text-stone-400 mt-0.5">Erkan Akpınar (Erkan Usta)</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-600/15 text-emerald-400 rounded-2xl border border-emerald-500/20 shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">WhatsApp Doğrudan Hat</p>
                    <a 
                      href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20bilgi%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors block mt-1"
                    >
                      Mesaj Göndermek İçin Tıklayın
                    </a>
                    <p className="text-xs text-stone-400 mt-0.5">Hemen fotoğraf gönderip fiyat sorabilirsiniz</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/15 text-purple-400 rounded-2xl border border-purple-500/20 shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Instagram Portföyü</p>
                    <a 
                      href={companyInfo.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors block mt-1"
                    >
                      @{companyInfo.instagram}
                    </a>
                    <p className="text-xs text-stone-400 mt-0.5">En son imalat ve teslimat videolarımız</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Working Hours & Guarantee */}
            <div className="rounded-3xl bg-stone-950/60 border border-stone-800/80 p-6 flex items-center justify-between text-xs text-stone-300">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Pzt - Cmt: 08:30 - 19:30</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Kayseri Geneli Keşif</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Quote Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-stone-950 border border-stone-800/80 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-2">
                Hızlı Fiyat Teklifi İsteyin
              </h3>
              <p className="text-sm text-stone-400 mb-8">
                Formu doldurduğunuzda bilgileriniz otomatik olarak Erkan Usta'nın WhatsApp hattına iletilir.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full px-4 py-3.5 bg-stone-900 border border-stone-800 rounded-2xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                      Telefon Numaranız
                    </label>
                    <input 
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-4 py-3.5 bg-stone-900 border border-stone-800 rounded-2xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                    Mobilya & Uygulama Türü
                  </label>
                  <select 
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-4 py-3.5 bg-stone-900 border border-stone-800 rounded-2xl text-stone-100 focus:outline-none focus:border-yellow-400 transition-colors text-sm cursor-pointer"
                  >
                    <option value="Mutfak Dolabı (Lake / Akrilik / Ada)">Mutfak Dolabı (Lake / Akrilik / Ada)</option>
                    <option value="Akustik Lambiri Duvar Paneli & Yatak Başı">Akustik Lambiri Duvar Paneli & Yatak Başı</option>
                    <option value="Giyinme Odası & Aynalı Gardırop">Giyinme Odası & Aynalı Gardırop</option>
                    <option value="TV Ünitesi & Özel Konsol / Şaraplık">TV Ünitesi & Özel Konsol / Şaraplık</option>
                    <option value="Dresuar & Baklava Aynalı Makyaj Masası">Dresuar & Baklava Aynalı Makyaj Masası</option>
                    <option value="Banyo Dolabı & Özel Proje">Banyo Dolabı & Özel Proje</option>
                    <option value="Komple Ev Mobilyası ve Dekorasyonu">Komple Ev Mobilyası ve Dekorasyonu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                    Tahmini Ölçüler & Açıklamanız
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Örn: 3.5 metre vizon lake mutfak dolabı düşünüyoruz, LED aydınlatmalı vitrin olsun istiyoruz..."
                    className="w-full px-4 py-3.5 bg-stone-900 border border-stone-800 rounded-2xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-yellow-500 hover:from-fuchsia-500 hover:to-yellow-400 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-fuchsia-950/60 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>WhatsApp ile Erkan Usta'ya İlet & Fiyat Al</span>
                </button>
              </form>

            </div>
          </div>

        </div>

        {/* Kayseri Mobilyakent Map / Location Box */}
        <div className="mt-14 rounded-3xl bg-stone-950 border border-stone-800/80 p-6 sm:p-8 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-fuchsia-400" />
                <span>Atölyemize Davetlisiniz</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                Kayseri Mobilyakent'teki imalathanemize gelerek malzeme numunelerini ve örnek kapak modellerini inceleyebilirsiniz.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Mobilyakent+Camikebir+Kocasinan+Kayseri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-yellow-400 border border-yellow-500/30 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span>Google Haritalar'da Aç</span>
            </a>
          </div>

          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-stone-800 relative bg-stone-900">
            <iframe 
              title="Kayseri Mobilyakent Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12461.353392437633!2d35.3857500!3d38.7456700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1103fcae13f9%3A0x6b63efc43dbca748!2sMobilyakent%2C%20Kocasinan%2FKayseri!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
