import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MinecraftButtonProps {
  children: ReactNode;
  variant?: 'green' | 'blue' | 'default';
  className?: string;
  href?: string;
  onClick?: () => void;
  size?: 'default' | 'large';
}

export default function MinecraftButton({ 
  children, 
  variant = 'default', 
  className = '',
  href,
  onClick,
  size = 'default'
}: MinecraftButtonProps) {
  
  const baseStyle = "relative inline-block border-2 border-black text-uppercase font-['Minecraft'] text-shadow shadow-inner transition-transform hover:-translate-y-0.5 active:shadow-inner-subtle";
  
  const variantStyles = {
    green: "bg-[#44bd32] text-white",
    blue: "bg-[#5e9ce6] text-white",
    default: "bg-gray-300 text-gray-900"
  };
  
  const sizeStyles = {
    default: "px-4 py-2 text-base",
    large: "px-8 py-3 text-lg"
  };
  
  const buttonStyle = cn(
    baseStyle,
    variantStyles[variant],
    sizeStyles[size],
    "shadow-[inset_-2px_-4px_#0006,_inset_2px_2px_#FFF7] active:shadow-[inset_-2px_-4px_#0004,_inset_2px_2px_#FFF5]",
    className
  );
  
  if (href) {
    return (
      <a href={href} className={buttonStyle}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}
