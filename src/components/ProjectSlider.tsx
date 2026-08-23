import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle, ArrowRight, CheckCircle2, Pause, Play, Image as ImageIcon } from 'lucide-react';
import { projectsData, companyInfo } from '../data/projectsData';

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const total = projectsData.length;
  const currentProject = projectsData[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, currentIndex]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-20 bg-stone-950 relative border-t border-stone-800/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Canlı İmalat Vitrini</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Atölyemizden Çıkan <br className="hidden sm:block" />
              <span className="text-gold-gradient">
                Özel Tasarım Mobilya Seçkisi
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/projelerimiz"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-bold transition-all hover:scale-105 shadow-md"
            >
              <ImageIcon className="w-4 h-4 text-amber-400" />
              <span>Tüm Galeriyi Aç ({total} Proje)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Play/Pause toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-2xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700 transition-colors"
              title={isPlaying ? "Otomatik Geçişi Durdur" : "Otomatik Geçişi Başlat"}
              aria-label="Otomatik Geçiş Kontrolü"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Main Animated Slider Container */}
        <div 
          className="relative rounded-3xl bg-stone-900/90 border border-stone-800/90 overflow-hidden shadow-2xl backdrop-blur-xl"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Progress bar */}
          {isPlaying && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-stone-800 z-30 overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-fuchsia-500"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
            
            {/* Image Showcase Area (7 cols on lg) */}
            <div className="lg:col-span-7 relative overflow-hidden bg-stone-950 flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={currentProject.imageUrl} 
                    alt={currentProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-stone-950/20 lg:to-stone-950" />
                </motion.div>
              </AnimatePresence>

              {/* Tag Badge on Image */}
              {currentProject.tag && (
                <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-950/85 border border-amber-500/40 text-amber-300 text-xs font-bold backdrop-blur-md shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentProject.tag}</span>
                </div>
              )}

              {/* Slide Counter on Image */}
              <div className="absolute bottom-5 left-5 z-20 px-3 py-1 rounded-xl bg-stone-950/80 border border-stone-800 text-stone-300 text-xs font-bold backdrop-blur-md">
                <span>{currentIndex + 1}</span>
                <span className="text-stone-600 mx-1">/</span>
                <span>{total}</span>
              </div>
            </div>

            {/* Content & Information Area (5 cols on lg) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-stone-950/95 lg:bg-stone-950 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                      {currentProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {currentProject.title}
                    </h3>
                  </div>

                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                    {currentProject.description}
                  </p>

                  {/* Features / Material Bullets */}
                  {currentProject.features && (
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                        Öne Çıkan İmalat Özellikleri:
                      </p>
                      {currentProject.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-200">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Actions & Nav Controls */}
              <div className="pt-8 border-t border-stone-800/80 space-y-4">
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20anasayfa%20slaytındaki%20"${encodeURIComponent(currentProject.title)}"%20modeliniz%20hakkında%20fiyat%20öğrenmek%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Bu Model İçin Fiyat Al</span>
                  </a>

                  <Link
                    to="/projelerimiz"
                    className="flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 font-semibold py-3.5 px-4 rounded-2xl text-xs sm:text-sm transition-colors"
                  >
                    <span>Galeride İncele</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </Link>
                </div>

                {/* Slider Pagination Controls (Arrows + Dots) */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[220px] sm:max-w-xs scrollbar-none">
                    {projectsData.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => goToSlide(dotIdx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                          currentIndex === dotIdx 
                            ? 'w-7 bg-amber-400' 
                            : 'w-2 bg-stone-700 hover:bg-stone-500'
                        }`}
                        aria-label={`Fotoğraf ${dotIdx + 1}'e Git`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={prevSlide}
                      className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 hover:border-amber-500/40 transition-colors cursor-pointer"
                      aria-label="Önceki Fotoğraf"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 hover:border-amber-500/40 transition-colors cursor-pointer"
                      aria-label="Sonraki Fotoğraf"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-xs text-stone-400 mt-4 md:hidden">
          👉 Fotoğrafları parmağınızla sağa-sola kaydırarak inceleyebilirsiniz
        </p>

      </div>
    </section>
  );
}
