Official public website for Taska Iris.

# Taska Iris Website

Website rasmi untuk Taska Iris. Website ini dibina menggunakan React + Vite dan sesuai digunakan sebagai public-facing website untuk ibu bapa melihat maklumat taska, program, aktiviti harian dan membuat pertanyaan / book lawatan.

---

## Tech Stack

- React
- Vite
- CSS
- GitHub
- Vercel

---

## Struktur Folder Penting

```txt
src/
├─ App.jsx
├─ main.jsx
└─ styles/
   └─ website.css
```

---

## File Yang Selalu Diedit

### 1. `src/App.jsx`

File ini mengandungi semua content website.

Edit file ini kalau nak tukar:

- Nama taska
- Headline utama
- Ayat description
- Button text
- Info program
- Tentang taska
- Aktiviti harian
- Kenapa pilih kami
- Contact form text
- Footer

### 2. `src/styles/website.css`

File ini mengandungi semua design website.

Edit file ini kalau nak tukar:

- Warna
- Font
- Saiz text
- Spacing
- Layout desktop
- Layout mobile
- Button style
- Card style
- Responsive view

---

# Cara Edit Content Website

## 1. Tukar Nama Taska

Buka:

```txt
src/App.jsx
```

Cari function:

```jsx
function Header()
```

Cari bahagian ini:

```jsx
<strong>Taska Iris</strong>
<small>Early Learning Centre</small>
```

Tukar kepada nama taska sebenar.

Contoh:

```jsx
<strong>Taska Nur Iris</strong>
<small>Childcare & Early Learning Centre</small>
```

Untuk tukar nama di footer, cari function:

```jsx
function Footer()
```

Kemudian tukar:

```jsx
<strong>Taska Iris</strong>
```

---

## 2. Tukar Headline Utama

Buka:

```txt
src/App.jsx
```

Cari function:

```jsx
function Hero()
```

Cari ayat:

```jsx
<h1>Ruang selamat untuk anak belajar, bermain dan membesar.</h1>
```

Tukar kepada headline baru.

Contoh:

```jsx
<h1>Tempat terbaik untuk anak kecil membesar dengan yakin dan ceria.</h1>
```

---

## 3. Tukar Ayat Description Hero

Masih dalam function:

```jsx
function Hero()
```

Cari:

```jsx
<p className="heroText">
```

Edit ayat dalam paragraph tersebut.

Contoh:

```jsx
<p className="heroText">
  Taska Iris menyediakan suasana pembelajaran yang ceria, selamat dan penuh kasih sayang untuk anak-anak berumur 2 hingga 6 tahun.
</p>
```

---

## 4. Tukar Button Hero

Dalam function:

```jsx
function Hero()
```

Cari:

```jsx
<a href="#contact" className="primaryBtn">Book Sesi Lawatan</a>
<a href="#programs" className="secondaryBtn">Lihat Program</a>
```

Tukar wording button ikut keperluan.

Contoh:

```jsx
<a href="#contact" className="primaryBtn">Daftar Minat</a>
<a href="#programs" className="secondaryBtn">Lihat Kelas</a>
```

---

## 5. Tukar Info Ringkas Bawah Hero

Cari function:

```jsx
function TrustBar()
```

Dalam function ini ada data:

```jsx
const items = [
  ["Umur", "2 - 6 Tahun"],
  ["Rutin", "Harian Tersusun"],
  ["Aktiviti", "Belajar Sambil Bermain"],
  ["Status", "Pendaftaran Dibuka"],
];
```

Edit ikut maklumat sebenar.

Contoh:

```jsx
const items = [
  ["Umur", "2 - 6 Tahun"],
  ["Waktu", "7:30 AM - 6:00 PM"],
  ["Lokasi", "Shah Alam"],
  ["Status", "Intake Dibuka"],
];
```

---

## 6. Tukar Section Tentang Kami

Cari function:

```jsx
function About()
```

Edit headline:

```jsx
<h2>Lebih daripada sekadar tempat jagaan.</h2>
```

Edit paragraph:

```jsx
<p>
  Kami percaya anak-anak belajar dengan lebih baik apabila mereka rasa selamat...
</p>
```

Untuk edit tiga value card, cari:

```jsx
<Feature icon="💛" title="Penyayang" text="..." />
<Feature icon="🎨" title="Kreatif" text="..." />
<Feature icon="🌱" title="Berkembang" text="..." />
```

Tukar `icon`, `title`, atau `text`.

Contoh:

```jsx
<Feature 
  icon="🛡️" 
  title="Selamat" 
  text="Ruang pembelajaran yang bersih, ceria dan dipantau dengan baik." 
/>
```

---

## 7. Tukar Program / Kelas

Cari function:

```jsx
function Programs()
```

Dalam function ini ada tiga program:

```jsx
<Program no="01" title="Toddler Care" age="2 - 3 tahun" text="..." />
<Program no="02" title="Early Learners" age="4 - 5 tahun" text="..." />
<Program no="03" title="School Readiness" age="5 - 6 tahun" text="..." />
```

Edit `title`, `age`, dan `text`.

Contoh:

```jsx
<Program 
  no="01" 
  title="Kelas 3 Tahun" 
  age="3 tahun" 
  text="Fokus kepada rutin asas, bermain, komunikasi dan aktiviti motor." 
/>
```

Kalau nak tambah program baru, duplicate satu line `<Program />`.

Contoh:

```jsx
<Program 
  no="04" 
  title="Transit Sekolah" 
  age="7 - 12 tahun" 
  text="Program transit selepas waktu sekolah untuk murid sekolah rendah." 
/>
```

---

## 8. Tukar Aktiviti Harian

Cari function:

```jsx
function Experience()
```

Dalam function ini ada aktiviti harian:

```jsx
<Day time="7:30 AM" text="Arrival & Free Play" />
<Day time="9:00 AM" text="Morning Circle & Learning Theme" />
<Day time="10:30 AM" text="Snack & Outdoor Play" />
<Day time="11:30 AM" text="Creative Activity / Storytelling" />
<Day time="12:30 PM" text="Lunch & Rest Time" />
```

Edit masa dan aktiviti.

Contoh:

```jsx
<Day time="8:00 AM" text="Sarapan & Free Play" />
```

Kalau nak tambah aktiviti baru, tambah line baru:

```jsx
<Day time="2:30 PM" text="Nap Time / Quiet Activity" />
```

---

## 9. Tukar Section Kenapa Pilih Kami

Cari function:

```jsx
function WhyUs()
```

Dalam function ini ada list:

```jsx
const points = [
  "Ruang pembelajaran ceria dan selamat",
  "Guru mesra, sabar dan penyayang",
  "Aktiviti harian mengikut tema mingguan",
  "Komunikasi mudah bersama ibu bapa",
  "Fokus kepada perkembangan anak secara menyeluruh",
];
```

Edit setiap ayat ikut kelebihan taska.

Contoh tambah point baru:

```jsx
"Menu makanan harian yang seimbang",
```

---

## 10. Tukar Visual / Emoji Di Section Kenapa Pilih Kami

Masih dalam function:

```jsx
function WhyUs()
```

Cari:

```jsx
<div className="whyVisual">
  <div>📚</div>
  <div>🧩</div>
  <div>🎨</div>
  <div>🌿</div>
</div>
```

Tukar emoji ikut aktiviti taska.

Contoh:

```jsx
<div>🍱</div>
<div>🎵</div>
<div>🏃</div>
<div>📖</div>
```

---

## 11. Tukar Contact Section

Cari function:

```jsx
function Contact()
```

Edit headline:

```jsx
<h2>Book sesi lawatan Taska Iris.</h2>
```

Edit paragraph:

```jsx
<p>
  Berminat untuk daftar anak? Tinggalkan maklumat anda...
</p>
```

Edit contact info:

```jsx
<p><strong>Waktu Operasi:</strong> Isnin - Jumaat, 7:30 AM - 6:00 PM</p>
<p><strong>Program:</strong> Taska, Tadika & Early Learning</p>
```

Contoh:

```jsx
<p><strong>Lokasi:</strong> Shah Alam, Selangor</p>
<p><strong>WhatsApp:</strong> 012-3456789</p>
```

---

## 12. Tukar Placeholder Form

Cari dalam function:

```jsx
function Contact()
```

Bahagian form:

```jsx
<input placeholder="Nama ibu/bapa" />
<input placeholder="No. telefon" />
<input placeholder="Umur anak" />
<textarea placeholder="Saya berminat untuk book lawatan..." />
<button type="button">Hantar Pertanyaan</button>
```

Tukar placeholder atau button text ikut keperluan.

Nota: Buat masa ini form belum connect ke database, WhatsApp atau email. Ia hanya UI sahaja.

---

# Cara Edit Design Website

Semua design berada dalam:

```txt
src/styles/website.css
```

---

## 1. Tukar Warna Utama

Cari bahagian atas file:

```css
:root {
  --bg: #fff9f1;
  --paper: #ffffff;
  --ink: #221b16;
  --text: #70645b;
  --peach: #f4a17b;
  --peach-soft: #ffe6d7;
  --sage: #78a86c;
  --sage-soft: #e1f2d8;
}
```

Untuk tukar warna button utama, edit:

```css
--peach: #f4a17b;
```

Untuk tukar background website, edit:

```css
--bg: #fff9f1;
```

Untuk tukar warna text utama, edit:

```css
--ink: #221b16;
```

---

## 2. Tukar Font

Font title sekarang:

```css
--serif: 'DM Serif Display', serif;
```

Font body sekarang:

```css
--sans: 'Nunito', sans-serif;
```

Import font berada di line paling atas:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito:wght@400;500;600;700;800;900&display=swap');
```

Kalau nak tukar font, tukar Google Fonts import dan variable `--serif` / `--sans`.

---

## 3. Tukar Saiz Headline Hero

Cari:

```css
.hero h1 {
  max-width: 680px;
  font-size: clamp(54px, 5.6vw, 82px);
  line-height: 0.96;
}
```

Kalau headline terlalu besar, kecilkan:

```css
font-size: clamp(46px, 4.8vw, 68px);
```

Kalau nak besar:

```css
font-size: clamp(56px, 6vw, 88px);
```

---

## 4. Tukar Lebar Website Desktop

Cari nilai seperti ini:

```css
width: min(1200px, calc(100% - 56px));
```

Kalau nak content lebih lebar:

```css
width: min(1280px, calc(100% - 56px));
```

Kalau nak lebih sempit:

```css
width: min(1100px, calc(100% - 56px));
```

---

## 5. Tukar Spacing Section

Cari:

```css
.section {
  width: min(1200px, calc(100% - 56px));
  margin: 0 auto;
  padding: 110px 0;
}
```

Kalau section terlalu jauh:

```css
padding: 80px 0;
```

Kalau nak lebih spacious:

```css
padding: 130px 0;
```

---

## 6. Edit Mobile View

Mobile styling berada di bawah:

```css
@media (max-width: 560px) {
  ...
}
```

Di sini boleh edit layout untuk phone sahaja.

Contoh saiz headline phone:

```css
.hero h1 {
  font-size: 40px;
}
```

Kalau nak kecilkan:

```css
font-size: 36px;
```

---

# Cara Run Website

Dalam terminal:

```bash
npm run dev
```

Buka preview melalui:

```txt
PORTS → 5173 / 5174 → Open in Browser
```

Kalau port 5173 sudah digunakan, Vite mungkin guna 5174. Itu normal.

---

# Cara Save Ke GitHub

Setiap kali siap edit:

```bash
git status
git add .
git commit -m "Update website content"
git push
```

Maksud command:

```bash
git status
```

Check file apa yang berubah.

```bash
git add .
```

Pilih semua perubahan.

```bash
git commit -m "message"
```

Simpan checkpoint.

```bash
git push
```

Upload ke GitHub.

---

# Cadangan Workflow Edit

1. Edit content di `src/App.jsx`
2. Save file
3. Check preview browser
4. Edit design di `src/styles/website.css` kalau perlu
5. Test desktop dan phone view
6. Commit dan push ke GitHub

---

# Nota Penting

- Jangan edit `node_modules`
- Jangan edit `package-lock.json` secara manual
- Jangan delete `package.json`
- Jangan delete `vite.config.js`
- Untuk content website, fokus edit `src/App.jsx`
- Untuk design website, fokus edit `src/styles/website.css`
- Jika website tiba-tiba nampak pelik, check sama ada `src/index.css` atau `src/App.css` masih mengandungi default CSS Vite

---

# Future Improvement

Website ini boleh ditambah dengan:

- Gambar sebenar taska
- WhatsApp button
- Google Maps embed
- Form yang connect ke email / Google Sheets
- Link ke portal ibu bapa
- Section testimoni parent
- Section yuran / pakej
- SEO title dan meta description