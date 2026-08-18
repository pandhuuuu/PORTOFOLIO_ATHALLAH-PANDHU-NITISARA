import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-[#FFF6E8]/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-[#e8d9c5]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex justify-between items-center h-16">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2 font-poppins font-bold text-xl text-[#C1121F] tracking-normal">
          <div className="w-8 h-8 rounded-lg bg-[#C1121F] text-white flex items-center justify-center font-mono-code font-bold text-sm shadow-sm">
            IS
          </div>
          <span>Portfolio</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors relative py-1 ${
                  active
                    ? 'text-[#C1121F] border-b-2 border-[#C1121F]'
                    : 'text-[#574a47] hover:text-[#C1121F]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/contact"
            className="bg-[#C1121F] text-white hover:bg-[#9d0d18] px-4 py-2 rounded text-xs font-mono-code font-bold tracking-wider uppercase inline-flex items-center space-x-1.5 transition-colors shadow-sm"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1c1917] p-2 hover:bg-[#A9C6EA]/30 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF6E8] border-b border-[#e8d9c5] px-5 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                  active
                    ? 'bg-[#C1121F]/10 text-[#C1121F]'
                    : 'text-[#574a47] hover:bg-[#A9C6EA]/30'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#C1121F] text-white py-2.5 rounded text-center text-xs font-mono-code font-bold uppercase block shadow-sm"
            >
              Hire Me / Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
