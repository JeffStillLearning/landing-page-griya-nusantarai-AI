# PRD — Griya Nusantara · Developer Perumahan Landing Page
**Product Requirements Document**
Version: 1.0 | Status: Ready for Development
Stack: Next.js 15 · Tailwind CSS v3 · Vercel
Target: Lighthouse 100 semua metrik

---

## 1. RINGKASAN PROYEK

| Item | Detail |
|---|---|
| **Nama Proyek** | Griya Nusantara — Marketing Landing Page |
| **Tipe** | Static Marketing Site + Lead Generation |
| **Tujuan Utama** | Konversi pengunjung → form konsultasi / WhatsApp redirect |
| **Target Skor** | Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100 |
| **Framework** | Next.js 15.x (App Router) |
| **Render Strategy** | Static Site Generation (SSG) via `generateStaticParams` + `export` output |
| **Styling** | Tailwind CSS v3 + CSS Variables |
| **Hosting** | Vercel (Next.js native adapter) |
| **Deployment** | GitHub → Vercel CI/CD (auto-deploy on push ke `main`) |
| **Node.js Minimum** | v18.18.0 (requirement Next.js 15) |
| **Domain Contoh** | `griyanusantara.id` |

---

## 2. TUJUAN BISNIS & SUCCESS METRICS

### Tujuan Bisnis
- Menghasilkan lead konsultasi unit via form & WhatsApp
- Membangun kepercayaan calon pembeli terhadap Griya Nusantara
- Terindeks sempurna Google + AI crawlers (ChatGPT, Perplexity, Gemini)
- Mendukung SEO lokal area Bekasi / Jabodetabek

### Key Performance Metrics

| Metrik | Target |
|---|---|
| Lighthouse Performance | 100 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Core Web Vitals — LCP | < 1.2s |
| Core Web Vitals — CLS | 0.0 |
| Core Web Vitals — INP | < 100ms |
| First Contentful Paint | < 0.8s |
| Total JS Bundle (client) | < 50KB gzipped |
| Total Page Transfer | < 500KB (gambar teroptimasi) |
| Structured Data Errors | 0 |

---

## 3. TECH STACK & ARSITEKTUR

### 3.1 Stack Lengkap

```
Framework       : Next.js 15.x (App Router)
Render Mode     : Static Export (output: 'export')
                  → Semua halaman di-pre-render saat build
                  → Zero server-side runtime = deploy ke Vercel Edge

Styling         : Tailwind CSS v3
                  → PostCSS + Autoprefixer
                  → CSS Variables untuk design tokens Griya Nusantara
                  → ~8–15KB CSS di production (purged)

JavaScript      : React 19 (bundled bersama Next.js 15)
                  → Komponen interaktif: 'use client' directive
                  → Semua lain: Server Components (zero JS ke browser)

Fonts           : next/font (Google Fonts, self-hosted otomatis)
                  → Plus Jakarta Sans (300, 400, 500, 600, 700, 800)
                  → Lora (400, 400i)
                  → font-display: swap, subset latin+latin-ext

Images          : next/image
                  → Auto WebP/AVIF conversion
                  → Responsive srcset otomatis
                  → Lazy loading default (kecuali hero: priority={true})
                  → Explicit width + height wajib (zero CLS)

Icons           : Inline SVG components (zero HTTP request)
                  → Tidak pakai icon library berat

Maps            : Google Maps Embed API (iframe lazy load)
                  → loading="lazy" + title attribute

Analytics       : @vercel/analytics (opsional, privacy-first)

Type Safety     : TypeScript 5.x (strict mode)

Linting         : ESLint (Next.js config) + Prettier

Deployment      : Vercel
                  → @vercel/og untuk Open Graph image generation
                  → Edge Network CDN global
```

### 3.2 Kenapa Next.js 15 + Static Export?

```
✓ App Router → layout.tsx bersama, metadata API built-in
✓ Server Components → halaman-halaman render tanpa JS ke client
✓ next/image → Image optimization otomatis (LCP killer feature)
✓ next/font → Zero layout shift untuk font loading
✓ generateMetadata() → SEO per-halaman dengan TypeScript
✓ Static export → deploy ke Vercel CDN, bukan server → ultra fast
✓ React 19 → concurrent features, useFormStatus, useOptimistic
✓ Turbopack (dev) → HMR <500ms saat development
```

### 3.3 Struktur Direktori

```
griya-nusantara/
│
├── public/
│   ├── robots.txt                  ← AI + search crawler policy
│   ├── llms.txt                    ← AI LLM instructions
│   ├── sitemap.xml                 ← Manual (atau next-sitemap)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png        ← 180×180
│   ├── og-image.jpg                ← 1200×630 Open Graph
│   ├── manifest.webmanifest
│   └── images/
│       ├── hero/
│       │   └── cluster-hero.jpg    ← Foto fasad utama
│       ├── units/
│       │   ├── tipe-36-72.jpg
│       │   ├── tipe-45-90.jpg
│       │   └── tipe-54-108.jpg
│       ├── gallery/
│       │   ├── fasad-01.jpg ... fasad-06.jpg
│       │   ├── interior-01.jpg ... interior-06.jpg
│       │   ├── kawasan-01.jpg ... kawasan-04.jpg
│       │   └── fasilitas-01.jpg ... fasilitas-04.jpg
│       └── testimonials/
│           ├── keluarga-rudi.jpg
│           └── keluarga-dewi.jpg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← RootLayout: font, metadata default, schema inject
│   │   ├── page.tsx                ← Home page, semua sections
│   │   ├── not-found.tsx           ← Custom 404
│   │   └── globals.css             ← CSS variables + Tailwind directives
│   │
│   ├── components/
│   │   ├── sections/               ← Server Components (no 'use client')
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── BenefitSection.tsx
│   │   │   ├── UnitsSection.tsx
│   │   │   ├── LocationSection.tsx
│   │   │   ├── HowToBuySection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── KPRCalculator.tsx   ← 'use client' (interaktif)
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── CTAFormSection.tsx  ← 'use client' (form)
│   │   │   └── FooterSection.tsx
│   │   │
│   │   ├── ui/                     ← Reusable components
│   │   │   ├── Button.tsx          ← Server Component
│   │   │   ├── UnitCard.tsx        ← Server Component
│   │   │   ├── FAQAccordion.tsx    ← 'use client' (accordion)
│   │   │   ├── GalleryGrid.tsx     ← 'use client' (filter + lightbox)
│   │   │   ├── TestimonialCarousel.tsx ← 'use client' (swipe)
│   │   │   ├── KPRSlider.tsx       ← 'use client' (range input)
│   │   │   └── WhatsAppFloat.tsx   ← 'use client' (scroll listener)
│   │   │
│   │   └── seo/
│   │       ├── JsonLd.tsx          ← Generic JSON-LD injector
│   │       ├── OrganizationSchema.tsx
│   │       ├── FAQSchema.tsx
│   │       └── BreadcrumbSchema.tsx
│   │
│   ├── data/                       ← Typed data, no DB needed
│   │   ├── site.ts                 ← Konfigurasi global (nama, WA, alamat)
│   │   ├── units.ts                ← Data unit + harga
│   │   ├── testimonials.ts         ← Data testimoni
│   │   ├── faq.ts                  ← Data FAQ
│   │   ├── gallery.ts              ← Data foto galeri
│   │   └── benefits.ts             ← Data benefit section
│   │
│   ├── lib/
│   │   ├── whatsapp.ts             ← Utility build WA URL + pesan
│   │   ├── kpr.ts                  ← Kalkulasi cicilan KPR
│   │   ├── formatCurrency.ts       ← Format Rupiah
│   │   └── cn.ts                   ← clsx + tailwind-merge helper
│   │
│   └── types/
│       ├── unit.ts
│       ├── testimonial.ts
│       └── faq.ts
│
├── next.config.ts                  ← Next.js 15 config (TypeScript)
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .env.local                      ← Variabel environment (tidak di-commit)
├── .env.example                    ← Template env vars
├── vercel.json                     ← Security headers + cache rules
├── package.json
└── README.md
```

---

## 4. KONFIGURASI NEXT.JS 15

### 4.1 next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export untuk deploy ke Vercel CDN
  output: 'export',

  // Trailing slash konsisten untuk SEO canonical
  trailingSlash: true,

  // Matikan X-Powered-By header
  poweredByHeader: false,

  // Compress HTML output
  compress: true,

  // Image optimization
  images: {
    // Static export butuh unoptimized: false + Vercel Image Optimization
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [],  // tidak ada remote image
  },

  // Experimental features Next.js 15
  experimental: {
    // Optimasi CSS (critters untuk critical CSS inline)
    optimizeCss: true,
    // Turbopack untuk development (stable di Next.js 15)
    turbopack: true,
  },

  // Redirect www → non-www (jika bukan static export)
  // Catatan: redirect tidak bisa di static export, handle di Vercel
}

export default nextConfig
```

### 4.2 app/layout.tsx (Root Layout + Metadata)

```typescript
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  organizationSchema,
  websiteSchema,
  webPageSchema,
} from '@/data/schemas'
import './globals.css'

// Font optimization — self-hosted otomatis oleh next/font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
  preload: false,  // load setelah critical
})

// Metadata API Next.js 15 — menggantikan next/head sepenuhnya
export const metadata: Metadata = {
  metadataBase: new URL('https://griyanusantara.id'),
  title: {
    default: 'Griya Nusantara — Perumahan Modern Bekasi, Mulai 300 Jutaan',
    template: '%s | Griya Nusantara',
  },
  description:
    'Developer perumahan terpercaya di Bekasi. Rumah tapak modern, KPR DP 0%, SHM atas nama sendiri. Konsultasi gratis, ready stock tersedia.',
  keywords: [
    'perumahan bekasi',
    'rumah murah bekasi',
    'developer perumahan bekasi barat',
    'KPR DP 0 persen bekasi',
    'rumah subsidi bekasi',
    'cluster bekasi strategis',
    'griya nusantara bekasi',
  ],
  authors: [{ name: 'PT Griya Nusantara', url: 'https://griyanusantara.id' }],
  creator: 'PT Griya Nusantara',
  publisher: 'PT Griya Nusantara',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://griyanusantara.id',
    siteName: 'Griya Nusantara',
    title: 'Griya Nusantara — Perumahan Modern Bekasi',
    description:
      'Konsultasi gratis. KPR DP 0%. SHM atas nama sendiri. Ready stock tersedia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cluster Griya Nusantara Bekasi',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Griya Nusantara — Perumahan Modern Bekasi',
    description: 'Konsultasi gratis. KPR DP 0%. Ready stock.',
    images: ['/og-image.jpg'],
  },

  // Canonical
  alternates: {
    canonical: 'https://griyanusantara.id',
    languages: { 'id-ID': 'https://griyanusantara.id' },
  },

  // Verification (isi setelah domain aktif)
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN',
  },
}

// Viewport terpisah dari metadata (Next.js 15 requirement)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B4332',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${lora.variable}`}
    >
      <head>
        {/* Geo SEO */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi Barat, Jawa Barat, Indonesia" />
        <meta name="geo.position" content="-6.2383;106.9756" />
        <meta name="ICBM" content="-6.2383, 106.9756" />

        {/* Structured Data */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={webPageSchema} />
      </head>
      <body className="font-body bg-parchment text-dark antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 5. PERFORMANCE REQUIREMENTS

### 5.1 Core Web Vitals Strategy

**LCP — Target < 1.2s**
```typescript
// Hero image: priority={true} = preload otomatis oleh next/image
// next/image auto-generate <link rel="preload"> di <head>

<Image
  src="/images/hero/cluster-hero.jpg"
  alt="Cluster Griya Nusantara Bekasi"
  fill
  priority          // ← preload, fetchpriority="high", eager loading
  quality={85}
  sizes="100vw"
  className="object-cover"
/>
```

**CLS — Target 0.0**
```typescript
// Semua <Image> WAJIB ada width + height, atau fill + parent relative
// Font: next/font eliminasi FOIT/FOUT sepenuhnya
// Tidak ada dynamic content tanpa reserved space
// Skeleton placeholder untuk konten yang di-fetch client-side

// ✅ BENAR
<Image src="..." alt="..." width={800} height={533} />

// ✅ BENAR (fill mode)
<div className="relative h-[400px]">
  <Image src="..." alt="..." fill className="object-cover" />
</div>

// ❌ SALAH — menyebabkan CLS
<img src="..." alt="..." />
```

**INP — Target < 100ms**
```typescript
// Hanya komponen interaktif yang pakai 'use client'
// Server Components = zero JS ke browser (majority halaman)
// Event handler ringan, tidak ada blocking computation
// KPR kalkulator: useMemo untuk kalkulasi agar tidak re-compute tiap keystroke
// Form submit: useTransition (React 19) untuk non-blocking UI update

// Komponen yang WAJIB 'use client':
// - FAQAccordion (toggle state)
// - KPRSlider (range input + real-time calc)
// - GalleryGrid (filter + lightbox)
// - TestimonialCarousel (swipe)
// - CTAForm (form state + validation)
// - WhatsAppFloat (scroll event)

// Komponen yang HARUS Server Components:
// - HeroSection, TrustBar, BenefitSection
// - UnitsSection, LocationSection, HowToBuySection
// - TestimonialSection (data rendering)
// - FooterSection
```

### 5.2 Bundle Size Strategy

```typescript
// next.config.ts — bundle analyzer (development only)
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// Target bundle breakdown:
// Framework (React + Next.js runtime)  : ~45KB gzipped
// Client Components (semua)            : < 15KB gzipped
// Tailwind CSS                         : ~8KB gzipped
// Fonts (subset)                       : ~20KB per font file
// TOTAL JS ke browser                  : < 60KB gzipped
```

### 5.3 Image Budget

```
Hero foto       : AVIF ~60KB, WebP ~90KB (1920w)
Unit card foto  : WebP ~30KB (800w)
Galeri thumb    : WebP ~20KB (400w)
Testimoni foto  : WebP ~15KB (200w)
OG Image        : JPEG ~80KB (1200×630)
```

### 5.4 Critical CSS Strategy

```typescript
// experimental.optimizeCss: true di next.config.ts
// → Critters akan otomatis inline critical CSS
// → Non-critical CSS di-defer

// CSS Variables global (globals.css):
:root {
  --color-primary: #1B4332;
  --color-secondary: #D4A853;
  --color-accent: #E8F5E9;
  --color-dark: #0D1F1A;
  --color-parchment: #F5F0E8;
  --color-muted: #8A9E94;
  --color-danger: #E84545;

  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Lora', Georgia, serif;

  --radius-card: 12px;
  --radius-button: 8px;
  --radius-input: 8px;
  --shadow-card: 0 4px 24px rgba(27, 67, 50, 0.12);
  --shadow-cta: 0 4px 16px rgba(212, 168, 83, 0.4);
}
```

---

## 6. ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

### 6.1 Semantic HTML & Landmark Regions

```typescript
// page.tsx — struktur wajib
export default function Home() {
  return (
    <>
      {/* Skip link — WAJIB ada */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4
                   focus:left-4 focus:z-50 focus:px-4 focus:py-2
                   focus:bg-primary focus:text-white focus:rounded"
      >
        Langsung ke konten utama
      </a>

      <header role="banner" aria-label="Header Griya Nusantara">
        {/* Logo only — no nav */}
      </header>

      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="hero-heading"> ... </section>
        <section aria-labelledby="benefit-heading"> ... </section>
        <section aria-labelledby="units-heading"> ... </section>
        <section aria-labelledby="location-heading"> ... </section>
        <section aria-labelledby="howtobuy-heading"> ... </section>
        <section aria-labelledby="gallery-heading"> ... </section>
        <section aria-labelledby="kpr-heading"> ... </section>
        <section aria-labelledby="testimonial-heading"> ... </section>
        <section aria-labelledby="faq-heading"> ... </section>
        <section aria-labelledby="cta-heading"> ... </section>
      </main>

      <footer role="contentinfo" aria-label="Footer Griya Nusantara">
        ...
      </footer>
    </>
  )
}
```

### 6.2 Heading Hierarchy

```
h1  → 1 saja — "Rumah yang Kamu Impikan, Harga yang Bisa Kamu Wujudkan."
h2  → Heading tiap section (Kenapa Pilih Kami?, Unit Tersedia, Lokasi, dll)
h3  → Sub-item dalam section (nama tipe unit, nama benefit)
h4  → Detail kartu (harga, spesifikasi)
```

### 6.3 Color Contrast Compliance

| Kombinasi | Rasio | Status |
|---|---|---|
| `#0D1F1A` di atas `#F5F0E8` | 15.2:1 | ✅ AAA |
| `#F5F0E8` di atas `#0D1F1A` | 15.2:1 | ✅ AAA |
| `#F5F0E8` di atas `#1B4332` | 9.8:1 | ✅ AAA |
| `#D4A853` di atas `#0D1F1A` | 6.4:1 | ✅ AA |
| `#D4A853` di atas `#1B4332` | 3.2:1 | ✅ AA Large (≥24px/18px bold) |
| `#D4A853` di atas `#F5F0E8` | 2.8:1 | ⚠️ Dekoratif only — JANGAN untuk teks kecil |
| `#FFFFFF` di atas `#E84545` | 4.6:1 | ✅ AA |

> **Rule:** `#D4A853` di atas latar terang HANYA untuk elemen dekoratif, angka besar (≥28px bold), atau ikon. JANGAN untuk body text atau label kecil.

### 6.4 Interactive Component Accessibility

**FAQ Accordion**
```typescript
// FAQAccordion.tsx — 'use client'
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div role="list">
      {items.map((item, i) => (
        <div key={i} role="listitem">
          <button
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-5 flex justify-between items-center"
          >
            <span>{item.question}</span>
            <ChevronIcon
              aria-hidden="true"
              className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            hidden={openIndex !== i}
          >
            <p className="px-5 pb-5">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
```

**KPR Calculator Form**
```typescript
// Semua input punya label eksplisit — BUKAN hanya placeholder
<label htmlFor="harga-unit" className="block text-sm font-semibold mb-2">
  Harga Unit
</label>
<input
  id="harga-unit"
  type="number"
  inputMode="numeric"   // numeric keyboard di mobile
  aria-describedby="harga-hint"
  aria-label="Harga unit dalam Rupiah"
  ...
/>
<span id="harga-hint" className="text-xs text-muted">
  Masukkan harga unit yang Anda minati
</span>
```

**Form Konsultasi**
```typescript
// Error state — tidak hanya warna, pakai ikon + teks
<div role="alert" aria-live="polite" className="flex items-center gap-2 text-red-600">
  <ErrorIcon aria-hidden="true" />
  <span id="nama-error">Nama lengkap wajib diisi</span>
</div>
<input
  aria-invalid={hasError}
  aria-describedby="nama-error"
  aria-required="true"
  ...
/>
```

**WhatsApp Float Button**
```typescript
<a
  href={whatsappUrl}
  aria-label="Chat dengan agen via WhatsApp"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 w-14 h-14 ..."
>
  <WhatsAppIcon aria-hidden="true" />
</a>
```

### 6.5 Reduced Motion

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 6.6 Focus Management

```css
/* globals.css — focus visible outline */
:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Reset focus untuk mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 7. SEO REQUIREMENTS

### 7.1 Metadata per Page (Next.js 15 Metadata API)

```typescript
// app/page.tsx — halaman utama
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Griya Nusantara — Perumahan Modern Bekasi, Mulai 300 Jutaan',
  description:
    'Developer perumahan terpercaya di Bekasi Barat. Rumah tapak cluster modern, KPR DP 0%, SHM atas nama sendiri. 500+ unit terjual sejak 2015.',
  alternates: {
    canonical: 'https://griyanusantara.id/',
  },
  openGraph: {
    title: 'Griya Nusantara — Perumahan Modern Bekasi',
    description: 'KPR DP 0%. SHM langsung atas nama. Konsultasi gratis.',
    url: 'https://griyanusantara.id/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}
```

### 7.2 Geo SEO (Local Search)

```html
<!-- Di layout.tsx <head> -->
<meta name="geo.region" content="ID-JB" />
<meta name="geo.placename" content="Bekasi Barat, Jawa Barat, Indonesia" />
<meta name="geo.position" content="-6.2383;106.9756" />
<meta name="ICBM" content="-6.2383, 106.9756" />
```

**Keyword Strategy Lokal:**
```
Primary   : "perumahan bekasi barat"
Secondary : "rumah KPR DP 0 bekasi", "developer perumahan bekasi terpercaya"
Long-tail : "beli rumah bekasi barat dekat tol", "cicilan rumah 2 juta bekasi"
LSI       : cluster, hunian, ready stock, indent, subsidi FLPP, SHM
```

**Konten lokal yang WAJIB ada di copy:**
- Nama area spesifik: "Bekasi Barat", "Cikarang", "Jabodetabek"
- Landmark terdekat: nama tol, stasiun KRL, RS, sekolah
- Nama jalan alamat marketing office

### 7.3 Sitemap (next-sitemap)

```typescript
// next-sitemap.config.ts
import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://griyanusantara.id',
  generateRobotsTxt: false,   // robots.txt dibuat manual
  changefreq: 'monthly',
  priority: 1.0,
  sitemapSize: 7000,
  outDir: 'public',
}

export default config
```

---

## 8. STRUCTURED DATA / SCHEMA.ORG

> Semua schema di-inject via komponen `<JsonLd>` menggunakan `<script type="application/ld+json">` di `<head>`.

### 8.1 JsonLd Component

```typescript
// src/components/seo/JsonLd.tsx
// Server Component — tidak butuh 'use client'

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### 8.2 Organization Schema (RealEstateAgent + LocalBusiness)

```json
{
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": "https://griyanusantara.id/#organization",
  "name": "Griya Nusantara",
  "legalName": "PT Griya Nusantara",
  "alternateName": ["Perumahan Griya Nusantara", "Developer Griya Nusantara"],
  "url": "https://griyanusantara.id",
  "logo": {
    "@type": "ImageObject",
    "url": "https://griyanusantara.id/logo.svg",
    "width": 200,
    "height": 60
  },
  "image": [
    "https://griyanusantara.id/og-image.jpg",
    "https://griyanusantara.id/images/hero/cluster-hero.jpg"
  ],
  "description": "Developer perumahan terpercaya di Bekasi Barat sejak 2015. Menyediakan rumah tapak cluster modern dengan KPR DP 0%, SHM atas nama pembeli, dan proses KPR yang dibantu dari awal hingga akad.",
  "foundingDate": "2015",
  "slogan": "Rumah yang Kamu Impikan, Harga yang Bisa Kamu Wujudkan.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Bekasi-Cikarang Km. 28",
    "addressLocality": "Bekasi Barat",
    "addressRegion": "Jawa Barat",
    "postalCode": "17136",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2383,
    "longitude": 106.9756
  },
  "hasMap": "https://maps.google.com/?q=Griya+Nusantara+Bekasi",
  "telephone": "+620811234567890",
  "email": "marketing@griyanusantara.id",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "priceRange": "Rp300.000.000 – Rp800.000.000",
  "currenciesAccepted": "IDR",
  "paymentAccepted": ["Cash", "KPR BTN", "KPR BRI", "KPR BNI", "FLPP Subsidi"],
  "areaServed": [
    {
      "@type": "City",
      "name": "Bekasi",
      "containedInPlace": {
        "@type": "State",
        "name": "Jawa Barat"
      }
    },
    { "@type": "City", "name": "Cikarang" }
  ],
  "sameAs": [
    "https://www.instagram.com/griyanusantara",
    "https://www.facebook.com/griyanusantara",
    "https://www.youtube.com/@griyanusantara",
    "https://www.tiktok.com/@griyanusantara",
    "https://g.page/griyanusantara"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+6208112345678",
      "contactType": "sales",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    {
      "@type": "ContactPoint",
      "url": "https://wa.me/6208112345678",
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tipe Unit Griya Nusantara",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Accommodation",
          "name": "Rumah Tipe 36/72",
          "description": "Rumah tapak 2 kamar tidur, 1 kamar mandi, luas bangunan 36m², luas tanah 72m².",
          "floorSize": { "@type": "QuantitativeValue", "value": 36, "unitCode": "MTK" },
          "numberOfRooms": 2,
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Kamar Tidur", "value": 2 },
            { "@type": "LocationFeatureSpecification", "name": "Kamar Mandi", "value": 1 },
            { "@type": "LocationFeatureSpecification", "name": "Carport", "value": true }
          ]
        },
        "price": "389000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "url": "https://griyanusantara.id/#unit-tipe-36"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Accommodation",
          "name": "Rumah Tipe 45/90",
          "description": "Rumah tapak 3 kamar tidur, 2 kamar mandi, luas bangunan 45m², luas tanah 90m².",
          "floorSize": { "@type": "QuantitativeValue", "value": 45, "unitCode": "MTK" },
          "numberOfRooms": 3
        },
        "price": "520000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Accommodation",
          "name": "Rumah Tipe 54/108",
          "description": "Rumah tapak 3 kamar tidur, 2 kamar mandi, luas bangunan 54m², luas tanah 108m².",
          "floorSize": { "@type": "QuantitativeValue", "value": 54, "unitCode": "MTK" },
          "numberOfRooms": 3
        },
        "price": "689000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/LimitedAvailability"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "312",
    "reviewCount": "218"
  }
}
```

### 8.3 WebSite + Sitelinks Search Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://griyanusantara.id/#website",
  "url": "https://griyanusantara.id",
  "name": "Griya Nusantara",
  "publisher": { "@id": "https://griyanusantara.id/#organization" },
  "inLanguage": "id-ID",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://griyanusantara.id/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 8.4 FAQ Schema (auto-generate dari data/faq.ts)

```typescript
// src/data/schemas.ts — generated dari data/faq.ts
import { faqData } from './faq'

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apakah bisa KPR dengan gaji UMR atau berpenghasilan tidak tetap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, bisa. Kami berpengalaman membantu klien dengan berbagai profil penghasilan termasuk wiraswasta dan karyawan kontrak. Tim kami akan membantu memilih bank yang paling sesuai dengan profil keuangan Anda."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa DP minimal dan apakah ada program DP 0%?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Untuk program FLPP subsidi, DP bisa 0%. Untuk non-subsidi, DP minimal 10% dari harga unit. Ada juga program cicilan DP yang bisa diangsur selama masa indent."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama proses KPR sampai kunci diserahkan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses KPR rata-rata 7–14 hari kerja sejak dokumen lengkap. Untuk unit ready stock, serah terima kunci bisa dilakukan dalam 30 hari setelah akad kredit."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah sertifikat langsung SHM atas nama saya sendiri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Sertifikat Hak Milik (SHM) langsung dipecah atas nama pembeli, bukan atas nama developer. Proses pemecahan sertifikat dibantu notaris rekanan kami tanpa biaya tambahan."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana jika pengajuan KPR saya ditolak bank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami bekerja sama dengan 8 bank mitra. Jika ditolak satu bank, tim kami akan membantu mengajukan ke bank lain yang profilnya lebih cocok, tanpa biaya proses tambahan."
      }
    },
    {
      "@type": "Question",
      "name": "Fasilitas apa saja yang ada di dalam cluster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cluster dilengkapi dengan one gate system (keamanan 24 jam), taman bermain anak, jogging track, masjid, dan CCTV di seluruh area. Akses jalan dalam cluster menggunakan paving block."
      }
    }
  ]
}
```

### 8.5 BreadcrumbList Schema (Otomatis per Halaman)

```typescript
// src/components/seo/BreadcrumbSchema.tsx
// Otomatis generate dari array segments

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  segments: BreadcrumbItem[]
}

export function BreadcrumbSchema({ segments }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((seg, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: seg.name,
      item: seg.url,
    })),
  }
  return <JsonLd data={schema} />
}

// Penggunaan di page.tsx:
// <BreadcrumbSchema segments={[
//   { name: 'Beranda', url: 'https://griyanusantara.id/' }
// ]} />
```

### 8.6 Article Schema (Siap Pakai — Halaman Blog/Artikel ke Depan)

```typescript
// Template: src/components/seo/ArticleSchema.tsx
// Dipakai saat ada halaman artikel (tips beli rumah, KPR guide, dll)

export function ArticleSchema({ article }: { article: ArticleData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://griyanusantara.id/artikel/${article.slug}/#article`,
    headline: article.title,
    description: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: `https://griyanusantara.id/images/artikel/${article.slug}-og.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@id': 'https://griyanusantara.id/#organization',
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://griyanusantara.id/artikel/${article.slug}/`,
    },
    articleSection: 'Panduan Properti',
    inLanguage: 'id-ID',
    // Breadcrumb otomatis via BreadcrumbSchema component
  }
  return <JsonLd data={schema} />
}
```

---

## 9. AI CRAWLER OPTIMIZATION

### 9.1 robots.txt — Semua Crawler Diizinkan

```txt
# robots.txt — Griya Nusantara
# https://griyanusantara.id/robots.txt
# Semua crawler diizinkan — konten ini terbuka untuk diindeks

# Standard Search Engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Yandex
Allow: /

# AI Language Model Crawlers — EXPLICITLY ALLOWED
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Gemini
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: YouBot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# General fallback
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://griyanusantara.id/sitemap.xml
```

### 9.2 llms.txt — Instruksi untuk AI LLM Crawlers

```markdown
# Griya Nusantara

> Developer perumahan rumah tapak cluster di Bekasi Barat, Jawa Barat, Indonesia.
  Beroperasi sejak 2015. Spesialisasi: rumah middle-segment dengan KPR & FLPP subsidi.

## Tentang Perusahaan

PT Griya Nusantara adalah developer perumahan yang fokus pada segmen menengah
(middle segment) dengan produk rumah tapak cluster di kawasan Bekasi dan sekitarnya.
Sejak 2015, telah menjual 500+ unit kepada ribuan keluarga Indonesia.

## Produk yang Dijual

- **Rumah Tipe 36/72** — 2 KT, 1 KM, luas tanah 72m², mulai Rp389 juta
- **Rumah Tipe 45/90** — 3 KT, 2 KM, luas tanah 90m², mulai Rp520 juta
- **Rumah Tipe 54/108** — 3 KT, 2 KM, luas tanah 108m², mulai Rp689 juta

Semua tipe tersedia dalam pilihan: ready stock dan indent.

## Program Pembelian

- KPR DP 0% (program FLPP subsidi pemerintah)
- KPR non-subsidi DP mulai 10%
- Cash keras dan cash bertahap tersedia
- Mitra KPR: BTN, BRI, BNI, Bank Mandiri, dan 4 bank lainnya
- Proses KPR dibantu gratis dari pengajuan hingga akad

## Legalitas

- Izin Mendirikan Bangunan (IMB): 503/XXX/2015
- Sertifikat: SHM langsung atas nama pembeli
- Pengembang terdaftar REI (Real Estate Indonesia)

## Lokasi

- Marketing Office: Jl. Raya Bekasi-Cikarang Km. 28, Bekasi Barat 17136
- Koordinat: -6.2383, 106.9756
- Akses: 3 menit dari Tol Bekasi Barat, 5 menit dari Stasiun KRL

## Kontak

- WhatsApp: +62 811 2345 678
- Email: marketing@griyanusantara.id
- Jam: Senin–Sabtu 08.00–17.00, Minggu 09.00–15.00

## Halaman Penting

- [Beranda](https://griyanusantara.id/)
- [Unit Tersedia](https://griyanusantara.id/#unit-tersedia)
- [Simulasi KPR](https://griyanusantara.id/#simulasi-kpr)
- [Lokasi](https://griyanusantara.id/#lokasi)
- [FAQ](https://griyanusantara.id/#faq)
- [Konsultasi](https://griyanusantara.id/#konsultasi)
```

---

## 10. FORM & WHATSAPP INTEGRATION

### 10.1 Form Fields & Validasi

| Field | Type | Validasi | Note |
|---|---|---|---|
| Nama Lengkap | text | Required, min 2 char | autocomplete="name" |
| Nomor WhatsApp | tel | Required, format 08xx/628xx | autocomplete="tel" |
| Tipe Unit Diminati | select | Required | — |
| Estimasi Budget | select | Required | — |

**Opsi Tipe Unit:**
- Pilih tipe unit...
- Tipe 36/72 (mulai Rp 389 juta)
- Tipe 45/90 (mulai Rp 520 juta)
- Tipe 54/108 (mulai Rp 689 juta)
- Belum tahu, minta rekomendasi

**Opsi Budget:**
- < Rp 400 juta
- Rp 400 – 600 juta
- Rp 600 juta – 1 miliar
- > Rp 1 miliar

### 10.2 WhatsApp Redirect Utility

```typescript
// src/lib/whatsapp.ts

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '6208112345678'

interface ConsultationForm {
  nama: string
  telepon: string
  tipeUnit: string
  budget: string
}

export function buildConsultationURL(data: ConsultationForm): string {
  const message = [
    `Halo Griya Nusantara! 👋`,
    ``,
    `Saya *${data.nama}* tertarik untuk konsultasi unit.`,
    ``,
    `📋 *Detail:*`,
    `• Tipe Unit: ${data.tipeUnit}`,
    `• Budget: ${data.budget}`,
    `• No. WhatsApp: ${data.telepon}`,
    ``,
    `Mohon bantu informasi lebih lanjut ya. Terima kasih!`,
  ].join('\n')

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildQuickChatURL(unitName?: string): string {
  const message = unitName
    ? `Halo, saya mau tanya tentang *${unitName}* di Griya Nusantara 🏡`
    : `Halo Griya Nusantara! Saya ingin tanya tentang unit yang tersedia 🏡`

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
```

### 10.3 KPR Calculator Logic

```typescript
// src/lib/kpr.ts

interface KPRInput {
  hargaUnit: number    // dalam Rupiah
  dpPersen: number     // 0–30%
  tenorTahun: number   // 5, 10, 15, 20, 25, 30
  bungaPerTahun: number // misal 7.25
}

interface KPRResult {
  dpNominal: number
  pokokHutang: number
  cicilanPerBulan: number
  totalBayar: number
  totalBunga: number
}

export function hitungKPR(input: KPRInput): KPRResult {
  const { hargaUnit, dpPersen, tenorTahun, bungaPerTahun } = input

  const dpNominal = Math.round(hargaUnit * (dpPersen / 100))
  const pokokHutang = hargaUnit - dpNominal
  const bungaPerBulan = bungaPerTahun / 100 / 12
  const tenorBulan = tenorTahun * 12

  // Formula anuitas
  const cicilanPerBulan =
    bungaPerBulan === 0
      ? pokokHutang / tenorBulan
      : Math.round(
          (pokokHutang *
            bungaPerBulan *
            Math.pow(1 + bungaPerBulan, tenorBulan)) /
            (Math.pow(1 + bungaPerBulan, tenorBulan) - 1)
        )

  const totalBayar = cicilanPerBulan * tenorBulan
  const totalBunga = totalBayar - pokokHutang

  return { dpNominal, pokokHutang, cicilanPerBulan, totalBayar, totalBunga }
}

// Format Rupiah
export function formatRupiah(angka: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka)
}
```

---

## 11. BEST PRACTICES & SECURITY

### 11.1 vercel.json — Security Headers + Cache

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; frame-src https://www.google.com/maps/; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-ancestors 'none';"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(self), interest-cohort=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400, stale-while-revalidate=604800"
        }
      ]
    }
  ]
}
```

### 11.2 Environment Variables

```bash
# .env.local — TIDAK di-commit ke git

# WhatsApp
NEXT_PUBLIC_WA_NUMBER=6208112345678

# Google Analytics (opsional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Maps Embed Key
NEXT_PUBLIC_MAPS_EMBED_KEY=AIzaSy...

# Site URL
NEXT_PUBLIC_SITE_URL=https://griyanusantara.id
```

```bash
# .env.example — DI-COMMIT ke git (template)
NEXT_PUBLIC_WA_NUMBER=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_MAPS_EMBED_KEY=
NEXT_PUBLIC_SITE_URL=
```

### 11.3 Web App Manifest

```json
{
  "name": "Griya Nusantara",
  "short_name": "Griya Nusantara",
  "description": "Developer perumahan modern Bekasi. Konsultasi gratis, KPR DP 0%.",
  "start_url": "/",
  "display": "browser",
  "background_color": "#F5F0E8",
  "theme_color": "#1B4332",
  "lang": "id",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

### 11.4 General Best Practices Checklist

```
✅ HTTPS enforced (Vercel otomatis)
✅ HTTP/2 (Vercel default)
✅ Zero mixed content
✅ Semua link eksternal: rel="noopener noreferrer"
✅ target="_blank" hanya di WhatsApp dan Maps link
✅ Input type="tel" untuk nomor telepon
✅ autocomplete attribute di semua form field
✅ Tidak ada document.write()
✅ Tidak ada console.error / console.warn di production
✅ Favicon lengkap: .ico, .svg, apple-touch-icon, manifest
✅ 404 page custom (not-found.tsx)
✅ No deprecated Next.js APIs (App Router penuh, no Pages Router)
✅ TypeScript strict mode — tidak ada `any` type
✅ next/image untuk semua gambar — tidak ada <img> langsung
✅ next/font untuk semua font — tidak ada @import CSS font
```

---

## 12. DEPLOYMENT PIPELINE

### 12.1 Scripts (package.json)

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true next build",
    "postbuild": "next-sitemap"
  }
}
```

### 12.2 Dependencies Utama

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@vercel/analytics": "^1.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "next-sitemap": "^4.x",
    "@next/bundle-analyzer": "^15.x",
    "eslint": "^8.x",
    "eslint-config-next": "^15.x"
  }
}
```

### 12.3 Vercel Project Settings

```
Framework Preset  : Next.js (auto-detected)
Build Command     : npm run build
Output Directory  : out  (karena static export)
Install Command   : npm ci
Node.js Version   : 20.x (LTS)

Environment Variables:
  NEXT_PUBLIC_WA_NUMBER         → (isi di Vercel dashboard)
  NEXT_PUBLIC_SITE_URL          → https://griyanusantara.id
  NEXT_PUBLIC_MAPS_EMBED_KEY    → (isi di Vercel dashboard)

Domains:
  griyanusantara.id             → Production
  www.griyanusantara.id         → Redirect ke apex domain
```

### 12.4 Branch Strategy

```
main          → Production (auto-deploy ke griyanusantara.id)
staging       → Preview (auto-deploy ke griyanusantara-staging.vercel.app)
feature/*     → Preview per PR (auto-deploy ke preview URL)
```

---

## 13. DEFINITION OF DONE

Landing page dianggap **selesai dan siap production** bila semua kriteria ini terpenuhi:

### ⚡ Performance
- [ ] Lighthouse Performance ≥ 100 (diukur di PageSpeed Insights, mobile, throttled 4G)
- [ ] LCP < 1.2s
- [ ] CLS = 0.0
- [ ] INP < 100ms
- [ ] Total JS client bundle < 60KB gzipped
- [ ] Semua gambar format WebP/AVIF
- [ ] Hero image ter-preload

### ♿ Accessibility
- [ ] Lighthouse Accessibility = 100
- [ ] Zero errors di axe DevTools (Chrome extension)
- [ ] Keyboard navigation penuh tanpa mouse (Tab, Enter, Space, Arrow)
- [ ] Screen reader test: semua section terbaca logis (VoiceOver/NVDA)
- [ ] Skip link berfungsi
- [ ] Semua gambar punya alt text deskriptif

### 🔍 SEO
- [ ] Lighthouse SEO = 100
- [ ] Google Rich Results Test: 0 errors, semua schema terdeteksi
- [ ] Sitemap.xml dapat diakses di `/sitemap.xml`
- [ ] robots.txt dapat diakses di `/robots.txt`
- [ ] llms.txt dapat diakses di `/llms.txt`
- [ ] Canonical URL benar di semua halaman
- [ ] Tidak ada duplicate title atau meta description

### 🤖 AI & Structured Data
- [ ] robots.txt mengizinkan semua AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, dll)
- [ ] llms.txt tersedia dan informatif
- [ ] Organization/RealEstateAgent schema valid
- [ ] FAQPage schema valid
- [ ] BreadcrumbList schema ada di setiap halaman
- [ ] Article schema template siap untuk halaman masa depan

### 🔒 Best Practices
- [ ] Lighthouse Best Practices = 100
- [ ] Zero console errors di production build
- [ ] Semua security headers terpasang (cek di securityheaders.com)
- [ ] HTTPS enforced, zero mixed content
- [ ] TypeScript strict mode, zero `any` type

### ✅ Fungsionalitas
- [ ] Form validasi: nama, nomor WA, tipe unit, budget
- [ ] WhatsApp redirect dengan pesan pre-filled berfungsi
- [ ] KPR kalkulator: angka berubah real-time saat slider/input berubah
- [ ] FAQ accordion buka/tutup berfungsi dengan keyboard
- [ ] Galeri filter (Fasad/Interior/Kawasan/Fasilitas) berfungsi
- [ ] WhatsApp float button muncul setelah scroll 300px
- [ ] Google Maps embed ter-load dengan lazy loading
- [ ] Semua link WhatsApp per-unit berfungsi dengan pesan spesifik
- [ ] Mobile horizontal scroll unit card berfungsi (scroll-snap)

### 🌐 Cross-browser & Device
- [ ] Chrome (latest), Firefox (latest), Safari (latest), Samsung Internet
- [ ] iPhone SE (375px) — layar terkecil
- [ ] iPhone 14 Pro (393px)
- [ ] Samsung Galaxy A (360px)
- [ ] iPad (768px)
- [ ] Desktop 1280px, 1440px

---

*PRD ini adalah dokumen hidup — update setiap kali ada perubahan requirement.*
*Versi: 1.0 | Stack: Next.js 15 + Tailwind CSS + Vercel | Last updated: 2025-05-06*
*Brand contoh: Griya Nusantara | Segment: Middle | Produk: Rumah Tapak / Cluster*
