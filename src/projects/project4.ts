export const project4 = {
  id: "4",
  title: "HappyCake E-Commerce Platform",
  subtitle: "Sistem Informasi Manajemen & Operasional Toko Kue Online",
  meta: "Academic Project",
  tags: ["Project Management", "Business Analysis", "SDLC", "E-Commerce"],
  summary: "End-to-end project management untuk pengembangan platform e-commerce, mencakup integrasi keranjang belanja, payment gateway, dan dashboard admin.",
  fullDescription: "Proyek ini merupakan inisiatif digitalisasi proses bisnis untuk 'HappyCake', mengubah operasional pemesanan manual menjadi sistem e-commerce terintegrasi. Sebagai Business Analyst, saya memimpin fase inisiasi dan perencanaan dengan menyusun Project Charter yang komprehensif, merancang Scope Management Plan, memetakan interaksi pengguna melalui Use Case Scenario, dan menstrukturkan alur kerja menggunakan Work Breakdown Structure (WBS). Tujuan utamanya adalah menciptakan ekosistem digital yang scalable dan user-friendly.",
  image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
  accent: "rgba(255, 153, 204, 0.2)",
  link: "#",
  tech: ["Figma", "React", "Node.js", "Project Management"],
  duration: "9 Bulan",
  role: "Business Analyst",
  projectType: "Team Project",
  method: "SDLC & PMBOK",
  ctaTitle: "Lihat Laporan Proyek",
  ctaSubtitle: "Dokumentasi Lengkap Manajemen Proyek",
  bullets: [
    "Merumuskan Scope Management Plan & Project Charter yang terukur.",
    "Memetakan arsitektur proses bisnis menjadi Use Case Scenario interaktif.",
    "Memfasilitasi Change Control Board untuk memastikan stabilitas ruang lingkup proyek."
  ],
  sections: [
    {
      type: "default",
      title: "Project Overview",
      content: "Menghadapi inefisiensi operasional dan keterbatasan jangkauan pasar, 'HappyCake' membutuhkan solusi digital yang tangguh. Proyek ini hadir untuk menjawab tantangan tersebut melalui pengembangan sistem e-commerce terpadu. Sistem ini dirancang tidak hanya untuk memberikan pengalaman pemesanan yang mulus bagi pelanggan (seamless customer journey), tetapi juga membekali manajemen dengan dashboard analitik untuk pemantauan pesanan, stok, dan logistik secara real-time."
    },
    {
      type: "timeline",
      title: "Tahapan Manajemen Proyek",
      steps: [
        {
          title: "Tahap 1: Initiation",
          description: "Penetapan visi, tujuan, dan penyelarasan ekspektasi stakeholder.",
          details: [
            "Penyusunan Project Charter & Visi Bisnis",
            "Pemetaan & Analisis Kebutuhan Stakeholder",
            "Kick-off Meeting & Uji Kelayakan Proyek"
          ]
        },
        {
          title: "Tahap 2: Planning",
          description: "Perencanaan strategis ruang lingkup, jadwal, dan alokasi sumber daya.",
          details: [
            "Penyusunan Scope Statement Terperinci",
            "Penjadwalan Proyek & Estimasi Anggaran (Budgeting)",
            "Manajemen Alokasi Sumber Daya (Resource Planning)"
          ]
        },
        {
          title: "Tahap 3: Execution & Control",
          description: "Eksekusi teknis, pengawasan kualitas, dan manajemen perubahan.",
          details: [
            "Perancangan UI/UX & Pemodelan Database",
            "Implementasi Modul E-Commerce Core",
            "Manajemen Perubahan (CCB) & Quality Assurance"
          ]
        }
      ]
    },
    {
      type: "product_thinking",
      title: "Business Process & Scope Mapping",
      epics: [
        {
          title: "Customer Journey & Transaksi",
          description: "Optimalisasi pengalaman pengguna dalam proses penemuan produk hingga pembayaran.",
          stories: [
            {
              label: "User Story (Customer)",
              content: "Sebagai pelanggan, saya ingin antarmuka katalog yang intuitif dan proses checkout yang aman, sehingga saya dapat berbelanja dengan nyaman.",
              criteria: [
                "Implementasi fitur keranjang belanja interaktif (Smart Cart).",
                "Integrasi sistem konfirmasi pembayaran berbasis transfer bank.",
                "Sistem notifikasi status pesanan real-time."
              ]
            }
          ]
        },
        {
          title: "Dashboard Operasional Admin",
          description: "Pusat kendali (Command Center) untuk manajemen operasional toko harian.",
          stories: [
            {
              label: "User Story (Admin)",
              content: "Sebagai admin, saya membutuhkan visibilitas penuh terhadap data inventaris dan pesanan masuk untuk mengambil keputusan yang cepat.",
              criteria: [
                "Manajemen katalog produk dinamis (CRUD penuh).",
                "Tracking status pesanan dan orkestrasi pengiriman.",
                "Sistem peringatan dini (early warning) untuk stok minimum."
              ]
            }
          ]
        }
      ]
    },
    {
      type: "insight",
      title: "Change Management Insight",
      content: "Fleksibilitas adalah kunci keberhasilan proyek. Setiap permintaan perubahan fitur, seperti penambahan filter pencarian kompleks, dievaluasi secara ketat melalui mekanisme Change Request Form (CRF) dan sidang Change Control Board (CCB). Pendekatan ini secara efektif menyeimbangkan inovasi produk dengan kendali ketat terhadap jadwal dan anggaran."
    },
    {
      type: "outcome",
      title: "Project Impact & Metrics",
      stats: [
        { value: "< 5%", label: "Tingkat Error Transaksi" },
        { value: "99.9%", label: "Target System Uptime" }
      ],
      summary: "Dengan tata kelola proyek yang disiplin, sistem e-commerce ini diproyeksikan selesai tepat waktu dalam 9 bulan (Mei 2026) dan sesuai anggaran Rp 150 Juta. Solusi ini dipastikan akan mengotomatisasi 80% proses manual dan secara drastis memperluas penetrasi pasar HappyCake."
    }
  ]
};
