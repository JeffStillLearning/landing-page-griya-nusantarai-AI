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
    <section className="bg-primary relative overflow-hidden pt-16 md:pt-24" id="konsultasi">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 lg:items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-5 text-parchment">
            

            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-[1.1]" id="cta-heading">
              Siap Wujudkan <br /> 
              <span className="text-secondary italic">Rumah Impianmu?</span>
            </h2>
            
            <p className="text-parchment/70 font-body text-lg mb-12 max-w-md leading-relaxed">
              Konsultasi GRATIS dengan agen kami. Kami siap membantu dari simulasi KPR hingga proses akad dengan transparan dan profesional.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="bg-secondary/20 p-4 rounded-button transition-all group-hover:bg-secondary/30 group-hover:scale-110">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-parchment/40 mb-1">Hubungi Agen Kami</p>
                  <p className="text-2xl font-display font-bold text-secondary tracking-tight hover:text-white transition-colors cursor-default">0811-2345-6789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="bg-secondary/20 p-4 rounded-button transition-all group-hover:bg-secondary/30 group-hover:scale-110">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-parchment/40 mb-1">Jam Layanan</p>
                  <p className="text-2xl font-display font-bold text-parchment tracking-tight">Senin–Sabtu, 08.00–17.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-card p-1 shadow-card relative z-10 ring-1 ring-black/5">
              <div className="bg-white rounded-[inherit] p-8 md:p-12">
                <div className="mb-10">
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">Formulir Peminatan</h3>
                  <p className="text-sm text-muted font-body leading-relaxed">
                    Lengkapi data berikut agar agen kami dapat memberikan rekomendasi unit dan simulasi KPR yang tepat untuk Anda.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label htmlFor="nama" className="block text-[10px] font-bold text-primary/50 uppercase tracking-[0.15em] mb-2.5 ml-1">Nama Lengkap</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          id="nama"
                          required
                          placeholder="Contoh: Budi Santoso"
                          autoComplete="name"
                          value={formData.nama}
                          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                          className="w-full bg-parchment/20 border border-primary/5 rounded-input pl-12 pr-5 py-4 font-body text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm focus:shadow-md"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label htmlFor="telepon" className="block text-[10px] font-bold text-primary/50 uppercase tracking-[0.15em] mb-2.5 ml-1">Nomor WhatsApp</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </span>
                        <input
                          type="tel"
                          id="telepon"
                          required
                          placeholder="0812XXXXXXXX"
                          autoComplete="tel"
                          value={formData.telepon}
                          onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                          className="w-full bg-parchment/20 border border-primary/5 rounded-input pl-12 pr-5 py-4 font-body text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label htmlFor="tipe" className="block text-[10px] font-bold text-primary/50 uppercase tracking-[0.15em] mb-2.5 ml-1">Unit yang Diminati</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </span>
                        <select
                          id="tipe"
                          required
                          value={formData.tipeUnit}
                          onChange={(e) => setFormData({ ...formData, tipeUnit: e.target.value })}
                          className="w-full bg-parchment/20 border border-primary/5 rounded-input pl-12 pr-10 py-4 font-body text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm focus:shadow-md appearance-none"
                        >
                          <option value="">Pilih tipe unit...</option>
                          <option value="Tipe 36/72">Tipe 36/72 (Sultan)</option>
                          <option value="Tipe 45/90">Tipe 45/90 (Nobel)</option>
                          <option value="Tipe 54/108">Tipe 54/108 (Royal)</option>
                          <option value="Minta Rekomendasi">Bantu Saya Memilih</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="relative group">
                      <label htmlFor="budget" className="block text-[10px] font-bold text-primary/50 uppercase tracking-[0.15em] mb-2.5 ml-1">Estimasi Anggaran</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </span>
                        <select
                          id="budget"
                          required
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-parchment/20 border border-primary/5 rounded-input pl-12 pr-10 py-4 font-body text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm focus:shadow-md appearance-none"
                        >
                          <option value="">Pilih budget...</option>
                          <option value="< 400 Juta">&lt; 400 Juta</option>
                          <option value="400 - 600 Juta">400 - 600 Juta</option>
                          <option value="600 Juta - 1 Miliar">600 Juta - 1 Miliar</option>
                          <option value="> 1 Miliar">&gt; 1 Miliar</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button size="full" type="submit" className="py-5 text-base shadow-cta hover:shadow-2xl transition-all">
                      HUBUNGI AGEN VIA WHATSAPP →
                    </Button>
                    
                    <div className="flex flex-col items-center gap-4 mt-10">
                      <div className="flex items-center gap-2.5 text-[10px] text-muted uppercase tracking-[0.2em] font-bold">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.9L10 1.55l7.834 3.35a1 1 0 01.666.945V14c0 3.342-2.854 6.131-7.1 7.4a1 1 0 01-.8 0C6.354 20.131 3.5 17.342 3.5 14V5.845a1 1 0 01.666-.945zM10 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        Data Terenkripsi & Privasi Terjamin
                      </div>
                      <p className="text-[9px] text-muted/60 max-w-[320px] text-center italic leading-relaxed">
                        Kami menghargai privasi Anda. Data yang Anda berikan hanya akan digunakan untuk keperluan konsultasi properti Griya Nusantara.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom spacing to connect with footer */}
      <div className="h-24 md:h-32 bg-dark mt-20 md:mt-32"></div>
    </section>
  );
}

