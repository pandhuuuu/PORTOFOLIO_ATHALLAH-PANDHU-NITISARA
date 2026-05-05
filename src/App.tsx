import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Instagram,
  ChevronUp,
  Menu,
  X,
  ExternalLink,
  Code,
  Layout,
  Zap
} from 'lucide-react';

const showcaseData = [
  {
    title: "Modul Ajar Berdiferensiasi",
    meta: "Perencanaan",
    summary: "Rancangan pembelajaran yang menyatukan tujuan, aktivitas, dan asesmen dalam alur yang lebih rapi dan mudah dipresentasikan.",
    bullets: [
      "Struktur belajar jelas dari awal sampai penutup.",
      "Visual isi karya terasa lebih profesional.",
      "Cocok dipakai untuk portfolio, presentasi, atau lampiran tugas."
    ],
    image: "https://images.unsplash.com/photo-1454165833762-010214946022?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(203, 255, 156, 0.22)",
    link: "https://google.com"
  },
  {
    title: "Media Interaktif Kontekstual",
    meta: "Media",
    summary: "Karya media yang bisa ditampilkan sebagai sorotan utama dengan spotlight card yang lebih hidup dan modern.",
    bullets: [
      "Preview berganti secara interaktif saat item dipilih.",
      "Cocok menampilkan poster, media ajar, atau infografik.",
      "Memberi kesan portfolio yang aktif, bukan sekadar statis."
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(142, 255, 231, 0.22)",
    link: "https://google.com"
  },
  {
    title: "Asesmen Diagnostik dan Formatif",
    meta: "Asesmen",
    summary: "Dokumen evaluasi dan rubrik dapat ditampilkan dengan gaya showcase sehingga pembaca langsung paham nilai utamanya.",
    bullets: [
      "Menonjolkan kualitas berpikir dan perencanaan.",
      "Tetap bersih walau isi kontennya formal.",
      "Cocok untuk bukti profesional yang lebih meyakinkan."
    ],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(255, 211, 120, 0.2)",
    link: "https://google.com"
  },
  {
    title: "Paket Refleksi dan Tindak Lanjut",
    meta: "Refleksi",
    summary: "Bagian refleksi dibuat lebih menarik dengan perpaduan visual, narasi, dan bullet insight yang singkat tapi terasa kuat.",
    bullets: [
      "Mudah dipakai untuk menampilkan growth mindset.",
      "Membantu portfolio terasa lebih personal.",
      "Menjadi penutup yang kuat untuk keseluruhan cerita."
    ],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(255, 174, 221, 0.2)",
    link: "https://google.com"
  }
];

const Counter = ({ target }: { target: number }) => {
  return <span>{target}</span>;
};

export default function App() {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const revealVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen custom-scrollbar">
      {/* Diagnostic - will show if App renders at all */}
      <div className="sr-only">App Loaded</div>

      <div className="page-grid" />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 py-6 px-4 md:px-8 bg-[#131c91]/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-4">
            <div className="grid gap-1">
              <div className="w-5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
              <div className="w-3.5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
              <div className="w-2.5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
            </div>
            <div>
              <strong className="block text-sm font-bold tracking-tight">Portfolio Athallah Pandhu Nitisara</strong>
              <small className="text-[10px] text-muted uppercase tracking-widest">Creative Profile 2026</small>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {['Beranda', 'Profil', 'Perjalanan', 'Karya', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-5 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-[#0d1264] border border-white/10 p-4 rounded-[2rem] shadow-2xl md:hidden"
          >
            {['Beranda', 'Profil', 'Perjalanan', 'Karya', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block p-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all text-center"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="beranda" className="relative pt-20 pb-32 px-4 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
                PORTOFOLIO <br />

                <span className="block mb-10"> </span>
                <span className="text-accent underline decoration-accent/30">Athallah Pandhu Nitisara</span>
              </h1>
              <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
                Portofolio ini merangkum perjalanan belajar, karya pilihan, dan refleksi profesional dalam satu tampilan yang modern, dinamis, dan mudah dipresentasikan.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#karya" className="button-primary">Lihat Project</a>
                <a href="#kontak" className="button-ghost">Hubungi Saya</a>
              </div>
              <div className="flex gap-4">
                {['Visual Modern', 'Animasi Interaktif', 'Responsive Layout'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-auto md:h-[600px]"
            >
              <div className="absolute inset-0 bg-accent/90 rounded-[3rem] rotate-6 scale-95" />
              <div className="absolute inset-x-8 inset-y-12 bg-blue-500/20 rounded-[3rem] rotate-3 scale-105" />

              <div className="glass-card relative h-full rounded-[3rem] p-4 overflow-hidden z-10 flex items-end justify-center">
                <img
                  src="https://imgur.com/0Gx6ZPA.jpg"
                  alt="Athallah Pandhu Nitisara"
                  className="w-full h-[90%] object-cover rounded-2xl transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Profil Section */}
        <section id="profil" className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="glass-card p-12 rounded-[2.5rem]"
            >
              <p className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Profil Singkat</p>
              <h2 className="text-4xl font-bold mb-4">Athallah Pandhu Nitisara</h2>
              <p className="text-accent/80 text-sm font-medium mb-8">Mahasiswa Sistem Informasi</p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Saya adalah mahasiswa semester 6 jurusan Sistem Informasi di Telkom University yang berdomisili di Jakarta. Saya memiliki ketertarikan dalam dunia teknologi, khususnya dalam pengembangan sistem informasi dan solusi digital.
                Saat ini, saya terus mempelajari berbagai konsep pengembangan aplikasi dan sistem, serta mengembangkan keterampilan untuk mempersiapkan diri menghadapi dunia kerja di bidang teknologi.
              </p>

            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
                className="glass-card p-10 rounded-[2.5rem]"
              >
                <h3 className="text-2xl font-bold mb-4">Gaya Kerja Saya</h3>
                <p className="text-muted">Saya terbiasa menyusun ide dengan rapi, fleksibel saat eksekusi, dan selalu berusaha membuat proses belajar jadi lebih hidup dan relate..</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <Layout />, title: "Desain Visual", color: "text-blue-400" },
                  { icon: <Code />, title: "Struktur Jelas", color: "text-accent" },
                  { icon: <Zap />, title: "Interaktif", color: "text-purple-400" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="glass-card p-6 rounded-3xl"
                  >
                    <div className={`${item.color} mb-4`}>{item.icon}</div>
                    <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-[10px] text-muted uppercase tracking-tighter">Professional Focus</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alat & Aplikasi Section */}
        <section id="perjalanan" className="py-32 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="section-kicker mb-6 text-accent">Tools & Stack</p>
            <h2 className="text-5xl font-bold leading-[1.1] tracking-tight">
              Aplikasi penunjang yang saya gunakan untuk produktivitas & kreativitas.
            </h2>
          </div>

          <div className="max-w-7xl mx-auto space-y-20">
            {[
              {
                category: "Development & Programming",
                apps: [
                  { name: "VS Code", logo: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
                  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
                  { name: "NetBeans", logo: "https://cdn.simpleicons.org/apachenetbeans/CB333B" },
                  { name: "Google Colabs", logo: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
                  { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
                  { name: "Visual Paradigm", logo: "https://cdn.simpleicons.org/visualparadigm/1C3C6C" }
                ]
              },
              {
                category: "Database & Backend Systems",
                apps: [
                  { name: "MySQL Workbench", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
                  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E" },
                  { name: "XAMPP", logo: "https://cdn.simpleicons.org/xampp/FB7A24" },
                  { name: "Laragon", logo: "https://cdn.simpleicons.org/php/777BB4" },
                  { name: "SAP GUI", logo: "https://cdn.simpleicons.org/sap/008FD3" }
                ]
              },
              {
                category: "Infrastructure & Virtualization",
                apps: [
                  { name: "Cisco Packet Tracer", logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
                  { name: "VMware", logo: "https://cdn.simpleicons.org/vmware/607078" },
                  { name: "VirtualBox", logo: "https://cdn.simpleicons.org/virtualbox/183A61" }
                ]
              },
              {
                category: "Design, Data & Productivity",
                apps: [
                  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
                  { name: "Canva", logo: "https://img.icons8.com/color/96/canva.png" },
                  { name: "Looker", logo: "https://cdn.simpleicons.org/looker/4285F4" },
                  { name: "Mendeley", logo: "https://cdn.simpleicons.org/mendeley/A70812" },
                  { name: "MS Word", logo: "https://img.icons8.com/color/96/microsoft-word-2019.png" },
                  { name: "MS Excel", logo: "https://img.icons8.com/color/96/microsoft-excel-2019.png" },
                  { name: "MS Teams", logo: "https://img.icons8.com/color/96/microsoft-teams.png" }
                ]
              }
            ].map((cat, idx) => (
              <div key={idx} className="space-y-8">
                <div className="flex items-center justify-center gap-6">
                  <div className="h-[1px] w-12 bg-white/10" />
                  <h3 className="text-xl font-bold text-white/80 tracking-tight">{cat.category}</h3>
                  <div className="h-[1px] w-12 bg-white/10" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {cat.apps.map((app, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass-card group p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 border border-white/5 hover:border-accent/30 transition-all duration-500"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={app.logo}
                          alt={app.name}
                          className="w-10 h-10 relative z-10 transition-all duration-500 object-contain"
                        />
                      </div>
                      <span className="text-[11px] font-medium text-white/50 group-hover:text-white transition-colors text-center leading-tight">
                        {app.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Karya Section */}
        <section id="karya" className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <p className="section-kicker mb-6">Karya Pilihan</p>
              <h2 className="text-5xl font-bold leading-[1.1]">Eksplorasi Proyek & Portofolio</h2>
              <p className="text-muted mt-6 max-w-xl mx-auto">Klik pada kartu proyek untuk melihat detail pengerjaan, tantangan, dan solusi yang saya terapkan.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {showcaseData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(item)}
                  className="glass-card group cursor-pointer rounded-[3rem] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c105c] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-accent text-[#0c105c] rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {item.meta}
                      </span>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-8 line-clamp-2">{item.summary}</p>
                    <div className="flex items-center gap-2 text-accent text-sm font-bold">
                      Lihat Detail <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="glass-card rounded-[3rem] p-12 md:p-24 grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <p className="section-kicker mb-8">Hubungan Kita</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter mb-8">
                  Mari Memulai <br />
                  <span className="text-accent">Sesuatu yang Baru.</span>
                </h2>
                <p className="text-muted text-xl leading-relaxed mb-10 max-w-md">
                  Portfolio ini siap dipersonalisasi. Mari terhubung untuk mendiskusikan kolaborasi pendidikan atau proyek kreatif lainnya.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:athallahpandhu.n@"
                  className="group flex flex-col gap-2 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2"
                >
                  <Mail className="group-hover:text-accent transition-colors" size={32} />
                  <span className="text-xs uppercase font-mono tracking-widest mt-4">Email</span>
                  <strong className="text-2xl">athallahpandhu.n@gmail.com</strong>
                </a>
                <a
                  href="https://wa.me/6285939133934"
                  className="group flex flex-col gap-2 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2"
                >
                  <Instagram className="group-hover:text-accent transition-colors" size={32} />
                  <span className="text-xs uppercase font-mono tracking-widest mt-4">Whatsapp</span>
                  <strong className="text-2xl">085939133934</strong>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 bg-[#0c105c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-sm font-medium">Athallah Pandhu Nitisara - E-Portfolio Interaktif 2026</p>
          <div className="flex items-center gap-6">
            <a href="#beranda" className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-sm group">
              Back to top
              <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0c105c]/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative z-10 custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16">
                <div className="space-y-8">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Tailwind', 'Framer Motion'].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">
                    {selectedProject.meta}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed mb-10">
                    {selectedProject.summary}
                  </p>

                  <div className="space-y-6 mb-12">
                    <h4 className="font-bold text-lg">Poin Penting:</h4>
                    <ul className="space-y-4">
                      {selectedProject.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex gap-4 items-start text-sm text-muted">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                            <ArrowUpRight size={12} className="text-accent" />
                          </div>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/10 flex gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary flex-1 text-center"
                    >
                      Lihat Live Demo
                    </a>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-ghost p-4 rounded-full min-w-0"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
