'use client';

import React, { useState, useMemo } from 'react';
import { hitungKPR } from '@/lib/kpr';
import { formatRupiah } from '@/lib/formatCurrency';
import { KPRSlider } from '@/components/ui/KPRSlider';
import { Button } from '@/components/ui/Button';

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

  return (
    <section className="py-16 md:py-24 bg-accent/30 overflow-hidden" id="simulasi-kpr">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary mb-4" id="kpr-heading">
              Hitung Cicilan KPR-mu <br /> Sekarang
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-8 md:p-12 rounded-card shadow-card">
            <div className="space-y-8">
              <div>
                <label htmlFor="harga-unit" className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Harga Unit
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-bold">Rp</span>
                  <input
                    id="harga-unit"
                    type="number"
                    value={hargaUnit}
                    onChange={(e) => setHargaUnit(Number(e.target.value))}
                    className="w-full bg-parchment/50 border border-primary/10 rounded-input px-12 py-4 font-display font-extrabold text-primary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <KPRSlider
                label="Uang Muka (DP)"
                min={0}
                max={50}
                step={5}
                value={dpPersen}
                suffix="%"
                onChange={setDpPersen}
              />
              <p className="text-sm text-muted -mt-4">
                Uang muka: <span className="text-primary font-bold">{formatRupiah(results.dpNominal)}</span>
              </p>

              <div>
                <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  Tenor (Tahun)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[10, 15, 20, 25, 30].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTenor(t)}
                      className={`flex-1 min-w-[60px] py-3 rounded-button font-display font-bold transition-all ${
                        tenor === t
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-parchment text-primary hover:bg-accent'
                      }`}
                    >
                      {t} th
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="bunga" className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Suku Bunga (% per tahun)
                </label>
                <div className="relative">
                  <input
                    id="bunga"
                    type="number"
                    step="0.01"
                    value={bunga}
                    onChange={(e) => setBunga(Number(e.target.value))}
                    className="w-full bg-parchment/50 border border-primary/10 rounded-input px-6 py-4 font-display font-extrabold text-primary focus:outline-none focus:border-secondary transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted font-bold">%</span>
                </div>
                <p className="text-[10px] text-muted mt-2 uppercase tracking-widest italic">
                  * Referensi suku bunga bank mitra saat ini
                </p>
              </div>
            </div>

            <div className="bg-parchment rounded-card p-8 border border-secondary/20 flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl">💰</span>
                  <h3 className="text-xl font-display font-bold text-primary">Estimasi Cicilan</h3>
                </div>
                
                <div className="mb-10">
                  <p className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-2">
                    {formatRupiah(results.cicilanPerBulan)}
                    <span className="text-lg text-muted font-body italic font-normal"> / bulan</span>
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-primary/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted italic">Uang Muka:</span>
                    <span className="font-bold text-primary">{formatRupiah(results.dpNominal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted italic">Pokok Hutang:</span>
                    <span className="font-bold text-primary">{formatRupiah(results.pokokHutang)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted italic">Total Pembayaran:</span>
                    <span className="font-bold text-primary">{formatRupiah(results.totalBayar)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <Button size="full" className="shadow-lg">
                  Konsultasi KPR Gratis →
                </Button>
                <p className="text-[10px] text-muted text-center italic">
                  * Simulasi ini bersifat estimasi. Hubungi agen untuk perhitungan resmi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
