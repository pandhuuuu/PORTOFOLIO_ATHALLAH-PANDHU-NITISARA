# Panduan Perubahan Portofolio (Lokasi Kode)

Dokumen ini berisi daftar lokasi baris kode di `src/Home.tsx`, `src/data.ts`, `src/ProjectDetail.tsx`, dan `src/index.css` untuk memudahkan Anda melakukan personalisasi.

---

### 📂 1. Identitas & Branding (`src/Home.tsx`)
Bagian ini mengatur siapa pemilik portofolio ini di halaman utama.

| Komponen | Baris (Lini) | Keterangan |
| :--- | :--- | :--- |
| **Nama Utama (Hero)** | 124 - 128 | Ubah `PORTOFOLIO` dan `Nama Anda`. |
| **Deskripsi Hero** | 129 - 131 | Paragraf pengantar di bawah nama Anda. |
| **Logo (E-Portfolio)** | 63 | Teks logo di pojok kiri atas. |
| **Label Tahun** | 64 | Teks `Creative Profile 2026`. |
| **Foto Profil** | 157 | Ganti URL di dalam `src="..."`. |

---

### 🎨 2. Data Proyek & Karya (`src/data.ts`)
Sekarang semua data proyek dipusatkan di satu file agar lebih mudah dikelola.

- **Data Karya (`showcaseData`)**: Edit file ini untuk mengubah isi kartu proyek dan halaman detail.
    - `id`: ID unik proyek (jangan ada yang sama).
    - `title`: Judul proyek.
    - `meta`: Kategori (misal: "Media", "Perencanaan").
    - `summary`: Penjelasan singkat untuk kartu.
    - `fullDescription`: Deskripsi lengkap untuk halaman detail.
    - `bullets`: Poin-poin detail pengerjaan.
    - `tech`: Daftar teknologi yang digunakan (array).
    - `image`: Link foto proyek.
    - `duration`: Lama pengerjaan.
    - `role`: Peran Anda dalam proyek.

---

### 📄 3. Template Detail Proyek (`src/ProjectDetail.tsx`)
Jika Anda ingin mengubah tampilan tata letak (layout) halaman detail untuk semua proyek.

- **Navigasi Atas**: Baris **21 - 42**. Mengatur tombol kembali dan label kategori.
- **Header Detail**: Baris **48 - 72**. Mengatur judul besar dan pengantar.
- **Grid Info Proyek**: Baris **89 - 123**. Mengatur kartu Peran, Durasi, dan Teknologi.
- **Section Konten**: Baris **126 - 183**. Mengatur tata letak teks dan gambar tambahan.

---

### 🔗 4. Kontak & Media Sosial (`src/Home.tsx`)
Pastikan semua tombol mengarah ke akun Anda yang benar.

- **Email**: Baris **375** (Link `mailto:`) dan Baris **380** (Teks tampilan).
- **WhatsApp**: Baris **383**. Gunakan format `https://wa.me/628...` pada atribut `href`.
- **Navigasi Menu**: Baris **70 - 79** (Desktop) dan Baris **92 - 109** (Mobile).

---

### 🌈 5. Visual, Warna & Font (`src/index.css`)
Untuk mengubah tema warna global.

- **Warna Tema (`@theme`)**: Baris **4 - 7**.
    - `--color-brand`: Warna biru utama.
    - `--color-accent`: Warna hijau neon (tombol utama).
- **Background Gradasi**: Baris **26 - 30**.
- **Font (Tulisan)**: Baris **9 - 10**.

---

### 🌍 6. Pengaturan Browser (`index.html`)
- **Judul Tab**: Cari tag `<title>` di bagian `<head>`.
- **Favicon**: Cari tag `<link rel="icon" ...>`.

---

*Terakhir diperbarui: 6 Mei 2026 (Update: Dynamic Routing & Detail Pages)*
