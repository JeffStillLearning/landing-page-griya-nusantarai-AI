'use client';

import React from 'react';

interface KPRSliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  suffix?: string;
  onChange: (value: number) => void;
}

export function KPRSlider({
  label,
  min,
  max,
  step,
  value,
  suffix = '',
  onChange,
}: KPRSliderProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-bold text-primary uppercase tracking-wider">{label}</label>
        <span className="text-primary font-display font-extrabold">{value}{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-secondary transition-all hover:bg-primary/20"
      />
    </div>
  );
}
