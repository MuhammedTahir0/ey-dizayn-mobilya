import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, MessageCircle, X, ChevronRight, CheckCircle, Eye } from 'lucide-react';
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'Tümü' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projeler" className="py-24 bg-stone-950 relative">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-4">
            Gerçek İmalat ve Montajlarımız
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Usta Ellerden Çıkan <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Referans Projelerimiz
            </span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Kayseri ve çevre illerde müşterilerimizin evlerine özel tasarlayıp atölyemizde ürettiğimiz ve titizlikle montajını tamamladığımız bazı çalışmalarımız.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat 
                  ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-950/50 scale-105' 
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
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-stone-900/90 border border-stone-800/80 hover:border-yellow-400/50 shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden cursor-pointer bg-stone-950"
                  onClick={() => setSelectedProject(project)}
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
                    <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-stone-900/90 text-yellow-400 border border-yellow-500/40 backdrop-blur-md">
                      {project.tag}
                    </span>
                  )}

                  {/* Zoom overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="p-3.5 rounded-2xl bg-stone-900/90 text-white border border-white/20 shadow-2xl backdrop-blur-md hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold"
                    >
                      <Eye className="w-4 h-4 text-yellow-400" />
                      <span>Büyük Görseli İncele</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-fuchsia-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-stone-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features list */}
                    {project.features && (
                      <div className="grid grid-cols-2 gap-1.5 mb-5">
                        {project.features.slice(0, 2).map((feat, fidx) => (
                          <div key={fidx} className="flex items-center gap-1.5 text-[11px] text-stone-300 truncate">
                            <CheckCircle className="w-3 h-3 text-yellow-400 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-stone-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Detaylar</span>
                      <ChevronRight className="w-3.5 h-3.5 text-yellow-400" />
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
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Contact Callout */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 border border-stone-800/80 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Beğendiğiniz veya aklınızdaki modeli bize gönderin!
          </h3>
          <p className="text-sm text-stone-400 max-w-2xl mx-auto mb-6">
            İnternetten veya sosyal medyadan bulduğunuz herhangi bir mobilya modelinin fotoğrafını WhatsApp üzerinden iletin, Erkan Usta mekanınıza ve bütçenize göre hemen projelendirsin.
          </p>
          <a
            href={`https://wa.me/${companyInfo.phoneRaw}?text=Merhaba%20Erkan%20Usta,%20istediğim%20mobilyanın%20fotoğrafını%20gönderip%20fiyat%20öğrenmek%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-950/60 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fotoğraf Gönder & Fiyat Al</span>
          </a>
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-stone-900 border border-stone-700/80 rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-950/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-700 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Side */}
              <div className="lg:w-3/5 relative bg-black min-h-[300px] sm:min-h-[420px] flex items-center justify-center">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full max-h-[70vh] object-contain"
                />
                {selectedProject.tag && (
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-stone-900/90 text-yellow-400 border border-yellow-500/40 backdrop-blur-md">
                    {selectedProject.tag}
                  </span>
                )}
              </div>

              {/* Information Side */}
              <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-stone-950">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-fuchsia-400 mb-2">
                    {selectedProject.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
                    {selectedProject.description}
                  </p>

                  {selectedProject.features && (
                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                        İmalat ve Tasarım Detayları
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-200">
                            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
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
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-4 rounded-2xl font-bold text-sm shadow-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Bu Model İçin Fiyat Al</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-2.5 text-xs font-medium text-stone-400 hover:text-white transition-colors"
                  >
                    Kapat ve Diğer Projeleri İncele
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
