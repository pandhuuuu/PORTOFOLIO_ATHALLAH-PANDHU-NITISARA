export const project2 = {
  id: "2",
  title: "InfraTrack — Smart Infrastructure Management System",
  subtitle: "Bridging the gap between citizens and city maintenance through AI & GIS integration",
  meta: "On-Progress",
  tags: ["GIS", "AI/ML", "Smart City", "Infrastructure"],
  summary: "Web-based platform untuk pelaporan dan monitoring infrastruktur publik menggunakan GIS, dashboard analytics, dan AI-powered prioritization.",
  fullDescription: "InfraTrack adalah sistem manajemen inventaris infrastruktur berbasis web yang dirancang untuk memantau dan mengelola aset infrastruktur di berbagai lokasi secara efisien. Dengan mengintegrasikan sistem informasi geografis (GIS) dan algoritma prioritas berbasis dampak, platform ini memungkinkan pemerintah untuk merespon laporan kerusakan masyarakat dengan lebih cepat dan tepat sasaran.",
  image: "https://imgur.com/DoLtHt9.png",
  accent: "rgba(142, 255, 231, 0.22)",
  link: "https://infra-track-iota.vercel.app/",
  tech: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Google Maps Platform", "Python (Flask)"],
  duration: "2 Bulan",
  role: "Product Designer & Lead Analyst",
  projectType: "Academic Project",
  method: "SCRUM",
  ctaTitle: "Eksplor Dashboard InfraTrack",
  ctaSubtitle: "Jelajahi bagaimana GIS dan AI bekerja sama untuk memprioritaskan perbaikan infrastruktur secara cerdas melalui dashboard interaktif.",
  bullets: [
    "Pelaporan insiden real-time dengan akurasi lokasi GIS.",
    "Prioritas perbaikan otomatis menggunakan algoritma AI.",
    "Dashboard analitik untuk monitoring kondisi aset kota.",
    "Sistem manajemen tugas untuk tim pemeliharaan lapangan."
  ],
  sections: [
    {
      type: "default",
      title: "Project Overview",
      content: "InfraTrack hadir sebagai solusi digital untuk mengatasi tantangan dalam pengelolaan dan pemeliharaan infrastruktur publik. Banyaknya laporan kerusakan yang tidak terorganisir dan sulitnya penentuan prioritas perbaikan menjadi latar belakang pengembangan platform ini. Dengan integrasi GIS dan algoritma prioritas, InfraTrack membantu pemerintah atau instansi terkait dalam mengambil keputusan yang lebih cepat dan tepat sasaran."
    },
    {
      type: "default",
      title: "Objectives",
      icon: "target",
      content: [
        "Mempermudah masyarakat dalam melaporkan kerusakan infrastruktur secara real-time.",
        "Meningkatkan efisiensi tim lapangan dalam mengelola aset dan jadwal pemeliharaan.",
        "Menyediakan dashboard analitik untuk pemantauan kondisi infrastruktur secara geografis.",
        "Mengoptimalkan alokasi anggaran perbaikan melalui sistem prioritas berbasis AI."
      ]
    },
    {
      type: "default",
      title: "Role & Responsibility",
      content: [
        "Merancang user experience (UX) untuk alur pelaporan insiden oleh masyarakat.",
        "Mengembangkan antarmuka dashboard monitoring untuk admin dan tim teknis.",
        "Melakukan riset kebutuhan pengguna (user research) untuk fitur pemetaan GIS.",
        "Bekerja sama dengan tim developer dalam implementasi desain ke dalam kode frontend."
      ]
    },
    {
      type: "timeline",
      title: "Development Process / SDLC",
      steps: [
        {
          title: "Discovery & User Research",
          description: "Tahap awal untuk memahami masalah mendasar dalam manajemen infrastruktur.",
          details: [
            "Melakukan identifikasi permasalahan umum dalam proses pemeliharaan dan pelaporan infrastruktur.",
            "Menganalisis kebutuhan pengguna dan pihak terkait dalam sistem manajemen infrastruktur.",
            "Mengkaji data dan referensi terkait pengelolaan infrastruktur berkelanjutan sesuai SDG 9.",
            "Menentukan parameter awal untuk pengembangan sistem prioritas berbasis AI."
          ]
        },
        {
          title: "System Design & UI/UX",
          description: "Merancang arsitektur sistem dan antarmuka yang intuitif bagi masyarakat dan admin.",
          details: [
            "Pembuatan User Flow pelaporan insiden.",
            "Perancangan Wireframe High-Fidelity untuk dashboard admin.",
            "Desain sistem peta interaktif (GIS Mapping).",
            "Penyusunan dokumentasi API untuk integrasi data."
          ]
        },
        {
          title: "Sprint-based Development",
          description: "Pengembangan sistem secara inkremental menggunakan metodologi SCRUM.",
          details: [
            "Sprint 1: Core reporting engine & GIS location services.",
            "Sprint 2: Admin dashboard & asset tracking system.",
            "Sprint 3: AI Prioritization logic & Scoring engine.",
            "Sprint 4: Notification system & final polishing."
          ]
        },
        {
          title: "Testing & Validation",
          description: "Memastikan sistem berjalan akurat dan mudah digunakan.",
          details: [
            "UAT (User Acceptance Testing) dengan stakeholder terkait.",
            "Pengujian akurasi penempatan titik lokasi pada peta.",
            "Simulasi beban data laporan untuk mengukur performa dashboard."
          ]
        }
      ]
    },
    {
      type: "gallery",
      title: "System & Interface Design",
      images: [
        {
          url: "https://imgur.com/DoLtHt9.png",
          caption: "Admin Dashboard Overview",
          description: "Visualisasi peta GIS yang menunjukkan persebaran laporan kerusakan secara real-time."
        },
        {
          url: "https://imgur.com/placeholder-report-mobile.png",
          caption: "Mobile Reporting Flow",
          description: "Alur pelaporan 3 langkah bagi masyarakat untuk mengirimkan bukti kerusakan."
        },
        {
          url: "https://imgur.com/placeholder-ai-logic.png",
          caption: "AI Prioritization Logic",
          description: "Diagram alur bagaimana AI menghitung skor urgensi berdasarkan kategori dan lokasi."
        },
        {
          url: "https://imgur.com/placeholder-ai-logic.png",
          caption: "AI Prioritization Logic",
          description: "Diagram alur bagaimana AI menghitung skor urgensi berdasarkan kategori dan lokasi."
        }
      ]
    },
    {
      type: "product_thinking",
      title: "Detailed Product Backlog (PBIs)",
      epics: [
        {
          title: "DEV-60 | Epic 1: User & Access Management",
          description: "Manajemen identitas, hak akses, dan sistem notifikasi multi-role.",
          stories: [
            {
              label: "PBI-10 | Officer Management",
              content: "Sebagai administrator, saya ingin melakukan CRUD data petugas lapangan mencakup informasi personal, spesialisasi, dan wilayah kerja, sehingga pengelolaan sumber daya lebih terorganisir.",
              criteria: ["Form upload foto profil & spesialisasi.", "Riwayat penugasan per petugas.", "Statistik kinerja individu."]
            },
            {
              label: "PBI-11 | Multi-Role Notifications",
              content: "Sebagai pengguna sistem, saya ingin menerima notifikasi otomatis via in-app dan email sesuai peran masing-masing agar tidak melewatkan informasi penting.",
              criteria: ["Notifikasi laporan baru (Admin).", "Notifikasi penugasan (Petugas).", "Notifikasi perubahan status (Masyarakat)."]
            }
          ]
        },
        {
          title: "DEV-109 | Epic 2: Portals & Analytics",
          description: "Dashboard interaktif, pemantauan geospasial, dan manajemen anggaran.",
          stories: [
            {
              label: "PBI-06 | Interactive Dashboard",
              content: "Sebagai administrator, saya ingin melihat dashboard interaktif yang menampilkan statistik kondisi aset, KPI pemeliharaan, dan grafik tren kerusakan.",
              criteria: ["Grafik tren kerusakan per periode.", "Counter jumlah laporan per status.", "KPI penyelesaian tugas."]
            },
            {
              label: "PBI-07 | Geospatial Monitoring",
              content: "Sebagai administrator, saya ingin melihat peta interaktif dengan color-coding kondisi aset (baik/rusak) serta marker laporan aktif.",
              criteria: ["Color-coding marker berdasarkan kondisi.", "Pop-up detail saat marker diklik.", "Filter peta berbasis kategori."]
            },
            {
              label: "PBI-15 | Budget Tracking",
              content: "Sebagai administrator, saya ingin memantau penyerapan anggaran dan melihat perbandingan anggaran vs realisasi per periode.",
              criteria: ["Grafik perbandingan budget vs actual.", "Pencatatan estimasi biaya per kegiatan.", "Export data keuangan ke tabel."]
            }
          ]
        },
        {
          title: "DEV-110 | Epic 3: Core Reporting Workflow",
          description: "Siklus hidup laporan dari pengiriman masyarakat hingga penyelesaian di lapangan.",
          stories: [
            {
              label: "PBI-02 | Smart Reporting",
              content: "Sebagai masyarakat, saya ingin melaporkan kerusakan melalui web dengan fitur upload foto, deteksi lokasi otomatis, dan pemilihan tingkat urgensi.",
              criteria: ["Auto-capture koordinat GPS.", "Upload minimal 1 foto bukti.", "Pilihan kategori kerusakan."]
            },
            {
              label: "PBI-03 | Report Verification",
              content: "Sebagai administrator, saya ingin memverifikasi laporan, mengubah status, dan menetapkan tingkat prioritas penanganan.",
              criteria: ["Update status (Pending/Verified/Rejected).", "Field catatan verifikasi.", "Dropdown prioritas penanganan."]
            },
            {
              label: "PBI-04 | Task Assignment",
              content: "Sebagai administrator, saya ingin menugaskan pekerjaan kepada petugas lapangan mencakup estimasi waktu dan instruksi kerja.",
              criteria: ["Assign petugas berdasarkan wilayah.", "Input estimasi pengerjaan.", "Kirim notifikasi ke petugas."]
            },
            {
              label: "PBI-05 | Progress Update",
              content: "Sebagai petugas lapangan, saya ingin memperbarui status pekerjaan dan mengunggah dokumentasi progress secara real-time.",
              criteria: ["Update status (Start/In-Progress/Done).", "Upload foto progress lapangan.", "Input catatan kendala/hasil."]
            }
          ]
        },
        {
          title: "DEV-111 | Epic 4: AI Vision & Priority Engine",
          description: "Otomatisasi triase dan rekomendasi prioritas menggunakan Machine Learning.",
          stories: [
            {
              label: "PBI-16 | AI Image Classification",
              content: "Sebagai administrator, saya ingin laporan diklasifikasikan secara otomatis oleh modul AI berdasarkan jenis infrastruktur dan kategori kerusakan.",
              criteria: ["Analisis foto via Computer Vision.", "Auto-detect kategori (Jalan/Jembatan).", "Estimasi tingkat keparahan awal."]
            },
            {
              label: "PBI-17 | Smart Priority Scoring",
              content: "Sebagai sistem, saya ingin memberikan rekomendasi skor prioritas otomatis berdasarkan tingkat urgensi, frekuensi, dan nilai strategis aset.",
              criteria: ["Kalkulasi skor prioritas (1-100).", "Dashboard rekomendasi prioritas AI.", "Input ketersediaan petugas ke dalam skor."]
            }
          ]
        },
        {
          title: "DEV-112 | Epic 5: Asset & Spatial Data",
          description: "Inventori aset digital lengkap dengan dokumentasi teknis dan riwayat aktivitas.",
          stories: [
            {
              label: "PBI-01 | Asset Inventory CRUD",
              content: "Sebagai administrator, saya ingin membangun basis data aset infrastruktur yang terpusat mencakup koordinat, tahun bangun, dan dokumentasi foto.",
              criteria: ["Form master data aset lengkap.", "Mapping koordinat GIS aset.", "History tahun pembangunan."]
            },
            {
              label: "PBI-13 | Document & Timeline",
              content: "Sebagai administrator, saya ingin mengelola dokumen teknis (gambar/kontrak) dan melihat timeline riwayat seluruh aktivitas pemeliharaan.",
              criteria: ["Storage dokumen teknis PDF/DWG.", "Visualisasi timeline histori per aset.", "Log aktivitas pemeliharaan."]
            }
          ]
        },
        {
          title: "DEV-113 | Epic 6: System Administration",
          description: "Manajemen data master, pemeliharaan rutin, dan pelaporan eksekutif.",
          stories: [
            {
              label: "PBI-08 | Preventive Schedule",
              content: "Sebagai administrator, saya ingin mengelola jadwal pemeliharaan preventif dengan kalender visual dan reminder otomatis.",
              criteria: ["Visualisasi kalender pemeliharaan.", "Set interval rutin (bulanan/tahunan).", "Reminder H-7 jatuh tempo."]
            },
            {
              label: "PBI-14 | Executive Reporting",
              content: "Sebagai administrator, saya ingin menghasilkan laporan dalam format PDF dan Excel untuk kebutuhan audit dan instansi terkait.",
              criteria: ["Export PDF laporan kondisi aset.", "Export Excel rekapitulasi periodik.", "Format laporan standar instansi."]
            }
          ]
        }
      ]
    },
    {
      type: "insight",
      title: "Key Learning",
      content: "Membangun InfraTrack mengajarkan saya bahwa manajemen produk digital di sektor publik bukan hanya soal fitur teknis, tapi soal membangun kepercayaan melalui transparansi data bagi masyarakat dan efisiensi kerja bagi petugas di lapangan."
    }
  ]
};
