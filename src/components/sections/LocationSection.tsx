import { siteConfig } from '@/data/site';

const CarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-1.4 1-2.5 0-1.1-.4-2.5-1-2.5h-1.3l-1.3-4.1c-.2-.6-.9-1-1.6-1H7.3c-.7 0-1.4.4-1.6 1L4.3 12H3c-.6 0-1 1.4-1 2.5 0 1.1.4 2.5 1 2.5h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
);

const TrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="3" rx="2" /><path d="M4 11h16" /><path d="M12 3v8" /><path d="m8 19-2 3" /><path d="m18 22-2-3" /><path d="M8 15h0" /><path d="M16 15h0" /></svg>
);

const SchoolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
);

const HospitalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.1 0 2-1 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h14Z" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="M14 18v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3" /></svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.05" /></svg>
);

const MosqueIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 22v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4" /><path d="M18 10a6 6 0 0 0-12 0v6h12V10Z" /><path d="M12 2v4" /><path d="M9 10a3 3 0 0 1 6 0" /></svg>
);

export function LocationSection() {
  const distances = [
    { name: 'Tol Bekasi Barat', time: '3 mnt', icon: <CarIcon /> },
    { name: 'Stasiun KRL', time: '5 mnt', icon: <TrainIcon /> },
    { name: 'Fasilitas Pendidikan', time: '2 mnt', icon: <SchoolIcon /> },
    { name: 'RS Hermina', time: '8 mnt', icon: <HospitalIcon /> },
    { name: 'Pusat Perbelanjaan', time: '4 mnt', icon: <CartIcon /> },
    { name: 'Masjid Jami', time: '1 mnt', icon: <MosqueIcon /> },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="lokasi">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-primary mb-8 leading-[1.05]" id="location-heading">
              Lokasi yang <br className="hidden lg:block" /> <span className="text-secondary-dark">Strategis</span>
            </h2>
            <p className="text-muted text-lg lg:text-xl font-body leading-relaxed mb-12 max-w-xl">
              Dikelilingi berbagai fasilitas publik utama yang menunjang mobilitas dan gaya hidup modern keluarga Anda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {distances.map((item) => (
                <div 
                  key={item.name} 
                  className="flex flex-row items-center justify-between p-5 rounded-2xl border border-primary/5 bg-parchment/30 transition-all duration-300 group gap-4 lg:gap-2 hover:border-secondary/50 hover:bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-white text-primary shadow-sm transition-colors group-hover:bg-secondary group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm lg:text-[13px] xl:text-sm text-primary group-hover:text-secondary-dark transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="font-display font-black text-lg lg:text-base xl:text-lg whitespace-nowrap text-secondary-dark">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-secondary/10 rounded-[40px] -z-10 blur-2xl lg:blur-3xl" />
              
              <div className="relative aspect-square lg:aspect-[4/5] max-h-[75vh] bg-accent rounded-[32px] overflow-hidden border-8 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.3601815147!2d106.9756!3d-6.2383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMjcuOSJTIDEwNsKwNTgnMzIuMiJF!5e0!3m2!1sen!2sid!4v1620216000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Peta Lokasi Griya Nusantara"
                  className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Floating Address Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex gap-4">
                    <div className="bg-primary text-secondary p-3 rounded-xl h-fit">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-dark mb-1">Alamat Lokasi</p>
                      <p className="text-xs lg:text-sm font-bold text-primary leading-tight">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
