import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'motion/react';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      }
    });

    tl.to('.loader-line', {
      scaleX: 1,
      width: '200px',
      duration: 0.6,
      ease: 'power3.inOut'
    })
    .fromTo('.loader-logo', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' },
      '-=0.1'
    )
    .fromTo('.loader-text',
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3 },
      '-=0.1'
    )
    .to('.loader-content', {
      opacity: 0,
      duration: 0.3,
      delay: 0.6
    })
    .to('.loader-overlay', {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.6,
      ease: 'power4.inOut'
    });
  }, [onComplete]);

  return (
    <div className="loader-overlay fixed inset-0 z-[10000] bg-charcoal flex flex-col items-center justify-center overflow-hidden">
      <div className="loader-content flex flex-col items-center">
        <div className="loader-logo mb-6 text-white text-4xl cormorant font-light">IDG</div>
        <div className="loader-line h-[1px] bg-gold scale-x-0 origin-center" />
        <div className="loader-text mt-4 text-[10px] text-gold-light dm-sans tracking-[0.3em] uppercase">
          Ibrahim Dada Group
        </div>
      </div>
    </div>
  );
};
