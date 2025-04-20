import { ReactNode } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  imageUrl?: string;
}

export function FeatureCard({ children, className = '', variant = 'light', imageUrl }: FeatureCardProps) {
  const baseStyles = "rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]";
  const variantStyles = {
    light: "bg-white/40 shadow-lg",
    dark: "bg-neutral-900/90 text-white"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {imageUrl && (
        <div className="mb-6">
          <Image
            src={imageUrl}
            alt="Feature illustration"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
        </div>
      )}
      {children}
    </div>
  );
} 