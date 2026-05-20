import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Optical() {
  useEffect(() => {
    // Reveal CLERIS
    gsap.fromTo('.cleris-reveal',
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.inOut', delay: 0.5 }
    );
  }, []);

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508296695146-257a814070b4?w=1920&q=85&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-35"
            alt="Optical"
          />
        </div>

        {/* WOW MOMENT: Lens Refraction */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(184,148,42,0.15) 0%, transparent 70%)',
              animation: 'lensGlow 8s ease-in-out infinite alternate'
            }}
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <span className="dm-sans text-[10px] text-gold-light tracking-[0.2em] uppercase block mb-6">Business Venture · 02</span>
          <h1 className="cormorant text-[clamp(64px,11vw,160px)] text-white font-light leading-none mb-8">
            Optical Care
          </h1>
          <p className="dm-sans text-white/70 text-lg max-w-xl mx-auto tracking-wide">
            Precision Prescription Lenses. German Technology. Indian Expertise.
          </p>
        </div>
      </section>

      {/* DADA DIGITAL LAB */}
      <section className="py-4 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <span className="dm-sans text-[10px] text-gold tracking-[0.25em] uppercase block mb-4">The Facility</span>
              <h2 className="cormorant text-[clamp(44px,6vw,72px)] text-text-dark leading-none">Dada Digital Lab</h2>
            </div>
            <p className="dm-sans text-text-muted text-lg leading-relaxed max-w-xl">
              Established in August 2014 in Surat, Dada Digital Lab is a state-of-the-art facility featuring advanced prescription lens manufacturing equipment sourced directly from Germany. We specialise in high-precision progressive lenses with advanced anti-reflective and protective coatings.
            </p>
            <div className="flex gap-12 items-center pt-4">
              <div className="flex flex-col">
                <span className="cormorant text-4xl text-olive">Est. 2014</span>
                <span className="dm-sans text-[10px] uppercase tracking-widest text-text-muted">Launch</span>
              </div>
              <div className="flex flex-col">
                <span className="cormorant text-4xl text-olive font-light italic">Schneider™</span>
                <span className="dm-sans text-[10px] uppercase tracking-widest text-text-muted">German Precision</span>
              </div>
            </div>
          </div>

          <div className="relative group pb-20 lg:pb-0">
            <div className="w-full aspect-4/3 lg:aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&q=80&auto=format&fit=crop"
                alt="Optical Lenses"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-olive p-6 lg:p-10 text-cream max-w-[200px] lg:max-w-[260px] shadow-xl">
              <span className="dm-sans text-[10px] uppercase tracking-[0.2em] block mb-4 opacity-70">Region Coverage</span>
              <h3 className="cormorant italic text-2xl leading-snug">Serving the West Zone <br /> of India.</h3>
            </div>
          </div>
        </div>
      </section >

      {/* CLERIS BRAND MOMENT */}
      <div div className="py-10 bg-charcoal text-center text-cream" >
        <div className="container-custom flex flex-col items-center">
          <h2 className="cleris-reveal cormorant text-[clamp(80px,14vw,180px)] font-light leading-none mb-4 italic">Cleris</h2>
          <span className="dm-sans text-[11px] text-gold-light uppercase tracking-[0.3em] block mb-12">
            Premium Prescription Lenses by Dada Digital Lab
          </span>
          <div className="w-[120px] h-px bg-gold mb-12" />
          <p className="dm-sans text-cream/65 text-lg max-w-xl leading-relaxed">
            Prescription progressive lenses with advanced coatings that match the quality of top multinational brands — manufactured with surgical precision in our Surat facility.
          </p>
        </div>
      </div >

      {/* STATE TILES */}
      < div className="py-4 container-custom" >
        <h2 className="cormorant text-4xl text-text-dark mb-12">Authorized Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Gujarat', 'Maharashtra', 'Madhya Pradesh'].map((state, i) => (
            <div key={state} className="bg-olive p-10 flex flex-col gap-4 group">
              <span className="cormorant text-5xl italic text-cream transition-transform duration-500 group-hover:-translate-y-2 inline-block">{state}</span>
              <div className="w-20 h-px bg-gold/50" />
              <p className="dm-sans text-[11px] text-cream/70 uppercase tracking-widest">State-wide Distribution Hub</p>
            </div>
          ))}
        </div>
      </ div>

      <style>{`
        @keyframes lensGlow {
          0% { transform: scale(0.95) rotate(0deg); }
          100% { transform: scale(1.05) rotate(360deg); }
        }
      `}</style>
    </div >
  );
}
