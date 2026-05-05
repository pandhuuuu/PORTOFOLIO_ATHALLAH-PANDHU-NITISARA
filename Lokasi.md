# Panduan Perubahan Portofolio (Lokasi Kode)

Dokumen ini berisi daftar lokasi baris kode di `src/App.tsx` dan `src/index.css` untuk memudahkan Anda melakukan personalisasi.

---

### 📂 1. Identitas & Branding (`src/App.tsx`)
Bagian ini mengatur siapa pemilik portofolio ini.

| Komponen | Baris (Lini) | Keterangan |
| :--- | :--- | :--- |
| **Nama Utama (Hero)** | 171 - 173 | Ubah `PORTOFOLIO` dan `Nama Anda`. |
| **Tagline Hero** | 169 | Teks kecil di atas nama (contoh: `PPG PRAJABATAN`). |
| **Deskripsi Hero** | 175 - 177 | Paragraf pengantar di bawah nama Anda. |
| **Logo (E-Portfolio)** | 109 | Teks logo di pojok kiri atas. |
| **Label Tahun** | 110 | Teks `Creative Profile 2026`. |
| **Current Focus Card** | 202 - 204 | Kartu kecil yang melayang di dekat foto. |

---

### 🎨 2. Konten Utama & Data (`src/App.tsx`)
Bagian ini adalah data yang ditampilkan di berbagai section.

- **Showcase Karya (`showcaseData`)**: Baris **16 - 65**.
    - `title`: Judul proyek.
    - `meta`: Kategori (misal: "Media", "Rencana").
    - `summary`: Penjelasan singkat.
    - `bullets`: Poin-poin detail karya.
    - `image`: Link foto karya.
- **Statistik Angka**: Baris **222 - 226**. Ubah `label`, `value`, dan `desc`.
- **Profil Singkat**: Baris **253 - 261**. Ubah deskripsi diri dan kutipan (quote).
- **Gaya Kerja (Icons)**: Baris **275 - 291**. Ubah judul seperti `Desain Visual` atau `Interaktif`.
- **Timeline Perjalanan**: Baris **309 - 313**. Ubah tiap tahapan (`Tahap 01` s/d `Tahap 04`).

---

### 🔗 3. Link & Media (`src/App.tsx`)
Pastikan semua tombol mengarah ke akun Anda yang benar.

- **Foto Profil**: Baris **209**. Ganti URL di dalam `src="..."`.
- **Email**: Baris **414** (Link `mailto:`) dan Baris **419** (Teks tampilan).
- **WhatsApp**: Baris **427**. Gunakan format `https://wa.me/628...` pada atribut `href`.
- **Menu Navigasi**: Baris **116** dan **145**.

---

### 🌈 4. Visual, Warna & Font (`src/index.css`)
Untuk mengubah tema warna global.

- **Warna Tema (`@theme`)**: Baris **4 - 7**.
    - `--color-brand`: Warna biru utama.
    - `--color-accent`: Warna hijau neon (tombol utama).
- **Background Gradasi**: Baris **26 - 30**.
- **Font (Tulisan)**: Baris **9 - 10**.

---

### 🌍 5. Pengaturan Browser (`index.html`)
- **Judul Tab**: Cari tag `<title>` di bagian `<head>`.
- **Favicon**: Cari tag `<link rel="icon" ...>`.

---

*Terakhir diperbarui: 4 Mei 2026*
