import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Clock, UserCheck } from 'lucide-react';
import { Project } from '../types';
import { TechChip } from './TechChip';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#FDF7ED] border border-[#E6D4B9] rounded-lg p-6 flex flex-col hover-card-glow group h-full shadow-sm">
      {/* Thumbnail Container */}
      <div className="w-full h-52 bg-[#FAF0DE] rounded-md mb-6 overflow-hidden border border-[#E6D4B9] relative group-hover:border-[#C1121F]/40 transition-colors">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute top-3 right-3 bg-[#FDF7ED]/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-mono-code font-bold text-[#C1121F] shadow-sm border border-[#E6D4B9]">
          {project.meta || 'Project'}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center space-x-3 text-xs text-[#66554D] mb-2 font-mono-code">
          <span className="inline-flex items-center space-x-1">
            <UserCheck className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>{project.role}</span>
          </span>
          <span>•</span>
          <span className="inline-flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>{project.duration}</span>
          </span>
        </div>

        <h3 className="font-poppins text-xl font-extrabold text-[#2B1E19] mb-2 group-hover:text-[#C1121F] transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-[#66554D] text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {project.summary}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 4).map((tech, idx) => (
            <TechChip key={idx} label={tech} variant={idx % 2 === 0 ? 'cherry' : 'sky'} />
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-mono-code text-[#66554D] self-center font-bold">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer Link */}
        <div className="pt-4 border-t border-[#E6D4B9] flex justify-between items-center mt-auto">
          <span className="text-xs font-semibold text-[#66554D] flex items-center space-x-1">
            <Layers className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>{project.projectType}</span>
          </span>

          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center space-x-1 text-[#C1121F] font-bold text-sm hover:underline group/btn"
          >
            <span>Detail Proyek</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
