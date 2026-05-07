'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { buildConsultationURL } from '@/lib/whatsapp';

export function CTAFormSection() {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    tipeUnit: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildConsultationURL(formData);
    window.open(url, '_blank');
  };

  return (
    <section className="bg-primary pt-16 md:pt-24" id="konsultasi">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-parchment">
            <h2 className="text-3xl md:text-6xl font-display font-extrabold mb-6 leading-tight" id="cta-heading">
              Siap Wujudkan <br /> Rumah Impianmu?
            </h2>
            <p className="text-parchment/70 font-body text-lg mb-8 max-w-md italic">
              Konsultasi GRATIS dengan agen kami. Tanpa tekanan, tanpa komitmen. Kami siap membantu dari simulasi hingga akad.
            </p>
            
            <div className="hidden lg:block space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl bg-secondary/20 p-3 rounded-button">📞</span>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Hubungi Kami</p>
                  <p className="text-xl font-display font-bold text-secondary">0811-2345-6789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl bg-secondary/20 p-3 rounded-button">🕐</span>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Jam Operasional</p>
                  <p className="text-xl font-display font-bold text-parchment">Senin–Sabtu, 08.00–17.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-t-card p-8 md:p-12 shadow-2xl relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="nama"
                  required
                  placeholder="Masukkan nama Anda"
                  autoComplete="name"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full bg-parchment/50 border border-primary/10 rounded-input px-5 py-4 font-body text-primary focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="telepon" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Nomor WhatsApp</label>
                <input
                  type="tel"
                  id="telepon"
                  required
                  placeholder="Contoh: 08123456789"
                  autoComplete="tel"
                  value={formData.telepon}
                  onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                  className="w-full bg-parchment/50 border border-primary/10 rounded-input px-5 py-4 font-body text-primary focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tipe" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Tipe Unit</label>
                  <select
                    id="tipe"
                    required
                    value={formData.tipeUnit}
                    onChange={(e) => setFormData({ ...formData, tipeUnit: e.target.value })}
                    className="w-full bg-parchment/50 border border-primary/10 rounded-input px-5 py-4 font-body text-primary focus:outline-none focus:border-secondary transition-colors appearance-none"
                  >
                    <option value="">Pilih tipe unit...</option>
                    <option value="Tipe 36/72">Tipe 36/72</option>
                    <option value="Tipe 45/90">Tipe 45/90</option>
                    <option value="Tipe 54/108">Tipe 54/108</option>
                    <option value="Minta Rekomendasi">Minta Rekomendasi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Estimasi Budget</label>
                  <select
                    id="budget"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-parchment/50 border border-primary/10 rounded-input px-5 py-4 font-body text-primary focus:outline-none focus:border-secondary transition-colors appearance-none"
                  >
                    <option value="">Pilih budget...</option>
                    <option value="< 400 Juta">&lt; 400 Juta</option>
                    <option value="400 - 600 Juta">400 - 600 Juta</option>
                    <option value="600 Juta - 1 Miliar">600 Juta - 1 Miliar</option>
                    <option value="> 1 Miliar">&gt; 1 Miliar</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <Button size="full" type="submit" className="py-5 text-base">
                  KIRIM & HUBUNGI AGEN →
                </Button>
                <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-muted uppercase tracking-[0.2em] font-bold">
                  <span className="text-success">🔒</span> Data kamu aman & tidak disebar.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-24 bg-dark"></div>
    </section>
  );
}
