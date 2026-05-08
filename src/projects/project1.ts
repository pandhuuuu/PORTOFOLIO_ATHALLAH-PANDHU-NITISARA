export const project1 = {
  id: "1",
  title: "Perencanaan Sistem Informasi RESTOMAX",
  subtitle: "Improving operational efficiency through structured system design",
  meta: "Done",
  tags: ["APSI", "System Analysis", "Product Design"],
  summary: "Rancangan sistem informasi untuk RESTOMAX yang berfokus pada peningkatan efisiensi operasional dan pengelolaan layanan melalui pendekatan analisis proses bisnis yang terstruktur.",
  fullDescription: "Proyek ini merupakan perancangan sistem informasi untuk RESTOMAX yang bertujuan untuk mengatasi permasalahan operasional seperti pencatatan manual, kurangnya visibilitas proses, dan keterlambatan layanan. Pendekatan yang digunakan berfokus pada analisis proses bisnis (AS-IS & TO-BE) serta penerjemahan kebutuhan pengguna ke dalam model sistem yang terstruktur.",
  image: "https://imgur.com/XGY8gHe.png",
  accent: "rgba(203, 255, 156, 0.22)",
  link: "https://www.figma.com/proto/7LMhGsI0M755RrDDmPx9iq/Tubes-PI-Restomax?node-id=0-1&t=MTfNs3AHdBpdqfVD-1",
  tech: ["Visual Paradigm", "Google Docs", "UML", "Draw.io"],
  duration: "3 Bulan (April - Juni 2025)",
  role: "Lead Analyst",
  projectType: "Team Project",
  method: "Waterfall, Agile",
  ctaTitle: "Lihat Prototype Restomax",
  ctaSubtitle: " prototype alur sistem informasi pengadaan barang Restomax melalui prototype interaktif di Figma.",
  bullets: [
    "Analisis kebutuhan sistem berdasarkan permasalahan operasional RESTOMAX.",
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
        "Mengidentifikasi kebutuhan stakeholder (admin, staff, supplier)",
        "Menganalisis proses bisnis eksisting (AS-IS) dan merancang proses bisnis masa depan (TO-BE)",
        "Membuat model sistem menggunakan UML (Use Case Diagram, Activity Diagram, Class Diagram)",
        "Menyusun dokumen teknis yang siap diimplementasikan oleh tim developer",
        "Membuat visualisasi proses dan sistem agar mudah dipahami oleh staeholder"
      ]
    },
    {
      type: "timeline",
      title: "System Development Process / SDLC",
      steps: [
        {
          title: "Planning",
          description: "Tahap awal untuk menentukan arah dan ruang lingkup proyek.",
          details: [
            "Identifikasi masalah proses bisnis",
            "Observasi operasional perusahaan",
            "Wawancara stakeholder",
            "Menentukan tujuan sistem",
            "Menentukan ruang lingkup proyek"
          ]
        },
        {
          title: "Requirement Analysis",
          description: "Menganalisis kebutuhan secara mendalam dari sisi bisnis dan pengguna.",
          details: [
            "Analisis proses bisnis AS-IS menggunakan BPMN",
            "Analisis Value Added Analysis (VAA)",
            "Identifikasi kebutuhan pengguna",
            "Penyusunan Functional Requirements",
            "Penyusunan Non-Functional Requirements",
            "Pembuatan Use Case Diagram dan Activity Diagram"
          ]
        },
        {
          title: "System Design",
          description: "Merancang arsitektur teknis dan antarmuka sistem.",
          details: [
            "Perancangan arsitektur sistem",
            "Pembuatan Sequence Diagram",
            "Pembuatan Class Diagram",
            "Pembuatan Component Diagram",
            "Pembuatan Deployment Diagram",
            "Perancangan UI/UX Lo-Fi dan Hi-Fi"
          ]
        },
        {
          title: "Prototype Development",
          description: "Mentransformasikan desain ke dalam bentuk prototype fungsional.",
          details: [
            "Pembuatan prototype sistem",
            "Implementasi alur navigasi prototype",
            "Simulasi fitur utama sistem"
          ]
        },
        {
          title: "Testing",
          description: "Memvalidasi prototype dengan pengguna akhir untuk mendapatkan feedback.",
          details: [
            "Usability Testing",
            "Pengujian alur prototype",
            "Pengumpulan feedback pengguna",
            "Analisis SUS (System Usability Scale)"
          ]
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
          url: "https://imgur.com/xV4Jfr4.png",
          caption: "Proses bisnis Existing (AS-IS)",
          description: "Proses bisnis yang sedang berjalan pada RESTOMAX sebelum adanya perancangan sistem informasi."
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
              url: "https://imgur.com/11fOcI3.png",
              caption: "Activity Diagram - supplier",
              description: "Visualisasi alur kerja mengirimkan dokumen invoice."
            },
          ]
        },
        {
          type: "carousel",
          items: [
            {
              url: "https://imgur.com/VpWLcA8.png",
              caption: "Sequence Diagram - Pengajuan Barang",
              description: "Alur interaksi objek untuk proses permintaan barang dari gudang."
            },
            {
              url: "https://imgur.com/2i9gGvg.png",
              caption: "Sequence Diagram - Verifikasi Permintaan",
              description: "Alur verifikasi oleh staff pengadaan terhadap permintaan gudang."
            },
            {
              url: "https://imgur.com/uMIliKh.png",
              caption: "Sequence Diagram - Pembuatan RFQ",
              description: "Interaksi sistem dalam pembuatan Request for Quotation."
            },
            {
              url: "https://imgur.com/ZrOeqa0.png",
              caption: "Sequence Diagram - Input Quotation",
              description: "Proses supplier memasukkan harga penawaran ke dalam sistem."
            },
            {
              url: "https://imgur.com/5hfdaku.png",
              caption: "Sequence Diagram - Evaluasi Supplier",
              description: "Logika sistem dalam membandingkan penawaran harga vendor."
            },
            {
              url: "https://imgur.com/5Uxk6FX.png",
              caption: "Sequence Diagram - Pembuatan PO",
              description: "Alur pembentukan dokumen Purchase Order resmi."
            },
            {
              url: "https://imgur.com/wQUdsoD.png",
              caption: "Sequence Diagram - Penerimaan Barang",
              description: "Alur validasi barang masuk dan update stok otomatis."
            },
            {
              url: "https://imgur.com/sMDU17c.png",
              caption: "Sequence Diagram - Inspeksi Kualitas",
              description: "Proses pencatatan hasil pemeriksaan fisik barang."
            },
            {
              url: "https://imgur.com/JOkEqRJ.png",
              caption: "Sequence Diagram - Verifikasi Invoice",
              description: "Pencocokan invoice dengan data PO dan penerimaan."
            },
            {
              url: "https://imgur.com/MaAB1Rd.png",
              caption: "Sequence Diagram - Pembayaran",
              description: "Alur akhir pencatatan transaksi pembayaran ke supplier."
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
          title: "Permintaan Barang",
          description: "Fokus pada digitalisasi proses pengajuan kebutuhan barang operasional.",
          stories: [
            {
              label: "User Story",
              content: "Sebagai Staff Gudang, saya ingin membuat permintaan barang dengan detail lengkap agar kebutuhan operasional dapat segera diproses.",
              criteria: [
                "Form permintaan wajib diisi nama barang, jumlah, prioritas, dan alasan permintaan.",
                "Sistem otomatis membuat ID permintaan unik.",
                "Permintaan tersimpan ke database setelah tombol submit ditekan.",
                "Status awal permintaan menjadi 'Menunggu Verifikasi'."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Gudang, saya ingin melihat riwayat permintaan barang agar dapat memantau status pengajuan.",
              criteria: [
                "Sistem menampilkan daftar seluruh permintaan barang.",
                "Status permintaan ditampilkan secara real-time.",
                "Riwayat dapat difilter berdasarkan tanggal and status.",
                "Detail permintaan dapat dibuka kembali."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Gudang, saya ingin melihat daftar barang yang sering digunakan agar proses pengajuan lebih cepat.",
              criteria: [
                "Sistem menampilkan daftar barang berdasarkan frekuensi penggunaan.",
                "Barang ditampilkan otomatis saat membuat permintaan baru.",
                "Staff dapat memilih barang tanpa mengetik ulang data."
              ]
            }
          ]
        },
        {
          title: "Verifikasi dan Pengelolaan Pengadaan",
          description: "Fokus pada validasi kebutuhan barang dan pengelolaan supplier.",
          stories: [
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin memverifikasi permintaan barang agar hanya permintaan valid yang diproses.",
              criteria: [
                "Sistem menampilkan daftar permintaan menunggu verifikasi.",
                "Staff dapat menerima atau menolak permintaan.",
                "Status berubah setelah verifikasi dilakukan.",
                "Riwayat verifikasi tersimpan pada sistem."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin memberikan alasan penolakan permintaan agar Staff Gudang memahami penyebabnya.",
              criteria: [
                "Alasan penolakan wajib diisi.",
                "Sistem mengirim notifikasi penolakan ke Staff Gudang.",
                "Status berubah menjadi 'Ditolak'."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin mengelola data supplier agar proses pengadaan lebih terstruktur.",
              criteria: [
                "Staff dapat menambah supplier baru.",
                "Staff dapat mengubah data supplier.",
                "Sistem menyimpan histori perubahan data supplier.",
                "Supplier dapat dicari berdasarkan nama atau kategori."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin mencari supplier berdasarkan kategori barang agar lebih cepat menemukan vendor yang sesuai.",
              criteria: [
                "Sistem menyediakan fitur pencarian supplier.",
                "Supplier dapat difilter berdasarkan kategori barang.",
                "Hasil pencarian muncul kurang dari 3 detik."
              ]
            }
          ]
        },
        {
          title: "RFQ dan Evaluasi Supplier",
          description: "Fokus pada proses permintaan penawaran dan pemilihan supplier terbaik.",
          stories: [
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin mengirim RFQ ke supplier agar mendapatkan penawaran terbaik.",
              criteria: [
                "Staff dapat memilih lebih dari satu supplier.",
                "RFQ berisi detail barang dan jumlah kebutuhan.",
                "Supplier menerima notifikasi RFQ.",
                "Status RFQ dapat dipantau."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Supplier, saya ingin menerima RFQ agar dapat memberikan penawaran harga.",
              criteria: [
                "Supplier menerima detail RFQ lengkap.",
                "RFQ dapat diunduh dalam format dokumen.",
                "Supplier dapat langsung memberikan respon dari sistem."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Supplier, saya ingin mengirim quotation agar pihak Restomax dapat mengevaluasi penawaran saya.",
              criteria: [
                "Supplier dapat memasukkan harga barang.",
                "Supplier dapat menambahkan estimasi pengiriman.",
                "Supplier dapat menambahkan syarat pembayaran.",
                "Quotation tersimpan dan dapat dilihat Staff Pengadaan."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin membandingkan penawaran supplier agar dapat memilih vendor terbaik.",
              criteria: [
                "Sistem menampilkan perbandingan harga antar supplier.",
                "Sistem menampilkan estimasi pengiriman.",
                "Sistem menampilkan syarat pembayaran.",
                "Data dapat diurutkan berdasarkan harga termurah."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin memilih supplier terbaik agar proses pembelian lebih efisien.",
              criteria: [
                "Staff dapat memilih satu supplier dari hasil evaluasi.",
                "Sistem menyimpan alasan pemilihan supplier.",
                "Supplier terpilih mendapatkan notifikasi."
              ]
            }
          ]
        },
        {
          title: "Purchase Order dan Penerimaan Barang",
          description: "Fokus pada pengelolaan purchase order dan validasi barang masuk.",
          stories: [
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin membuat Purchase Order agar transaksi pembelian terdokumentasi resmi.",
              criteria: [
                "PO otomatis mengambil data dari quotation terpilih.",
                "Sistem menghasilkan nomor PO unik.",
                "PO dapat dicetak atau diunduh PDF.",
                "Status PO menjadi 'Dikirim'."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin mengirim PO ke supplier agar pesanan segera diproses.",
              criteria: [
                "Supplier menerima notifikasi PO baru.",
                "PO dapat diakses supplier melalui sistem.",
                "Status pengiriman PO tercatat otomatis."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Gudang, saya ingin mencatat barang yang diterima agar stok gudang tetap akurat.",
              criteria: [
                "Staff dapat memasukkan jumlah barang diterima.",
                "Sistem otomatis memperbarui stok barang.",
                "Data penerimaan tersimpan ke histori transaksi."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Gudang, saya ingin memeriksa kesesuaian barang agar barang yang diterima sesuai pesanan.",
              criteria: [
                "Staff dapat menandai barang sesuai/tidak sesuai.",
                "Staff dapat menambahkan catatan inspeksi.",
                "Hasil inspeksi tersimpan di sistem."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Pengadaan, saya ingin menerima notifikasi ketidaksesuaian barang agar dapat segera menindaklanjuti supplier.",
              criteria: [
                "Sistem mengirim notifikasi otomatis saat inspeksi gagal.",
                "Detail ketidaksesuaian ditampilkan lengkap.",
                "Status PO berubah menjadi 'Perlu Tindak Lanjut'."
              ]
            }
          ]
        },
        {
          title: "Invoice dan Pembayaran",
          description: "Fokus pada validasi invoice dan pencatatan pembayaran supplier.",
          stories: [
            {
              label: "User Story",
              content: "Sebagai Supplier, saya ingin mengirim invoice agar pembayaran dapat diproses.",
              criteria: [
                "Supplier dapat mengunggah invoice PDF.",
                "Invoice harus terkait dengan nomor PO valid.",
                "Sistem menyimpan tanggal pengiriman invoice."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Keuangan, saya ingin memverifikasi invoice agar pembayaran dilakukan secara valid.",
              criteria: [
                "Sistem mencocokkan invoice dengan PO.",
                "Sistem mencocokkan invoice dengan hasil inspeksi barang.",
                "Invoice valid dapat diteruskan ke proses pembayaran."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Keuangan, saya ingin melakukan pembayaran invoice agar transaksi pengadaan selesai tepat waktu.",
              criteria: [
                "Staff dapat memilih metode pembayaran.",
                "Sistem mencatat tanggal pembayaran.",
                "Supplier menerima notifikasi pembayaran berhasil."
              ]
            },
            {
              label: "User Story",
              content: "Sebagai Staff Keuangan, saya ingin melihat riwayat pembayaran agar data transaksi mudah diaudit.",
              criteria: [
                "Sistem menyimpan seluruh histori pembayaran.",
                "Riwayat dapat dicari berdasarkan supplier atau tanggal.",
                "Data pembayaran dapat diekspor ke Excel/PDF."
              ]
            }
          ]
        }
      ]
    },
    {
      type: "default",
      image: "https://imgur.com/UZTI1EZ.png"
    }
  ]
};
