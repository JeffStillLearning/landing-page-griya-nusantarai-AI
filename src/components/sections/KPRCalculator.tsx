'use client';

import React, { useState, useMemo } from 'react';
import { hitungKPR } from '@/lib/kpr';
import { formatRupiah } from '@/lib/formatCurrency';
import { KPRSlider } from '@/components/ui/KPRSlider';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function KPRCalculator() {
  const [hargaUnit, setHargaUnit] = useState(389000000);
  const [dpPersen, setDpPersen] = useState(10);
  const [tenor, setTenor] = useState(20);
  const [bunga, setBunga] = useState(7.25);

  const results = useMemo(() => {
    return hitungKPR({
      hargaUnit,
      dpPersen,
      tenorTahun: tenor,
      bungaPerTahun: bunga,
    });
  }, [hargaUnit, dpPersen, tenor, bunga]);

  // Handle formatted input for Harga Unit
  const displayHargaUnit = useMemo(() => {
    return hargaUnit.toLocaleString('id-ID');
  }, [hargaUnit]);

  const handleHargaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    const numValue = Number(rawValue);
    if (!isNaN(numValue)) {
      setHargaUnit(numValue);
    }
  };

  // Determine font size for monthly installment based on length - More aggressive to prevent clipping
  const cicilanFormatted = formatRupiah(results.cicilanPerBulan);
  const getCicilanFontSize = () => {
    const length = cicilanFormatted.length;
    if (length > 25) return 'text-base md:text-lg lg:text-xl'; 
    if (length > 20) return 'text-lg md:text-xl lg:text-2xl';
    if (length > 17) return 'text-xl md:text-2xl lg:text-3xl';
    if (length > 14) return 'text-2xl md:text-3xl lg:text-4xl';
    if (length > 12) return 'text-3xl md:text-5xl lg:text-6xl';
    return 'text-4xl md:text-6xl lg:text-7xl';
  };

  return (
    <section className="py-20 md:py-20 bg-accent/20 relative overflow-hidden" id="simulasi-kpr">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16 md:mb-10">
          {/* <span className="inline-block rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-base md:text-base font-bold tracking-widest uppercase mb-6">
            Simulasi Finansial
          </span> */}
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-8 leading-tight max-w-4xl mx-auto" id="kpr-heading">
            Rencanakan Finansial <br className="hidden md:block" /> Masa Depan Anda
          </h2>
          <p className="text-muted font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hitung estimasi cicilan bulanan dengan kalkulator cerdas kami. Transparan, mudah, dan akurat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 bg-white rounded-[40px] shadow-2xl shadow-primary/5 border border-primary/5 overflow-hidden">
          {/* Input Panel */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-display font-black text-primary uppercase tracking-tight">Data Properti</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <label htmlFor="harga-unit" className="block text-xs font-bold text-muted uppercase tracking-[0.2em] mb-3">
                    Harga Unit Properti
                  </label>
                  <div className="relative group">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 font-display font-black group-focus-within:text-secondary transition-colors">Rp</span>
                    <input
                      id="harga-unit"
                      type="text"
                      inputMode="numeric"
                      value={displayHargaUnit}
                      onChange={handleHargaChange}
                      className="w-full bg-accent/30 border-2 border-transparent rounded-2xl px-14 py-5 font-display font-black text-primary text-xl md:text-2xl focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="bg-accent/20 p-6 md:p-8 rounded-[32px] border border-primary/5">
                  <KPRSlider
                    label="Uang Muka (Down Payment)"
                    min={0}
                    max={50}
                    step={5}
                    value={dpPersen}
                    suffix="%"
                    onChange={setDpPersen}
                  />
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-primary/5">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">Nominal DP</span>
                    <span className="font-display font-black text-primary">{formatRupiah(results.dpNominal)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-display font-black text-primary uppercase tracking-tight">Opsi Pinjaman</h3>
              </div>

              <div className="space-y-10">
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-[0.2em] mb-5">
                    Tenor Pinjaman (Tahun)
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[10, 15, 20, 25, 30].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTenor(t)}
                        className={cn(
                          "py-4 rounded-2xl font-display font-black transition-all duration-300 border-2",
                          tenor === t
                            ? "bg-primary text-secondary border-primary shadow-xl shadow-primary/20 -translate-y-1"
                            : "bg-white text-primary border-accent hover:border-secondary hover:text-secondary"
                        )}
                      >
                        {t} <span className="text-[10px] opacity-60">th</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="bunga" className="block text-xs font-bold text-muted uppercase tracking-[0.2em] mb-3">
                    Suku Bunga Efektif
                  </label>
                  <div className="relative group max-w-xs">
                    <input
                      id="bunga"
                      type="number"
                      step="0.01"
                      value={bunga}
                      onChange={(e) => setBunga(Number(e.target.value))}
                      className="w-full bg-accent/30 border-2 border-transparent rounded-2xl px-6 py-5 font-display font-black text-primary text-2xl focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-inner"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-primary/30 font-display font-black group-focus-within:text-secondary transition-colors">%</span>
                  </div>
                  <p className="text-[10px] text-muted/60 mt-4 uppercase tracking-[0.15em] font-bold">
                    * Rata-rata suku bunga bank mitra griya nusantara
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="lg:col-span-5 bg-primary p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative element for result card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h3 className="text-secondary font-display font-black text-xl uppercase tracking-tighter">Hasil Estimasi</h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Berdasarkan data input</p>
                </div>
              </div>
              
              <div className="mb-16">
                <p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">Cicilan per Bulan</p>
                <div className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className={cn(
                    "font-display font-black text-white tracking-tighter transition-all duration-300",
                    getCicilanFontSize()
                  )}>
                    {cicilanFormatted}
                  </span>
                  <span className="text-secondary font-display font-bold text-lg italic shrink-0">/ bln</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Total Pinjaman (Pokok)</p>
                  <p className="text-white font-display font-bold text-xl md:text-2xl break-all">
                    {formatRupiah(results.pokokHutang)}
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Uang Muka (DP)</p>
                  <p className="text-white font-display font-bold text-xl md:text-2xl break-all">
                    {formatRupiah(results.dpNominal)}
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
                  <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-2">Total Pembayaran</p>
                  <p className="text-secondary font-display font-bold text-xl md:text-2xl break-all">
                    {formatRupiah(results.totalBayar)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <div className="p-1 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                <Button variant="primary" size="lg" className="w-full py-6 text-lg rounded-[2.2rem] shadow-2xl shadow-secondary/20">
                  Ajukan KPR Sekarang →
                </Button>
              </div>
              <p className="text-[9px] md:text-[10px] text-white/30 text-center italic font-medium leading-relaxed">
                * Estimasi di atas bersifat simulasi tidak mengikat. <br className="hidden md:block" /> Hubungi konsultan kami untuk perhitungan resmi bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
