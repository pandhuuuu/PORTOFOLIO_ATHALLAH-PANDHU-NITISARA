import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface DiagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  imageSrc: string;
  caption?: string;
  description?: string;
  currentIndex?: number;
  totalCount?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export const DiagramModal: React.FC<DiagramModalProps> = ({
  isOpen,
  onClose,
  title,
  imageSrc,
  caption,
  description,
  currentIndex,
  totalCount,
  onPrev,
  onNext
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1917]/80 backdrop-blur-sm p-4 md:p-8 animate-fadeIn">
      {/* Container */}
      <div className="bg-white rounded-lg shadow-2xl border border-[#e8d9c5] max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#e8d9c5] bg-[#FFF6E8]">
          <div>
            <h3 className="text-lg font-bold font-poppins text-[#1c1917]">{title || caption || 'Diagram Preview'}</h3>
            {totalCount && totalCount > 1 && (
              <span className="text-xs font-mono-code text-[#574a47]">
                Slide {(currentIndex || 0) + 1} dari {totalCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-[#574a47] hover:text-[#C1121F] p-1.5 rounded-md hover:bg-[#A9C6EA]/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 bg-[#1c1917] overflow-auto flex items-center justify-center p-4 relative min-h-[350px]">
          <img
            src={imageSrc}
            alt={caption || 'Diagram Preview'}
            className="max-h-[65vh] w-auto object-contain rounded shadow-lg"
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C1121F] p-2 rounded-full shadow-md transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C1121F] p-2 rounded-full shadow-md transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Footer Caption */}
        {(caption || description) && (
          <div className="p-4 px-6 bg-[#FFF6E8] border-t border-[#e8d9c5]">
            {caption && <h4 className="text-sm font-bold font-poppins text-[#1c1917] mb-1">{caption}</h4>}
            {description && <p className="text-xs text-[#574a47] leading-relaxed">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
