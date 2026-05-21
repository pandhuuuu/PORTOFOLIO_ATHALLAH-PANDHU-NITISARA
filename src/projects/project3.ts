export const project3 = {
  id: "3",
  title: "Data Warehouse & Business Intelligence",
  subtitle: "Global Superstore: Strategic Profitability & Sales Analysis",
  meta: "Done",
  tags: ["DWBI", "Data Engineering", "Data Analytics", "Machine Learning"],
  summary: "Implementasi solusi end-to-end Data Warehouse menggunakan arsitektur Star Schema untuk mengoptimalkan profitabilitas Global Superstore melalui proses ETL, visualisasi dashboard interaktif, dan pemodelan prediktif.",
  fullDescription: "Proyek ini berfokus pada transformasi data transaksional Global Superstore (±51.000 baris data) menjadi wawasan bisnis yang strategis. Melalui proses ETL (Extract, Transform, Load) yang ketat menggunakan Pentaho, data dikelola ke dalam gudang data MySQL dengan skema Star. Hasilnya divisualisasikan dalam Looker Studio untuk pemantauan KPI secara real-time, didukung dengan analisis data mining untuk segmentasi pasar dan prediksi penjualan.",
  image: "https://imgur.com/00YRJdF.png",
  accent: "rgba(120, 180, 255, 0.2)",
  link: "https://datastudio.google.com/s/jg9pQ93JPO4",
  tech: ["Pentaho PDI", "MySQL", "Looker Studio", "Python (Scikit-Learn)", "SQL"],
  duration: "4 Bulan",
  role: "Data Analyst & ETL Developer",
  projectType: "Team Project",
  method: "CRISP-DM",
  ctaTitle: "Buka Dashboard Looker",
  ctaSubtitle: "Eksplorasi data penjualan dan profitabilitas Global Superstore secara interaktif.",
  bullets: [
    "Membangun arsitektur Data Warehouse dengan Star Schema untuk Single Source of Truth.",
    "Otomatisasi alur data dari CSV ke MySQL menggunakan Pentaho Data Integration.",
    "Analisis segmentasi pelanggan menggunakan algoritma K-Means Clustering.",
    "Prediksi volume penjualan menggunakan model Random Forest Regressor (R² = 0.74).",
    "Visualisasi KPI strategis (Sales, Profit, Profit Ratio) menggunakan Looker Studio."
  ],
  sections: [
    {
      type: "default",
      title: "Project Background",
      content: "Global Superstore menghadapi tantangan dalam memantau kinerja keuangan secara global karena data yang tersebar dan tidak terstandarisasi. Proyek ini bertujuan untuk meningkatkan profitabilitas dan efisiensi melalui monitoring real-time dan strategi bisnis berbasis data, dengan target pertumbuhan revenue 20% dan profit ratio minimal 10%."
    },
    {
      type: "default",
      title: "Business Objectives & KPI",
      icon: "target",
      content: [
        "Optimalisasi Revenue dan Profit Margin melalui identifikasi produk paling menguntungkan.",
        "Membangun insight prediktif untuk perencanaan bisnis jangka panjang.",
        "Memastikan dominasi pasar di wilayah basis utama (United States).",
        "Target KPI: Sales > $4,100,000 dan Net Profit > $429,000."
      ]
    },
    {
      type: "image-grid",
      title: "Data Warehouse Architecture",
      items: [
        {
          title: "Star Schema Design",
          description: "Perancangan tabel fakta (fact_sales) yang dikelilingi oleh tabel dimensi (dim_product, dim_time, dim_customer, dim_location) untuk mempercepat proses query analitik.",
          image: "https://via.placeholder.com/800x600?text=Star+Schema+Diagram"
        }
      ]
    },
    {
      type: "timeline",
      title: "Development Workflow",
      steps: [
        {
          title: "Data Analysis & EDA",
          description: "Menganalisis kualitas dataset Global Superstore (±51.000 transaksi) dan melakukan standarisasi format tanggal serta pembersihan tipe data teks.",
          details: ["Analisis missing values", "Standarisasi ISO YYYY-MM-DD", "Deduplikasi data master"]
        },
        {
          title: "ETL Process (Pentaho)",
          description: "Mengimplementasikan alur Extract, Transform, dan Load menggunakan Pentaho Data Integration untuk memindahkan data dari CSV ke RDBMS MySQL.",
          details: ["Penciptaan surrogate keys", "Value mapping untuk nama bulan", "Implementasi Referential Integrity"]
        },
        {
          title: "Advanced Analytics",
          description: "Menerapkan teknik Data Mining untuk mendapatkan wawasan lebih dalam mengenai karakteristik pasar dan prediksi masa depan.",
          details: ["K-Means Clustering (4 Segmen)", "Random Forest Regression", "Evaluation: R-squared 0.74"]
        },
        {
          title: "Dashboarding",
          description: "Membangun dashboard interaktif di Looker Studio untuk memvisualisasikan pencapaian KPI secara dinamis.",
          details: ["Sales by Country Map", "Revenue vs Profit Health", "Quarterly Contribution"]
        }
      ]
    },
    {
      type: "default",
      title: "Advanced Data Mining Results",
      content: "Kami menggunakan Unsupervised Learning (K-Means) untuk membagi pasar menjadi 4 segmen berdasarkan volume, profit, dan diskon. Selain itu, model Random Forest Regressor berhasil menjelaskan 74% variasi volume penjualan di Amerika Serikat, memberikan dasar yang kuat untuk estimasi stok dan target penjualan."
    },
    {
      type: "image-grid",
      title: "Visual Insights",
      items: [
        {
          title: "Clustering Result",
          description: "Visualisasi sebaran cluster transaksi berdasarkan Sales vs Profit.",
          image: "https://via.placeholder.com/800x600?text=K-Means+Clustering+Plot"
        },
        {
          title: "KPI Dashboard",
          description: "Dashboard utama yang menunjukkan pencapaian target Sales dan Profit Ratio.",
          image: "https://via.placeholder.com/800x600?text=Looker+Studio+Dashboard"
        }
      ]
    },
    {
      type: "default",
      title: "Key Achievements & Findings",
      icon: "award",
      content: [
        "Berhasil melampaui target Sales tahunan dengan pencapaian $4,299,809.",
        "Mencapai Profit Ratio 11.7% (di atas target minimal 10%).",
        "Menemukan anomali di bulan Desember: Penjualan memuncak namun Profit Ratio jatuh ke 9.3% akibat diskon yang terlalu agresif.",
        "Rekomendasi Strategis: Penerapan 'Discount Cap' maksimal 15-20% pada periode high-season."
      ]
    }
  ]
};
