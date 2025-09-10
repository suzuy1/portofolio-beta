# Portofolio Beta

Ini adalah situs web portofolio pribadi yang memamerkan proyek, keahlian, dan pengalaman saya. Situs ini dibangun dengan teknologi web modern untuk memberikan pengalaman pengguna yang lancar dan interaktif.

## Fitur

* **Bagian Hero Interaktif:** Pengenalan portofolio yang menarik.
* **Pameran Proyek Dinamis:** Menampilkan berbagai proyek beserta deskripsi dan tautan.
* **Bagian Keahlian:** Menyoroti keahlian dan kemahiran teknis.
* **Desain Responsif:** Dioptimalkan untuk berbagai ukuran layar dan perangkat.
* **Animasi Halus:** Meningkatkan pengalaman pengguna dengan animasi gulir yang halus.

## Teknologi yang Digunakan

* **React:** Pustaka JavaScript untuk membangun antarmuka pengguna.
* **TypeScript:** Superset JavaScript yang diketik dan dikompilasi menjadi JavaScript biasa.
* **Vite:** Alat pengembangan cepat yang memberikan pengalaman pengembangan secepat kilat.
* **HTML5 & CSS3:** Teknologi web standar untuk menyusun dan menata konten. * **Git:** Sistem kendali versi.
* **GitHub:** Platform untuk hosting dan kolaborasi kode.

## Pengaturan

Untuk menjalankan salinan lokal, ikuti langkah-langkah sederhana ini.

### Prasyarat

* Node.js (versi LTS direkomendasikan)
* npm (Node Package Manager) atau yarn

### Instalasi

1. **Klon repositori:**
```bash
git clone https://github.com/suzuy1/portofolio-beta.git
```
2. **Navigasi ke direktori proyek:**
```bash
cd portfolio-beta
```
3. **Instal dependensi:**
```bash
npm install
# atau
yarn install
```

## Menjalankan Aplikasi

Untuk memulai server pengembangan:

```bash
npm run dev
# atau
yarn dev
```

Aplikasi biasanya akan berjalan di `http://localhost:5173` (atau port lain yang tersedia).

## Struktur Proyek

* `public/`: Aset statis seperti gambar dan `favicon.ico`.
* `src/`: Kode sumber aplikasi utama.
* `components/`: Komponen React yang dapat digunakan kembali (misalnya, `Hero.tsx`, `Projects.tsx`, `Skills.tsx`).
* `data/`: Berkas data untuk proyek dan keterampilan (misalnya, `projects.ts`, `skills.ts`).
* `App.tsx`: Komponen aplikasi utama.
* `index.tsx`: Titik masuk aplikasi React.
* `index.html`: Berkas HTML utama.
* `vite.config.ts`: Konfigurasi Vite.
* `tsconfig.json`: Konfigurasi TypeScript.
* `package.json`: Metadata dan dependensi proyek.

## Deployment

Proyek ini dapat di-deploy ke berbagai layanan hosting situs statis seperti Vercel, Netlify, GitHub Pages, dll.

1. **Bangun proyek:**
```bash
npm run build
# atau
yarn build
```
Ini akan membuat folder `dist` dengan build yang siap produksi.
2. **Deploy folder `dist`** ke layanan hosting pilihan Anda.

## Kontak

Untuk pertanyaan atau masukan apa pun, silakan hubungi kami.

---

&copy; 2025 [Nama Anda/Nama Organisasi]
