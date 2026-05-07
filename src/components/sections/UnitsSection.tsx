'use client';

import { useState, useMemo } from 'react';
import { unitsData } from '@/data/units';
import { UnitCard } from '@/components/ui/UnitCard';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function UnitsSection() {
  const [filter, setFilter] = useState<'Semua' | 'Ready' | 'Indent'>('Semua');

  const filteredUnits = useMemo(() => {
    if (filter === 'Semua') return unitsData;
    if (filter === 'Ready') return unitsData.filter(u => u.isReadyStock);
    return unitsData.filter(u => !u.isReadyStock);
  }, [filter]);

  return (
    <section className="py-10 lg:py-10 bg-accent/20 relative overflow-hidden" id="unit-tersedia">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-10 lg:mb-10">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-dark rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-6">
              Pilihan Properti Terbaik
            </div>
            <h2 className="text-4xl lg:text-7xl font-display font-extrabold text-primary mb-8 leading-[1.05]" id="units-heading">
              Unit <span className="text-secondary-dark">Tersedia</span>
            </h2>
            <p className="text-muted text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed">
              Temukan hunian impian Anda dengan desain modern dan lingkungan yang asri. Pilih tipe yang sesuai dengan gaya hidup dan kebutuhan keluarga Anda.
            </p>
          </div>
          
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-20 lg:mb-32">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <div key={unit.id} className="animate-fade-in animate-slide-in-bottom fill-mode-both h-full">
                <UnitCard unit={unit} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-white/30 backdrop-blur-sm rounded-3xl border border-dashed border-primary/10">
              <p className="text-muted text-xl font-body">Maaf, unit dengan kriteria tersebut belum tersedia saat ini.</p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="text-center">
            <p className="text-base lg:text-lg text-muted mb-8 font-medium italic">Ingin melihat lebih banyak pilihan unit lainnya?</p>
            <Button variant="outline" size="lg" className="group w-full lg:w-auto px-14 py-6 text-base lg:text-lg rounded-2xl border-primary/10 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-500">
              Lihat Semua Unit (12)
              <span className="ml-4 transition-transform duration-500 group-hover:translate-x-3 hidden lg:inline-block">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
