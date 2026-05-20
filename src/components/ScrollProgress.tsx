import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[1100] origin-left pointer-events-none">
      <div ref={barRef} className="w-full h-full bg-gold scale-x-0" />
    </div>
  );
};
