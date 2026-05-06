export const showcaseData = [
  {
    id: "1",
    title: "Perencanaan Sistem Informasi RESTOMAX",
    subtitle: "Improving operational efficiency through structured system design",
    meta: "Perencanaan",
    tags: ["APSI", "System Analysis", "Product Design"],
    summary: "Rancangan sistem informasi untuk RESTOMAX yang berfokus pada peningkatan efisiensi operasional dan pengelolaan layanan melalui pendekatan analisis proses bisnis yang terstruktur.",
    fullDescription: "Proyek ini merupakan perancangan sistem informasi untuk RESTOMAX yang bertujuan untuk mengatasi permasalahan operasional seperti pencatatan manual, kurangnya visibilitas proses, dan keterlambatan layanan. Pendekatan yang digunakan berfokus pada analisis proses bisnis (AS-IS & TO-BE) serta penerjemahan kebutuhan pengguna ke dalam model sistem yang terstruktur.",
    image: "https://imgur.com/XGY8gHe.png",
    accent: "rgba(203, 255, 156, 0.22)",
    link: "https://google.com",
    tech: ["React", "Tailwind", "Framer Motion"],
    duration: "3 Bulan (Feb - Mei 2026)",
    role: "Lead Analyst",
    projectType: "Team Project",
    method: "Agile",
    bullets: [
      "Analisis kebutuhan sistem berdasarkan permasalahan operasional RESTOMAX (AS-IS & TO-BE).",
      "Perancangan model sistem menggunakan UML (Use Case Diagram, Activity Diagram, dll).",
      "Dokumentasi sistem disusun untuk mendukung pengembangan dan implementasi ke tahap berikutnya.",
      "Visualisasi proses dan sistem dirancang agar mudah dipahami oleh stakeholder."
    ],
    sections: [
      {
        type: "default",
        title: "Project Overview",
        content: "Proyek ini dilatarbelakangi oleh kebutuhan RESTOMAX untuk mengoptimalkan alur operasional yang selama ini masih bersifat manual. Fokus utama adalah pada penyelesaian masalah redundansi data dan lambatnya respon terhadap pesanan pelanggan melalui solusi digital terintegrasi."
      },
      {
        type: "default",
        title: "Objectives",
        icon: "target",
        content: [
          "Menganalisis inefisiensi pada proses bisnis eksisting (AS-IS).",
          "Merancang alur proses bisnis masa depan (TO-BE) yang lebih ramping.",
          "Menghasilkan dokumentasi teknis yang siap diimplementasikan oleh tim developer.",
          "Meningkatkan akurasi pelaporan stok dan transaksi secara real-time."
        ]
      },
      {
        type: "default",
        title: "Role & Responsibility",
        content: [
          "Mengidentifikasi kebutuhan stakeholder (admin, staff, customer)",
          "Menganalisis proses bisnis eksisting (AS-IS) dan merancang proses bisnis masa depan (TO-BE)",
          "Membuat model sistem menggunakan UML (Use Case Diagram, Activity Diagram, Class Diagram)",
          "Menyusun dokumen teknis yang siap diimplementasikan oleh tim developer",
          "Membuat visualisasi proses dan sistem agar mudah dipahami oleh staeholder"
        ]
      },
      {
        type: "timeline",
        title: "Process / What I Did",
        steps: [
          {
            title: "Requirement Analysis",
            description: "Melakukan pengumpulan data melalui observasi dan wawancara untuk memahami kebutuhan pengguna yang sebenarnya.",
            details: ["Interview Stakeholder", "User Needs Mapping", "System Requirements Specs"]
          },
          {
            title: "Process Analysis (AS-IS & TO-BE)",
            description: "Memetakan alur bisnis saat ini dan merancang alur baru untuk menghilangkan hambatan operasional.",
            details: ["BPMN Diagramming", "Gap Analysis", "Process Optimization"]
          },
          {
            title: "System Design",
            description: "Menerjemahkan kebutuhan bisnis ke dalam bentuk model visual sistem yang terstandarisasi.",
            details: ["Use Case Diagram", "Activity Diagram", "Class Diagram"]
          },
          {
            title: "Documentation",
            description: "Menyusun dokumen teknis komprehensif sebagai panduan pengembangan sistem lebih lanjut.",
            details: ["SRS Document", "User Manual Draft", "Technical Specs"]
          }
        ]
      },
      {
        type: "gallery",
        title: "System Design",
        images: [
          {
            url: "https://imgur.com/wQUdsoD.png",
            caption: "Use Case Diagram",
            description: "Menjelaskan interaksi aktor dengan sistem secara keseluruhan."
          },
          {
            type: "carousel",
            items: [
              {
                url: "https://imgur.com/TEHIOlU.png",
                caption: "Activity Diagram - staff gudang",
                description: "Visualisasi alur kerja permintaan barang."
              },
              {
                url: "https://imgur.com/TEHIOlU.png",
                caption: "Activity Diagram - staff pengadaan barang",
                description: "Visualisasi alur kerja penawaran harga."
              },
              {
                url: "https://imgur.com/q67D9Ma.png",
                caption: "Activity Diagram - staff pengadaan barang",
                description: "Visualisasi alur kerja verifikasi daftar kebutuhan barang."
              },
              {
                url: "https://imgur.com/6E7Qye9.png",
                caption: "Activity Diagram - staff pengadaan barang",
                description: "Visualisasi alur kerja mengelola data supplier."
              },
              {
                url: "https://imgur.com/MbGQZsm.png",
                caption: "Activity Diagram - staff pengadaan barang",
                description: "Visualisasi alur kerja buat PO."
              },
              {
                url: "https://imgur.com/BtNg0ql.png",
                caption: "Activity Diagram - staff keuangan",
                description: "Visualisasi alur kerja kelola pembayaran PO."
              },
              {
                url: "https://imgur.com/2hMMRTP.png",
                caption: "Activity Diagram - staff pengadaaan barang",
                description: "Visualisasi alur kerja evaluasi penawaran supplier."
              },
              {
                url: "https://imgur.com/dl3eYV7.png",
                caption: "Activity Diagram - staff gudang",
                description: "Visualisasi alur kerja inspeksi barang."
              },
              {
                url: "https://imgur.com/JH4CZLB.png",
                caption: "Activity Diagram - supplier",
                description: "Visualisasi alur kerja penawaran harga supplier."
              },
              {
                url: "https://imgur.com/undefined.png",
                caption: "Activity Diagram - supplier",
                description: "Visualisasi alur kerja mengirimkan dokumen invoice."
              }
            ]
          }
        ]
      },
      {
        type: "insight",
        title: "Key Insights",
        content: "Ditemukan bahwa sebagian besar waktu operasional terbuang pada proses rekapitulasi data manual. Dengan otomatisasi, efisiensi dapat ditingkatkan secara signifikan tanpa menambah jumlah staf."
      },
      {
        type: "product_thinking",
        title: "Product Thinking",
        items: [
          {
            label: "User Story",
            content: "Sebagai manajer resto, saya ingin melihat laporan stok secara real-time agar bisa mengambil keputusan belanja bahan baku lebih cepat.",
            criteria: [
              "Data stok diperbarui setiap ada transaksi masuk.",
              "Notifikasi muncul jika stok berada di bawah batas minimum."
            ]
          },
          {
            label: "Acceptance Criteria",
            content: "Sistem harus mampu menangani 100 pesanan secara simultan tanpa ada tabrakan data pada stok inventory.",
            criteria: [
              "Waktu respon sistem < 2 detik.",
              "Data integritas tetap terjaga 100%."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Media Interaktif Kontekstual",
    meta: "Media",
    summary: "Karya media yang bisa ditampilkan sebagai sorotan utama dengan spotlight card yang lebih hidup and modern.",
    bullets: [
      "Preview berganti secara interaktif saat item dipilih.",
      "Cocok menampilkan poster, media ajar, atau infografik.",
      "Memberi kesan portfolio yang aktif, bukan sekadar statis."
    ],
    image: "https://imgur.com/PmBKPH1.png",
    accent: "rgba(142, 255, 231, 0.22)",
    link: "https://google.com",
    fullDescription: "Detail mengenai Media Interaktif Kontekstual. Fokus pada bagaimana interaksi pengguna meningkatkan keterlibatan dan pemahaman konten.",
    tech: ["Figma", "Canva", "JavaScript"],
    duration: "2 Bulan",
    role: "Visual Designer",
    sections: []
  },
  {
    id: "3",
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
    link: "https://google.com",
    fullDescription: "Penjelasan mendalam tentang sistem asesmen yang dikembangkan, termasuk kriteria penilaian dan alat ukur yang digunakan.",
    tech: ["MS Excel", "Looker", "SQL"],
    duration: "4 Bulan",
    role: "Data Analyst",
    sections: []
  },
  {
    id: "4",
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
    link: "https://google.com",
    fullDescription: "Refleksi pribadi mengenai perjalanan belajar dan pengembangan diri selama mengerjakan berbagai proyek ini.",
    tech: ["Mendeley", "Notion", "Word"],
    duration: "1 Bulan",
    role: "Content Creator",
    sections: []
  }
];
