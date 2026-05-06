import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ExternalLink, Calendar, Tag, User, Globe, 
  ChevronDown, ZoomIn, CheckCircle2, Lightbulb, Target, 
  Layout, ClipboardList, TrendingUp, Users, Clock, Box,
  ChevronLeft, ChevronRight, Cpu
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showcaseData } from './data.ts';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<{[key: string]: number}>({});

  // Find project based on ID
  const project = showcaseData.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = (key: string, max: number) => {
    setCarouselIndices(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) + 1) % max
    }));
  };

  const handlePrev = (key: string, max: number) => {
    setCarouselIndices(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) - 1 + max) % max
    }));
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c105c] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyek Tidak Ditemukan</h1>
          <button onClick={() => navigate('/')} className="button-primary">Kembali</button>
        </div>
      </div>
    );
  }

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen custom-scrollbar bg-[#0c105c]">
      <div className="page-grid" />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 py-6 px-4 md:px-8 bg-[#131c91]/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white/70 hover:text-white transition-all group">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Kembali</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-1 bg-accent rounded-full hidden md:block" />
            <span className="text-sm font-bold tracking-tight uppercase text-accent">{project.meta}</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-12 pb-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div initial="hidden" animate="visible" variants={revealVariants} className="mb-16">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags?.map((tag: string) => (
                <span key={tag} className="px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest">
                  {tag}
                </span>
              ))}
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/60 uppercase tracking-widest">
                2026
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-6">
              {project.title}
            </h1>
            
            {project.subtitle && (
              <p className="text-accent/80 text-xl md:text-2xl font-medium mb-8 leading-relaxed max-w-3xl">
                {project.subtitle}
              </p>
            )}

            <p className="text-muted text-base leading-relaxed max-w-3xl opacity-80">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="glass-card rounded-[3rem] p-4 mb-24 overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden group relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c105c]/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Role & Project Info (Quick Facts) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
            {[
              { icon: <User size={20} />, label: "Role", value: project.role },
              { icon: <Users size={20} />, label: "Type", value: project.projectType || "Personal" },
              { icon: <Clock size={20} />, label: "Duration", value: project.duration },
              { icon: <Box size={20} />, label: "Tools", value: project.tech.slice(0, 3).join(", ") },
              { icon: <Cpu size={20} />, label: "Method", value: project.method || "Waterfall" }
            ].map((fact, i) => (
              <motion.div key={i} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 rounded-3xl border-white/5 flex flex-col gap-3">
                <div className="text-accent">{fact.icon}</div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">{fact.label}</p>
                  <p className="text-sm font-bold text-white/90 leading-tight">{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Content Sections */}
          <div className="space-y-32">
            {project.sections && project.sections.map((section: any, idx: number) => {
              
              if (section.type === 'gallery') {
                return (
                  <section key={idx}>
                    <div className="flex items-center gap-4 mb-12">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                        <Layout size={24} />
                      </div>
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      {section.images.map((img: any, iIdx: number) => {
                        const isCarousel = img.type === 'carousel';
                        const currentCIdx = carouselIndices[`${idx}-${iIdx}`] || 0;
                        const currentImg = isCarousel ? img.items[currentCIdx] : img;

                        return (
                          <motion.div key={iIdx} whileHover={{ y: -8 }} className="glass-card p-3 rounded-[2rem] group cursor-pointer flex flex-col">
                            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden relative bg-black/20">
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={currentImg.url}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  src={currentImg.url}
                                  alt={currentImg.caption}
                                  className="w-full h-full object-contain"
                                  onClick={() => setSelectedImage(currentImg.url)}
                                />
                              </AnimatePresence>
                              
                              {!isCarousel && (
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" onClick={() => setSelectedImage(img.url)}>
                                  <ZoomIn className="text-white" size={32} />
                                </div>
                              )}

                              {isCarousel && (
                                <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); handlePrev(`${idx}-${iIdx}`, img.items.length); }}
                                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent hover:text-[#0c105c] transition-all"
                                  >
                                    <ChevronLeft size={20} />
                                  </button>
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); handleNext(`${idx}-${iIdx}`, img.items.length); }}
                                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent hover:text-[#0c105c] transition-all"
                                  >
                                    <ChevronRight size={20} />
                                  </button>
                                </div>
                              )}
                            </div>
                            <div className="p-4 pt-6 mt-auto">
                              <div className="flex justify-between items-start gap-4">
                                <div>
                                  <h4 className="font-bold text-accent mb-1">{currentImg.caption}</h4>
                                  <p className="text-xs text-muted">{currentImg.description}</p>
                                </div>
                                {isCarousel && (
                                  <span className="text-[10px] font-mono text-white/30 bg-white/5 px-2 py-1 rounded-md shrink-0">
                                    {currentCIdx + 1} / {img.items.length}
                                  </span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </section>
                );
              }

              if (section.type === 'timeline') {
                return (
                  <section key={idx} className="relative">
                    <div className="flex items-center gap-4 mb-12">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                        <ClipboardList size={24} />
                      </div>
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {section.steps.map((step: any, sIdx: number) => (
                        <motion.div key={sIdx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: sIdx * 0.1 }} className={`glass-card rounded-3xl overflow-hidden border-white/5 transition-all ${expandedStep === sIdx ? 'ring-1 ring-accent/30' : ''}`}>
                          <button onClick={() => setExpandedStep(expandedStep === sIdx ? null : sIdx)} className="w-full p-6 flex items-center justify-between text-left">
                            <div className="flex items-center gap-6">
                              <span className="text-4xl font-black text-white/10 font-mono">0{sIdx + 1}</span>
                              <h3 className="text-xl font-bold">{step.title}</h3>
                            </div>
                            <ChevronDown className={`text-accent transition-transform duration-300 ${expandedStep === sIdx ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {expandedStep === sIdx && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-8 border-t border-white/5 mt-2">
                                <p className="text-muted leading-loose pt-6">{step.description}</p>
                                {step.details && (
                                  <ul className="mt-6 space-y-3">
                                    {step.details.map((detail: string, dIdx: number) => (
                                      <li key={dIdx} className="flex gap-3 items-center text-sm text-white/70">
                                        <CheckCircle2 size={16} className="text-accent shrink-0" />
                                        {detail}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                );
              }

              if (section.type === 'product_thinking') {
                return (
                  <section key={idx} className="bg-accent/5 p-8 md:p-16 rounded-[4rem] border border-accent/10">
                    <div className="flex items-center gap-4 mb-12">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                        <Target size={24} />
                      </div>
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                      {section.items.map((item: any, iIdx: number) => (
                        <div key={iIdx} className="space-y-6">
                          <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-bold">{item.label}</h4>
                          <div className="glass-card p-8 rounded-3xl border-accent/20 bg-accent/5">
                            <p className="font-mono text-sm leading-relaxed text-white/80 italic">"{item.content}"</p>
                            {item.criteria && (
                              <div className="mt-6 pt-6 border-t border-accent/10">
                                <p className="text-[10px] uppercase font-bold text-accent mb-4 tracking-widest">Acceptance Criteria</p>
                                <ul className="space-y-2">
                                  {item.criteria.map((c: string, cIdx: number) => (
                                    <li key={cIdx} className="text-xs font-mono text-white/50 flex gap-2">
                                      <span className="text-accent">→</span> {c}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              if (section.type === 'insight') {
                return (
                  <section key={idx}>
                    <div className="glass-card p-12 md:p-16 rounded-[3rem] border-accent/20 relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 text-accent/5">
                        <Lightbulb size={200} />
                      </div>
                      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center text-[#0c105c] shrink-0">
                          <Lightbulb size={40} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold mb-6 text-accent">{section.title}</h2>
                          <div className="text-xl md:text-2xl leading-relaxed font-medium text-white/90 italic">
                            "{section.content}"
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              }

              if (section.type === 'outcome') {
                return (
                  <section key={idx} className="text-center">
                    <h2 className="text-3xl font-bold mb-12">{section.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                      {section.stats.map((stat: any, sIdx: number) => (
                        <div key={sIdx} className="glass-card p-10 rounded-[3rem] border-accent/20 bg-gradient-to-br from-accent/10 to-transparent">
                          <div className="flex items-center justify-center gap-2 text-accent mb-4">
                            <TrendingUp size={24} />
                            <span className="text-5xl font-black">{stat.value}</span>
                          </div>
                          <p className="text-sm font-bold uppercase tracking-widest text-white/60">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-12 text-muted max-w-xl mx-auto leading-relaxed">{section.summary}</p>
                  </section>
                );
              }

              // Default Section (Text/List)
              return (
                <motion.section key={idx} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-accent" />
                    {section.title}
                  </h2>
                  
                  <div className={`grid ${section.image ? 'md:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}>
                    <div className="text-muted leading-loose text-base">
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-4">
                          {section.content.map((item: string, i: number) => (
                            <li key={i} className="flex gap-4 items-start group">
                              <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-accent/20">
                                <Target size={16} className="text-accent" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                    
                    {section.image && (
                      <div className="glass-card p-4 rounded-[2rem] group" onClick={() => setSelectedImage(section.image)}>
                        <div className="relative rounded-[1.5rem] overflow-hidden cursor-zoom-in">
                          <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.section>
              );
            })}

            {/* CTA Section */}
            <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-12 md:p-20 rounded-[4rem] text-center bg-gradient-to-br from-accent/20 to-[#0c105c]">
              <h2 className="text-4xl font-bold mb-6">Tertarik Berdiskusi Lebih Lanjut?</h2>
              <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
                Proyek ini menunjukkan bagaimana analisis terstruktur dapat diubah menjadi solusi sistem yang efisien. Mari hubungkan untuk ide-ide lainnya.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="button-primary flex items-center gap-2 group">
                   Lihat Live Demo <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/10 bg-[#0c105c] mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-white/30 text-xs font-mono tracking-widest">
          PROJECT ID: {id} — CREATIVE ARCHIVE 2026
        </div>
      </footer>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20 cursor-zoom-out">
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} src={selectedImage} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
            <button className="absolute top-10 right-10 text-white hover:text-accent transition-colors">
              <ArrowLeft size={40} className="rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
