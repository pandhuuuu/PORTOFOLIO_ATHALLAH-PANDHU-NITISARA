# 🗺️ Panduan Perubahan Portofolio (Lokasi Kode Lengkap)

Selamat datang di Panduan Kustomisasi Portofolio Digital Anda! Dokumen ini dirancang khusus untuk membantu Anda mengubah, memperbarui, dan memperluas isi portofolio ini secara manual dengan sangat mudah dan presisi. 

Portofolio ini dibangun menggunakan teknologi modern: **React, TypeScript, Tailwind CSS v4, Framer Motion (Animasi), dan Lucide React (Ikon)**. Karena arsitekturnya yang modular dan berbasis data, Anda dapat memperbarui seluruh teks, proyek, dan tampilan visual tanpa merusak fungsionalitas sistem.

---

## 📂 1. Peta Struktur Folder & Berkas (Workspace)

Memahami letak file adalah kunci utama. Berikut adalah struktur folder proyek Anda:

```text
Tempalte-e-portofolio-main/
├── index.html                 # Pengaturan Tab Browser (Title, Favicon, Google Fonts)
├── Lokasi.md                  # Panduan ini
├── package.json               # Dependensi & Script proyek (npm run dev)
├── src/
│   ├── main.tsx               # Entry point utama React
│   ├── App.tsx                # Konfigurasi Routing (React Router)
│   ├── Home.tsx               # Halaman Utama (Hero, Profil, Tools, Contact, Modal Detail)
│   ├── ProjectDetail.tsx      # Template Halaman Detail Proyek Interaktif (Full Page)
│   ├── index.css              # Sistem Desain Visual (Tema Warna Tailwind v4, Font, Grid)
│   ├── data.ts                # Pusat Registrasi Data Proyek
│   ├── types.ts               # Definisi Tipe Data TypeScript
│   └── projects/              # Folder khusus berisi data konten setiap proyek
│       ├── project1.ts        # Data Proyek 1: Perencanaan Sistem Informasi RESTOMAX
│       ├── project2.ts        # Data Proyek 2: InfraTrack Product Management Case Study
│       ├── project3.ts        # Data Proyek 3: Data Warehouse & BI (DWBI)
│       └── project4.ts        # Data Proyek 4: Paket Refleksi & Tindak Lanjut
```

---

## 🌐 2. Pengaturan Tab Browser (`index.html`)

Gunakan file ini untuk mengubah informasi tab browser Anda:

*   **Judul Tab Browser (Title)**:
    *   **Lokasi**: Baris **7**
    *   **Kode**: `<title>ATHALLAH PANDHU NITISARA | Portfolio</title>`
    *   *Ubah teks di dalam tag tersebut dengan nama dan profesi Anda.*
*   **Font Google**:
    *   **Lokasi**: Baris **8 - 12**
    *   **Kode**: Mengimpor font `Space Grotesk` (untuk display/judul) dan `IBM Plex Mono` (untuk kode/monospaced). Anda bisa menggantinya jika ingin menggunakan font lain dari Google Fonts.

---

## 🎨 3. Kustomisasi Halaman Utama (`src/Home.tsx`)

`src/Home.tsx` mengelola seluruh tampilan halaman depan. Berikut adalah panduan lokasi baris kodenya:

### 🧩 Tabel Navigasi Kustomisasi Halaman Utama

| Bagian Komponen | Baris (Line) | Deskripsi / Cara Mengubah |
| :--- | :--- | :--- |
| **Intro Loader Screen** | 65 - 102 | Teks animasi loading saat website pertama kali dibuka. Ubah kata `"HELLO, I'M PANDHU"` (Baris 82) atau `"Initializing Portofolio..."` (Baris 98). |
| **Identitas Utama (Header)** | 148 - 181 | Mengatur logo teks di pojok kiri atas. Ubah teks `"PANDHU"` (Baris 157) dengan nama panggilan Anda. |
| **Navigasi Desktop** | 162 - 172 | Menu link di bagian atas layar desktop (`Home`, `Profile`, `Tools`, `Works`, `Contact`). |
| **Navigasi Mobile (Tampilan HP)** | 184 - 204 | Panel menu hamburger yang melayang di layar ponsel saat tombol menu diklik. |
| **Nama & Judul Hero** | 216 - 222 | Judul besar di atas layar. Ubah `"HELLO, I'M"` (Baris 217) dan `"Athallah Pandhu Nitisara"` (Baris 219-220) yang memiliki garis bawah dekoratif. |
| **Tag Kompetensi Hero** | 227 - 233 | Pil teks di bawah tombol CTA Hero. Defaultnya: `Agile & SDLC`, `Product Artifacts`, `Data Monitoring`. |
| **Foto Profil Hero** | 247 - 252 | Mengatur gambar profil di sisi kanan Hero. Ganti URL di dalam atribut `src="..."` (Baris 248) dengan link foto Anda. |
| **Profil Detail (About Me)** | 258 - 287 | Mengatur deskripsi biografi profesional Anda. <br>• Judul nama (Baris 267)<br>• Subtitle akademis (Baris 268)<br>• Paragraf narasi kutipan miring (Baris 270-272)<br>• Stat Lokasi & Akademik (Baris 274-285) |
| **Tools & Stack (Ikon Aplikasi)** | 290 - 347 | Mengatur daftar 21 software yang Anda kuasai. Anda bisa menambah, mengurangi, atau mengganti link ikon SVG (`simpleicons.org` / `icons8.com`) pada baris **300 - 322**. |
| **Tombol Sosial Media (Kontak)** | 413 - 449 | Mengatur link tujuan untuk kontak Anda:<br>• **Email**: Baris 414 (`mailto:`) dan 419 (Teks)<br>• **WhatsApp**: Baris 422 (`wa.me`) dan 427 (Teks)<br>• **Instagram**: Baris 430 (`instagram.com`) dan 437 (Teks)<br>• **LinkedIn**: Baris 440 (`linkedin.com`) dan 447 (Teks) |
| **Footer Halaman** | 455 - 468 | Mengatur teks hak cipta di bagian paling bawah website. |

---

## 🎨 4. Data Proyek & Karya (`src/projects/` & `src/data.ts`)

Seluruh konten proyek dipisahkan ke dalam file individual agar kode Anda bersih dan mudah dikelola tanpa risiko konflik syntax.

### 📝 A. Struktur Data Proyek (Skema API Proyek)
Setiap file proyek di `src/projects/` (misalnya `project4.ts`) mengekspor objek TypeScript dengan struktur berikut:

```typescript
export const projectX = {
  id: "id_unik",                     // String unik, contoh: "1", "2", "3"
  title: "Judul Proyek",             // Judul utama proyek
  subtitle: "Sub-judul Menarik",      // Teks penjelasan sedang di bawah judul
  meta: "Status",                    // Status proyek, misal: "Done", "Refleksi", "Ongoing"
  tags: ["Tag1", "Tag2"],            // Pil kategori di halaman detail
  summary: "Deskripsi Singkat...",   // Ditampilkan pada kartu proyek di halaman utama
  fullDescription: "Deskripsi...",   // Paragraf pengantar detail di halaman dalam
  image: "https://url-gambar.png",   // Gambar utama proyek (Ratio 16:9)
  accent: "rgba(0, 242, 255, 0.2)",  // Warna glow aksen yang melatarbelakangi detail
  link: "https://figma.com/...",     // Tautan preview langsung (Figma/Web/GitHub)
  tech: ["Figma", "Visual Paradigm"],// Daftar teknologi (array)
  duration: "3 Bulan",               // Lama pengerjaan
  role: "Peran Anda",                // Posisi Anda, misal: "Lead Analyst"
  projectType: "Team / Personal",    // Jenis proyek
  method: "Agile / Waterfall",       // Metodologi kerja
  ctaTitle: "Teks Tombol CTA",       // Judul tombol Call-to-Action paling bawah
  ctaSubtitle: "Penjelasan CTA",     // Teks kecil di bawah tombol CTA
  bullets: [                         // 3-4 poin pencapaian utama untuk Quick Modal
    "Analisis kebutuhan bisnis...",
    "Merancang model sistem..."
  ],
  sections: [                        // Array berisi layout blok dinamis (BACA DI BAWAH 👇)
    // Blok-blok layout dinamis ditaruh di sini
  ]
};
```

---

### 🧱 B. Panduan Blok Layout Dinamis (`sections`)
Bagian `sections` di dalam file proyek memungkinkan Anda menyusun konten halaman detail layaknya menyusun LEGO. Ada **6 jenis tipe layout** yang dapat Anda pilih secara bebas:

#### 1. Blok Teks Standar (`type: "default"`)
Digunakan untuk penjelasan umum berupa paragraf teks tunggal atau poin-poin dengan ikon checklist, lengkap dengan opsional gambar pendukung di sampingnya.
```typescript
{
  type: "default",
  title: "Project Overview",
  // Gunakan 'content' berbentuk string untuk paragraf tunggal:
  content: "Proyek ini dilatarbelakangi oleh kebutuhan RESTOMAX untuk mengoptimalkan alur operasional..."
}
```
*Atau versi poin checklist:*
```typescript
{
  type: "default",
  title: "Objectives",
  // Gunakan 'content' berbentuk array string untuk melahirkan daftar checklist otomatis:
  content: [
    "Menganalisis inefisiensi proses bisnis eksisting.",
    "Merancang alur proses bisnis masa depan yang lebih cepat."
  ],
  image: "https://imgur.com/link-gambar.png" // Opsional: Tambahkan URL gambar di sampingnya
}
```

#### 2. Blok Alur Proses / SDLC (`type: "timeline"`)
Menghasilkan diagram proses interaktif vertikal berbentuk akordeon (accordion) yang bisa diklik untuk membuka detailnya. Sangat cocok untuk menjelaskan metodologi pengembangan produk.
```typescript
{
  type: "timeline",
  title: "Metodologi Kerja",
  steps: [
    {
      title: "Tahap 1: Inisiasi",
      description: "Melakukan wawancara mendalam bersama klien RESTOMAX.",
      details: [
        "Observasi lapangan langsung ke restoran",
        "Wawancara dengan kasir dan manajer operasional"
      ]
    },
    {
      title: "Tahap 2: Desain",
      description: "Merancang antarmuka visual prototipe.",
      details: [
        "Sketsa Lo-Fi di kertas",
        "Hi-Fi Prototype interaktif di Figma"
      ]
    }
  ]
}
```

#### 3. Blok Galeri & Slider Gambar (`type: "gallery"`)
Menampilkan kisi-kisi (grid) desain atau diagram. Mendukung gambar tunggal statis (bisa diklik untuk memperbesar/zoom modal) dan **Slider Gambar (Carousel)** dengan tombol navigasi kiri-kanan serta indikator angka.
```typescript
{
  type: "gallery",
  title: "Hasil Rancangan Sistem",
  images: [
    // 1. Gambar Statis Biasa (Zoomable)
    {
      url: "https://imgur.com/usecase.png",
      caption: "Use Case Diagram",
      description: "Menggambarkan interaksi aktor utama dengan sistem."
    },
    // 2. Gambar Slider Carousel (Bisa digeser)
    {
      type: "carousel",
      items: [
        {
          url: "https://imgur.com/slide1.png",
          caption: "Slide 1: Halaman Login",
          description: "Desain UI login dengan sistem keamanan enkripsi."
        },
        {
          url: "https://imgur.com/slide2.png",
          caption: "Slide 2: Dashboard Admin",
          description: "Analisis grafik penjualan real-time."
        }
      ]
    }
  ]
}
```

#### 4. Blok Berpikir Produk / Agile PM (`type: "product_thinking"`)
Ini adalah blok premium tercanggih untuk Product Manager. Menghasilkan visualisasi pemetaan **Epic**, **User Story** lengkap dengan kutipan, dan **Acceptance Criteria** berikon checklist mini.
```typescript
{
  type: "product_thinking",
  title: "Product Thinking & Backlog Mapping",
  epics: [
    {
      title: "Pengelolaan Stok Perusahaan",
      description: "Digitalisasi pencatatan inventori untuk mengeliminasi hilangnya barang.",
      stories: [
        {
          label: "User Story (DEV-101)",
          content: "Sebagai Staff Gudang, saya ingin mencatat barang masuk agar jumlah stok di dashboard selalu akurat.",
          criteria: [
            "Input formulir wajib menyertakan Nama, Kuantitas, dan Nomor PO.",
            "Stok di database bertambah secara real-time.",
            "Log audit mencatat waktu dan nama akun staf secara otomatis."
          ]
        }
      ]
    }
  ]
}
```

#### 5. Blok Insight & Pembelajaran (`type: "insight"`)
Menghasilkan kartu sorotan (high-impact callout card) berwarna neon berpendar dengan ikon Lampu Bohlam besar di latar belakangnya. Sangat bagus untuk ringkasan riset atau hikmah proyek.
```typescript
{
  type: "insight",
  title: "Key Takeaway",
  content: "Digitalisasi alur kerja pengadaan bukan hanya tentang aplikasi, melainkan tentang standarisasi budaya pencatatan yang disiplin di lapangan."
}
```

#### 6. Blok Hasil / Dampak Proyek (`type: "outcome"`)
Menampilkan kartu metrik angka pencapaian besar diiringi tren panah peningkatan hijau neon untuk memamerkan performa keberhasilan proyek.
```typescript
{
  type: "outcome",
  title: "Dampak Keberhasilan Proyek",
  stats: [
    { value: "+35%", label: "Efisiensi Waktu Kerja" },
    { value: "0%", label: "Tingkat Selisih Stok" }
  ],
  summary: "Restomax berhasil memotong waktu tunggu pengadaan bahan makanan dari sebelumnya 5 hari kerja menjadi hanya dalam hitungan jam saja."
}
```

---

### 🚀 C. Cara Menambahkan Proyek Baru dari Nol

Jika Anda ingin memamerkan karya kelima Anda di website, ikuti 3 langkah mudah ini:

1.  **Buat File Konten Baru**:
    *   Buat file baru di dalam folder `src/projects/` bernama `project5.ts`.
    *   Salin template struktur data di atas (Bagian 4.A), ganti variabel ekspor menjadi `export const project5 = { ... }` dengan `id: "5"`, lalu isi sesuai proyek baru Anda.
2.  **Daftarkan di File Registrasi (`src/data.ts`)**:
    *   Buka file `src/data.ts`.
    *   Impor file baru Anda di baris atas dan tambahkan objek proyek tersebut ke dalam array `showcaseData`:
    ```typescript
    import { project1 } from './projects/project1';
    import { project2 } from './projects/project2';
    import { project3 } from './projects/project3';
    import { project4 } from './projects/project4';
    import { project5 } from './projects/project5'; // 1. Impor di sini

    export const showcaseData = [
      project1,
      project2,
      project3,
      project4,
      project5 // 2. Daftarkan di sini
    ];
    ```
3.  **Selesai!** Proyek kelima Anda secara instan akan terdaftar di sistem router, dapat dibuka halaman detailnya secara penuh, dan siap untuk dipamerkan.

---

## 🎨 5. Sistem Desain, Tema Warna, & Font (`src/index.css`)

Website Anda menggunakan sistem tema Tailwind CSS v4 terbaru. Untuk melakukan modifikasi visual global seperti warna branding, ikuti panduan berikut:

### 🌈 Mengatur Palet Warna Tema (Baris 3 - 13)
Ubah kode heksadesimal warna tema portofolio Anda di dalam blok `@theme`:
```css
@theme {
  --color-brand: #3b82f6;          /* Biru Utama (Glow Sedang) */
  --color-brand-deep: #1e3a8a;     /* Biru Gelap (Latar Belakang Glow) */
  --color-accent: #00f2ff;         /* Cyan/Hijau Neon Terang (Tombol & Judul Aksen) */
  --color-accent-strong: #7000ff;  /* Ungu Neon Kuat (Glow Bawah Halaman) */

  --font-display: "Space Grotesk", sans-serif; /* Font Judul */
  --font-mono: "IBM Plex Mono", monospace;    /* Font Kode & Monospace */
}
```

### 🕸️ Pola Garis Grid Latar Belakang (Baris 37 - 45)
Mengatur pendaran garis transparan grid retro futuristik di halaman depan. Kerapatan ukuran grid dikelola di `.page-grid` pada nilai `background-size: 56px 56px`.

### 🐭 Warna Teks Terseleksi Mouse (Selection)
Diatur langsung menggunakan utilitas inline Tailwind di dalam file komponen: `selection:bg-accent selection:text-black` (Saat teks diblok oleh kursor mouse, latar belakangnya menjadi warna aksen cyan dengan tulisan hitam).

---

## 📄 6. Logika Halaman Detail Proyek (`src/ProjectDetail.tsx`)

File ini bertindak sebagai mesin cetak dinamis halaman dalam portofolio Anda. Jika Anda ingin memodifikasi kerangka tata letaknya secara universal untuk semua proyek, berikut adalah bagian krusial kodenya:

*   **Tombol Kembali & Tag Kategori (Navigasi Atas)**:
    *   **Lokasi**: Baris **89 - 103**
*   **Header Judul, Subtitle & Pengantar Proyek**:
    *   **Lokasi**: Baris **107 - 133**
*   **Hero Image Terpajang**:
    *   **Lokasi**: Baris **135 - 141**
*   **Kartu Informasi Cepat (Role, Type, Duration, Method)**:
    *   **Lokasi**: Baris **144 - 159**
*   **Teknologi & Perangkat Lunak Terpakai**:
    *   **Lokasi**: Baris **161 - 193**
*   **Logika Perender Blok Konten Dinamis (`sections`)**:
    *   **Lokasi**: Baris **196 - 480**
    *   Di bagian inilah kode membaca properti `type` (seperti `'timeline'`, `'gallery'`, `'product_thinking'`, dll.) dari data proyek Anda lalu menggambar visualisasi UI yang presisi di layar.
*   **Modal Interaktif Zoom Gambar**:
    *   **Lokasi**: Baris **506 - 516**
    *   Menampilkan gambar beresolusi penuh saat pengguna mengklik diagram atau tangkapan layar.

---

> [!TIP]
> **Menjalankan Server Lokal untuk Review Perubahan**:
> 1. Buka Terminal Anda (PowerShell / Command Prompt).
> 2. Jalankan perintah `npm run dev` pada direktori root folder portofolio.
> 3. Buka alamat `http://localhost:5173` di browser Anda untuk melihat setiap perubahan yang Anda lakukan secara langsung (Hot Reload otomatis).

*Terakhir diperbarui secara detail: 22 Mei 2026 (Kustomisasi Modular & Dokumen Navigasi)*
