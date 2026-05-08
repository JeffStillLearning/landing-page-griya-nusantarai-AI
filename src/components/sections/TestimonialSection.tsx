import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import Image from 'next/image';

export function TestimonialSection() {
  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden relative" id="testimonial">
      {/* Decorative Family Photos - Polaroid Style */}
      <div className="absolute left-[2%] top-[10%] w-40 h-48 lg:w-64 lg:h-72 bg-white p-2 pb-8 shadow-2xl rotate-[-8deg] hidden xl:block opacity-40 hover:opacity-100 transition-opacity duration-500 z-0">
        <div className="relative w-full h-full overflow-hidden bg-accent">
          <Image 
            src="/images/testimonials/foto-keluarga-1.jpg" 
            alt="Keluarga Griya Nusantara" 
            fill 
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-center font-display text-[10px] text-primary font-bold uppercase tracking-widest">Keluarga Bpk. Rudi</p>
      </div>
      
      <div className="absolute right-[2%] top-[20%] w-40 h-48 lg:w-64 lg:h-72 bg-white p-2 pb-8 shadow-2xl rotate-[12deg] hidden xl:block opacity-40 hover:opacity-100 transition-opacity duration-500 z-0">
        <div className="relative w-full h-full overflow-hidden bg-accent">
          <Image 
            src="/images/testimonials/foto-keluarga-2.jpg" 
            alt="Keluarga Bahagia Griya Nusantara" 
            fill 
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-center font-display text-[10px] text-primary font-bold uppercase tracking-widest">Keluarga Ibu Dewi</p>
      </div>

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 leading-tight" id="testimonial-heading">
            Keluarga yang Sudah <br className="hidden md:block" /> Percaya Kami
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Quote Mark Decoration */}
          <div className="absolute -top-10 -left-10 text-[200px] text-white/5 font-display select-none pointer-events-none">“</div>
          
          <TestimonialCarousel />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="text-center bg-white/5 p-8 rounded-[32px] border border-white/10 group hover:border-secondary/50 transition-all duration-300">
            <p className="text-secondary text-5xl font-display font-black mb-2 group-hover:scale-110 transition-transform inline-block tracking-tighter">500+</p>
            <p className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">Unit Terjual</p>
          </div>
          <div className="text-center bg-white/5 p-8 rounded-[32px] border border-white/10 group hover:border-secondary/50 transition-all duration-300">
            <p className="text-secondary text-5xl font-display font-black mb-2 group-hover:scale-110 transition-transform inline-block tracking-tighter">98%</p>
            <p className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">Kepuasan</p>
          </div>
          <div className="text-center bg-white/5 p-8 rounded-[32px] border border-white/10 group hover:border-secondary/50 transition-all duration-300">
            <p className="text-secondary text-5xl font-display font-black mb-2 group-hover:scale-110 transition-transform inline-block tracking-tighter">10+</p>
            <p className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </section>
  );
}
