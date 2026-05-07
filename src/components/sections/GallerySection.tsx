'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';
import { GalleryCategory } from '@/types/gallery';
import { Button } from '@/components/ui/Button';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'Semua'>('Semua');

  const filteredItems = activeCategory === 'Semua' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  const categories: (GalleryCategory | 'Semua')[] = ['Semua', 'Fasad', 'Interior', 'Kawasan', 'Fasilitas'];

  return (
    <section className="py-16 md:py-24 bg-parchment" id="gallery">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary mb-4" id="gallery-heading">
              Lihat Sendiri, <br /> Bukan Cuma Janji
            </h2>
            <div className="w-24 h-1 bg-secondary mt-6"></div>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative py-2 px-1 text-sm font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'text-primary' : 'text-muted hover:text-primary'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {filteredItems.map((item, i) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden bg-accent rounded-card ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-secondary text-2xl mb-2">🔍</span>
                <p className="text-white font-display font-bold text-center text-sm">{item.title}</p>
                <p className="text-parchment/60 text-[10px] uppercase tracking-widest mt-1">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button variant="outline">
            Lihat Semua Foto (24)
          </Button>
          <span className="text-muted hidden md:block italic">atau</span>
          <Button variant="ghost" className="flex items-center gap-2">
            <span className="text-secondary">▶</span> TONTON VIDEO TOUR
          </Button>
        </div>
      </div>
    </section>
  );
}
