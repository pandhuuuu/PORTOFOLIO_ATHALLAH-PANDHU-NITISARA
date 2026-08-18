import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 max-w-[1280px] mx-auto px-5 md:px-8 space-y-12">
      {/* Header */}
      <SectionHeader
        eyebrow="Get In Touch"
        title="Contact & Collaboration"
        subtitle="Membutuhkan konsultasi sistem informasi, perancangan diagram UML/BPMN, atau tertarik untuk merekrut magang/proyek?"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-[#FDF7ED] border border-[#E6D4B9] p-8 rounded-lg shadow-sm space-y-6">
          <h3 className="text-xl font-bold font-poppins text-[#2B1E19] pb-3 border-b border-[#E6D4B9] flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-[#C1121F]" />
            <span>Kirim Pesan</span>
          </h3>

          {submitted ? (
            <div className="bg-[#10b981]/10 border border-[#10b981]/30 p-6 rounded-lg text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-poppins text-[#2B1E19]">Pesan Berhasil Terkirim!</h4>
              <p className="text-sm text-[#66554D]">
                Terima kasih telah menghubungi, {formData.name}. Saya akan merespon pesan Anda secepatnya melalui email ({formData.email}).
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="bg-[#C1121F] text-white px-4 py-2 rounded text-xs font-mono-code font-bold uppercase mt-2"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono-code uppercase text-[#66554D]">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3.5 py-2.5 bg-[#FAF0DE] border border-[#E6D4B9] rounded text-sm text-[#2B1E19] focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono-code uppercase text-[#66554D]">
                    Alamat Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF0DE] border border-[#E6D4B9] rounded text-sm text-[#2B1E19] focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold font-mono-code uppercase text-[#66554D]">
                  Subjek Pesan
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Tawaran Magang / Proyek Perancangan Sistem"
                  className="w-full px-3.5 py-2.5 bg-[#FAF0DE] border border-[#E6D4B9] rounded text-sm text-[#2B1E19] focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold font-mono-code uppercase text-[#66554D]">
                  Detail Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan detail kebutuhan atau pertanyaan Anda di sini..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF0DE] border border-[#E6D4B9] rounded text-sm text-[#2B1E19] focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C1121F] hover:bg-[#9d0d18] text-white py-3 rounded font-mono-code text-xs uppercase font-bold tracking-wider flex items-center justify-center space-x-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Kirim Pesan Sekarang</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FDF7ED] border border-[#E6D4B9] p-6 rounded-lg shadow-sm space-y-4">
            <h4 className="font-bold font-poppins text-[#2B1E19] text-base border-b border-[#E6D4B9] pb-3">
              Informasi Kontak Langsung
            </h4>

            <div className="space-y-4 text-sm text-[#66554D]">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#C1121F]/10 text-[#C1121F] rounded">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code uppercase text-[#66554D] block">Email Utama</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-bold text-[#2B1E19] hover:text-[#C1121F]">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#C1121F]/10 text-[#C1121F] rounded">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code uppercase text-[#66554D] block">Lokasi Dominan</span>
                  <span className="font-bold text-[#2B1E19]">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Platforms Card */}
          <div className="bg-[#FAF0DE] border border-[#E6D4B9] p-6 rounded-lg space-y-3">
            <h4 className="font-bold font-poppins text-[#2B1E19] text-sm">Media Sosial & Portofolio Kodifikasi</h4>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FDF7ED] border border-[#E6D4B9] p-3 rounded text-center hover:border-[#C1121F] transition-colors group block shadow-sm"
              >
                <Linkedin className="w-5 h-5 text-[#C1121F] group-hover:scale-110 transition-transform mx-auto mb-1" />
                <span className="text-xs font-mono-code font-bold text-[#2B1E19]">LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FDF7ED] border border-[#E6D4B9] p-3 rounded text-center hover:border-[#C1121F] transition-colors group block shadow-sm"
              >
                <Github className="w-5 h-5 text-[#C1121F] group-hover:scale-110 transition-transform mx-auto mb-1" />
                <span className="text-xs font-mono-code font-bold text-[#2B1E19]">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
