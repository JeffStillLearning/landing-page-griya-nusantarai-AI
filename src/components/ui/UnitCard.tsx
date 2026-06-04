'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Unit } from '@/types/unit';
import { formatRupiah } from '@/lib/formatCurrency';
import { Button } from './Button';
import { cn } from '@/lib/cn';

interface UnitCardProps {
  unit: Unit;
}

const BedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
  </svg>
);

const BathIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 7 3" /><path d="M22 12a10 10 0 0 1-10 10H4a2 2 0 0 1-2-2v-2" /><path d="M7 12a5 5 0 0 1 5 5" /><path d="M22 12h-1" /><path d="M7 12V8a2 2 0 0 1 2-2h1" /><path d="M15 12h-1" /><path d="M17 7V6a2 2 0 0 0-2-2h-1" />
  </svg>
);

const AreaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export function UnitCard({ unit }: UnitCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group h-full w-full [perspective:1000px]">
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front Face */}
        <div 
          className={cn(
            "bg-white rounded-3xl transition-all duration-500 flex flex-col h-full border-2 [backface-visibility:hidden]",
            isFlipped 
              ? "border-transparent" 
              : "border-primary/5 hover:border-secondary"
          )}
        >
          {/* Image Container - Reduced height */}
          <div className="relative h-44 lg:h-48 overflow-hidden rounded-t-[22px]">
            <Image
              src={unit.image}
              alt={unit.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {unit.isReadyStock ? (
                <span className="bg-success text-white text-[9px] font-bold uppercase px-2.5 py-1 rounded-full shadow-lg backdrop-blur-md">
                  Ready Stock
                </span>
              ) : (
                <span className="bg-secondary text-dark text-[9px] font-bold uppercase px-2.5 py-1 rounded-full shadow-lg backdrop-blur-md">
                  Indent
                </span>
              )}
            </div>

            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <span className="text-yellow-500 text-[10px]">★</span>
              <span className="text-[10px] font-bold text-primary">{unit.rating}</span>
            </div>
          </div>
          
          {/* Content - More compact padding and spacing */}
          <div className="p-4 flex flex-col flex-grow">
            <div className="mb-1 text-center lg:text-left">
              <h3 className="font-display font-extrabold text-base lg:text-lg text-primary mb-0.5 group-hover:text-secondary-dark transition-colors duration-300">
                {unit.name}
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-0.5 text-muted">
                <MapPinIcon />
                <span className="text-[10px] tracking-wide">{unit.cluster}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-3 py-1.5 border-y border-primary/5 mb-3">
              <div className="flex items-center gap-1 text-primary/80">
                <div className="p-1 bg-accent/50 rounded-lg text-primary/60"><BedIcon /></div>
                <span className="text-[11px] font-bold">{unit.bedrooms} <span className="font-normal text-[9px] text-muted">KT</span></span>
              </div>
              <div className="flex items-center gap-1 text-primary/80">
                <div className="p-1 bg-accent/50 rounded-lg text-primary/60"><BathIcon /></div>
                <span className="text-[11px] font-bold">{unit.bathrooms} <span className="font-normal text-[9px] text-muted">KM</span></span>
              </div>
              <div className="flex items-center gap-1 text-primary/80">
                <div className="p-1 bg-accent/50 rounded-lg text-primary/60"><AreaIcon /></div>
                <span className="text-[11px] font-bold">{unit.landSize} <span className="font-normal text-[9px] text-muted">m²</span></span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="mb-3 text-center lg:text-left">
                <p className="text-[10px] text-muted mb-0 font-medium">Mulai dari</p>
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-xl lg:text-2xl font-display font-black text-primary tracking-tight">
                    {formatRupiah(unit.price)}
                  </span>
                </div>
                <p className="text-[8px] text-secondary-dark font-bold uppercase tracking-widest mt-0.5">
                  Angsuran 2 Juta-an*
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="md" 
                  className="text-[10px] py-2.5 border-primary/20 hover:border-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(true);
                  }}
                >
                  Detail
                </Button>
                <Button variant="whatsapp" size="md" className="text-[10px] py-2.5 gap-2">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className={cn(
            "absolute inset-0 bg-parchment rounded-3xl flex flex-col h-full border-2 border-secondary [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl",
            isFlipped ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          <div className="p-6 flex flex-col h-full relative z-10">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-secondary/20">
              <div>
                <h3 className="font-display font-extrabold text-xl text-primary leading-tight">
                  Spesifikasi
                </h3>
                <p className="text-[10px] text-secondary-dark font-bold uppercase tracking-widest">{unit.name}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="p-2 hover:bg-secondary/10 rounded-full transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-dark">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto no-scrollbar mb-6">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl mb-6 border border-secondary/10">
                <p className="text-[11px] text-primary/80 font-body leading-relaxed italic">
                  &ldquo;{unit.description}&rdquo;
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-2xl border border-primary/5 shadow-sm group/item hover:border-secondary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1 bg-accent/30 rounded-md text-secondary-dark"><AreaIcon /></div>
                    <p className="text-[9px] text-muted uppercase font-bold tracking-wider">Tanah</p>
                  </div>
                  <p className="text-primary font-extrabold text-base">{unit.landSize} <span className="text-[10px] font-normal text-muted">m²</span></p>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-primary/5 shadow-sm group/item hover:border-secondary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1 bg-accent/30 rounded-md text-secondary-dark"><AreaIcon /></div>
                    <p className="text-[9px] text-muted uppercase font-bold tracking-wider">Bangunan</p>
                  </div>
                  <p className="text-primary font-extrabold text-base">{unit.buildingSize} <span className="text-[10px] font-normal text-muted">m²</span></p>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-primary/5 shadow-sm group/item hover:border-secondary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1 bg-accent/30 rounded-md text-secondary-dark"><BedIcon /></div>
                    <p className="text-[9px] text-muted uppercase font-bold tracking-wider">K. Tidur</p>
                  </div>
                  <p className="text-primary font-extrabold text-base">{unit.bedrooms} <span className="text-[10px] font-normal text-muted">KT</span></p>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-primary/5 shadow-sm group/item hover:border-secondary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1 bg-accent/30 rounded-md text-secondary-dark"><BathIcon /></div>
                    <p className="text-[9px] text-muted uppercase font-bold tracking-wider">K. Mandi</p>
                  </div>
                  <p className="text-primary font-extrabold text-base">{unit.bathrooms} <span className="text-[10px] font-normal text-muted">KM</span></p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-secondary/10 mt-auto">
              <Button variant="whatsapp" size="md" className="w-full text-xs py-3.5 gap-2 shadow-lg">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Tanya Spesifikasi Lengkap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
