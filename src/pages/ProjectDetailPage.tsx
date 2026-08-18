import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  UserCheck,
  Layers,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Maximize2,
  Award,
  ChevronLeft
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { TechChip } from '../components/TechChip';
import { DiagramModal } from '../components/DiagramModal';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  // Modal State for Image Lightbox
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    src: string;
    caption?: string;
    description?: string;
    items?: { url: string; caption: string; description: string }[];
    index?: number;
  }>({ src: '' });

  if (!project) {
    return (
      <div className="pt-32 pb-16 max-w-[1280px] mx-auto px-5 text-center space-y-6">
        <h2 className="text-2xl font-bold font-poppins text-[#2B1E19]">Proyek Tidak Ditemukan</h2>
        <p className="text-sm text-[#66554D]">Proyek dengan ID {id} tidak tersedia dalam repositori.</p>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 bg-[#C1121F] text-white px-5 py-2.5 rounded font-mono-code text-xs uppercase font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Proyek</span>
        </Link>
      </div>
    );
  }

  // Open modal handler
  const openImageModal = (src: string, caption?: string, description?: string, items?: any[], index?: number) => {
    setModalData({ src, caption, description, items, index: index || 0 });
    setModalOpen(true);
  };

  const handleModalNext = () => {
    if (modalData.items && modalData.items.length > 0) {
      const nextIdx = ((modalData.index || 0) + 1) % modalData.items.length;
      const nextItem = modalData.items[nextIdx];
      setModalData({
        ...modalData,
        index: nextIdx,
        src: nextItem.url,
        caption: nextItem.caption,
        description: nextItem.description
      });
    }
  };

  const handleModalPrev = () => {
    if (modalData.items && modalData.items.length > 0) {
      const prevIdx = ((modalData.index || 0) - 1 + modalData.items.length) % modalData.items.length;
      const prevItem = modalData.items[prevIdx];
      setModalData({
        ...modalData,
        index: prevIdx,
        src: prevItem.url,
        caption: prevItem.caption,
        description: prevItem.description
      });
    }
  };

  // Find next/prev project for footer navigation
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = projectsData[currentIndex - 1];
  const nextProject = projectsData[currentIndex + 1];

  return (
    <div className="pt-24 pb-16 max-w-[1280px] mx-auto px-5 md:px-8 space-y-12">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center space-x-2 text-[#C1121F] hover:text-[#9d0d18] text-sm font-semibold transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Katalog Proyek</span>
        </button>
      </div>

      {/* Project Header Hero */}
      <section className="bg-[#FDF7ED] border border-[#E6D4B9] p-8 rounded-lg shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6D4B9] pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-[#A9C6EA]/40 text-[#1b3454] font-mono-code text-xs px-3 py-1 rounded-full font-semibold border border-[#A9C6EA]/60">
                {project.meta || 'Done'}
              </span>
              <span className="text-xs font-mono-code text-[#66554D]">{project.projectType}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black font-poppins text-[#2B1E19] leading-tight">
              {project.title}
            </h1>
            <p className="text-[#66554D] text-base md:text-lg max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* External Link CTA */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C1121F] text-white hover:bg-[#9d0d18] px-5 py-3 rounded font-semibold text-xs font-mono-code uppercase tracking-wider inline-flex items-center space-x-2 shadow-md transition-all shrink-0"
            >
              <span>{project.ctaTitle || 'Buka Link / Prototype'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#FAF0DE] p-4 rounded-md border border-[#E6D4B9] text-xs font-mono-code">
          <div>
            <span className="text-[#66554D] block mb-1 uppercase tracking-wider">Peran:</span>
            <span className="font-bold text-[#2B1E19] flex items-center space-x-1">
              <UserCheck className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>{project.role}</span>
            </span>
          </div>

          <div>
            <span className="text-[#66554D] block mb-1 uppercase tracking-wider">Durasi:</span>
            <span className="font-bold text-[#2B1E19] flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>{project.duration}</span>
            </span>
          </div>

          <div>
            <span className="text-[#66554D] block mb-1 uppercase tracking-wider">Metodologi:</span>
            <span className="font-bold text-[#2B1E19] flex items-center space-x-1">
              <Layers className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>{project.method}</span>
            </span>
          </div>

          <div>
            <span className="text-[#66554D] block mb-1 uppercase tracking-wider">Kategori:</span>
            <span className="font-bold text-[#C1121F]">{project.tags.join(', ')}</span>
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#66554D]">
            Teknologi & Tooling:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <TechChip key={idx} label={t} variant={idx % 2 === 0 ? 'cherry' : 'sky'} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      {project.image && (
        <div className="bg-[#FDF7ED] border border-[#E6D4B9] rounded-lg p-2 overflow-hidden shadow-sm relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-md cursor-pointer group-hover:opacity-95 transition-opacity"
            onClick={() => openImageModal(project.image, project.title, project.summary)}
          />
          <button
            onClick={() => openImageModal(project.image, project.title, project.summary)}
            className="absolute bottom-6 right-6 bg-[#FAF0DE]/90 backdrop-blur-sm text-[#2B1E19] px-3.5 py-2 rounded-md font-mono-code text-xs font-bold flex items-center space-x-1.5 shadow-md border border-[#E6D4B9] hover:bg-[#FAF0DE]"
          >
            <Maximize2 className="w-4 h-4 text-[#C1121F]" />
            <span>Perbesar Gambar</span>
          </button>
        </div>
      )}

      {/* Summary Bullets */}
      {project.bullets && project.bullets.length > 0 && (
        <section className="bg-[#FAF0DE] border border-[#E6D4B9] p-6 rounded-lg space-y-4">
          <h3 className="text-lg font-bold font-poppins text-[#2B1E19] flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#C1121F]" />
            <span>Poin Utama Proyek</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.bullets.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-start space-x-2.5 text-sm text-[#66554D] bg-[#FDF7ED] p-3 rounded border border-[#E6D4B9]">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Render Project Sections */}
      <div className="space-y-12">
        {project.sections.map((section, sIdx) => {
          return (
            <div key={sIdx} className="bg-[#FDF7ED] border border-[#E6D4B9] p-8 rounded-lg shadow-sm space-y-6">
              {section.title && (
                <h3 className="text-xl font-bold font-poppins text-[#2B1E19] pb-3 border-b border-[#E6D4B9] flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#C1121F]"></span>
                  <span>{section.title}</span>
                </h3>
              )}

              {/* Default Section renderer */}
              {section.type === 'default' && (
                <div className="space-y-4">
                  {typeof section.content === 'string' && (
                    <p className="text-[#66554D] text-base leading-relaxed">{section.content}</p>
                  )}

                  {Array.isArray(section.content) && (
                    <ul className="space-y-2">
                      {section.content.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start space-x-2.5 text-sm text-[#66554D]">
                          <ChevronRight className="w-4 h-4 text-[#C1121F] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.image && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-[#E6D4B9]">
                      <img
                        src={section.image}
                        alt={section.title || 'Section illustration'}
                        className="w-full h-auto object-cover cursor-pointer"
                        onClick={() => openImageModal(section.image!, section.title)}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Timeline SDLC Section renderer */}
              {section.type === 'timeline' && section.steps && (
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-[#E6D4B9]">
                  {section.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="relative pl-10 space-y-2">
                      {/* Timeline Dot */}
                      <div className="absolute left-2.5 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-[#C1121F] text-white flex items-center justify-center font-mono-code text-xs font-bold shadow-sm">
                        {stepIdx + 1}
                      </div>

                      <h4 className="text-lg font-bold font-poppins text-[#2B1E19]">{step.title}</h4>
                      <p className="text-sm text-[#66554D]">{step.description}</p>

                      {step.details && step.details.length > 0 && (
                        <div className="bg-[#FAF0DE] p-4 rounded border border-[#E6D4B9] space-y-1.5 mt-2">
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center space-x-2 text-xs text-[#66554D] font-mono-code">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F]"></span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Gallery Renderer */}
              {section.type === 'gallery' && section.images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.images.map((gItem, gIdx) => {
                    if (gItem.type === 'carousel' && gItem.items) {
                      return (
                        <div key={gIdx} className="md:col-span-2 bg-[#FAF0DE] border border-[#E6D4B9] p-6 rounded-lg space-y-4">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold text-[#2B1E19] text-sm font-mono-code">
                              Interactive Diagram Set ({gItem.items.length} Diagram Activity/Sequence)
                            </h4>
                            <button
                              onClick={() => openImageModal(gItem.items![0].url, gItem.items![0].caption, gItem.items![0].description, gItem.items, 0)}
                              className="text-xs font-mono-code text-[#C1121F] hover:underline font-bold"
                            >
                              Buka Mode Carousel ({gItem.items.length})
                            </button>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {gItem.items.slice(0, 5).map((cSubItem, cIdx) => (
                              <div
                                key={cIdx}
                                className="bg-[#FDF7ED] border border-[#E6D4B9] p-2 rounded cursor-pointer hover:border-[#C1121F] transition-all group"
                                onClick={() => openImageModal(cSubItem.url, cSubItem.caption, cSubItem.description, gItem.items, cIdx)}
                              >
                                <img
                                  src={cSubItem.url}
                                  alt={cSubItem.caption}
                                  className="w-full h-24 object-cover rounded mb-1"
                                />
                                <p className="text-[10px] font-mono-code font-semibold text-[#2B1E19] truncate">
                                  {cSubItem.caption}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={gIdx}
                        className="bg-[#FAF0DE] border border-[#E6D4B9] p-4 rounded-lg space-y-3 cursor-pointer hover:border-[#C1121F] transition-colors group"
                        onClick={() => openImageModal(gItem.url!, gItem.caption, gItem.description)}
                      >
                        {gItem.url && (
                          <div className="relative rounded overflow-hidden">
                            <img
                              src={gItem.url}
                              alt={gItem.caption || 'Diagram'}
                              className="w-full h-48 object-cover rounded group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-[#2B1E19]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="bg-[#FDF7ED] text-[#2B1E19] text-xs font-mono-code font-bold px-3 py-1.5 rounded shadow">
                                Klik untuk memperbesar
                              </span>
                            </div>
                          </div>
                        )}
                        {gItem.caption && <h4 className="font-bold font-poppins text-[#2B1E19] text-sm">{gItem.caption}</h4>}
                        {gItem.description && <p className="text-xs text-[#66554D]">{gItem.description}</p>}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Product Thinking & User Stories Renderer */}
              {section.type === 'product_thinking' && section.epics && (
                <div className="space-y-6">
                  {section.epics.map((epic, eIdx) => (
                    <div key={eIdx} className="bg-[#FAF0DE] border border-[#E6D4B9] p-6 rounded-lg space-y-4">
                      <div className="border-b border-[#E6D4B9] pb-3">
                        <h4 className="text-base font-bold font-poppins text-[#C1121F]">{epic.title}</h4>
                        <p className="text-xs text-[#66554D]">{epic.description}</p>
                      </div>

                      <div className="space-y-3">
                        {epic.stories.map((story, sSubIdx) => (
                          <div key={sSubIdx} className="bg-[#FDF7ED] border border-[#E6D4B9] p-4 rounded space-y-2">
                            <span className="bg-[#A9C6EA]/40 text-[#1b3454] text-[10px] font-mono-code font-bold px-2 py-0.5 rounded">
                              {story.label}
                            </span>
                            <p className="text-xs text-[#2B1E19] font-medium leading-relaxed">{story.content}</p>

                            {story.criteria && story.criteria.length > 0 && (
                              <div className="pt-2 border-t border-[#E6D4B9] space-y-1">
                                <span className="text-[10px] font-mono-code font-bold uppercase text-[#66554D]">
                                  Acceptance Criteria:
                                </span>
                                <ul className="space-y-1">
                                  {story.criteria.map((crit, cIdx) => (
                                    <li key={cIdx} className="text-[11px] text-[#66554D] flex items-center space-x-1.5">
                                      <span className="w-1 h-1 rounded-full bg-[#10b981]"></span>
                                      <span>{crit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Insight Renderer */}
              {section.type === 'insight' && (
                <div className="bg-[#C1121F]/10 border-l-4 border-[#C1121F] p-5 rounded space-y-2">
                  <h4 className="text-sm font-bold font-poppins text-[#C1121F] flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#C1121F]" />
                    <span>Pembelajaran Utama / Key Learning</span>
                  </h4>
                  <p className="text-xs md:text-sm text-[#2B1E19] leading-relaxed font-medium">
                    {section.content as string}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Navigation: Next / Prev Project */}
      <div className="pt-8 border-t border-[#E6D4B9] flex flex-col sm:flex-row justify-between gap-4">
        {prevProject ? (
          <Link
            to={`/project/${prevProject.id}`}
            className="flex items-center space-x-3 bg-[#FDF7ED] border border-[#E6D4B9] p-4 rounded-lg hover-card-glow text-left flex-1"
          >
            <ChevronLeft className="w-5 h-5 text-[#C1121F]" />
            <div>
              <span className="text-[10px] font-mono-code uppercase text-[#66554D] block">Proyek Sebelumnya</span>
              <span className="text-sm font-bold font-poppins text-[#2B1E19]">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}

        {nextProject && (
          <Link
            to={`/project/${nextProject.id}`}
            className="flex items-center justify-between bg-[#FDF7ED] border border-[#E6D4B9] p-4 rounded-lg hover-card-glow text-right flex-1"
          >
            <div>
              <span className="text-[10px] font-mono-code uppercase text-[#66554D] block">Proyek Selanjutnya</span>
              <span className="text-sm font-bold font-poppins text-[#2B1E19]">{nextProject.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#C1121F]" />
          </Link>
        )}
      </div>

      {/* Lightbox Diagram Modal */}
      <DiagramModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalData.src}
        caption={modalData.caption}
        description={modalData.description}
        currentIndex={modalData.index}
        totalCount={modalData.items?.length}
        onNext={modalData.items && modalData.items.length > 1 ? handleModalNext : undefined}
        onPrev={modalData.items && modalData.items.length > 1 ? handleModalPrev : undefined}
      />
    </div>
  );
};
