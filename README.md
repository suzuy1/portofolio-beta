# Portofolio Beta

Ini adalah situs web portofolio pribadi yang memamerkan proyek, keahlian, dan pengalaman saya. Situs ini dibangun dengan teknologi web modern untuk memberikan pengalaman pengguna yang lancar dan interaktif.

## Fitur

*   **Bagian Hero Interaktif:** Pengenalan portofolio yang menarik.
*   **Pameran Proyek Dinamis:** Menampilkan berbagai proyek beserta deskripsi dan tautan.
*   **Bagian Keahlian:** Menyoroti keahlian dan kemahiran teknis.
*   **Desain Responsif:** Dioptimalkan untuk berbagai ukuran layar dan perangkat.
*   **Animasi Halus:** Meningkatkan pengalaman pengguna dengan animasi gulir yang halus.

## Teknologi yang Digunakan

*   **React:** <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /> Pustaka JavaScript untuk membangun antarmuka pengguna.
*   **TypeScript:** <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> Superset JavaScript yang diketik yang dikompilasi menjadi JavaScript biasa.
*   **Vite:** <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /> Alat pembangunan cepat yang memberikan pengalaman pengembangan kilat.
*   **HTML5 & CSS3:** <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" /> Teknologi web standar untuk menyusun dan menata konten.
*   **Git:** <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" /> Sistem kontrol versi.
*   **GitHub:** <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /> Platform untuk menghosting dan berkolaborasi pada kode.

## Pengaturan

Untuk menjalankan salinan lokal, ikuti langkah-langkah sederhana ini.

### Prasyarat

*   Node.js (versi LTS direkomendasikan)
*   npm (Node Package Manager) atau yarn

### Instalasi

1.  **Klon repositori:**
    ```bash
    git clone https://github.com/suzuy1/portofolio-beta.git
    ```
2.  **Navigasi ke direktori proyek:**
    ```bash
    cd portfolio-beta
    ```
3.  **Instal dependensi:**
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

*   `public/`: Aset statis seperti gambar dan `favicon.ico`.
*   `src/`: Kode sumber aplikasi utama.
    *   `components/`: Komponen React yang dapat digunakan kembali (misalnya, `Hero.tsx`, `Projects.tsx`, `Skills.tsx`).
    *   `data/`: Berkas data untuk proyek dan keterampilan (misalnya, `projects.ts`, `skills.ts`).
    *   `App.tsx`: Komponen aplikasi utama.
    *   `index.tsx`: Titik masuk aplikasi React.
*   `index.html`: Berkas HTML utama.
*   `vite.config.ts`: Konfigurasi Vite.
*   `tsconfig.json`: Konfigurasi TypeScript.
*   `package.json`: Metadata dan dependensi proyek.

## Deployment

Proyek ini dapat di-deploy ke berbagai layanan hosting situs statis seperti Vercel, Netlify, GitHub Pages, dll.

1.  **Bangun proyek:**
    ```bash
    npm run build
    # atau
    yarn build
    ```
    Ini akan membuat folder `dist` dengan build yang siap produksi.
2.  **Deploy folder `dist`** ke layanan hosting pilihan Anda.

## Kontak

Untuk setiap pertanyaan atau umpan balik, silakan hubungi.

---

&copy; 2025 by Wily Filosa Alviano Silaen. All Rights Reserved
