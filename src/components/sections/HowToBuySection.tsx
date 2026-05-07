import { Button } from '@/components/ui/Button';

export function HowToBuySection() {
  const steps = [
    {
      number: '01',
      title: 'KUNJUNGI & PILIH UNIT',
      description: 'Datang ke lokasi atau survey virtual via video call bersama agen kami.',
      checks: ['Gratis konsultasi', 'Tanpa tekanan sales'],
    },
    {
      number: '02',
      title: 'PROSES KPR / CASH',
      description: 'Tim kami bantu urus KPR dari awal sampai ACC. Berpengalaman di 8 bank.',
      checks: ['Gratis biaya proses KPR', 'Estimasi 7–14 hari kerja'],
    },
    {
      number: '03',
      title: 'SERAH TERIMA KUNCI',
      description: 'Terima kunci, masuk rumah. Kami dampingi hingga selesai akad notaris.',
      checks: ['SHM langsung atas nama', 'Garansi bangunan 1 tahun'],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-parchment overflow-hidden" id="cara-beli">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4" id="howtobuy-heading">
            3 Langkah Mudah <br /> Punya Rumah Sendiri
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Ghost Number Overlay */}
              <div className="absolute -top-10 -left-4 text-8xl font-display font-extrabold text-parchment/5 select-none transition-all group-hover:text-parchment/10 group-hover:-translate-y-2">
                {step.number}
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-secondary mb-4 tracking-widest">
                  {step.number}. {step.title}
                </h3>
                <p className="font-body text-parchment/80 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.checks.map((check) => (
                    <li key={check} className="flex items-center gap-2 text-sm text-parchment/60">
                      <span className="text-secondary">✓</span> {check}
                    </li>
                  ))}
                </ul>
              </div>

              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 translate-x-1/2 -translate-y-1/2 text-parchment/20 text-4xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="px-12">
            Mulai Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
}
