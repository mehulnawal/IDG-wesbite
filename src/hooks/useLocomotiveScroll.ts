import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = (start: boolean) => {
  useEffect(() => {
    if (!start || window.innerWidth < 1024) return;

    const scrollEl = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      tablet: { smooth: false },
      smartphone: { smooth: false }
    });

    // Update on resize
    const handleResize = () => scroll.update();
    window.addEventListener('resize', handleResize);

    return () => {
      scroll.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, [start]);
};
