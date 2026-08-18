import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7ebd8] w-full py-12 border-t border-[#e8d9c5]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col space-y-2">
          <Link to="/" className="font-poppins font-extrabold text-xl text-[#C1121F] flex items-center space-x-2">
            <span className="bg-[#C1121F] text-white text-xs font-mono-code px-2 py-1 rounded">IS</span>
            <span>{personalInfo.name}</span>
          </Link>
          <p className="text-sm text-[#574a47]">
            © {new Date().getFullYear()} Information Systems Student | {personalInfo.university}
          </p>
          <p className="text-xs text-[#574a47]">
            Bandung, Jawa Barat, Indonesia
          </p>
        </div>

        {/* Right Column: Social Links */}
        <div className="flex space-x-6 md:justify-end items-center">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#1a385c] hover:text-[#C1121F] transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#C1121F]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#1a385c] hover:text-[#C1121F] transition-colors"
          >
            <Github className="w-4 h-4 text-[#C1121F]" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#1a385c] hover:text-[#C1121F] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#C1121F]" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
