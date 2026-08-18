import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left'
}) => {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-8 ${alignClasses}`}>
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 bg-[#A9C6EA]/35 text-[#1b3454] px-3.5 py-1.5 rounded-full font-mono-code text-xs font-bold mb-3 border border-[#A9C6EA]/60">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F] animate-pulse"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1c1917] tracking-tight mb-2 uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#574a47] text-base md:text-lg max-w-2xl leading-relaxed font-sans font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
