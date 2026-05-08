import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const SurveyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const KPRIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 21V10"/><path d="M9 21V10"/><path d="M15 21V10"/><path d="M19 21V10"/><path d="m2 10 10-7 10 7"/></svg>
);

const KeyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>
);

export function HowToBuySection() {
  const steps = [
    {
      number: '01',
      title: 'KUNJUNGI & PILIH UNIT',
      description: 'Datang ke lokasi atau survey virtual via video call bersama agen kami.',
      checks: ['Gratis konsultasi', 'Tanpa tekanan sales'],
      icon: <SurveyIcon />,
    },
    {
      number: '02',
      title: 'PROSES KPR / CASH',
      description: 'Tim kami bantu urus KPR dari awal sampai ACC. Berpengalaman di 8 bank.',
      checks: ['Gratis biaya proses KPR', 'Estimasi 7–14 hari kerja'],
      icon: <KPRIcon />,
    },
    {
      number: '03',
      title: 'SERAH TERIMA KUNCI',
      description: 'Terima kunci, masuk rumah. Kami dampingi hingga selesai akad notaris.',
      checks: ['SHM langsung atas nama', 'Garansi bangunan 1 tahun'],
      icon: <KeyIcon />,
    },
  ];

  return (
    <section className="py-20 md:py-10 bg-primary text-parchment relative overflow-hidden" id="cara-beli">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight max-w-4xl mx-auto" id="howtobuy-heading">
            3 Langkah Mudah <br className="hidden md:block" /> Punya Rumah Sendiri
          </h2>
          <p className="text-parchment/60 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Kami mendampingi setiap langkah Anda, mulai dari survey lokasi hingga serah terima kunci dengan proses yang transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/3 left-[15%] right-[15%] h-px border-t border-dashed border-parchment/20 -z-0" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              <div className="relative z-10 h-full flex flex-col p-8 md:p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-secondary/30 hover:-translate-y-2">
                
                {/* Step Icon & Number */}
                <div className="flex items-start justify-between mb-10">
                  <div className="p-4 rounded-2xl bg-secondary text-primary shadow-lg shadow-secondary/20 transition-transform duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <span className="text-5xl md:text-6xl font-display font-black text-parchment/10 group-hover:text-secondary/20 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-display font-black text-white mb-4 tracking-tight group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-parchment/70 mb-8 leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 mt-auto">
                  <ul className="space-y-3">
                    {step.checks.map((check) => (
                      <li key={check} className="flex items-center gap-3 text-sm md:text-base text-parchment/50 group-hover:text-parchment/80 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          {/* <div className="inline-block p-1 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
            <Button size="lg" className="px-12 py-5 text-lg rounded-[1.8rem] shadow-2xl shadow-secondary/20">
              Mulai Konsultasi Gratis
            </Button>
          </div> */}
          <p className="mt-6 text-parchment/40 text-sm font-medium">
            Tersedia konsultasi via WhatsApp & Video Call 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
