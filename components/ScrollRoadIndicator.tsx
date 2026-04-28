'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const sectionIds = ['start', 'about', 'offer', 'pricing', 'gallery', 'location', 'contact'];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ScrollRoadIndicator() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const markerCount = sectionIds.length;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

      if (sections.length === 0) {
        setProgress(0);
        setActiveIndex(0);
        return;
      }

      const viewportAnchor = window.innerHeight * 0.45;
      let currentActive = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportAnchor) {
          currentActive = index;
        }
      });

      const first = sections[0];
      const last = sections[sections.length - 1];
      const start = window.scrollY + first.getBoundingClientRect().top;
      const end =
        window.scrollY +
        last.getBoundingClientRect().top +
        last.offsetHeight -
        window.innerHeight * 0.6;

      const safeEnd = end <= start ? start + 1 : end;
      const nextProgress = clamp((window.scrollY - start) / (safeEnd - start), 0, 1);

      setProgress(nextProgress);
      setActiveIndex(clamp(currentActive, 0, sections.length - 1));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <aside
      aria-label="Wskaznik sekcji"
      className="pointer-events-none fixed right-0 top-0 z-30 hidden h-screen w-24 items-center justify-center lg:flex"
    >
      <div className="relative h-[60vh] w-20 bg-white/20 backdrop-blur-sm dark:bg-slate-900/20">
        <p className="absolute left-1/2 top-1 -translate-x-1/2 rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-extrabold tracking-widest text-white">
          START
        </p>
        <p className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-extrabold tracking-widest text-white">
          KONIEC
        </p>
        <div className="absolute inset-y-6 left-1/2 w-4 -translate-x-1/2 rounded-full bg-slate-300 dark:bg-slate-700" />
        <div
          className="absolute inset-y-6 left-1/2 w-0.5 -translate-x-1/2 opacity-80"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent 0 8px, rgba(255,255,255,0.95) 8px 14px)',
          }}
        />

        {/* Dots */}
        <div className="absolute inset-y-6 left-1/2 w-0 -translate-x-1/2">
          {Array.from({ length: markerCount }).map((_, index) => {
            if (index === 0 || index === markerCount - 1) {
              return null;
            }

            const top = (index / (markerCount - 1)) * 100;
            const isActive = index <= activeIndex;

            return (
              <button
                key={sectionIds[index]}
                type="button"
                onClick={() => scrollToSection(sectionIds[index])}
                className={`pointer-events-auto absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'border-emerald-500 bg-emerald-400 dark:border-emerald-300 dark:bg-emerald-300'
                    : 'border-slate-400 bg-slate-200 dark:border-slate-500 dark:bg-slate-600'
                }`}
                style={{ top: `${top}%` }}
                aria-label={`Przejdz do sekcji ${sectionIds[index]}`}
              />
            );
          })}
        </div>

        {/* Car indicator — lives directly in the track, not inside w-0 */}
        <div
          className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `calc(1.5rem + ${progress} * (100% - 3rem))`,
            transition: 'top 150ms ease-out',
          }}
        >
          <Image
            src="/car.png"
            alt="Wskaznik pozycji na stronie"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
        </div>
      </div>
    </aside>
  );
}
