import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

/**
 * Reusable PlaceholderImage component for Iron Temple website.
 * Supports rendering actual photo assets via `src` prop with smooth fallbacks,
 * dark gradient background, diagonal noise pattern, and low-opacity Lucide icons.
 */
export default function PlaceholderImage({
  src = '',
  alt = 'Iron Temple',
  icon: Icon = Dumbbell,
  aspectRatio = 'aspect-video',
  rounded = 'rounded-2xl',
  className = '',
  iconSize = 48,
  label = '',
  children
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#141414] to-[#1a1a1a] border border-white/5 ${rounded} ${aspectRatio} ${className} flex items-center justify-center group`}
    >
      {/* If src is provided and no error, display actual image */}
      {src && !imgError ? (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle gradient overlay to match dark aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          {/* Background diagonal pattern */}
          <div className="absolute inset-0 diagonal-stripes pointer-events-none opacity-60" />
          
          {/* Radial subtle ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.03)_0%,transparent_70%)] pointer-events-none" />

          {/* Centered Low Opacity Icon & label */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
            {Icon && (
              <Icon
                size={iconSize}
                className="text-white/25 stroke-[1.5] transition-all duration-300 group-hover:text-[#c8ff00]/40 group-hover:scale-110"
              />
            )}
            {label && (
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/40 group-hover:text-white/70">
                {label}
              </span>
            )}
            {children}
          </div>
        </>
      )}
    </div>
  );
}
