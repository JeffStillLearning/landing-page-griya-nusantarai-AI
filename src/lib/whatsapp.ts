import { siteConfig } from '@/data/site';

interface ConsultationForm {
  nama: string;
  telepon: string;
  tipeUnit: string;
  budget: string;
}

export function buildConsultationURL(data: ConsultationForm): string {
  const message = [
    `Halo Griya Nusantara! 👋`,
    ``,
    `Saya *${data.nama}* tertarik untuk konsultasi unit.`,
    ``,
    `📋 *Detail:*`,
    `• Tipe Unit: ${data.tipeUnit}`,
    `• Budget: ${data.budget}`,
    `• No. WhatsApp: ${data.telepon}`,
    ``,
    `Mohon bantu informasi lebih lanjut ya. Terima kasih!`,
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildQuickChatURL(unitName?: string): string {
  const message = unitName
    ? `Halo, saya mau tanya tentang *${unitName}* di Griya Nusantara 🏡`
    : `Halo Griya Nusantara! Saya ingin tanya tentang unit yang tersedia 🏡`;

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
