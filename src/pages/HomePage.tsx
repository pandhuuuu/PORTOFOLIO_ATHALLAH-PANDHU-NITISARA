import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle2, Layers, Database, Code2, Brain } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { TechChip } from '../components/TechChip';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 space-y-20">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[540px]">
        {/* Left Column */}
        <div className="md:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#A9C6EA]/35 text-[#1b3454] px-3.5 py-1.5 rounded-full font-mono-code text-xs font-bold border border-[#A9C6EA]/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F] animate-ping"></span>
            <span>{personalInfo.statusBadge}</span>
          </div>

          {/* Headline */}
          <h1 className="font-poppins text-3xl md:text-5xl lg:text-6xl font-black text-[#2B1E19] leading-[1.15]">
            Hi, I'm <span className="text-[#C1121F]">{personalInfo.name}</span>. <br />
            {personalInfo.roleTitle}.
          </h1>

          {/* Bio Description */}
          <p className="text-[#66554D] text-base md:text-lg max-w-2xl leading-relaxed font-sans">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <Link
              to="/projects"
              className="bg-[#C1121F] text-white px-6 py-3.5 rounded hover:bg-[#9d0d18] transition-all font-bold text-sm flex justify-center items-center space-x-2 shadow-md hover:shadow-lg"
            >
              <span>View Selected Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/resume"
              className="border border-[#C1121F] bg-[#FDF7ED] text-[#C1121F] hover:bg-[#FAF0DE] transition-all px-6 py-3.5 rounded font-bold text-sm flex justify-center items-center space-x-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </Link>
          </div>

          {/* Key Skill Chips */}
          <div className="pt-4 flex flex-wrap gap-2">
            {personalInfo.skills.map((skill, idx) => (
              <TechChip key={idx} label={skill} variant={idx % 2 === 0 ? 'cherry' : 'sky'} />
            ))}
          </div>
        </div>

        {/* Right Column: Headshot / Visual Card */}
        <div className="md:col-span-5 flex justify-center md:justify-end relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[#C1121F]/10 rounded-full blur-3xl transform -translate-x-4 translate-y-4 z-0"></div>

          {/* Card Frame */}
          <div className="relative w-full max-w-md aspect-square bg-[#FDF7ED] border border-[#E6D4B9] rounded-xl shadow-md z-10 overflow-hidden flex flex-col group hover:border-[#C1121F] transition-colors">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Bottom Overlay Badge */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#FAF0DE]/95 backdrop-blur-md border-t border-[#E6D4B9] p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#66554D] font-bold">
                    Current Focus
                  </p>
                  <p className="text-sm font-extrabold text-[#C1121F] font-poppins">
                    Enterprise Architecture & System Design
                  </p>
                </div>
                <span className="bg-[#A9C6EA]/40 text-[#1b3454] px-2.5 py-1 rounded text-xs font-mono-code font-bold">
                  S1 SI @ Telkom Univ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="max-w-[1280px] mx-auto border-[#E6D4B9]" />

      {/* Selected Projects Showcase */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex justify-between items-end mb-10">
          <SectionHeader
            eyebrow="Portfolio Highlights"
            title="Selected Projects"
            subtitle="Academic, System Analysis, and Enterprise Development projects."
          />
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center space-x-1.5 text-[#C1121F] font-bold text-sm hover:underline group mb-8"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 border border-[#C1121F] text-[#C1121F] px-6 py-2.5 rounded font-semibold text-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-[#FAF0DE] py-16 border-y border-[#E6D4B9]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <SectionHeader
            eyebrow="Core Competencies"
            title="What I Bring to the Table"
            subtitle="Combining technical execution with business process modeling."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Card 1 */}
            <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg hover-card-glow flex flex-col shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#C1121F]/10 text-[#C1121F] flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#2B1E19] mb-2 font-poppins">System Analysis</h3>
              <p className="text-sm text-[#66554D] leading-relaxed mb-4">
                BPMN workflow mapping, AS-IS vs TO-BE process gap analysis, and comprehensive UML diagramming.
              </p>
              <ul className="text-xs text-[#66554D] space-y-1.5 font-mono-code mt-auto">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Use Case & Activity Diagram</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Sequence & Class Diagram</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg hover-card-glow flex flex-col shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#A9C6EA]/35 text-[#1b3454] flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#2B1E19] mb-2 font-poppins">Data Engineering & BI</h3>
              <p className="text-sm text-[#66554D] leading-relaxed mb-4">
                Star Schema data warehousing, Pentaho ETL pipelines, Looker Studio dashboards, and ML clustering.
              </p>
              <ul className="text-xs text-[#66554D] space-y-1.5 font-mono-code mt-auto">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Pentaho PDI & MySQL</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Looker & K-Means</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg hover-card-glow flex flex-col shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#C1121F]/10 text-[#C1121F] flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#2B1E19] mb-2 font-poppins">Full-Stack Web Dev</h3>
              <p className="text-sm text-[#66554D] leading-relaxed mb-4">
                Modern web apps built with React, TypeScript, Tailwind CSS, and REST API integrations.
              </p>
              <ul className="text-xs text-[#66554D] space-y-1.5 font-mono-code mt-auto">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>React 19 & TypeScript</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg hover-card-glow flex flex-col shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#2B1E19] mb-2 font-poppins">Product & Agile</h3>
              <p className="text-sm text-[#66554D] leading-relaxed mb-4">
                Sprint planning, User Story writing with acceptance criteria, backlog management, and prototype testing.
              </p>
              <ul className="text-xs text-[#66554D] space-y-1.5 font-mono-code mt-auto">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Scrum / Agile Framework</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Product Backlog & Epics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
