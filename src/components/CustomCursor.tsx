import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ONLY activate on pointer:fine devices (not touch)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    // Add class to body to hide default cursor
    document.body.classList.add('cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    let rafId: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    const onEnter = () => {
      if (dot) dot.style.opacity = '0';
      if (ring) {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.backgroundColor = 'rgba(184,148,42,0.12)';
        ring.style.marginLeft = '-28px';
        ring.style.marginTop = '-28px';
      }
    };
    const onLeave = () => {
      if (dot) dot.style.opacity = '1';
      if (ring) {
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.backgroundColor = 'transparent';
        ring.style.marginLeft = '-20px';
        ring.style.marginTop = '-20px';
      }
    };

    const interactives = document.querySelectorAll('a, button, [data-cursor]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);

    return () => {
      document.body.classList.remove('cursor-active');
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[99999] transition-opacity duration-200 hidden lg:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border-[1.5px] border-gold bg-transparent opacity-60 pointer-events-none z-[99998] transition-all duration-300 hidden lg:block"
      />
    </>
  );
};
