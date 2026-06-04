import Image from 'next/image';
import { benefitsData } from '@/data/benefits';

export function BenefitSection() {
  return (
    <section className="relative lg:min-h-screen flex items-center py-16 lg:py-10 bg-white overflow-hidden" id="benefit-section">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10 w-full">
        {/* Mobile Header: Centered and prominent */}
        <div className="max-w-3xl mb-5 md:mb-16 lg:hidden text-center">
          <h2 className="text-3xl font-display font-extrabold text-primary mb-4 leading-tight">
            Kenapa Pilih <span className="text-secondary">Griya Nusantara?</span>
          </h2>
          <p className="text-muted font-body text-sm leading-relaxed px-4">
            Membangun masa depan Anda melalui tiga pilar utama: <span className="text-primary font-bold">Keamanan, Kenyamanan, dan Kepastian Legalitas.</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Editorial Image & Trust Badge */}
          <div className="w-full lg:w-5/12 relative order-1 lg:order-1">
            <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-xl max-h-[65vh]">
              <Image 
                src="/images/benefit-section.jpg" 
                alt="Suasana Hunian Premium Griya Nusantara"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent lg:hidden" />
              
              {/* Floating Quality Badge - Compact for Mobile
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-white/95 backdrop-blur-md p-3 md:p-5 rounded-xl md:rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center text-white text-base md:text-lg font-bold">✓</div>
                  <div>
                    <p className="text-primary font-display font-bold text-xs md:text-sm leading-tight uppercase tracking-wider">Komitmen Kualitas</p>
                    <p className="text-muted text-[9px] md:text-[10px] mt-0.5 leading-tight">Standar konstruksi nasional terjamin.</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Decorative Architectural Line - Simplified for Mobile */}
            <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-12 h-12 md:w-24 md:h-24 border-t-2 border-l-2 border-secondary/30 rounded-tl-xl md:rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-12 h-12 md:w-24 md:h-24 border-b-2 border-r-2 border-secondary/30 rounded-br-xl md:rounded-br-3xl -z-10" />
          </div>

          {/* Benefits Content */}
          <div className="w-full lg:w-7/12 order-2 lg:order-2">
            {/* Desktop Header: Visible only on LG up */}
            <div className="hidden lg:block max-w-2xl mb-8 lg:mb-10">
              <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-primary mb-4 leading-[1.1]">
                Kenapa Pilih <br /> <span className="text-secondary">Griya Nusantara?</span>
              </h2>
              <p className="text-muted font-body text-base lg:text-lg leading-relaxed">
                Lebih dari sekadar bangunan, kami menciptakan ekosistem hunian yang mendukung kualitas hidup Anda melalui pilar-pilar utama kami.
              </p>
            </div>

            {/* Benefits Grid: Optimized spacing for various aspect ratios */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:gap-x-12 lg:gap-y-8">
              {benefitsData.map((benefit) => (
                <div key={benefit.id} className="group flex flex-col items-center text-center lg:items-start lg:text-left gap-2 lg:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-14 lg:h-14 bg-accent rounded-xl flex items-center justify-center text-xl lg:text-3xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-lg font-display font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[10px] lg:text-sm text-muted leading-tight lg:leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote / Sign-off: Hidden on mobile to keep it short */}
            <div className="mt-8 lg:mt-10 p-5 lg:p-6 bg-accent/50 rounded-2xl border-l-4 border-secondary italic text-primary/70 font-body hidden lg:block text-sm">
              &ldquo;Kami percaya setiap keluarga berhak memiliki rumah yang aman dan legalitas yang terjamin tanpa rasa khawatir.&rdquo;
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}