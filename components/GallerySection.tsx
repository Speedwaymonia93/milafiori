'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  containerVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from '@/lib/animations';

const images = [
  '/gallery/image1.webp',
  '/gallery/image2.webp',
  '/gallery/image3.webp',
  '/gallery/image4.webp',
  '/gallery/image5.webp',
  '/gallery/image6.webp',
  '/gallery/image7.webp',
  '/gallery/image8.webp',
  '/gallery/image9.webp',
  '/gallery/image10.webp',
  '/gallery/image11.webp',
  '/gallery/image12.webp',
];

export function GallerySection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    setCount(api.scrollSnapList().length);
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <section id="gallery" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-amber-50/70 to-white dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-900" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="container-section"
      >
        <motion.div variants={slideInFromLeftVariants} className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Galeria</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Zobacz, jak wyglada nasza nauka jazdy
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Kilka kadrow z codziennej pracy z kursantami i przygotowan do egzaminu.
          </p>
        </motion.div>

        <motion.div variants={slideInFromRightVariants} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-xl shadow-slate-900/10 dark:shadow-none">
          <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={src}>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={`Galeria OSK Milafiori ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => api?.scrollTo(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  dotIndex === current
                    ? 'bg-slate-900 dark:bg-white'
                    : 'bg-slate-300 hover:bg-slate-500 dark:bg-slate-600 dark:hover:bg-slate-400'
                }`}
                aria-label={`Przejdz do slajdu ${dotIndex + 1}`}
                aria-current={dotIndex === current}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
