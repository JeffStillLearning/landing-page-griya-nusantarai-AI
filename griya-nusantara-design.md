# 🏡 Griya Nusantara — UI Design Document
### Landing Page Design Specification · Developer Perumahan Middle Segment · Mobile-First

---

## 🎨 DESIGN SYSTEM

### Brand Identity

| Elemen | Nilai |
|---|---|
| **Nama Brand** | Griya Nusantara |
| **Tagline** | *"Rumah yang Kamu Impikan, Harga yang Bisa Kamu Wujudkan."* |
| **Sub-tagline** | Cluster hunian modern di lokasi strategis, mulai 300 jutaan |
| **Tone** | Terpercaya · Membumi · Modern · Optimistis |
| **Aesthetic Direction** | **Civic Modern Warm** — bukan luxury dingin, bukan murah generik. Terasa solid, amanah, dan hangat seperti rumah sungguhan |
| **Diferensiasi Visual** | Arsitektur grid kuat dengan aksen tanah hangat. Foto real-estate yang jujur bukan render CGI mewah. Typography yang tegas dan mudah dibaca di semua usia |

---

### Palet Warna

```
Primary       → #1B4332  (Forest Green Tua)   ← kepercayaan, stabilitas
Secondary     → #D4A853  (Amber Gold)          ← kehangatan, aspirasi
Light Accent  → #E8F5E9  (Mint Whisper)        ← background lembut
Dark Base     → #0D1F1A  (Deep Forest)         ← teks utama, footer
Neutral Warm  → #F5F0E8  (Warm Parchment)      ← background section
Neutral Mid   → #8A9E94  (Sage Muted)          ← teks sekunder, label
CTA Primary   → #D4A853  (Amber Gold)          ← tombol utama
CTA Hover     → #B8903E  (Dark Amber)
Alert/Badge   → #E84545  (Vermillion)          ← "Unit terbatas!", badge promo
Success       → #2D6A4F  (Medium Forest)
```

> **Filosofi Warna:** Hijau forest = stabilitas & alam (hunian = tempat bertumbuh).
> Amber gold = aspirasi yang bisa diraih, bukan kemewahan yang menjauhkan.
> Kombinasi ini berbeda dari biru-putih developer generik — lebih hangat, lebih manusiawi.

---

### Tipografi

| Peran | Font | Mobile | Desktop |
|---|---|---|---|
| **Display / Hero** | Plus Jakarta Sans (800 ExtraBold) | 34–42px | 60–72px |
| **Heading Section** | Plus Jakarta Sans (700 Bold) | 24–28px | 36–44px |
| **Subheading** | Plus Jakarta Sans (500 Medium) | 15–16px | 17–18px |
| **Body Text** | Lora (400 Regular) | 14–15px | 15–16px |
| **Label / Tag / Badge** | Plus Jakarta Sans (600 SemiBold) | 11–12px | 12px |
| **Harga / Angka Penting** | Plus Jakarta Sans (800 ExtraBold) | 28–32px | 40–48px |
| **CTA Button** | Plus Jakarta Sans (700 Bold) | 14px | 15px |

> **Karakter Font:** Plus Jakarta Sans = sans-serif Indonesia yang tegas, familiar, terpercaya.
> Lora sebagai body = sedikit serif memberi kesan matang dan dapat dipercaya (seperti notaris/sertifikat).
> Kombinasi ini jauh dari kesan developer abal-abal.

---

### Spacing & Radius

```
Base unit         : 8px
Section padding   : 72px top/bottom (mobile: 52px)
Container max-w   : 1200px
Content gutter    : 20px (mobile), 40px (desktop)
Card radius       : 12px
Button radius     : 8px (bukan pill — terasa lebih "serius/solid")
Image radius      : 10px
Badge radius      : 4px (tegas, bukan terlalu rounded)
Input radius      : 8px
```

---

### Komponen Tombol

**CTA Utama (Primary)**
```
Background      : #D4A853 (Amber Gold)
Text            : #0D1F1A (Deep Forest)
Padding         : 16px 32px
Border radius   : 8px
Font            : Plus Jakarta Sans 700, 14px, uppercase, tracking 0.5px
Shadow          : 0 4px 16px rgba(212,168,83,0.4)
Hover           : #B8903E + translateY(-2px) + shadow lebih dalam
Active          : translateY(0) + shadow kecil
```

**CTA Sekunder (Outline)**
```
Background      : transparent
Text            : #1B4332
Border          : 2px solid #1B4332
Padding         : 14px 28px
Hover           : Background #1B4332, Text #F5F0E8
```

**CTA WhatsApp**
```
Background      : #25D366
Text            : #FFFFFF
Icon            : WhatsApp SVG inline kiri
Border radius   : 8px
Hover           : #1DA851
```

**Badge "Unit Terbatas"**
```
Background      : #E84545 (Vermillion)
Text            : #FFFFFF
Padding         : 4px 10px
Radius          : 4px
Font            : 11px SemiBold uppercase
Animasi         : subtle pulse (2s infinite) ← urgensi
```

---

### Ikonografi & Visual Language

- Ikon: **Phosphor Icons** style — bold, berat, mudah dibaca di layar kecil
- Foto: **real photo** hunian nyata, bukan render CGI yang terlalu sempurna
- Foto harus tunjukkan: fasad rumah, interior bersih, lingkungan cluster, fasilitas
- Tone foto: warm, natural light, siang hari cerah — kesan segar dan layak huni
- Ilustrasi: **line art arsitektur** sebagai background dekoratif (opacity 4–6%)
- Ornamen: **grid pattern subtle** (blueprint feel) di section tertentu
- Separator section: garis horizontal dengan motif bata/pattern tanah

---

### Komponen Kartu Properti (Unit Card)

```
┌────────────────────────────┐
│ [FOTO UNIT — 16:9]         │  ← Foto fasad, object-fit cover
│ [Badge: READY STOCK] ●     │  ← Badge merah kiri atas
│                            │
├────────────────────────────┤
│ Tipe 36/72                 │  ← Tipe unit, Lora
│ ★★★★★ (4.8)               │  ← Rating kecil
│                            │
│ 💰 Mulai Rp 389 Juta       │  ← Harga besar, Plus Jakarta ExtraBold
│    DP 0% • KPR 30 Tahun    │  ← Sub-info kecil
│                            │
│ 🛏 2 KT  🚿 1 KM  📐 72m² │  ← Icon specs satu baris
│                            │
│ 📍 Cluster Melati, Blok A  │  ← Lokasi
│                            │
│ [ LIHAT DETAIL →      ]   │  ← CTA secondary full width
│ [ TANYA VIA WHATSAPP  ]   │  ← CTA WhatsApp full width
└────────────────────────────┘
```

---
---

## 📱 LAYOUT WIREFRAME — SECTION BY SECTION

---

## 1. HERO SECTION

**Tujuan:** Tangkap perhatian, sampaikan proposisi nilai utama, dorong pertama ke kontak/lihat unit.

```
┌─────────────────────────────────┐
│                                 │
│  🏡 GRIYA NUSANTARA             │  ← Logo + nama brand
│     Developer Perumahan         │     kiri atas, bukan tengah
│                                 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                 │
│  [FOTO HERO — full bleed]       │  ← Foto fasad cluster terbaik
│  [overlay gradient gelap bawah] │    angle lebar, siang cerah
│                                 │
│                                 │
│  📍 Bekasi Barat · Jawa Barat   │  ← Location tag (pil kecil)
│                                 │
│  Rumah yang Kamu              │  ← Display font, 2 baris
│  Impikan, Harga yang          │     putih bold di atas foto
│  Bisa Kamu Wujudkan.          │
│                                 │
│  Cluster modern dengan akses    │  ← Subheading 2 baris
│  tol, sekolah, & fasilitas      │     semi-transparan putih
│  lengkap. Mulai 300 jutaan.     │
│                                 │
│  [ LIHAT UNIT TERSEDIA → ]     │  ← CTA Amber Gold
│  [ 📞 Hubungi Sales Agent  ]   │  ← CTA outline putih
│                                 │
│  ┌──────┬──────┬──────┐         │  ← Stats bar di bawah CTA
│  │ 500+ │  12  │ 98%  │         │     background gelap
│  │ Unit │Tipe  │Kepuas│         │     semi-transparan
│  │ Terj │Rumah │ -an  │         │
│  └──────┴──────┴──────┘         │
└─────────────────────────────────┘
```

**Detail Desain:**
- Foto hero: `min-height: 100svh`, parallax scroll ringan di desktop
- Overlay: `linear-gradient(to top, rgba(13,31,26,0.85) 0%, rgba(13,31,26,0.2) 60%, transparent 100%)`
- Logo: versi putih, top-left, tidak ada navigasi — clean fokus
- Location tag: background `rgba(212,168,83,0.9)` + ikon pin putih
- Display text: shadow teks `0 2px 8px rgba(0,0,0,0.5)` agar terbaca di semua foto
- Stats bar: masuk dengan animasi counter (0 → angka akhir) saat halaman load
- Mobile: tombol stack vertikal, full width masing-masing

---

## 2. SOCIAL PROOF BAR (Trust Strip)

**Tujuan:** Legitimasi instan — developer ini nyata, terpercaya, berpengalaman.

```
┌─────────────────────────────────┐
│                                 │
│  Dipercaya oleh ribuan keluarga │  ← Label kecil uppercase
│  Indonesia sejak 2015           │
│                                 │
│  [Logo Bank BTN]  [Logo KPR]   │  ← Logo mitra KPR
│  [Logo BRI]       [Logo BNI]   │     baris satu
│                                 │
│  ─────────────────────────────  │
│                                 │
│  🏆 Developer Terbaik 2023     │  ← Awards inline
│     REI Award Jawa Barat        │
│                                 │
│  📋 Izin & Legalitas Lengkap    │  ← Trust signal teks
│     IMB · SHM · SHGB tersedia  │
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#1B4332` (Forest Green) — kontras kuat setelah hero
- Semua konten: warna Ivory/Parchment
- Logo bank/mitra: grayscale → berwarna saat hover
- Animasi: marquee/scroll horizontal logo di mobile
- Legalitas: ikon checkmark amber gold di depan setiap item

---

## 3. BENEFIT SINGKAT

**Tujuan:** Jawab "kenapa beli di sini?" dalam 3 detik — diferensiasi dari kompetitor.

```
┌─────────────────────────────────┐
│                                 │
│  Kenapa Pilih                   │  ← Heading
│  Griya Nusantara?               │
│                                 │
│  ┌──────────────────────────┐   │
│  │  🏦                      │   │  ← Card 1
│  │  KPR DP 0%               │   │
│  │  Subsidi FLPP tersedia.  │   │
│  │  Cicilan mulai 1,8 jt/bl │   │
│  └──────────────────────────┘   │
│                                 │
│  ┌──────────────────────────┐   │  ← Card 2
│  │  📍                      │   │
│  │  Lokasi Strategis        │   │
│  │  5 menit dari Tol &      │   │
│  │  Stasiun KRL             │   │
│  └──────────────────────────┘   │
│                                 │
│  ┌──────────────────────────┐   │  ← Card 3
│  │  🔑                      │   │
│  │  Ready Stock             │   │
│  │  Bisa langsung huni.     │   │
│  │  Tidak perlu indent.     │   │
│  └──────────────────────────┘   │
│                                 │
│  ┌──────────────────────────┐   │  ← Card 4
│  │  📜                      │   │
│  │  SHM Atas Nama Sendiri   │   │
│  │  Sertifikat langsung     │   │
│  │  pecah per unit.         │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#F5F0E8` (Warm Parchment)
- Kartu: background putih, border-left `4px solid #D4A853`, radius 12px
- Ikon: ukuran 40px, warna `#1B4332`, bold line-art style
- Mobile: 1 kolom scroll, Desktop: grid 2×2
- Hover: card lift + border-left tumbuh ke `8px`

---

## 4. UNIT TERSEDIA / PRODUK UTAMA

**Tujuan:** Tampilkan pilihan unit konkret dengan harga — ini bagian terpenting untuk konversi.

```
┌─────────────────────────────────┐
│                                 │
│  Unit Tersedia                  │  ← Heading
│  Pilih yang Paling Pas          │  ← Subheading
│  Buatmu                         │
│                                 │
│  Filter:                        │
│  [Semua] [Ready] [Indent]      │  ← Filter tab pill
│  [< 400jt] [400-600jt]         │
│                                 │
│  ┌──────────────────────────┐   │
│  │ [FOTO UNIT]              │   │  ← Kartu Unit 1
│  │ [● READY STOCK]          │   │    (lihat komponen
│  ├──────────────────────────┤   │     kartu di atas)
│  │ Tipe 36/72               │   │
│  │ Rp 389.000.000           │   │
│  │ 🛏2  🚿1  📐72m²        │   │
│  │ 📍 Cluster Melati A      │   │
│  │ [ LIHAT DETAIL → ]      │   │
│  │ [ TANYA WHATSAPP  ]      │   │
│  └──────────────────────────┘   │
│                                 │
│  [Kartu Unit 2 — Tipe 45/90]    │
│  [Kartu Unit 3 — Tipe 54/108]   │
│                                 │
│  ● ○ ○  atau scroll horizontal  │
│                                 │
│  [ LIHAT SEMUA UNIT (12) →  ]  │  ← Ghost button
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#E8F5E9` (Mint Whisper) — fresh, berbeda dari section sebelumnya
- Filter tab: active state background `#1B4332` teks putih, inactive outline
- Kartu: shadow `0 4px 24px rgba(27,67,50,0.12)`, hover lift -6px
- Harga: font ExtraBold 28px, warna `#1B4332`, sedikit lebih besar dari elemen lain
- Badge ready/indent: posisi absolute top-left, rounded minimal
- Mobile: horizontal scroll snapping (scroll-snap-type: x mandatory)
- Desktop: grid 3 kolom

---

## 5. LOKASI & AKSESIBILITAS

**Tujuan:** Satu keberatan terbesar pembeli properti adalah lokasi — section ini menjawabnya.

```
┌─────────────────────────────────┐
│                                 │
│  Lokasi yang                    │  ← Heading
│  Bikin Hidup Lebih Mudah        │
│                                 │
│  ┌──────────────────────────┐   │
│  │                          │   │
│  │   [PETA INTERAKTIF]      │   │  ← Google Maps embed
│  │   atau Static Map Image  │   │    height 280px mobile
│  │                          │   │    dengan pin custom
│  └──────────────────────────┘   │
│                                 │
│  Jarak dari Lokasi:             │  ← Subheading
│                                 │
│  🚗 Tol Bekasi Barat    3 mnt   │  ← Daftar jarak
│  🚉 Stasiun KRL         5 mnt   │    ikon + nama + waktu
│  🏫 SDN / SMPN          2 mnt   │    layout tabel ringan
│  🏥 RS Hermina          8 mnt   │
│  🛒 Supermarket         4 mnt   │
│  🕌 Masjid Jami         1 mnt   │
│                                 │
│  📍 Alamat Lengkap:             │
│  Jl. Raya Bekasi-Cikarang       │
│  Km. 28, Bekasi Barat           │
│                                 │
│  [ BUKA DI GOOGLE MAPS →  ]    │  ← CTA secondary
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#F5F0E8`
- Layout desktop: **2 kolom** — kiri peta (60%), kanan daftar jarak (40%)
- Setiap baris jarak: border-bottom `1px solid rgba(27,67,50,0.1)`
- Angka waktu: bold, warna `#D4A853` (amber) — menonjol positif
- Peta: border-radius 12px, shadow medium
- Hover baris: background `#E8F5E9` ringan

---

## 6. CARA BELI / ALUR PEMBELIAN

**Tujuan:** Hilangkan ketakutan proses KPR yang rumit — tunjukkan mudahnya.

```
┌─────────────────────────────────┐
│                                 │
│  3 Langkah Mudah                │  ← Heading
│  Punya Rumah Sendiri            │
│                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                 │
│  ① KUNJUNGI & PILIH UNIT        │  ← Step 1
│    Datang ke lokasi atau        │
│    survey virtual via video     │
│    call bersama agen kami.      │
│                                 │
│    ✓ Gratis konsultasi          │  ← Sub-poin kecil
│    ✓ Tanpa tekanan sales        │
│                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                 │
│  ② PROSES KPR / CASH           │  ← Step 2
│    Tim kami bantu urus KPR      │
│    dari awal sampai ACC.        │
│    Berpengalaman di 8 bank.     │
│                                 │
│    ✓ Gratis biaya proses KPR    │
│    ✓ Estimasi 7–14 hari kerja   │
│                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                 │
│  ③ SERAH TERIMA KUNCI           │  ← Step 3
│    Terima kunci, masuk rumah.   │
│    Kami dampingi hingga         │
│    selesai akad notaris.        │
│                                 │
│    ✓ SHM langsung atas nama     │
│    ✓ Garansi bangunan 1 tahun   │
│                                 │
│  [ MULAI KONSULTASI GRATIS ]   │  ← CTA Amber Gold
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#1B4332` (Forest Green) — dramatik, kontras kuat
- Semua teks: `#F5F0E8` (Warm Parchment)
- Nomor step: ukuran 80px, font ExtraBold, warna `rgba(212,168,83,0.15)` (ghost number sebagai dekorasi)
- Heading step: warna `#D4A853` (Amber Gold)
- Separator: garis `1px solid rgba(245,240,232,0.2)`
- Sub-poin checklist: ikon centang amber
- Desktop: 3 kolom horizontal dengan panah antar step

---

## 7. GALERI / FOTO PROYEK

**Tujuan:** Tunjukkan visual nyata — fasad, interior, kawasan, fasilitas.

```
┌─────────────────────────────────┐
│                                 │
│  Lihat Sendiri,                 │  ← Heading
│  Bukan Cuma Janji               │
│                                 │
│  [Tab: Fasad] [Interior]        │  ← Filter kategori
│  [Kawasan]   [Fasilitas]        │
│                                 │
│  ┌──────────┬──────────┐        │
│  │          │  [Kecil] │        │  ← Masonry grid
│  │  [Besar] ├──────────┤        │    foto 1 besar kiri
│  │          │  [Kecil] │        │    2 kecil kanan
│  └──────────┴──────────┘        │
│                                 │
│  ┌──────┬──────┬──────┐         │  ← Row 2: 3 kolom sejajar
│  │[Med] │[Med] │[Med] │         │
│  └──────┴──────┴──────┘         │
│                                 │
│  +8 foto lagi                   │  ← Overlay count
│                                 │
│  [ LIHAT SEMUA FOTO (24) ]     │  ← Ghost button
│                                 │
│  ─── atau ───                   │
│                                 │
│  [ 📹 TONTON VIDEO TOUR ]      │  ← Video tour CTA
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#F5F0E8`
- Grid masonry: gap 8px, foto tanpa radius (edge-to-edge feel)
- Hover foto: overlay gelap + ikon magnify + "Perbesar" teks
- Filter tab: animasi underline slide, bukan background change
- "+8 foto lagi": overlay di foto terakhir, background `rgba(13,31,26,0.7)`
- Video tour button: icon play amber, border green

---

## 8. SIMULASI KPR (Kalkulator)

**Tujuan:** Tool yang sangat powerful — pembeli bisa cek cicilan langsung. Meningkatkan engagement dan leads.

```
┌─────────────────────────────────┐
│                                 │
│  Hitung Cicilan KPR-mu          │  ← Heading
│  Sekarang                       │
│                                 │
│  Harga Unit                     │  ← Label
│  ┌───────────────────────────┐  │
│  │ Rp  [389.000.000        ] │  │  ← Input harga (editable)
│  └───────────────────────────┘  │
│                                 │
│  Uang Muka (DP)                 │
│  ┌──────────────────────────┐   │
│  │ [══════●══════] 20%      │   │  ← Range slider
│  └──────────────────────────┘   │
│  = Rp 77.800.000                │  ← Hasil kalkulasi dinamis
│                                 │
│  Tenor KPR                      │
│  [10 th] [15 th] [●20 th] [30]  │  ← Toggle button
│                                 │
│  Bunga (% per tahun)            │
│  ┌──────────────────────────┐   │
│  │ 7.25%  (referensi BTN)   │   │  ← Input dengan hint
│  └──────────────────────────┘   │
│                                 │
│  ┌──────────────────────────┐   │
│  │ 💰 Estimasi Cicilan/bln  │   │  ← Result box
│  │                          │   │    background amber muda
│  │   Rp 2.487.000 / bulan   │   │    angka besar bold
│  │                          │   │
│  │ DP yang disiapkan:       │   │
│  │   Rp 77.800.000          │   │
│  └──────────────────────────┘   │
│                                 │
│  * Simulasi ini bersifat        │  ← Disclaimer kecil
│    estimasi. Hubungi agen       │
│    untuk perhitungan resmi.     │
│                                 │
│  [ KONSULTASI KPR GRATIS →  ]  │  ← CTA dari result
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#E8F5E9` (Mint Whisper)
- Result box: background `rgba(212,168,83,0.15)`, border `2px solid #D4A853`
- Angka cicilan: ExtraBold 36px, warna `#1B4332`
- Slider: track `#1B4332`, thumb lingkaran amber
- Input update: angka berubah dengan animasi counter (300ms)
- Desktop: layout 2 kolom (input kiri, result kanan fixed)

---

## 9. TESTIMONI PEMBELI

**Tujuan:** Social proof dari pembeli nyata — photo, nama, unit yang dibeli.

```
┌─────────────────────────────────┐
│                                 │
│  Keluarga yang Sudah            │  ← Heading
│  Percaya Kami                   │
│                                 │
│  ┌───────────────────────────┐  │
│  │ [Foto keluarga di depan   │  │  ← Testimoni 1
│  │  rumah baru mereka]       │  │    foto nyata
│  │                           │  │    (bukan stock)
│  │ ★★★★★                    │  │
│  │                           │  │
│  │ "Awalnya ragu, tapi team  │  │  ← Quote
│  │  Griya Nusantara bantu    │  │
│  │  dari A-Z. KPR ACC dalam  │  │
│  │  10 hari!"                │  │
│  │                           │  │
│  │ 👤 Bpk. Rudi Santoso      │  │  ← Nama + detail unit
│  │    Tipe 36/72, Cluster A  │  │
│  │    Beli: Maret 2024       │  │
│  └───────────────────────────┘  │
│                                 │
│  [Testimoni 2]  [Testimoni 3]   │  ← Carousel / swipe
│                                 │
│  ● ○ ○                         │
│                                 │
│  ┌────────┬────────┬────────┐   │  ← Counter angka
│  │ 500+   │  98%   │  10+   │   │    background green
│  │ Unit   │ Kepuas │  Tahun │   │
│  │ Terjual│  -an   │ Pengal │   │
│  └────────┴────────┴────────┘   │
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#0D1F1A` (Deep Forest) — premium, tenang
- Teks: `#F5F0E8`
- Foto testimoni: border amber 3px, shadow hangat
- Nama: bold amber
- Detail unit: muted sage, font kecil
- Counter bar: background `#1B4332`, angka amber ExtraBold

---

## 10. FAQ

**Tujuan:** Jawab keberatan umum pembeli properti sebelum mereka pergi.

```
┌─────────────────────────────────┐
│                                 │
│  Pertanyaan yang Sering         │  ← Heading
│  Calon Pembeli Tanyakan         │
│                                 │
│  ┌───────────────────────────┐  │
│  │ Apakah bisa KPR dengan    │  │  ← Q1 (collapsed)
│  │ gaji UMR?             ∨   │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ Berapa DP minimal?    ∧   │  │  ← Q2 (expanded)
│  │ ─────────────────────     │  │
│  │ DP minimal 0% untuk       │  │
│  │ program FLPP subsidi.     │  │
│  │ Non-subsidi mulai 10%.    │  │
│  └───────────────────────────┘  │
│                                 │
│  [Q3] [Q4] [Q5] [Q6]           │  ← 6 pertanyaan total
│                                 │
│  Pertanyaanmu belum terjawab?   │
│  [ TANYA LANGSUNG AGEN →   ]   │  ← WhatsApp CTA
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: `#F5F0E8`
- Setiap item: padding 20px, border-bottom `1px solid rgba(27,67,50,0.15)`
- Chevron: warna amber, rotasi 180° saat expand (CSS transition)
- Expanded: background `#E8F5E9` ringan, border-left `3px solid #1B4332`

**FAQ yang Direkomendasikan:**
1. Apakah bisa KPR dengan gaji UMR / berpenghasilan tidak tetap?
2. Berapa DP minimal dan apakah ada program DP 0%?
3. Berapa lama proses KPR sampai bisa ditempati?
4. Apakah sertifikat langsung SHM atas nama saya sendiri?
5. Bagaimana jika KPR ditolak bank?
6. Ada fasilitas apa saja di dalam cluster?

---

## 11. CTA FINAL + FORM KONTAK

**Tujuan:** Tangkap lead — orang yang scroll sampai bawah adalah yang paling serius.

```
┌─────────────────────────────────┐
│                                 │
│  Siap Wujudkan                  │  ← Heading besar
│  Rumah Impianmu?                │
│                                 │
│  Konsultasi GRATIS dengan       │  ← Subheading
│  agen kami. Tanpa tekanan,      │
│  tanpa komitmen.                │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 👤 Nama Lengkap           │  │  ← Input
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 📱 Nomor WhatsApp         │  │  ← Input
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 🏠 Tipe Unit yang Diminati│  │  ← Dropdown
│  │                       ▾   │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 💰 Budget (estimasi)      │  │  ← Dropdown
│  │                       ▾   │  │
│  └───────────────────────────┘  │
│                                 │
│  [ KIRIM & HUBUNGI AGEN →  ]   │  ← CTA Amber Gold full-width
│                                 │
│  ─── atau hubungi langsung ───  │
│                                 │
│  [ 💬 Chat WhatsApp Sekarang ] │  ← WA button hijau
│                                 │
│  🔒 Data kamu aman.            │  ← Trust signal
│     Tidak akan disebar.         │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  📞 0811-2345-6789              │  ← Telepon langsung
│  🕐 Senin–Sabtu, 08.00–17.00    │
└─────────────────────────────────┘
```

**Detail Desain:**
- Background: split — atas `#1B4332`, bawah `#0D1F1A`
- Teks: `#F5F0E8`
- Input: background `rgba(245,240,232,0.1)`, border `1px solid rgba(212,168,83,0.4)`
- Input focus: border `#D4A853` solid, glow amber
- Dropdown opsi budget: < 400jt / 400–600jt / 600jt–1M / > 1M
- Form 4 field — cukup, tidak lebay
- Nomor telepon: link `tel:`, ukuran besar, bold amber

---

## 12. FOOTER

```
┌─────────────────────────────────┐
│                                 │
│  🏡 GRIYA NUSANTARA             │  ← Logo putih
│     Developer Perumahan         │
│     Terpercaya Sejak 2015       │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  Alamat Marketing Office:       │
│  Jl. Raya Bekasi-Cikarang       │
│  Km. 28, Bekasi Barat 17136     │
│                                 │
│  📞 0811-2345-6789              │
│  💬 0811-2345-6789 (WA)         │
│  📧 marketing@griyanusantara.id │
│                                 │
│  Jam Operasional:               │
│  Senin–Sabtu: 08.00–17.00       │
│  Minggu: 09.00–15.00            │
│                                 │
│  [Instagram] [YouTube] [TikTok] │
│  [Facebook]  [Maps]             │
│                                 │
│  ─────────────────────────────  │
│  © 2025 PT Griya Nusantara      │
│  Tbk. Semua hak dilindungi.     │
│  IMB: 503/XXX/2015              │  ← Nomor legalitas
└─────────────────────────────────┘
```

---
---

## 📐 RESPONSIVE BEHAVIOR

| Breakpoint | Behavior |
|---|---|
| **Mobile** `< 480px` | 1 kolom, hero full-height, unit card horizontal scroll snap |
| **Mobile L** `480–767px` | 1 kolom, card 2 per baris untuk unit |
| **Tablet** `768–1023px` | 2 kolom untuk unit & benefit, map + list side by side |
| **Desktop** `≥ 1024px` | 3 kolom unit, full masonry gallery, kalkulator 2-kolom |
| **Wide** `≥ 1440px` | Max-width 1200px, centered, whitespace lebih lega |

### Mobile-Specific Rules
```
✓ Unit card: horizontal scroll-snap (satu per satu)
✓ Semua CTA button: min-height 48px
✓ Simulasi KPR: slider dan input vertikal, hasil di bawah
✓ Peta: height 240px, full width
✓ Sticky WhatsApp float button (bottom-right)
✓ Hero: 100svh, jangan pakai 100vh (iOS safe area)
✓ Foto testimoni: landscape crop untuk layar lebar
```

---

## 🌀 ANIMASI & MICRO-INTERACTION

| Elemen | Animasi | Durasi |
|---|---|---|
| Hero teks | Fade-in + slide-up stagger per baris | 0.8s, delay 0.1s per baris |
| Stats counter | Count up dari 0 saat masuk viewport | 1.5s ease-out |
| Unit card | Fade-in stagger saat masuk viewport | 0.4s, stagger 80ms |
| Filter tab click | Kartu lama fade out, baru fade in | 250ms |
| KPR kalkulator | Angka cicilan update dengan counter | 300ms ease |
| Badge "Unit Terbatas" | Pulse ring merah (bukan blink) | 2s infinite |
| FAQ accordion | max-height expand | 300ms cubic-bezier |
| Galeri hover | Overlay fade + scale image 1.03 | 200ms |
| CTA button hover | translateY(-2px) + shadow | 150ms |
| WhatsApp float | Bounce-in dari kanan | 0.5s saat muncul pertama |
| Map marker | Drop animation saat load | 0.6s |

---

## ✅ CHECKLIST DESAIN FINAL

**Fokus & Konversi**
- [ ] Satu tujuan: lead konsultasi / tanya WA
- [ ] Tidak ada navigasi menu yang ramai
- [ ] CTA muncul di: Hero, Cara Beli, FAQ, CTA Final (4 titik)
- [ ] Nomor WhatsApp selalu terlihat (sticky float mobile)
- [ ] Harga ditampilkan dari awal (bukan hidden — membuang waktu)

**Trust & Kredibilitas**
- [ ] Logo mitra bank / KPR terlihat jelas
- [ ] Nomor IMB / legalitas ada di footer
- [ ] Foto real (bukan render), ada foto testimoni keluarga nyata
- [ ] Simulasi KPR tersedia (meningkatkan engagement +40%)
- [ ] Rating & jumlah unit terjual terlihat

**Mobile-First**
- [ ] Semua touch target ≥ 48px
- [ ] Horizontal scroll unit card (bukan grid 2 kolom — terlalu kecil)
- [ ] WA float button selalu accessible
- [ ] Kalkulator KPR usable satu tangan
- [ ] Peta bisa di-tap untuk buka Google Maps

**Visual**
- [ ] Foto nyata, bukan CGI render semua
- [ ] Harga tidak disembunyikan — tampil prominent
- [ ] Warna tidak terlalu banyak — maksimal 3 warna utama
- [ ] Font terbaca di semua usia (min 14px body, min 28px harga)

---

*Dokumen ini adalah spesifikasi desain UI murni untuk landing page Developer Perumahan.*
*Brand contoh: Griya Nusantara | Segment: Middle | Produk: Rumah Tapak / Cluster*
*Versi: 1.0 | Mobile-First · Conversion-Focused · Trust-Driven*
