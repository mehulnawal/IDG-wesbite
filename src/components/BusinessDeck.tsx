import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

const businesses = [
  {
    id: "01",
    name: "Ameen Silk Mills",
    tagline: "Dyeing · Printing · Finishing · Since 1985",
    description: "Four decades of craftsmanship in dyeing and printing, processing 2.5 lakh metres of fabric daily across a 13,930 sq.m facility in Surat.",
    color: "#4A5240",
    cat: "01 / TEXTILE PROCESSING",
    impact: "2.5 L / metres / DAILY OUTPUT",
    stats: [
      { val: "2.5 L", label: "metres / DAILY OUTPUT" },
      { val: "13,930", label: "sq.m / FACILITY" },
      { val: "~2,000", label: "— / WORKFORCE" },
    ],
  },
  {
    id: "02",
    name: "Nuur Garments",
    tagline: "Forward integration · SKD collections · Pan-India retail",
    description: "Rich traditional SKD collections — elegant styling, dependable quality and value-driven pricing for India's leading retailers and growing export markets.",
    color: "#8B3A3A",
    cat: "02 / GARMENT RETAIL",
    impact: "Nuur / — / BRAND",
    stats: [
      { val: "Nuur", label: "— / BRAND" },
      { val: "All India", label: "— / DISTRIBUTION" },
      { val: "Growing", label: "— / EXPORT" },
    ],
  },
  {
    id: "03",
    name: "Cleris Optical",
    tagline: "Precision lenses · German machines · Since 2014",
    description: "Dada Digital Lab processes prescription progressive lenses using German-sourced machinery, serving the West Zone of India — Gujarat, Maharashtra, and Madhya Pradesh.",
    color: "#2C3E50",
    cat: "03 / OPTICAL CARE",
    impact: "2014 / — / EST.",
    stats: [
      { val: "2014", label: "— / EST." },
      { val: "3 States", label: "— / COVERAGE" },
      { val: "German", label: "— / TECHNOLOGY" },
    ],
  },
  {
    id: "04",
    name: "Real Estate",
    tagline: "Premium residences · 12+ projects · Surat landmarks",
    description: "From concept to completion, IDG's real estate arm has delivered 1,163 residential units across 12+ premium high-rise projects in Surat — each a benchmark in quality and design.",
    color: "#3D3222",
    cat: "04 / LANDMARK DEVELOPMENT",
    impact: "12+ / — / PROJECTS",
    stats: [
      { val: "12+", label: "— / PROJECTS" },
      { val: "1,163", label: "— / UNITS" },
      { val: "Surat", label: "— / LOCATIONS" },
    ],
  },
  {
    id: "05",
    name: "Hashimi Charitable Trust",
    tagline: "Education · Healthcare · Housing · Community",
    description: "Through the Hashimi Public Charitable Trust, IDG has built schools, a multi-speciality hospital, affordable housing, a community hall, a public library, and a women's college — serving thousands across Surat.",
    color: "#1C3A2A",
    cat: "05 / COMMUNITY UPLIFTMENT",
    impact: "4,000+ / — / STUDENTS",
    stats: [
      { val: "4,000+", label: "— / STUDENTS" },
      { val: "1,350+", label: "— / HOMES" },
      { val: "1985", label: "— / SINCE" },
    ],
  },
];

const AUTOPLAY_INTERVAL = 5000;

export const BusinessDeck = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Changing timerKey resets the autoplay interval after manual navigation
  const [timerKey, setTimerKey] = useState(0);

  const active = businesses[index];

  const goNext = useCallback(() => {
    setIndex(i => (i + 1) % businesses.length);
    setTimerKey(k => k + 1);
  }, []);

  const goPrev = useCallback(() => {
    setIndex(i => (i - 1 + businesses.length) % businesses.length);
    setTimerKey(k => k + 1);
  }, []);

  // Auto-advance — resets whenever timerKey changes (manual nav) or isPaused changes
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex(i => (i + 1) % businesses.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, timerKey]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  return (
    <div
      style={{ paddingTop: 'clamp(80px, 10vw, 140px)' }}
      className="container-custom overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header row */}
      <div className="text-white flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-2 lg:mb-10">
        <div className="flex flex-col gap-6">
          <span className="dm-sans text-[11px] text-gold uppercase tracking-[0.22em] font-medium">The Group</span>
          <h2 className="cormorant text-[clamp(36px,6vw,80px)]  leading-[0.9] font-light">
            Five businesses. <br /> <span className="italic font-light">One deck. Tap to flip.</span>
          </h2>
        </div>

        <div className="flex items-center gap-6 self-end lg:self-end">
          <div className="dm-sans text-xs text-white tracking-widest uppercase">
            0{index + 1} / 0{businesses.length}
          </div>
          <div className="flex gap-4">
            <button
              onClick={goPrev}
              aria-label="Previous business"
              className="w-11 h-11 rounded-full border-[1.5px] border-text-dark flex items-center justify-center hover:bg-olive hover:border-olive hover:text-cream transition-all"
            >
              <RiArrowLeftLine />
            </button>
            <button
              onClick={goNext}
              aria-label="Next business"
              className="w-11 h-11 rounded-full border-[1.5px] border-text-dark flex items-center justify-center hover:bg-olive hover:border-olive hover:text-cream transition-all"
            >
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>

      {/* Card + Detail */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[4%] items-start lg:items-center">

        {/* Card */}
        <div className="w-full lg:w-[44%] relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'circOut' }}
              style={{ backgroundColor: active.color }}
              className="rounded-[20px] h-[clamp(320px,45vw,520px)] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl cursor-pointer"
              onClick={goNext}
            >
              <div className="flex flex-col gap-4 relative z-10">
                <div className="inline-block bg-white/15 px-3 py-1 rounded-full w-fit">
                  <span className="dm-sans text-[11px] text-white uppercase tracking-widest">{active.cat}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="cormorant text-[clamp(28px,4.5vw,52px)] text-white font-normal leading-none pr-12">
                  {active.name}
                </h3>
                <p className="dm-sans text-[13px] text-white/70 max-w-[280px]">{active.tagline}</p>
              </div>

              {/* Fixed: id is already "01", "02" — was rendering "001" before */}
              <span className="absolute bottom-6 right-8 cormorant text-[160px] text-white/10 leading-none pointer-events-none -mr-4 -mb-8">
                {active.id}
              </span>

              {/* Progress bar */}
              <div
                className="absolute bottom-0 left-0 h-[3px] bg-gold-light transition-all duration-500"
                style={{ width: `${((index + 1) / businesses.length) * 100}%` }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Detail */}
        <div className="w-full lg:w-[52%] flex flex-col gap-8 pt-4 lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8 lg:gap-10"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="dm-sans text-[10px] text-gold uppercase tracking-[0.2em] font-medium">{active.cat}</span>
                  <h3 className="cormorant text-[clamp(28px,4vw,52px)] text-white font-normal">{active.name}</h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="dm-sans text-[9px] text-text-muted uppercase tracking-widest">Impact</span>
                  <div className="h-6 w-[3px] bg-olive" />
                </div>
              </div>

              <p className="dm-sans text-text-muted text-base lg:text-lg leading-relaxed max-w-lg">
                {active.description}
              </p>

              <div className="h-px bg-cream-deep w-full" />

              {/* Fixed mobile: gap-2 on xs, gap-4 on sm+ */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {active.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 min-w-0">
                    <span className="cormorant text-[clamp(20px,3.5vw,42px)] text-text-muted leading-none truncate">
                      {stat.val}
                    </span>
                    <span className="dm-sans text-[9px] sm:text-[10px] text-text-muted uppercase tracking-[0.1em] leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-2">
                {/* <div className="w-8 h-8 rounded-full bg-olive flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-cream" />
                </div> */}
                {/* <button className="rounded-full bg-white border border-cream-deep px-6 py-2.5 dm-sans text-[12px] text-text-dark hover:bg-cream-deep transition-colors">
                  Continue ↓
                </button> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};