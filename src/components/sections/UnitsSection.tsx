'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { unitsData } from '@/data/units';
import { UnitCard } from '@/components/ui/UnitCard';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function UnitsSection() {
  const [filter, setFilter] = useState<'Semua' | 'Ready' | 'Indent'>('Semua');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredUnits = useMemo(() => {
    if (filter === 'Semua') return unitsData;
    if (filter === 'Ready') return unitsData.filter(u => u.isReadyStock);
    return unitsData.filter(u => !u.isReadyStock);
  }, [filter]);

  // Reset scroll and index when filter changes
  useEffect(() => {
    setActiveIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filter]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < filteredUnits.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.clientWidth;
    container.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section className="py-24 lg:py-32 bg-accent/20 relative overflow-hidden" id="unit-tersedia">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-10 lg:mb-16">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-block bg-secondary/10 text-secondary-dark rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-4">
              Pilihan Properti Terbaik
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-primary mb-4 leading-[1.05]" id="units-heading">
              Unit <span className="text-secondary-dark">Tersedia</span>
            </h2>
            <p className="text-muted text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 font-body leading-relaxed line-clamp-2">
              Temukan hunian impian Anda dengan desain modern dan lingkungan yang asri. Pilih tipe yang sesuai dengan gaya hidup dan kebutuhan keluarga Anda.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-12 overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 mb-6 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredUnits.length > 0 ? (
              filteredUnits.map((unit) => (
                <div key={unit.id} className="w-full flex-shrink-0 snap-center lg:w-auto">
                  <UnitCard unit={unit} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-white/30 backdrop-blur-sm rounded-3xl border border-dashed border-primary/10 w-full">
                <p className="text-muted text-xl font-body">Maaf, unit dengan kriteria tersebut belum tersedia saat ini.</p>
              </div>
            )}
          </div>

          {/* Dots Indicator (Mobile Only) */}
          {filteredUnits.length > 1 && (
            <div className="flex justify-center items-center gap-3 mb-12 lg:hidden">
              {filteredUnits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-500",
                    activeIndex === index 
                      ? "w-8 bg-secondary shadow-sm" 
                      : "w-2.5 bg-primary hover:bg-primary/60"
                  )}
                  aria-label={`Lihat unit ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
