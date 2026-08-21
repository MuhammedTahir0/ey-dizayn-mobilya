interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showSubtitle = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: {
      ey: 'text-2xl tracking-tighter',
      badge: 'text-[10px] px-2 py-0.5 mt-0.5',
      sub: 'text-xs',
    },
    md: {
      ey: 'text-3xl sm:text-4xl tracking-tighter',
      badge: 'text-xs px-2.5 py-0.5 mt-1',
      sub: 'text-sm',
    },
    lg: {
      ey: 'text-5xl sm:text-6xl tracking-tighter',
      badge: 'text-sm px-3.5 py-1 mt-1.5',
      sub: 'text-base',
    },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual EY Monogram */}
      <div className="flex flex-col items-center">
        <div className={`font-black font-sans leading-none flex items-baseline drop-shadow-md ${sizeClasses.ey}`}>
          <span className="text-[#d946ef] font-extrabold transform hover:scale-105 transition-transform inline-block">E</span>
          <span className="text-[#facc15] font-extrabold transform hover:scale-105 transition-transform inline-block">Y</span>
        </div>
        <div className={`bg-[#581c87] text-white font-medium italic rounded-md shadow-sm border border-purple-400/30 ${sizeClasses.badge}`}>
          Dizayn
        </div>
      </div>

      {showSubtitle && (
        <div className="flex flex-col justify-center border-l border-stone-700/60 pl-3">
          <span className={`font-bold text-stone-100 tracking-tight leading-tight ${sizeClasses.sub}`}>
            Erkan Akpınar
          </span>
          <span className="text-[10px] sm:text-xs text-stone-400 font-medium tracking-wide">
            Özel Tasarım Mobilya • Kayseri
          </span>
        </div>
      )}
    </div>
  );
}
