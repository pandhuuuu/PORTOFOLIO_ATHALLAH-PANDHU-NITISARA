import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, RefreshCw } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';

export const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract all unique tags across projects
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projectsData.forEach((p) => {
      p.tags.forEach((t) => tagsSet.add(t));
    });
    return ['All', ...Array.from(tagsSet)];
  }, []);

  // Filter projects based on search query and selected tag
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query)) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchesTag && matchesSearch;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="pt-24 pb-16 max-w-[1280px] mx-auto px-5 md:px-8 space-y-10">
      {/* Header */}
      <SectionHeader
        eyebrow="Portfolio Showcase"
        title="Project Catalog"
        subtitle="Explore detailed case studies in Information Systems Analysis, Enterprise Data Warehousing, GIS Smart City Platforms, and Web Applications."
      />

      {/* Filter and Search Bar Container */}
      <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg shadow-sm space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#66554D] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari proyek berdasarkan judul, teknologi (React, SQL, Pentaho, UML), atau kata kunci..."
            className="w-full pl-11 pr-4 py-3 bg-[#FAF0DE] border border-[#E6D4B9] rounded-md text-sm text-[#2B1E19] placeholder-[#66554D] focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono-code text-[#66554D] hover:text-[#C1121F] bg-[#A9C6EA]/30 px-2 py-0.5 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 custom-scrollbar">
          <span className="text-xs font-bold font-mono-code text-[#66554D] uppercase tracking-wider flex items-center space-x-1 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Kategori:</span>
          </span>

          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code font-semibold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-[#C1121F] text-white shadow-sm'
                    : 'bg-[#FAF0DE] text-[#66554D] hover:bg-[#A9C6EA]/40 hover:text-[#C1121F] border border-[#E6D4B9]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Count Info */}
      <div className="flex justify-between items-center text-xs font-mono-code text-[#66554D] px-1">
        <span>
          Menampilkan <strong className="text-[#C1121F]">{filteredProjects.length}</strong> dari {projectsData.length} proyek
        </span>
        {(searchQuery || selectedTag !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('All');
            }}
            className="inline-flex items-center space-x-1 text-[#C1121F] hover:underline cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Filter</span>
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-12 rounded-lg text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FAF0DE] text-[#66554D] flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6 text-[#C1121F]" />
          </div>
          <h3 className="text-lg font-bold font-poppins text-[#2B1E19]">Tidak ada proyek yang sesuai</h3>
          <p className="text-sm text-[#66554D] max-w-md mx-auto">
            Coba ubah kata kunci pencarian atau pilih filter kategori lainnya.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('All');
            }}
            className="bg-[#C1121F] text-white px-4 py-2 rounded text-xs font-mono-code font-semibold uppercase"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </div>
  );
};
