import { siteConfig } from '@/data/site';

export function FooterSection() {
  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
  ];

  return (
    <footer className="bg-dark text-parchment pt-16 pb-8" role="contentinfo" aria-label="Footer Griya Nusantara">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-display font-extrabold text-white mb-4">🏡 GRIYA NUSANTARA</h2>
            <p className="text-sm text-parchment/60 font-body mb-6 italic">
              Developer perumahan terpercaya di Bekasi sejak 2015. Kami berkomitmen memberikan hunian berkualitas dengan harga terjangkau.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  className="w-10 h-10 bg-primary/20 rounded-button flex items-center justify-center hover:bg-secondary hover:text-dark transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-widest">Kontak Kami</h3>
            <ul className="space-y-4 text-sm text-parchment/60 font-body">
              <li className="flex gap-3 italic">
                <span className="opacity-100">📍</span> {siteConfig.address}
              </li>
              <li className="flex gap-3 italic">
                <span className="opacity-100">📞</span> {siteConfig.whatsapp.replace('62', '0')}
              </li>
              <li className="flex gap-3 italic">
                <span className="opacity-100">📧</span> {siteConfig.email}
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-widest">Jam Operasional</h3>
            <ul className="space-y-4 text-sm text-parchment/60 font-body">
              <li>
                <p className="font-bold text-parchment/80">Senin – Sabtu</p>
                <p>{siteConfig.openingHours.weekday}</p>
              </li>
              <li>
                <p className="font-bold text-parchment/80">Minggu</p>
                <p>{siteConfig.openingHours.weekend}</p>
              </li>
            </ul>
          </div>

          {/* Quick Links / Legal */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-widest">Legalitas</h3>
            <ul className="space-y-4 text-sm text-parchment/60 font-body italic">
              <li>Sertifikat: SHM / SHGB</li>
              <li>Izin IMB: 503/XXX/2015</li>
              <li>Terdaftar: REI (Real Estate Indonesia)</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-parchment/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-parchment/40">
          <p>© {new Date().getFullYear()} PT Griya Nusantara Tbk. Semua hak dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary">Kebijakan Privasi</a>
            <a href="#" className="hover:text-secondary">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
