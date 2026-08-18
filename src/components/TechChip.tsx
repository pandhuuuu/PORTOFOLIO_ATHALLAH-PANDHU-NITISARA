import React from 'react';

interface TechChipProps {
  label: string;
  variant?: 'cherry' | 'sky' | 'blue' | 'cyan';
}

export const TechChip: React.FC<TechChipProps> = ({ label, variant = 'cherry' }) => {
  const isCherry = variant === 'cherry' || variant === 'blue';

  const styles = isCherry
    ? 'bg-[#C1121F]/10 text-[#C1121F] border-[#C1121F]/30 hover:bg-[#C1121F]/20'
    : 'bg-[#A9C6EA]/30 text-[#1a385c] border-[#A9C6EA]/60 hover:bg-[#A9C6EA]/45';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-mono-code font-semibold border transition-colors ${styles}`}
    >
      {label}
    </span>
  );
};
