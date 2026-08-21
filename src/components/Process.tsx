import { Ruler, PenTool, CheckCircle, Truck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { companyInfo } from '../data/projectsData';

const steps = [
  {
    id: 1,
    title: 'Yerinde Ölçü & Keşif',
    description: 'Kayseri ve çevre bölgelerde mekanınıza gelerek lazerli milimetrik ölçüleri alıyor, beklentilerinizi dinliyoruz.',
    icon: Ruler,
    badge: '1. Adım'
  },
  {
    id: 2,
    title: '3D Çizim & Renk Seçimi',
    description: 'Mekanınıza özel 3 boyutlu tasarım hazırlıyor; lake, akrilik, kulp ve ayna renklerini birlikte belirliyoruz.',
    icon: PenTool,
    badge: '2. Adım'
  },
  {
    id: 3,
    title: 'Mobilyakent Atölye İmalatı',
    description: 'Onaylanan projeyi 1. sınıf MDF, dayanıklı lake ve Blum/Samet frenli mekanizmalarla atölyemizde özenle üretiyoruz.',
    icon: CheckCircle,
    badge: '3. Adım'
  },
  {
    id: 4,
    title: 'Titiz Montaj & Teslimat',
    description: 'Söz verdiğimiz günde kendi usta ekibimizle gelerek temiz, sessiz ve kusursuz montajı gerçekleştiriyoruz.',
    icon: Truck,
    badge: '4. Adım'
  },
];

export default function Process() {
  return (
    <section id="surec" className="py-24 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Şeffaf ve Güvenilir Süreç</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Hayalinizdeki Mobilyaya <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              4 Adımda Kolayca Ulaşın
            </span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            İlk ölçüden son vidanın sıkılmasına kadar tüm aşamalarda doğrudan Erkan Usta ile muhatap olursunuz.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              key={step.id} 
              className="relative rounded-3xl bg-stone-900/80 border border-stone-800/80 p-7 flex flex-col justify-between hover:border-yellow-400/40 transition-all hover:shadow-2xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 rounded-2xl border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-stone-950 text-yellow-400 border border-yellow-500/30">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs text-stone-500">
                <span>Aşama 0{step.id} / 04</span>
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-fuchsia-950/40 via-stone-900 to-purple-950/40 border border-fuchsia-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Kayseri içi ücretsiz keşif ve ölçü randevusu almak ister misiniz?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400">
              Erkan Usta ile hemen iletişime geçin, mekana uygun çözümleri birlikte değerlendirelim.
            </p>
          </div>
          <a
            href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20ücretsiz%20keşif%20ve%20ölçü%20alımı%20için%20randevu%20oluşturmak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-yellow-400 hover:bg-yellow-300 text-stone-950 font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-xl transition-transform hover:scale-105"
          >
            Keşif Randevusu Al
          </a>
        </div>

      </div>
    </section>
  );
}
