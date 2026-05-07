import { faqData } from './faq';
import { unitsData } from './units';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": "https://griyanusantara.id/#organization",
  "name": "Griya Nusantara",
  "legalName": "PT Griya Nusantara",
  "url": "https://griyanusantara.id",
  "logo": {
    "@type": "ImageObject",
    "url": "https://griyanusantara.id/logo.svg",
    "width": 200,
    "height": 60
  },
  "description": "Developer perumahan terpercaya di Bekasi Barat sejak 2015.",
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
  "telephone": "+628112345678",
  "priceRange": "Rp300.000.000 – Rp800.000.000"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://griyanusantara.id/#website",
  "url": "https://griyanusantara.id",
  "name": "Griya Nusantara",
  "publisher": { "@id": "https://griyanusantara.id/#organization" }
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://griyanusantara.id/#webpage",
  "url": "https://griyanusantara.id",
  "name": "Griya Nusantara — Perumahan Modern Bekasi",
  "description": "Developer perumahan terpercaya di Bekasi. Rumah tapak modern, KPR DP 0%."
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Tipe Unit Griya Nusantara",
  "itemListElement": unitsData.map((unit) => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Accommodation",
      "name": unit.name,
      "description": unit.description
    },
    "price": unit.price.toString(),
    "priceCurrency": "IDR"
  }))
};
