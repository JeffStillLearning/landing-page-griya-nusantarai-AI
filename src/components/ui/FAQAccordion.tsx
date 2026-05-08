'use client';

import React, { useState } from 'react';
import { FAQ } from '@/types/faq';
import { cn } from '@/lib/cn';

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first item for better visibility

  return (
    <div className="space-y-4" role="list">
      {items.map((item, i) => (
        <div 
          key={item.id} 
          role="listitem" 
          className={cn(
            "group bg-white rounded-2xl border transition-all duration-500 overflow-hidden",
            openIndex === i 
              ? "border-primary shadow-xl shadow-primary/5 ring-1 ring-primary/5" 
              : "border-primary/10 hover:border-secondary/50 shadow-sm"
          )}
        >
          <button
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className={cn(
              "w-full text-left p-6 md:p-8 flex justify-between items-center gap-6 transition-colors duration-300",
              openIndex === i ? "bg-accent/30" : "bg-white hover:bg-accent/10"
            )}
          >
            <div className={cn(
                  "flex items-start gap-4 font-display font-bold text-base md:text-xl leading-tight transition-colors duration-300",
                  openIndex === i
                    ? "text-primary"
                    : "text-primary/80 group-hover:text-primary"
                )}
              >
                <span className="text-secondary font-black opacity-40 shrink-0">
                  Q.
                </span>

                <span className="flex-1">
                  {item.question}
                </span>
              </div>
            <div className={cn(
              "w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500",
              openIndex === i 
                ? "bg-primary border-primary text-secondary rotate-180" 
                : "bg-transparent border-primary/10 text-primary/40 group-hover:border-secondary/50 group-hover:text-secondary"
            )}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </button>
          
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={cn(
              "grid transition-all duration-500 ease-in-out",
              openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-primary/5">
                <div className="flex gap-4">
                  <span className="text-secondary font-black text-base md:text-xl opacity-40 mt-1 shrink-0">A.</span>
                  <p className="font-body text-muted text-sm md:text-lg leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
