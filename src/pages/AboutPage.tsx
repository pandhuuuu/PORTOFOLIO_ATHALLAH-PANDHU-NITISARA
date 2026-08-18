import React from 'react';
import { GraduationCap, CheckCircle2, MapPin, Mail, Calendar, ChevronRight } from 'lucide-react';
import { personalInfo, education, experiences, skillCategories } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { TechChip } from '../components/TechChip';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 max-w-[1280px] mx-auto px-5 md:px-8 space-y-16">
      {/* Header Section */}
      <SectionHeader
        eyebrow="Academic & Professional Profile"
        title="About Athallah Pandhu"
        subtitle="Passionate Information Systems student dedicated to bridging the gap between business needs and technical solutions."
      />

      {/* Main Grid: Bio & Academic Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio Narrative */}
        <div className="lg:col-span-7 bg-[#FDF7ED] border border-[#E6D4B9] p-8 rounded-lg space-y-6 shadow-sm">
          <h3 className="text-xl font-bold font-poppins text-[#2B1E19] border-b border-[#E6D4B9] pb-4">
            System Analysis & Engineering Philosophy
          </h3>
          <p className="text-[#66554D] leading-relaxed">
            Sebagai mahasiswa Sistem Informasi di Telkom University, fokus utama saya adalah merancang dan menganalisis sistem perangkat lunak yang tidak hanya canggih secara teknis, tetapi juga selaras dengan tujuan strategis organisasi.
          </p>
          <p className="text-[#66554D] leading-relaxed">
            Pengalaman praktikum dan proyek akademis saya mencakup seluruh tahapan System Development Life Cycle (SDLC) — mulai dari *requirements gathering*, pemodelan proses bisnis AS-IS/TO-BE dengan BPMN & UML, hingga perancangan pipa data ETL dan pengembangan aplikasi antarmuka web modern.
          </p>

          <div className="bg-[#FAF0DE] p-5 rounded-md border-l-4 border-[#C1121F] space-y-2">
            <h4 className="text-sm font-bold font-poppins text-[#C1121F]">Prinsip Kerja Utama:</h4>
            <p className="text-xs text-[#66554D] leading-relaxed">
              "Kunci dari sistem informasi yang sukses terletak pada kejelasan spesifikasi kebutuhan (*requirements engineering*), arsitektur data yang kokoh, serta komunikasi yang transparan antara pemangku kepentingan bisnis dan tim teknis."
            </p>
          </div>
        </div>

        {/* Right Column: Education Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-[#C1121F]">
              <div className="p-3 bg-[#C1121F]/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-[#C1121F]" />
              </div>
              <div>
                <h4 className="font-bold font-poppins text-[#2B1E19] text-lg">{education.institution}</h4>
                <p className="text-xs font-mono-code text-[#66554D]">{education.degree}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E6D4B9] space-y-2">
              <div className="flex justify-between items-center text-xs text-[#66554D]">
                <span className="font-mono-code">IPK / GPA:</span>
                <span className="font-bold text-[#1b3454] bg-[#A9C6EA]/40 px-2 py-0.5 rounded font-mono-code">
                  {education.gpa}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#66554D]">
                <span className="font-mono-code">Periode:</span>
                <span>{education.period}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E6D4B9] space-y-2">
              <p className="text-xs font-bold text-[#2B1E19] uppercase tracking-wider font-mono-code">
                Highlight Akademis:
              </p>
              <ul className="space-y-1.5 text-xs text-[#66554D]">
                {education.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-[#FAF0DE] border border-[#E6D4B9] p-6 rounded-lg space-y-3">
            <h4 className="font-bold font-poppins text-[#2B1E19] text-sm">Informasi Kontak</h4>
            <div className="space-y-2 text-xs text-[#66554D] font-mono-code">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C1121F]" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C1121F]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Skill Matrix */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Technical Skill Set"
          title="Skill Matrix & Competencies"
          subtitle="Categorized breakdown of technical tools, modeling notations, and frameworks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => (
            <div key={idx} className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg hover-card-glow shadow-sm">
              <h4 className="font-bold font-poppins text-[#2B1E19] text-base mb-4 pb-2 border-b border-[#E6D4B9] flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-xs font-mono-code text-[#C1121F] bg-[#C1121F]/10 px-2 py-0.5 rounded">
                  {group.items.length} Skills
                </span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <TechChip key={sIdx} label={skill} variant={sIdx % 2 === 0 ? 'cherry' : 'sky'} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Projects Timeline */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Practical Experience"
          title="Academic & Project Timeline"
          subtitle="Key technical leadership and development roles in recent projects."
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg hover-card-glow shadow-sm space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#E6D4B9] pb-3">
                <div>
                  <h4 className="font-bold font-poppins text-lg text-[#2B1E19]">{exp.role}</h4>
                  <p className="text-sm font-semibold text-[#C1121F]">{exp.organization}</p>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono-code text-[#66554D] bg-[#FAF0DE] px-3 py-1.5 rounded self-start md:self-auto border border-[#E6D4B9]">
                  <Calendar className="w-3.5 h-3.5 text-[#C1121F]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-[#66554D] leading-relaxed">{exp.description}</p>

              <ul className="space-y-1.5 text-xs text-[#66554D] pt-2">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#C1121F] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
