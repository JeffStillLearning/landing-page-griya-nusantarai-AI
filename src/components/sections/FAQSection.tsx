import { faqData } from '@/data/faq';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Button } from '@/components/ui/Button';

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-parchment overflow-hidden" id="faq">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary mb-4" id="faq-heading">
              Pertanyaan yang Sering <br /> Calon Pembeli Tanyakan
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <FAQAccordion items={faqData} />

          <div className="mt-16 text-center bg-accent/50 p-8 rounded-card border border-primary/5">
            <p className="font-body text-primary mb-6">Pertanyaanmu belum terjawab?</p>
            <Button variant="whatsapp">
              Tanya Langsung Agen →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
