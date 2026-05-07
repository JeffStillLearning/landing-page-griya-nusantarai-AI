'use client';

import React, { useState, useEffect } from 'react';
import { buildQuickChatURL } from '@/lib/whatsapp';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={buildQuickChatURL()}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
      aria-label="Chat via WhatsApp"
    >
      <span className="text-3xl">💬</span>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
      </span>
    </a>
  );
}
