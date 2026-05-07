'use client';

import React, { useState } from 'react';
import { FAQ } from '@/types/faq';
import { cn } from '@/lib/cn';

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4" role="list">
      {items.map((item, i) => (
        <div 
          key={item.id} 
          role="listitem" 
          className={cn(
            "bg-white rounded-card border transition-all duration-300",
            openIndex === i ? "border-primary shadow-md" : "border-primary/10"
          )}
        >
          <button
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-6 flex justify-between items-center group"
          >
            <span className={cn(
              "font-display font-bold text-lg transition-colors",
              openIndex === i ? "text-primary" : "text-primary/70 group-hover:text-primary"
            )}>
              {item.question}
            </span>
            <span className={cn(
              "text-secondary text-2xl transition-transform duration-300",
              openIndex === i ? "rotate-180" : ""
            )}>
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            hidden={openIndex !== i}
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="px-6 pb-6 pt-0 border-t border-accent mt-2">
              <p className="font-body text-muted leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
