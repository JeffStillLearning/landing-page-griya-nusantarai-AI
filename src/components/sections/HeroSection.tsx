import Image from 'next/image';
import { siteConfig } from '@/data/site';

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Cluster Griya Nusantara Bekasi"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark base overlay for better contrast */}
        <div className="absolute inset-0 bg-[#0D1F1A]/30 z-10" />
      </div>

      {/* Main Content Area - Uses flex-grow to take available space and center content */}
      <div className="flex-grow flex items-center relative z-20 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 w-full mb-8 lg:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
              <span>📍</span> Bekasi Barat · Jawa Barat
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
              {siteConfig.tagline.split(',').map((line, i) => (
                <span key={i} className="block">
                  {line.trim()}{i === 0 ? ',' : ''}
                </span>
              ))}
            </h1>

            <p className="text-base md:text-xl text-parchment/80 font-body mb-8 md:mb-10 max-w-2xl text-white">
              Cluster modern dengan akses tol, sekolah, & fasilitas lengkap. Mulai 300 jutaan.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-sm mb-6 lg:mb-0">
              <div className="bg-[#0D1F1A]/50 backdrop-blur-sm p-4 rounded-card border border-parchment/10 text-center hover:border-secondary/30 transition-colors">
                <p className="text-secondary text-2xl font-display font-extrabold">500+</p>
                <p className="text-parchment/60 text-[10px] uppercase font-bold text-white tracking-widest">Unit Terjual</p>
              </div>
              <div className="bg-[#0D1F1A]/50 backdrop-blur-sm p-4 rounded-card border border-parchment/10 text-center hover:border-secondary/30 transition-colors">
                <p className="text-secondary text-2xl font-display font-extrabold">12</p>
                <p className="text-parchment/60 text-[10px] uppercase font-bold tracking-widest text-white">Tipe Rumah</p>
              </div>
              <div className="bg-[#0D1F1A]/50 backdrop-blur-sm p-4 rounded-card border border-parchment/10 text-center hover:border-secondary/30 transition-colors">
                <p className="text-secondary text-2xl font-display font-extrabold">98%</p>
                <p className="text-parchment/60 text-[10px] uppercase font-bold tracking-widest text-white">Kepuasan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Merged Trust Bar Content - Now part of flex flow at the bottom */}
      <div className="relative z-20 bg-primary/80 backdrop-blur-md py-6 border-t border-parchment/10 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-1 opacity-80 text-parchment">
                Dipercaya oleh <span className="text-secondary">ribuan keluarga</span>
              </p>
              <p className="font-display font-bold text-xl md:text-2xl text-parchment">
                Indonesia sejak <span className="text-secondary">2015</span>
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-6 border-l border-parchment/20 pl-8">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-card border border-white/10 hover:border-secondary/30 transition-colors group">
                <span className="text-secondary text-2xl group-hover:scale-110 transition-transform">🏆</span>
                <div className="text-[12px] font-bold uppercase leading-tight text-parchment">
                  <span className="text-secondary">Developer Terbaik 2023</span><br />
                  <span className="opacity-70">REI Award Jawa Barat</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-card border border-white/10 hover:border-secondary/30 transition-colors group">
                <span className="text-secondary text-2xl group-hover:scale-110 transition-transform">📋</span>
                <div className="text-[12px] font-bold uppercase leading-tight text-parchment">
                  <span className="text-secondary">Izin & Legalitas Lengkap</span><br />
                  <span className="opacity-70">IMB · SHM · SHGB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
