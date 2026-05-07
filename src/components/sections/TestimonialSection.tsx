import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-dark overflow-hidden" id="testimonial">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4" id="testimonial-heading">
            Keluarga yang Sudah <br /> Percaya Kami
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <TestimonialCarousel />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="text-center bg-primary/20 p-6 rounded-card border border-white/5">
            <p className="text-secondary text-4xl font-display font-extrabold mb-1">500+</p>
            <p className="text-parchment/60 text-xs uppercase tracking-[0.2em] font-bold">Unit Terjual</p>
          </div>
          <div className="text-center bg-primary/20 p-6 rounded-card border border-white/5">
            <p className="text-secondary text-4xl font-display font-extrabold mb-1">98%</p>
            <p className="text-parchment/60 text-xs uppercase tracking-[0.2em] font-bold">Kepuasan</p>
          </div>
          <div className="text-center bg-primary/20 p-6 rounded-card border border-white/5">
            <p className="text-secondary text-4xl font-display font-extrabold mb-1">10+</p>
            <p className="text-parchment/60 text-xs uppercase tracking-[0.2em] font-bold">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </section>
  );
}
