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
            "Wawancara dengan dinas terkait mengenai alur kerja pemeliharaan.",
            "Survei masyarakat mengenai kendala dalam melaporkan kerusakan.",
            "Analisis data historis laporan infrastruktur.",
            "Penentuan parameter algoritma prioritas AI."
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
          type: "carousel",
          items: [
            {
              url: "https://imgur.com/placeholder-report-mobile.png",
              caption: "Mobile Reporting Flow",
              description: "Alur pelaporan 3 langkah bagi masyarakat untuk mengirimkan bukti kerusakan."
            },
            {
              url: "https://imgur.com/placeholder-ai-logic.png",
              caption: "AI Prioritization Logic",
              description: "Diagram alur bagaimana AI menghitung skor urgensi berdasarkan kategori dan lokasi."
            }
          ]
        }
      ]
    },
    {
      type: "product_thinking",
      title: "Product Thinking",
      epics: [
        {
          title: "Citizen Engagement",
          description: "Meningkatkan partisipasi publik dalam pemantauan kota.",
          stories: [
            {
              label: "User Story",
              content: "Sebagai Warga Kota, saya ingin melaporkan lubang di jalan dengan foto dan lokasi otomatis agar laporan saya jelas dan cepat diproses.",
              criteria: [
                "User dapat mengunggah minimal 1 foto.",
                "Sistem mengambil koordinat GPS secara otomatis.",
                "User dapat menambahkan deskripsi singkat.",
                "User menerima ID laporan untuk tracking status."
              ]
            }
          ]
        },
        {
          title: "Data-Driven Maintenance",
          description: "Optimasi alokasi sumber daya berdasarkan data nyata.",
          stories: [
            {
              label: "User Story",
              content: "Sebagai Admin Dinas, saya ingin melihat daftar laporan yang sudah diprioritaskan oleh sistem agar tim lapangan bisa menangani masalah yang paling mendesak terlebih dahulu.",
              criteria: [
                "Dashboard menampilkan list laporan terurut berdasarkan skor urgensi.",
                "Admin dapat melihat detail bukti foto dan lokasi GIS.",
                "Admin dapat mengubah status laporan menjadi 'Diproses' atau 'Selesai'."
              ]
            }
          ]
        }
      ]
    },
    {
      type: "insight",
      title: "Key Learning",
      content: "Mengintegrasikan AI ke dalam masalah infrastruktur bukan sekadar tentang teknologi, tetapi tentang bagaimana mengubah data mentah dari masyarakat menjadi keputusan operasional yang menyelamatkan anggaran dan waktu."
    }
  ]
};
