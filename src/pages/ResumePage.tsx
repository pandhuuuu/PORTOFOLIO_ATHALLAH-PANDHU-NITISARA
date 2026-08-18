import React from 'react';
import { Download, GraduationCap, Briefcase, Award, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { personalInfo, education, experiences, skillCategories, certifications } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { TechChip } from '../components/TechChip';

export const ResumePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-16 max-w-[1280px] mx-auto px-5 md:px-8 space-y-12">
      {/* Header & Download Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E6D4B9] pb-8">
        <SectionHeader
          eyebrow="Curriculum Vitae"
          title="Resume / CV"
          subtitle="Ringkasan kualifikasi akademis, proyek teknis, dan keahlian Sistem Informasi."
        />

        <button
          onClick={handlePrint}
          className="bg-[#C1121F] text-white hover:bg-[#9d0d18] px-6 py-3 rounded font-mono-code text-xs uppercase font-bold inline-flex items-center space-x-2 shadow-md transition-colors shrink-0 self-start md:self-auto cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Cetak / Unduh PDF</span>
        </button>
      </div>

      {/* Main Resume Container */}
      <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-8 md:p-12 rounded-lg shadow-sm space-y-10">
        {/* Profile Header */}
        <div className="border-b border-[#E6D4B9] pb-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black font-poppins text-[#2B1E19]">{personalInfo.name}</h1>
              <p className="text-base font-bold text-[#C1121F] font-poppins">{personalInfo.major} — {personalInfo.university}</p>
            </div>
            <div className="text-xs font-mono-code text-[#66554D] space-y-1">
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C1121F]" />
                <span>{personalInfo.email}</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#C1121F]" />
                <span>{personalInfo.location}</span>
              </p>
            </div>
          </div>
          <p className="text-sm text-[#66554D] leading-relaxed max-w-4xl">
            {personalInfo.bio}
          </p>
        </div>

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold font-poppins text-[#2B1E19] uppercase tracking-wider font-mono-code border-b border-[#E6D4B9] pb-2 flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-[#C1121F]" />
            <span>Pendidikan (Education)</span>
          </h2>
          <div className="bg-[#FAF0DE] border border-[#E6D4B9] p-6 rounded-md space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold font-poppins text-base text-[#2B1E19]">{education.institution}</h3>
              <span className="text-xs font-mono-code text-[#66554D]">{education.period}</span>
            </div>
            <p className="text-sm font-semibold text-[#C1121F]">{education.degree} — IPK: {education.gpa}</p>
            <ul className="space-y-1.5 text-xs text-[#66554D] pt-1">
              {education.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience & Projects Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold font-poppins text-[#2B1E19] uppercase tracking-wider font-mono-code border-b border-[#E6D4B9] pb-2 flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-[#C1121F]" />
            <span>Pengalaman Proyek & Kepemimpinan Akademis</span>
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold font-poppins text-base text-[#2B1E19]">{exp.role}</h3>
                  <span className="text-xs font-mono-code text-[#66554D]">{exp.period}</span>
                </div>
                <p className="text-xs font-bold text-[#C1121F] font-mono-code">{exp.organization}</p>
                <p className="text-xs text-[#66554D]">{exp.description}</p>
                <ul className="space-y-1 text-xs text-[#66554D]">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] mt-1.5 shrink-0"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold font-poppins text-[#2B1E19] uppercase tracking-wider font-mono-code border-b border-[#E6D4B9] pb-2">
            Keahlian Teknis (Skill Matrix)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-[#FAF0DE] border border-[#E6D4B9] p-4 rounded space-y-2">
                <h4 className="font-bold text-xs text-[#2B1E19] uppercase tracking-wider font-mono-code">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, iIdx) => (
                    <TechChip key={iIdx} label={item} variant={iIdx % 2 === 0 ? 'cherry' : 'sky'} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold font-poppins text-[#2B1E19] uppercase tracking-wider font-mono-code border-b border-[#E6D4B9] pb-2 flex items-center space-x-2">
            <Award className="w-5 h-5 text-[#C1121F]" />
            <span>Sertifikasi & Kualifikasi</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-[#FAF0DE] border border-[#E6D4B9] p-4 rounded space-y-1">
                <h4 className="font-bold text-xs text-[#2B1E19]">{cert.title}</h4>
                <p className="text-[11px] text-[#66554D]">{cert.issuer}</p>
                <span className="text-[10px] font-mono-code text-[#C1121F]">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
