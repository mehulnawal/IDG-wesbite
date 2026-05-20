import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhilanthropyTabs } from '../components/PhilanthropyTabs';

gsap.registerPlugin(ScrollTrigger);

export default function Philanthropy() {
  useEffect(() => {
    // "Giving." Reveal
    gsap.fromTo('.giving-wipe',
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut', delay: 0.5 }
    );
  }, []);

  return (
    <div className="bg-cream">

      <section className="h-screen bg-olive flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <h1 className="giving-wipe cormorant italic text-[clamp(100px,18vw,240px)] text-cream font-light leading-none relative">
          Giving<span className="text-gold">.</span>
        </h1>

        <div className="mt-12 flex flex-col gap-6 max-w-xl animate-fade-in-up">
          <span className="dm-sans text-[10px] text-gold-light tracking-[0.3em] uppercase block">
            Community & Legacy
          </span>
          <p className="dm-sans text-cream/70 text-base md:text-lg leading-relaxed">
            Through the Hashimi Public Charitable Trust, IDG has shaped the lives of thousands across Surat — building schools, hospitals, homes, libraries, and spaces for the entire community.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translateX-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-10 bg-gold origin-top scale-y-100 scroll-pulse" />
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="dm-sans text-[10px] text-gold tracking-widest uppercase font-medium">The Trust</span>
              <h2 className="cormorant text-[clamp(32px,5vw,64px)] text-text-dark font-normal leading-tight">
                Hashimi Public <br /> Charitable Trust
              </h2>
            </div>
            <p className="dm-sans text-text-muted text-lg leading-relaxed max-w-xl">
              The Hashimi Public Charitable Trust is the philanthropic arm of IDG, dedicated to the promotion of education, health care, affordable housing, and community welfare across Surat and its surroundings. Funded entirely by the group, the trust operates and manages six major institutions that collectively serve thousands of beneficiaries every year — without any government assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[2px]">
            {['Education', 'Healthcare', 'Housing', 'Community'].map((item) => (
              <div key={item} className="bg-olive h-[72px] flex items-center justify-center group hover:bg-gold transition-colors duration-500 cursor-default">
                <h3 className="cormorant italic text-2xl text-cream group-hover:text-charcoal transition-colors duration-500">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhilanthropyTabs />

      <section className="section-padding bg-charcoal text-center text-cream">
        <div className="container-custom flex flex-col gap-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <span className="cormorant text-7xl text-gold-light italic font-light">4,000+</span>
              <span className="dm-sans text-[11px] uppercase tracking-widest text-cream/40 px-4">Students in Education</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="cormorant text-7xl text-gold-light italic font-light">1,350+</span>
              <span className="dm-sans text-[11px] uppercase tracking-widest text-cream/40 px-4">Families Housed</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="cormorant text-7xl text-gold-light italic font-light">1</span>
              <span className="dm-sans text-[11px] uppercase tracking-widest text-cream/40 px-4">Multi-Speciality Hospital</span>
            </div>
          </div>

          <h3 className="cormorant italic text-[clamp(24px,3.5vw,48px)] text-gold-light font-light max-w-4xl mx-auto leading-tight">
            "Our legacy is not measured in turnover — it is measured in lives touched."
          </h3>
        </div>
      </section>
    </div>
  );
}
