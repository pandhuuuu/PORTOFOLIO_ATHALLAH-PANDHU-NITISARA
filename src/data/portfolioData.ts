import { PersonalInfo, Education, Experience, SkillCategory, Certification, Project } from '../types';
import { project1 } from '../projects/project1';
import { project2 } from '../projects/project2';
import { project3 } from '../projects/project3';
import { project4 } from '../projects/project4';
import { project5 } from '../projects/project5';

export const personalInfo: PersonalInfo = {
  name: "Athallah Pandhu Nitisara",
  roleTitle: "Bridging Business & Technology",
  statusBadge: "Available for Internship & Technical Projects",
  university: "Telkom University",
  major: "S1 Sistem Informasi",
  bio: "Information Systems Student @ Telkom University. Passionate about translating complex business requirements into robust, scalable software solutions. Specializing in system analysis, enterprise architecture, data analytics, and full-stack web development.",
  email: "athallahpandhu@gmail.com",
  phone: "+62 812-3456-7890",
  location: "Bandung, Jawa Barat, Indonesia",
  linkedin: "https://linkedin.com/in/athallah-pandhu",
  github: "https://github.com/athallahpandhu",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  skills: ["System Analysis", "UML Modeling", "SQL & Database Design", "React", "TypeScript", "Tailwind CSS", "Data Analytics (Looker/Pentaho)", "Scrum/Agile"]
};

export const projectsData: Project[] = [
  project1 as Project,
  project2 as Project,
  project3 as Project,
  project4 as Project,
  project5 as Project
];

export const education: Education = {
  institution: "Telkom University",
  degree: "Sarjana Sistem Informasi (S.Kom.)",
  gpa: "3.85 / 4.00",
  period: "2022 — Sekarang (Ekspektasi Kelulusan 2026)",
  location: "Bandung, Indonesia",
  highlights: [
    "Fokus pada Analisis & Perancangan Sistem Informasi, Manajemen Proyek TI, dan Data Warehouse.",
    "Aktif dalam kegiatan riset dan proyek praktikum laboratorium Sistem Informasi.",
    "Meraih nilai A pada mata kuliah utama: Analisis & Perancangan Sistem Informasi, Manajemen Proyek, dan DWBI."
  ]
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Lead System Analyst & Product Designer",
    organization: "Proyek Sistem Informasi RESTOMAX",
    period: "Apr 2025 — Jun 2025",
    location: "Bandung",
    type: "academic",
    description: "Memimpin perancangan ulang proses bisnis dan arsitektur sistem informasi pengadaan barang Restomax.",
    bullets: [
      "Mengidentifikasi inefisiensi alur kerja eksisting (AS-IS) dan merancang target alur kerja optimal (TO-BE).",
      "Merancang 20+ diagram UML (Use Case, Activity, Sequence, Class Diagram) siap implementasi.",
      "Mengembangkan prototype interaktif di Figma dan memvalidasi keakuratan kebutuhan pengguna."
    ]
  },
  {
    id: "exp-2",
    role: "Product Designer & Lead Analyst",
    organization: "InfraTrack — Smart Infrastructure Platform",
    period: "Feb 2025 — Mar 2025",
    location: "Bandung",
    type: "academic",
    description: "Merancang platform pelaporan kerusakan infrastruktur kota berbasis GIS & AI Scoring Engine.",
    bullets: [
      "Merancang alur pelaporan insiden geospasial real-time bagi masyarakat.",
      "Mengembangkan 6 Epics dan 15+ Product Backlog Items (PBIs) dengan metodologi SCRUM.",
      "Merancang antarmuka dashboard analitik admin menggunakan Tailwind CSS & GIS Mapping."
    ]
  },
  {
    id: "exp-3",
    role: "ETL Developer & Data Analyst",
    organization: "Global Superstore DWBI Project",
    period: "Sep 2024 — Des 2024",
    location: "Bandung",
    type: "academic",
    description: "Membangun solusi data warehouse terintegrasi untuk 51,000+ data transaksi global.",
    bullets: [
      "Merancang Star Schema RDBMS MySQL dengan surrogate keys dan tabel fakta dimensi terintegrasi.",
      "Otomatisasi pipa ETL menggunakan Pentaho Data Integration.",
      "Mengembangkan visualisasi KPI bisnis interaktif pada Looker Studio dan pemodelan K-Means & Random Forest."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "System Analysis & Architecture",
    items: ["UML (Use Case, Activity, Sequence, Class)", "Business Process Modeling (BPMN)", "AS-IS & TO-BE Analysis", "Requirements Engineering (FR/NFR)", "Agile / Scrum Framework"]
  },
  {
    category: "Data Engineering & Analytics",
    items: ["SQL & RDBMS (MySQL, PostgreSQL)", "Pentaho Data Integration (ETL)", "Data Warehouse & Star Schema", "Looker Studio & Tableau", "Python (Pandas, Scikit-Learn)"]
  },
  {
    category: "Software & Web Development",
    items: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Vite / Modern Tooling", "Git & GitHub Version Control"]
  },
  {
    category: "Tools & Methodologies",
    items: ["Figma & UI/UX Wireframing", "Visual Paradigm & Draw.io", "Visual Studio Code", "Jira & Trello", "RESTful API Integration"]
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Enterprise Architecture & System Design Professional",
    issuer: "Telkom University Lab Certification",
    date: "2025"
  },
  {
    id: "cert-2",
    title: "Data Warehouse & ETL Specialist",
    issuer: "Business Intelligence Center",
    date: "2024"
  },
  {
    id: "cert-3",
    title: "Agile Project Management & Scrum Fundamentals",
    issuer: "Scrum Alliance Standard",
    date: "2024"
  }
];
