import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { BusinessDeck } from '../components/BusinessDeck';

gsap.registerPlugin(ScrollTrigger);

const historyMilestones = [
  { year: "1985", stat: "1985", label: "Ameen Silk Mills established", desc: "Began dyeing and printing operations in Surat with a vision for textile excellence." },
  { year: "1995", stat: "900", label: "Rahat Society homes built", desc: "Affordable housing delivered without any government financial assistance." },
  { year: "1997", stat: "4,000+", label: "Students in Alfesani School", desc: "A school built on faith, knowledge, and community leadership." },
  { year: "2004", stat: "40+", label: "Years of textile mastery", desc: "Expanded brands include Zeenat Fashions, Haya, and Sanaa across India and exports." },
  { year: "2014", stat: "3 States", label: "Cleris optical coverage", desc: "Dada Digital Lab launched with German precision machinery serving West India." },
  { year: "2018", stat: "5 Floors", label: "Aamena Hospital opened", desc: "Multi-speciality hospital with ICU, OT and emergency care in Unn, Surat." },
  { year: "2023", stat: "2023", label: "Model Women's College", desc: "Higher education for women — empowerment through professional courses." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const historyTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {

    gsap.to('.ghost-idg', {
      y: -120,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });


    gsap.killTweensOf('.marquee-track');

    // Brand marquee — responsive speed (mobile was too slow at 60s)
    // const marqueeDuration = window.innerWidth < 768 ? 12 : 1;
    // gsap.to('.marquee-track', {
    //   xPercent: -50,
    //   repeat: -1,
    //   duration: marqueeDuration,
    //   ease: 'none',
    // });

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const marqueeDuration = isMobile ? 12 : 30;

    gsap.killTweensOf('.marquee-track');
    gsap.to('.marquee-track', {
      xPercent: -50,
      repeat: -1,
      duration: marqueeDuration,
      ease: 'none',
    });


    // History timeline marquee — 2 copies + xPercent -50 = seamless loop
    const historyDuration = window.innerWidth < 768 ? 30 : 55;
    historyTweenRef.current = gsap.to('.history-track', {
      xPercent: -50,
      repeat: -1,
      duration: historyDuration,
      ease: 'none',
    });

    // Heading lines reveal — fixed TS generic
    const headings = gsap.utils.toArray<HTMLElement>('.reveal-heading');
    headings.forEach((heading) => {
      gsap.fromTo(
        heading.querySelectorAll('.line span'),
        { y: '100%' },
        {
          y: '0%',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: { trigger: heading, start: 'top 85%' },
        }
      );
    });

    // Stats counter — fixed TS generic
    const stats = gsap.utils.toArray<HTMLElement>('.stat-item');
    stats.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target') || '0');
      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: stat, start: 'top 70%' },
        onUpdate: () => {
          const numberEl = stat.querySelector('.stat-number');
          if (numberEl) numberEl.textContent = Math.floor(obj.value).toLocaleString();
        },
      });
    });

    // Image reveal — fixed TS generic
    const images = gsap.utils.toArray<HTMLElement>('.image-reveal');
    images.forEach((img) => {
      gsap.to(img, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: img, start: 'top 80%' },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">

      <Helmet>
        <title>Ibrahim Dada Group — Legacy of Excellence &amp; Community Since 1985</title>
        <meta
          name="description"
          content="Ibrahim Dada Group (IDG) is a multi-generation business conglomerate established in 1985 in Surat, Gujarat. Operating across textiles, optical care, real estate, and philanthropy"
        />
        <meta
          name="keywords"
          content="Ibrahim Dada Group, IDG Surat, Ameen Silk Mills, Cleris Optical, Hashimi Charitable Trust, Nuur Garments, textile company Surat, real estate Surat Gujarat, conglomerate India, IDG Group"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ibrahimdadagroup.com" />
        <meta property="og:title" content="Ibrahim Dada Group — Legacy of Excellence & Community Since 1985" />
        <meta
          property="og:description"
          content="A multi-generation conglomerate built on ethical business, industry leadership, and deep community commitment. Established in Surat, Gujarat in 1985."
        />


        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ibrahim Dada Group',
            alternateName: 'IDG',
            url: 'https://ibrahimdadagroup.com',
            foundingDate: '1985',
            description:
              'A multi-generation business conglomerate built on ethical business, industry leadership, and deep community commitment.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Surat',
              addressRegion: 'Gujarat',
              addressCountry: 'IN',
            },
            areaServed: 'India',
            foundingLocation: { '@type': 'Place', name: 'Surat, Gujarat, India' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Business Verticals',
              itemListElement: [
                { '@type': 'Offer', name: 'Ameen Silk Mills — Textile Processing' },
                { '@type': 'Offer', name: 'Nuur Garments — Garment Retail' },
                { '@type': 'Offer', name: 'Cleris Optical — Optical Care' },
                { '@type': 'Offer', name: 'Real Estate — Landmark Development' },
                { '@type': 'Offer', name: 'Hashimi Charitable Trust — Community Upliftment' },
              ],
            },
          })}
        </script>
      </Helmet>

      <section className="hero-section relative h-screen min-h-[700px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop"
            alt="Heritage Textile"
            className="w-full h-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/35 to-charcoal/65" />
        </div>

        <div className="ghost-idg absolute right-0 top-1/2 -translate-y-1/2 rotate-[-8deg] pointer-events-none opacity-[0.04] text-[320px] cormorant text-white hidden lg:block leading-none">
          IDG
        </div>

        <div className="container-custom relative z-10 pb-24 lg:pb-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-col gap-4">
              <span className="dm-sans text-[10px] text-gold-light tracking-[0.28em] uppercase block">
                EST. 1985 · SURAT, GUJARAT
              </span>
              <h1 className="reveal-heading text-white cormorant text-[clamp(52px,9vw,120px)] leading-[0.9] font-light">
                <div className="line overflow-hidden block"><span>A Legacy of</span></div>
                <div className="line overflow-hidden block"><span>Excellence &amp;</span></div>
                <div className="line overflow-hidden block"><span>Community.</span></div>
              </h1>
            </div>

            <p className="dm-sans text-white/80 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Ibrahim Dada Group — a multi-generation conglomerate built on ethical business, industry leadership, and deep community commitment.
            </p>

            <div className="w-[100px] h-px bg-gold" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translateX-1/2 flex flex-col items-center gap-2">
          <span className="dm-sans text-[9px] text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gold origin-top scale-y-100 scroll-pulse" />
        </div>
      </section>

      <section className="bg-olive py-2 overflow-hidden relative z-20">
        <div className="marquee-track flex whitespace-nowrap gap-12 items-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-12 items-center">
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Ameen Silk Mills</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Nuur Garments</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Cleris Optical</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Real Estate</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Hashimi Charitable Trust</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Zeenat Fashions</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Philanthropy</span>
              <span className="text-gold">·</span>
              <span className="dm-sans text-[11px] uppercase tracking-[0.2em] text-cream/90">Surat</span>
              <span className="text-gold">·</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="dm-sans text-[10px] text-gold tracking-widest uppercase">The Numbers</span>
                <h2 className="cormorant text-[clamp(36px,5vw,64px)] text-text-dark leading-tight font-normal">
                  Scale That Speaks for Itself
                </h2>
              </div>
              <p className="dm-sans text-text-muted text-lg max-w-md leading-relaxed">
                From a single yarn trading venture to a multi-crore conglomerate spanning textiles, optics, real estate, and philanthropy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              <StatItem target={40} label="Years of Legacy" />
              <StatItem target={2.5} label="Lakh Metres Fabric / Day" suffix="L" />
              <StatItem target={1163} label="Units Delivered" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal">
        <BusinessDeck />
      </section>

      <section style={{ paddingTop: 'clamp(80px, 10vw, 140px)' }} className=" bg-cream">
        <div className="container-custom flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-8 lg:w-[60%]">
            <span className="dm-sans text-[10px] text-gold tracking-widest uppercase">Community &amp; Legacy</span>
            <h2 className="cormorant text-[clamp(36px,5.5vw,72px)] text-text-dark font-light leading-none">
              We don't just build businesses. <br /> <span className="italic text-gold">We build neighborhoods.</span>
            </h2>
            <p className="dm-sans text-text-muted text-lg leading-relaxed max-w-xl">
              Through the Hashimi Public Charitable Trust, the group runs schools, a multi-speciality hospital, an affordable housing society, a community hall, a public library and a women's college — all serving the people of Surat.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:w-[30%] w-full">
            {['Education', 'Healthcare', 'Housing', 'Community'].map((item) => (
              <div
                key={item}
                className="border-[1.5px] border-olive/30 rounded-full py-3 px-7 dm-sans text-[13px] text-text-dark font-medium text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERITAGE ──────────────────────────────────────────── */}
      <section className="section-padding bg-cream relative">
        <div className="container-custom">
          <h2 className="reveal-heading cormorant text-[clamp(52px,8vw,110px)] text-text-dark font-light max-w-5xl leading-[0.95] mb-16">
            <div className="line overflow-hidden block"><span>Built by visionaries.</span></div>
            <div className="line overflow-hidden block"><span>Sustained by values.</span></div>
            <div className="line overflow-hidden block"><span>Driven by generations.</span></div>
          </h2>

          <div className="flex justify-end">
            <div className="max-w-lg">
              <p className="dm-sans text-text-muted text-lg leading-relaxed mb-6">
                Under the leadership of second and third generation directors integrating cutting-edge technology from Germany, Switzerland, Korea, and China, IDG continues to push boundaries while staying true to the humble roots established 40 years ago.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.05] text-[280px] cormorant text-olive leading-none translate-y-1/4 hidden lg:block">
          1985
        </div>
      </section>

      <section className="section-padding bg-cream-deep pt-20 pb-0">
        <div className="container-custom mb-16">
          <span className="dm-sans text-[10px] text-gold uppercase tracking-[0.22em] font-medium block mb-4">
            A Journey Through Time
          </span>
          <h2 className="cormorant text-[clamp(32px,5vw,72px)] text-text-dark font-normal">
            Milestones That Shaped Us
          </h2>
        </div>

        {/* Pause tween on hover — only targets history-track, not global timeline */}
        <div
          className="overflow-hidden pb-20"
          onMouseEnter={() => historyTweenRef.current?.pause()}
          onMouseLeave={() => historyTweenRef.current?.resume()}
        >
          {/* 2 copies → xPercent -50 = exactly one content-width → seamless loop */}
          <div
            className="history-track flex gap-8 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {[...historyMilestones, ...historyMilestones].map((m, i) => (
              <div
                key={i}
                className="w-[280px] md:w-[320px] bg-white p-8 border border-cream-deep rounded-lg flex-shrink-0 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="dm-sans text-[10px] uppercase text-text-muted tracking-[0.15em]">{m.year}</span>
                  <span className="cormorant text-[clamp(32px,4vw,52px)] text-gold leading-none font-light">{m.stat}</span>
                  <span className="dm-sans text-[10px] uppercase text-text-muted font-medium">{m.label}</span>
                </div>
                <div className="h-px bg-cream-deep w-full" />
                <p className="dm-sans text-[13px] text-text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILANTHROPY TEASER ───────────────────────────────── */}
      <section className="section-padding bg-olive text-center relative z-10">
        <div className="container-custom">
          <span className="dm-sans text-[10px] text-gold-light tracking-[0.3em] uppercase block mb-6">Beyond Business</span>
          <h3 className="cormorant italic text-[clamp(44px,7vw,96px)] text-cream font-light leading-none mb-8">
            Giving Back Since 1995.
          </h3>
          <p className="dm-sans text-cream/70 text-base max-w-2xl mx-auto leading-relaxed mb-12">
            Schools, hospitals, affordable housing, libraries — IDG's impact on Surat's community runs as deep as its business roots.
          </p>
          <Link
            to="/philanthropy"
            className="inline-block border border-gold-light text-gold-light dm-sans px-10 py-4 uppercase tracking-[0.15em] text-[11px] hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Explore Philanthropy →
          </Link>
        </div>
      </section>

    </div>
  );
}

function StatItem({
  target,
  label,
  prefix = '',
  suffix = '',
}: {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="stat-item flex flex-col gap-4 border-t border-gold/20 pt-8" data-target={target}>
      <div className="flex items-baseline gap-1">
        <span className="text-gold text-2xl cormorant">{prefix}</span>
        <span className="stat-number cormorant text-[clamp(52px,7vw,90px)] text-olive font-light leading-none">0</span>
        <span className="text-gold cormorant text-4xl">{suffix || '+'}</span>
      </div>
      <span className="dm-sans text-[11px] text-text-muted uppercase tracking-[0.15em]">{label}</span>
    </div>
  );
}