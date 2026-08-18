import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, 'raw_images');
const DEST_DIR = path.join(__dirname, 'public', 'images', 'projects');

// Ekstensi gambar yang didukung
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

async function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function convertDirectory(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    
    if (entry.isDirectory()) {
      await convertDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (!SUPPORTED_EXTENSIONS.includes(ext) || entry.name === 'README.md') {
        continue;
      }

      // Hitung path relatif untuk mempertahankan struktur folder
      const relativePath = path.relative(SOURCE_DIR, fullPath);
      const relativeDir = path.dirname(relativePath);
      const baseName = path.basename(entry.name, ext);
      
      const destFolder = path.join(DEST_DIR, relativeDir);
      await ensureDir(destFolder);

      const destPath = path.join(destFolder, `${baseName}.webp`);

      console.log(`Mengompresi: ${relativePath} -> ${path.join(relativeDir, baseName + '.webp')}`);

      try {
        // Melakukan konversi ke WebP dengan kualitas 80% (seimbang antara ukuran & kualitas)
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(destPath);
        console.log(`✓ Berhasil dikonversi!`);
      } catch (err) {
        console.error(`✗ Gagal mengonversi ${relativePath}:`, err.message);
      }
    }
  }
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Folder raw_images tidak ditemukan.`);
    return;
  }

  console.log('==========================================');
  console.log('   Memulai Konversi Massal Gambar ke WebP ');
  console.log('==========================================\n');
  
  await ensureDir(DEST_DIR);
  await convertDirectory(SOURCE_DIR);
  
  console.log('\n==========================================');
  console.log('   Konversi Selesai! Gambar siap di public/images/projects/');
  console.log('==========================================');
}

main().catch(console.error);
