'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/data/testimonials';

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonialsData.map((testi) => (
            <div key={testi.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-card border border-white/10 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                    <div className="absolute inset-0 border-2 border-secondary rounded-card translate-x-2 translate-y-2"></div>
                    <div className="relative w-full h-full overflow-hidden rounded-card">
                      <Image
                        src={testi.image}
                        alt={testi.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <div className="text-secondary text-xl mb-4">
                      {'★'.repeat(testi.rating)}
                    </div>
                    <p className="text-parchment font-body italic text-lg md:text-2xl leading-relaxed mb-6">
                      &quot;{testi.content}&quot;
                    </p>
                    <div>
                      <h4 className="font-display font-bold text-secondary text-lg">{testi.name}</h4>
                      <p className="text-muted text-xs uppercase tracking-widest">{testi.role}</p>
                      <p className="text-muted text-[10px] mt-1 italic">Beli: {testi.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === i ? 'bg-secondary w-8' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
