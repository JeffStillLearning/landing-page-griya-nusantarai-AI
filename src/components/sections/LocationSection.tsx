import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';

export function LocationSection() {
  const distances = [
    { name: 'Tol Bekasi Barat', time: '3 mnt', icon: '🚗' },
    { name: 'Stasiun KRL', time: '5 mnt', icon: '🚉' },
    { name: 'SDN / SMPN', time: '2 mnt', icon: '🏫' },
    { name: 'RS Hermina', time: '8 mnt', icon: '🏥' },
    { name: 'Supermarket', time: '4 mnt', icon: '🛒' },
    { name: 'Masjid Jami', time: '1 mnt', icon: '🕌' },
  ];

  return (
    <section className="py-16 md:py-24 bg-parchment" id="lokasi">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary mb-8" id="location-heading">
              Lokasi yang <br /> Bikin Hidup Lebih Mudah
            </h2>
            
            <div className="relative aspect-[16/10] bg-accent rounded-card shadow-card overflow-hidden mb-6">
              {/* Google Maps Embed Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.3601815147!2d106.9756!3d-6.2383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMjcuOSJTIDEwNsKwNTgnMzIuMiJF!5e0!3m2!1sen!2sid!4v1620216000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Peta Lokasi Griya Nusantara"
              ></iframe>
            </div>

            <p className="text-sm font-body text-muted flex items-center gap-2">
              <span className="text-secondary text-lg">📍</span> {siteConfig.address}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-display font-bold text-primary mb-6">Jarak dari Lokasi:</h3>
            <div className="space-y-1">
              {distances.map((item) => (
                <div 
                  key={item.name} 
                  className="flex items-center justify-between p-4 border-b border-primary/10 hover:bg-accent/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-body text-primary">{item.name}</span>
                  </div>
                  <span className="font-display font-extrabold text-secondary group-hover:scale-110 transition-transform">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="outline" size="full">
                Buka di Google Maps →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
