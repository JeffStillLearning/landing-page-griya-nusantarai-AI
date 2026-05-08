'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';
import { GalleryCategory } from '@/types/gallery';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'Semua'>('Semua');

  const filteredItems = activeCategory === 'Semua' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  const categories: (GalleryCategory | 'Semua')[] = ['Semua', 'Fasad', 'Interior', 'Kawasan', 'Fasilitas'];

  return (
    <section className="py-10 md:py-10 bg-white relative overflow-hidden" id="gallery">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-3xl mb-8 md:mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
            Galeri Visual
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-4 leading-tight" id="gallery-heading">
            Lihat Sendiri, <br /> <span className="text-secondary-dark">Bukan Cuma Janji</span>
          </h2>
          <p className="text-muted font-body text-lg md:text-xl leading-relaxed">
            Keindahan arsitektur dan kenyamanan interior yang kami hadirkan untuk masa depan keluarga Anda.
          </p>
        </div>

        {/* Filters positioned directly above the grid */}
        <div className="mb-6 md:mb-8">
          <div className="flex overflow-x-auto no-scrollbar pb-2 lg:pb-0 flex-nowrap gap-2 md:gap-3 bg-accent/50 p-1.5 rounded-2xl border border-primary/5 w-fit max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "py-2 px-5 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-xl whitespace-nowrap shrink-0",
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-muted hover:text-primary hover:bg-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Photo Grid Layout with permanent labels and stroke hover */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 min-h-[400px] md:min-h-[600px]">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="relative group overflow-hidden bg-accent rounded-xl aspect-square md:aspect-[4/3] border-2 border-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-secondary animate-in fade-in duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Overlay Content - Always Visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 md:p-5">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded bg-secondary text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-xs md:text-sm leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Stroke overlay hint on hover */}
              <div className="absolute inset-0 border-0 group-hover:border-2 border-secondary transition-all duration-300 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-8">
          <Button variant="outline" className="w-full md:w-auto px-12 py-5 border-primary/10 hover:border-primary group">
            Lihat Semua Foto <span className="ml-2 text-primary/30 group-hover:text-primary transition-colors">(24)</span>
          </Button>
          <div className="flex items-center gap-4 text-muted/40 font-display font-bold text-sm uppercase tracking-widest hidden md:flex">
            <span className="w-8 h-px bg-current" />
            Atau
            <span className="w-8 h-px bg-current" />
          </div>
          <Button variant="ghost" className="w-full md:w-auto flex items-center gap-3 font-black text-secondary-dark hover:text-primary group">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z"/></svg>
            </div>
            TONTON VIDEO TOUR
          </Button>
        </div> */}
      </div>
    </section>
  );
}
