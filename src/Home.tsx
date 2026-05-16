import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { showcaseData } from './data.ts';
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
  Zap,
  CheckCircle2,
  Linkedin,
  MessageCircle
} from 'lucide-react';



const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Aurora Blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full"
      />

      {/* Secondary Aurora Blob */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-accent-strong/10 blur-[150px] rounded-full"
      />

      {/* Subtle Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-brand-deep/5 to-transparent opacity-50" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(10px)" }}
          animate={{ opacity: 1, letterSpacing: "0.2em", filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter text-center"
        >
          HELLO, I'M PANDHU
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="absolute -bottom-4 left-0 right-0 h-1 bg-accent origin-left"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 font-mono text-[10px] uppercase tracking-[0.5em] text-white/40"
      >
        Initializing Portofolio...
      </motion.p>
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen custom-scrollbar bg-black selection:bg-accent selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading && <IntroLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Diagnostic - will show if App renders at all */}
      <div className="sr-only">App Loaded</div>

      <DynamicBackground />
      <div className="page-grid opacity-30" />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 py-6 px-4 md:px-8 bg-black/20 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-4">
            <div className="grid gap-1">
              <div className="w-5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
              <div className="w-3.5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
              <div className="w-2.5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
            </div>
            <div>
              <strong className="block text-sm font-bold tracking-tight">PANDHU</strong>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {['Home', 'Profile', 'Tools', 'Works', 'Contact'].map((item) => (
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
            className="fixed inset-x-4 top-24 z-40 bg-black/90 backdrop-blur-2xl border border-white/10 p-4 rounded-[2rem] shadow-2xl md:hidden"
          >
            {['Home', 'Profile', 'Tools', 'Works', 'Contact'].map((item) => (
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
        <section id="home" className="relative pt-12 pb-20 px-4 md:px-8 overflow-hidden">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <h1 className="font-bold leading-[1.1] tracking-tighter mb-12">
                <span className="text-lg md:text-xl block text-white/40 mb-4 font-mono uppercase tracking-[0.3em]">HELLO, I'M</span>
                <span className="text-4xl md:text-7xl text-accent underline decoration-accent/20 block">
                  Athallah <br />
                  Pandhu Nitisara
                </span>
              </h1>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#works" className="button-primary">View Projects</a>
                <a href="#contact" className="button-ghost">Contact Me</a>
              </div>
              <div className="flex gap-4">
                {['Agile & SDLC', 'Product Artifacts', 'Data Monitoring'].map(tag => (
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
              className="relative aspect-square md:aspect-auto md:h-[450px]"
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

        {/* Profile Section */}
        <section id="profile" className="py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="glass-card p-12 md:p-16 rounded-[3rem] text-center"
            >
              <p className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Profile</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Athallah Pandhu Nitisara</h2>
              <p className="text-accent/80 text-sm font-medium mb-10">Information Systems Student • Telkom University</p>

              <p className="text-muted text-lg leading-relaxed max-w-4xl mx-auto italic border-l-4 border-accent pl-8 py-2">
                Information Systems student with an interest in technology, digital product development, and system analysis. Passionate about learning new tools and development processes, with experience working collaboratively in team projects.
              </p>

              <div className="mt-10 flex justify-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold">Jakarta</span>
                  <span className="text-[10px] text-muted uppercase tracking-widest">Location</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold">Information Systems</span>
                  <span className="text-[10px] text-muted uppercase tracking-widest">Academic</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Alat & Aplikasi Section */}
        <section id="tools" className="py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-kicker mb-6 text-accent">Tools & Stack</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight">
              Supportive applications I use for productivity & creativity.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {[
                { name: "VS Code", logo: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
                { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
                { name: "NetBeans", logo: "https://cdn.simpleicons.org/apachenetbeans/CB333B" },
                { name: "Google Colabs", logo: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
                { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
                { name: "Visual Paradigm", logo: "https://cdn.simpleicons.org/visualparadigm/1C3C6C" },
                { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
                { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E" },
                { name: "XAMPP", logo: "https://cdn.simpleicons.org/xampp/FB7A24" },
                { name: "Laragon", logo: "https://cdn.simpleicons.org/php/777BB4" },
                { name: "SAP GUI", logo: "https://cdn.simpleicons.org/sap/008FD3" },
                { name: "Packet Tracer", logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
                { name: "VMware", logo: "https://cdn.simpleicons.org/vmware/607078" },
                { name: "VirtualBox", logo: "https://cdn.simpleicons.org/virtualbox/183A61" },
                { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
                { name: "Canva", logo: "https://img.icons8.com/color/96/canva.png" },
                { name: "Looker", logo: "https://cdn.simpleicons.org/looker/4285F4" },
                { name: "Mendeley", logo: "https://cdn.simpleicons.org/mendeley/A70812" },
                { name: "MS Word", logo: "https://img.icons8.com/color/96/microsoft-word-2019.png" },
                { name: "MS Excel", logo: "https://img.icons8.com/color/96/microsoft-excel-2019.png" },
                { name: "MS Teams", logo: "https://img.icons8.com/color/96/microsoft-teams.png" }
              ].map((app, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="glass-card group p-4 rounded-2xl flex flex-col items-center justify-center gap-3 border border-white/5 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={app.logo}
                      alt={app.name}
                      className="w-8 h-8 relative z-10 transition-all duration-300 object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-medium text-white/50 group-hover:text-white transition-colors text-center leading-tight">
                    {app.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section id="works" className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <p className="section-kicker mb-6">Selected Works</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-[1.1]">Portfolio & Project Exploration</h2>
              <p className="text-muted mt-4 max-w-xl mx-auto text-sm">Click on a project card to view execution details, challenges, and solutions implemented.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcaseData.slice(0, 3).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(item)}
                  className="glass-card group cursor-pointer rounded-3xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500"
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
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted text-xs leading-relaxed mb-6 line-clamp-2">{item.summary}</p>
                    <div className="flex items-center gap-2 text-accent text-xs font-bold">
                      View Details <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="glass-card rounded-[3rem] p-12 md:p-24 grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <p className="section-kicker mb-8">Get In Touch</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tighter mb-6">
                  Let's Start <br />
                  <span className="text-accent">Something New.</span>
                </h2>
                <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
                  This portfolio is ready to be personalized. Let's connect to discuss educational collaborations or other creative projects.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="mailto:athallahpandhu.n@gmail.com"
                  className="group flex flex-col gap-2 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2 md:col-span-2"
                >
                  <Mail className="group-hover:text-accent transition-colors" size={28} />
                  <span className="text-[10px] uppercase font-mono tracking-widest mt-2 opacity-50">Email</span>
                  <strong className="text-lg md:text-xl">athallahpandhu.n@gmail.com</strong>
                </a>
                <a
                  href="https://wa.me/6285939133934"
                  className="group flex flex-col gap-2 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2"
                >
                  <MessageCircle className="group-hover:text-accent transition-colors" size={28} />
                  <span className="text-[10px] uppercase font-mono tracking-widest mt-2 opacity-50">Whatsapp</span>
                  <strong className="text-lg">085939133934</strong>
                </a>
                <a
                  href="https://instagram.com/athallahpandhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2"
                >
                  <Instagram className="group-hover:text-accent transition-colors" size={28} />
                  <span className="text-[10px] uppercase font-mono tracking-widest mt-2 opacity-50">Instagram</span>
                  <strong className="text-lg">@athallahpandhu</strong>
                </a>
                <a
                  href="https://linkedin.com/in/athallahpandhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2"
                >
                  <Linkedin className="group-hover:text-accent transition-colors" size={28} />
                  <span className="text-[10px] uppercase font-mono tracking-widest mt-2 opacity-50">LinkedIn</span>
                  <strong className="text-lg">Athallah Pandhu</strong>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-sm font-medium">Athallah Pandhu Nitisara</p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 flex items-center gap-3 text-xs font-bold group"
            >
              <span>Back to top</span>
              <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] relative z-10 flex flex-col overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col h-full p-8 md:p-12 overflow-hidden">
                {/* Top Section: Header & Image */}
                <div className="grid lg:grid-cols-5 gap-10 items-start mb-8 h-full">
                  {/* Left Column: Visuals (Made Slimmer to save height) */}
                  <div className="lg:col-span-2 space-y-4 flex flex-col h-full">
                    <div className="aspect-video w-full rounded-[1.2rem] overflow-hidden border border-white/10 shadow-xl shrink-0 bg-white/5">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Integrated Small Gallery */}
                    <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
                      {[1, 2, 3, 4].map((_, idx) => (
                        <div key={idx} className="bg-white/5 rounded-xl border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden aspect-video">
                          <Layout className="text-white/5 group-hover:text-accent transition-colors" size={20} />
                          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Info (Made Wider) */}
                  <div className="lg:col-span-3 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-accent font-mono text-[9px] uppercase tracking-[0.3em] block">
                          {selectedProject.meta} — {selectedProject.role || "Lead"}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight tracking-tight">
                        {selectedProject.title}
                      </h3>

                      <p className="text-muted text-[11px] leading-relaxed mb-6 opacity-80 line-clamp-3">
                        {selectedProject.summary}
                      </p>

                      <div className="grid md:grid-cols-1 gap-4 bg-white/5 p-5 rounded-xl border border-white/5">
                        <h4 className="font-bold text-[10px] uppercase tracking-widest text-white/40">Key Highlights</h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {selectedProject.bullets.slice(0, 3).map((bullet: string, i: number) => (
                            <li key={i} className="flex gap-3 items-start text-[10px] text-muted">
                              <CheckCircle2 size={12} className="text-accent shrink-0 mt-0.5" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex gap-3">
                      <Link
                        to={`/project/${selectedProject.id}`}
                        className="button-primary flex-1 text-center !py-3 !text-xs !min-w-0 !rounded-xl"
                      >
                        Project Details
                      </Link>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-ghost !p-3 rounded-xl min-w-0"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )
        }
      </AnimatePresence >
    </div >
  );
}
