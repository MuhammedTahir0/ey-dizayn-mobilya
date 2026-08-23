import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, MessageCircle, X, ChevronRight, ChevronLeft, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import type { Category, Project } from '../types';
import { projectsData, companyInfo } from '../data/projectsData';

const categories: Category[] = [
  'Tümü',
  'Mutfak Dolapları',
  'Yatak Odası & Lambiri',
  'Giyinme Odası & Gardırop',
  'TV Ünitesi & Konsol',
  'Dresuar & Makyaj Masası'
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>('Tümü');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects = activeTab === 'Tümü' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  const selectedProject = selectedIndex !== null ? projectsData[selectedIndex] : null;

  const nextProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projectsData.length);
    }
  };

  const prevProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projectsData.length) % projectsData.length);
    }
  };

  // Keyboard navigation for modal (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="projeler" className="py-24 bg-stone-950 relative">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gerçek İmalat ve Montajlarımız</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Usta Ellerden Çıkan <br className="hidden sm:block" />
            <span className="text-gold-gradient">
              Referans Projelerimiz
            </span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Kayseri ve çevre illerde müşterilerimizin evlerine özel tasarlayıp atölyemizde ürettiğimiz ve titizlikle montajını tamamladığımız çalışmalarımız.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat 
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 font-bold shadow-lg shadow-amber-950/40 scale-105' 
                  : 'bg-stone-900/90 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const originalIndex = projectsData.findIndex(p => p.id === project.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  key={project.id}
                  className="group relative rounded-3xl overflow-hidden bg-stone-900/90 border border-stone-800/80 hover:border-amber-400/50 shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div 
                    className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden cursor-pointer bg-stone-950"
                    onClick={() => setSelectedIndex(originalIndex)}
                  >
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Tag badge */}
                    {project.tag && (
                      <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-stone-950/90 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                        {project.tag}
                      </span>
                    )}

                    {/* Zoom overlay button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(originalIndex);
                        }}
                        className="p-3.5 rounded-2xl bg-stone-900/95 text-white border border-amber-500/30 shadow-2xl backdrop-blur-md hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold"
                      >
                        <Eye className="w-4 h-4 text-amber-400" />
                        <span>Detaylı İncele</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-stone-400 line-clamp-2 leading-relaxed mb-4 font-light">
                        {project.description}
                      </p>

                      {/* Features list */}
                      {project.features && (
                        <div className="grid grid-cols-2 gap-1.5 mb-5">
                          {project.features.slice(0, 2).map((feat, fidx) => (
                            <div key={fidx} className="flex items-center gap-1.5 text-[11px] text-stone-300 truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedIndex(originalIndex)}
                        className="text-xs font-semibold text-stone-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>İncele</span>
                        <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                      </button>

                      <a
                        href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20web%20sitenizdeki%20"${encodeURIComponent(project.title)}"%20adlı%20projeniz%20hakkında%20fiyat%20ve%20detay%20almak%20istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Fiyat Sor</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Contact Callout */}
        <div className="mt-16 text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 border border-stone-800/80 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Beğendiğiniz veya aklınızdaki modeli bize gönderin!
          </h3>
          <p className="text-sm text-stone-400 max-w-2xl mx-auto mb-6 font-light">
            İnternetten veya sosyal medyadan bulduğunuz herhangi bir mobilya modelinin fotoğrafını WhatsApp üzerinden iletin, Erkan Usta mekanınıza ve bütçenize göre hemen projelendirsin.
          </p>
          <a
            href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20istediğim%20mobilyanın%20fotoğrafını%20gönderip%20fiyat%20öğrenmek%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-7 py-3.5 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-950/60 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fotoğraf Gönder & Fiyat Al</span>
          </a>
        </div>

      </div>

      {/* Lightbox / Details Modal with Next/Prev and Info */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-stone-900 border border-stone-700/80 rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-stone-950/85 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-700 transition-colors cursor-pointer"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Side with Prev/Next Navigation */}
              <div className="lg:w-3/5 relative bg-black min-h-[320px] sm:min-h-[440px] flex items-center justify-center select-none">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full max-h-[75vh] object-contain"
                />

                {/* Left / Right Carousel Controls inside Modal */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevProject();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-950/80 hover:bg-stone-800 text-white border border-stone-700 transition-transform hover:scale-110 cursor-pointer shadow-xl z-20"
                  aria-label="Önceki Proje"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextProject();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-950/80 hover:bg-stone-800 text-white border border-stone-700 transition-transform hover:scale-110 cursor-pointer shadow-xl z-20"
                  aria-label="Sonraki Proje"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Tag & Counter */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  {selectedProject.tag && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-stone-950/90 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                      {selectedProject.tag}
                    </span>
                  )}
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-stone-950/90 text-stone-300 border border-stone-700 backdrop-blur-md">
                    {(selectedIndex ?? 0) + 1} / {projectsData.length}
                  </span>
                </div>
              </div>

              {/* Information Side */}
              <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-stone-950">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                    {selectedProject.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
                    {selectedProject.description}
                  </p>

                  {selectedProject.features && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                        İmalat ve Tasarım Detayları:
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-stone-800 space-y-3">
                  <a
                    href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20"${encodeURIComponent(selectedProject.title)}"%20modelinden%20evime/ofisime%20yaptırmak%20istiyorum.%20Ölçü%20ve%20fiyat%20detaylarını%20görüşebilir%20miyiz?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-3.5 px-4 rounded-2xl font-bold text-sm shadow-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Bu Model İçin Fiyat Al</span>
                  </a>

                  <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
                    <button
                      onClick={prevProject}
                      className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Önceki Proje</span>
                    </button>
                    <button
                      onClick={nextProject}
                      className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Sonraki Proje</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
