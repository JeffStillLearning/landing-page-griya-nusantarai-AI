import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  organizationSchema,
  websiteSchema,
  webPageSchema,
  faqSchema,
  offerCatalogSchema,
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

// Metadata API Next.js 15
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
}

// Viewport
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
        <JsonLd data={faqSchema} />
        <JsonLd data={offerCatalogSchema} />
      </head>
      <body className="font-body bg-parchment text-dark antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
