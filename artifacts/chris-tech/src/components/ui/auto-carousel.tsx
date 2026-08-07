import React, { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface AutoCarouselProps {
  children: React.ReactNode[];
  itemClassName?: string;
  intervalMs?: number;
  className?: string;
}

/**
 * A horizontally auto-sliding carousel — pauses on hover, loops continuously.
 * Same sliding-card pattern used across the Chris Tech product family.
 */
export function AutoCarousel({
  children,
  itemClassName,
  intervalMs = 3000,
  className,
}: AutoCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!api) return;
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, intervalMs);
    return () => clearInterval(autoplayRef.current);
  }, [api, intervalMs]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: 'start' }}
      className={cn('w-full', className)}
      onMouseEnter={() => clearInterval(autoplayRef.current)}
      onMouseLeave={() => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => api?.scrollNext(), intervalMs);
      }}
    >
      <CarouselContent>
        {children.map((child, i) => (
          <CarouselItem key={i} className={itemClassName}>
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
