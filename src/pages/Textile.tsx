import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrandPanel } from '../components/BrandPanel';

gsap.registerPlugin(ScrollTrigger);

export default function Textile() {

  useEffect(() => {
    const textChars = gsap.utils.toArray('.char-reveal span') as HTMLElement[];
    gsap.fromTo(textChars,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1,
        stagger: 0.05,
        ease: 'power4.inOut',
        delay: 0.5
      }
    );

    if (window.innerWidth >= 1024) {
      const track = document.querySelector('.value-chain-track') as HTMLElement;
      const totalWidth = track.scrollWidth;
      gsap.to(track, {
        x: -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '.value-chain-section',
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth - window.innerWidth}`,
          invalidateOnRefresh: true
        }
      });
    }

    gsap.to('.textile-marquee', {
      xPercent: -50,
      repeat: -1,
      duration: 40,
      ease: 'none'
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Marquee
  gsap.to('.textile-marquee', {
    xPercent: -50,
    repeat: -1,
    duration: 40,
    ease: 'none'
  });


  // setTimeout(() => {
  //   ScrollTrigger.refresh();
  // }, 200);

  return (
    <div className="bg-cream overflow-x-hidden">

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1920&q=85&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Textiles"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 to-olive/50" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20L0 20z\' fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
        </div>

        <div className="container-custom relative z-10 text-center">
          <span className="dm-sans text-[10px] text-gold-light tracking-[0.2em] uppercase block mb-4">Business Venture · 01</span>
          <h1 className="char-reveal cormorant text-[clamp(36px,14vw,200px)] text-white font-light leading-none mb-6">
            {"TEXTILE".split('').map((char, i) => (
              <span key={i} className="inline-block">{char}</span>
            ))}
          </h1>
          <p className="dm-sans text-white/80 text-lg max-w-xl mx-auto">
            From Yarn to Finished Fabric — Four Decades of Manufacturing Excellence.
          </p>
        </div>
      </section>

      <section className="bg-cream-deep h-16 flex items-center overflow-hidden border-b border-gold/10">
        <div className="textile-marquee flex whitespace-nowrap gap-6 items-center">
          {[1, 2].map(i => (
            <div key={i} className="flex gap-6 items-center">
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-olive font-medium">Ameen Silk Mills</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-olive font-medium">Est. 1985</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-olive font-medium">13,930 Sq. Meters</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-olive font-medium">2.5 Lakh Metres Daily</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-olive font-medium">2,000+ Professionals</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-olive font-medium">Export Markets</span>
              <span className="text-gold">·</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 container-custom">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-[60%] flex flex-col gap-8">
            <h2 className="cormorant text-[clamp(36px,5.5vw,72px)] text-text-dark leading-tight">
              Ameen Silk Mills Pvt. Ltd.
            </h2>
            <p className="dm-sans text-text-muted text-lg leading-relaxed max-w-2xl">
              Established in 1985, Ameen Silk Mills represents the backbone of the group's legacy. Over four decades of expertise enables us to manage the entire textile lifecycle — from yarn processing to finished fabrics. We are trusted for superior craftsmanship, technical precision, and consistent reliability in both domestic and international markets.
            </p>
            <div className="flex gap-8 items-center pt-4">
              <div className="dm-sans text-[12px] text-olive uppercase tracking-widest font-medium">Est. 1985</div>
              <div className="w-[1px] h-4 bg-gold" />
              <div className="dm-sans text-[12px] text-olive uppercase tracking-widest font-medium">13,930 Sq. Meter Facility</div>
            </div>
          </div>
          <div className="lg:w-[40%] relative">
            <div className="absolute -inset-4 border border-olive -z-10 translate-x-8 translate-y-8" />
            {/* <div className="image-reveal clip-path-reveal w-full aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&auto=format&fit=crop"
                alt="Factory"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* VALUE CHAIN */}
      <section className="value-chain-section bg-charcoal min-h-screen overflow-hidden hidden lg:block">
        <div className="value-chain-track flex h-screen items-center">

          <div className="value-chain-panel flex-shrink-0 w-screen h-full flex items-center justify-center p-10 relative">
            <div className="absolute left-10 top-1/2 -translate-y-1/2 dm-sans text-[11px] text-gold uppercase tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
              Value Chain
            </div>
            <h2 className="cormorant text-[clamp(44px,6vw,96px)] text-cream font-light text-center">
              The Journey from <br /> <span className="italic">Yarn to Market</span>
            </h2>
          </div>

          {[
            { id: "01", title: "Yarn Processing", desc: "Sourcing and processing high-quality yarn with extreme precision." },
            { id: "02", title: "Dyeing", desc: "Scientific precision in dyeing to achieve exclusive and lasting colors." },
            { id: "03", title: "Printing", desc: "Innovative proprietary designs printed with premium international inks." },
            { id: "04", title: "Finishing", desc: "Rigorous quality checks and finishing processes for a boutique feel." },
            { id: "05", title: "Distribution", desc: "Global reach through our flagship brands: Zeenat, Haya, and Sanaa." }
          ].map((panel) => (
            <div key={panel.id} className="value-chain-panel flex-shrink-0 w-[60vw] h-full flex items-center px-12 lg:px-24">
              <div className="relative border-l-[4px] border-gold pl-12">
                <span className="absolute -left-12 -top-20 cormorant text-[160px] text-olive opacity-[0.15] pointer-events-none">{panel.id}</span>
                <h3 className="cormorant text-4xl lg:text-5xl text-cream mb-6">{panel.title}</h3>
                <p className="dm-sans text-cream/65 text-lg max-w-sm">{panel.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <BrandPanel />

      <section className="pt-5 bg-cream container-custom">
        <span className="dm-sans text-[10px] text-gold tracking-widest uppercase block mb-4">Ameen Silk Mills</span>
        <h2 className="cormorant text-[clamp(36px,5vw,64px)] text-text-dark mb-3">The Surat Hub</h2>
        <p className="dm-sans text-text-muted text-lg leading-relaxed max-w-4xl mb-12">
          From dyeing to finishing, all processes are centralized in our main hub, ensuring total control over the value chain. This integration allows us to respond rapidly to fashion trends while maintaining the quality standards IDG is famous for.
        </p>
      </section>
    </div>
  );
}
