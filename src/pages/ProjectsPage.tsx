import { Sparkles, MessageCircle, Phone, Image } from 'lucide-react';
import Gallery from '../components/Gallery';
import { companyInfo } from '../data/projectsData';

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Image className="w-3.5 h-3.5" />
          <span>Gerçek Atölye ve Montaj Kareleri</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Usta Ellerden Çıkan <br />
          <span className="text-gold-gradient">
            Tamamlanan Referans Projelerimiz
          </span>
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
          Kayseri ve çevre illerde müşterilerimizin villalarına ve dairelerine özel tasarlayıp atölyemizde ürettiğimiz ve titizlikle teslim ettiğimiz çalışmalarımız.
        </p>
      </div>

      {/* Main Interactive Gallery */}
      <Gallery />

    </div>
  );
}
