export const project5 = {
  id: "5",
  title: "STARBRIDGE Enterprise Architecture",
  subtitle: "Arsitektur Enterprise untuk Optimasi SDM di PT Indocyber",
  meta: "Enterprise Architecture",
  tags: ["TOGAF", "Enterprise Architecture", "HRIS", "Business Alignment"],
  summary: "Rancangan Enterprise Architecture menggunakan framework TOGAF ADM untuk mensinkronkan penilaian kompetensi dan penempatan SDM melalui platform STARBRIDGE.",
  fullDescription: "Proyek ini mendesain cetak biru Enterprise Architecture yang komprehensif bagi PT Indocyber Global Teknologi. Fokus utamanya adalah menutup kesenjangan kompetensi bahasa asing di antara para karyawan dengan menyelaraskan strategi Human Capital dengan infrastruktur Teknologi Informasi. Mengadopsi framework TOGAF (Architecture Development Method), saya merancang arsitektur terintegrasi mulai dari Business, Data, Application, hingga Technology Architecture, yang semuanya bermuara pada optimalisasi sistem HRIS eksisting, STARBRIDGE.",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  accent: "rgba(0, 153, 255, 0.2)",
  link: "#",
  tech: ["TOGAF", "Enterprise Architecture", "Business Process Modeling"],
  duration: "1 Semester",
  role: "Enterprise Architect Analyst",
  projectType: "Team Project",
  method: "TOGAF ADM",
  ctaTitle: "Lihat Blueprint EA",
  ctaSubtitle: "Dokumentasi Lengkap Enterprise Architecture",
  bullets: [
    "Mengimplementasikan siklus penuh TOGAF Architecture Development Method (ADM).",
    "Merancang pemodelan arsitektur holistik (Business, Data, Application & Technology).",
    "Mengeksekusi GAP Analysis komprehensif untuk memetakan transisi sistem as-is ke to-be."
  ],
  sections: [
    {
      type: "default",
      title: "Latar Belakang & Masalah Utama",
      content: "Sebagai perusahaan teknologi yang berkembang pesat dengan lebih dari 1.100 karyawan, PT Indocyber menghadapi tantangan serius terkait kesenjangan kompetensi komunikasi bahasa asing yang menghambat efektivitas kolaborasi dengan klien global. Solusi teknis yang parsial tidak lagi memadai; dibutuhkan pendekatan Enterprise Architecture yang holistik untuk membakukan proses evaluasi, pelatihan, dan penempatan SDM, yang seluruhnya digerakkan oleh data terpusat di dalam sistem STARBRIDGE."
    },
    {
      type: "timeline",
      title: "Implementasi TOGAF ADM",
      steps: [
        {
          title: "Tahap 1: Preliminary & Architecture Vision",
          description: "Pendefinisian landasan arsitektural dan penyelarasan visi strategis.",
          details: [
            "Penyusunan Principle Catalog (Prinsip Data, Aplikasi, & Teknologi)",
            "Pemetaan Stakeholder Matrix & Analisis Value Chain",
            "Formulasi Solution Concept Diagram"
          ]
        },
        {
          title: "Tahap 2: Business & Data Architecture",
          description: "Restrukturisasi proses bisnis dan standarisasi aset data.",
          details: [
            "Perancangan Business Footprint & Process Flow Diagram",
            "Pemodelan Conceptual & Logical Data Diagram",
            "Pelaksanaan GAP Analysis (Business & Data Domain)"
          ]
        },
        {
          title: "Tahap 3: Application & Technology Architecture",
          description: "Desain ekosistem aplikasi dan topologi infrastruktur pendukung.",
          details: [
            "Pemodelan Application Communication & Use-Case Diagram",
            "Pemetaan Environments, Locations, & Platform Diagram",
            "Penyelarasan standar keamanan siber dan integrasi sistem"
          ]
        }
      ]
    },
    {
      type: "product_thinking",
      title: "Strategi & Pendekatan Solusi",
      epics: [
        {
          title: "Paradigma Single Source of Truth",
          description: "Konsolidasi dan sentralisasi data SDM untuk integritas tingkat tinggi.",
          stories: [
            {
              label: "Prinsip Arsitektur Data",
              content: "Seluruh entitas data mulai dari profil pelamar, hasil asesmen, rekam jejak pelatihan, hingga status kesiapan wajib dikelola secara terpusat di dalam STARBRIDGE.",
              criteria: [
                "Implementasi validasi data ketat (mandatory fields) pada modul asesmen.",
                "Penerapan sistem Audit Trail yang persisten untuk memantau perubahan matriks kompetensi."
              ]
            }
          ]
        },
        {
          title: "Integrasi Modul Internal Kompetensi",
          description: "Peningkatan kapabilitas sistem tanpa fragmentasi infrastruktur baru.",
          stories: [
            {
              label: "Prinsip Arsitektur Aplikasi",
              content: "Fungsionalitas asesmen dan manajemen bootcamp dibangun sebagai modul internal (add-ons) yang menyatu mulus (seamless) dengan ekosistem STARBRIDGE eksisting.",
              criteria: [
                "Penerapan arsitektur keamanan Role-Based Access Control (RBAC).",
                "Sinkronisasi data real-time antara modul pelatihan dan database penempatan proyek (PMO)."
              ]
            }
          ]
        }
      ]
    },
    {
      type: "insight",
      title: "Strategic Insight",
      content: "Transformasi yang sukses membuktikan bahwa Enterprise Architecture lebih dari sekadar urusan infrastruktur TI. Nilai terbesarnya terletak pada kemampuannya mensinkronkan ulang proses bisnis (rekrutmen & pelatihan) dengan aset data yang akurat, mengubah STARBRIDGE menjadi sistem cerdas yang mampu merekomendasikan penempatan talenta (talent placement) dengan presisi tinggi dan terukur."
    }
  ]
};
