import React from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-secondary text-dark shadow-cta hover:bg-cta-hover hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-parchment',
    ghost: 'bg-transparent text-primary hover:bg-accent',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1DA851]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'w-full px-6 py-4 text-sm',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-button font-display font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
