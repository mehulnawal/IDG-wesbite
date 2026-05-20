import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const brands = [
   {
      id: "01",
      name: "Nuur",
      initial: "N",
      est: "1985",
      tagline: "Rich traditional SKD collections · Pan-India retail · Growing exports",
      about: "Nuur is IDG's garment brand — a strategic forward integration from fabric to finished clothing. Focused on traditional SKD collections that blend heritage aesthetics with contemporary quality.",
      history: "Born from the group's desire to move up the value chain, Nuur now supplies leading retailers across India and is gaining traction in export markets.",
      quote: "We don't just sell fabric — we deliver finished collections that carry IDG's four-decade standard of quality into every showroom.",
      offers: ["TRADITIONAL SKD", "PAN-INDIA RETAIL", "EXPORT COLLECTIONS", "VALUE PRICING"],
      images: [
         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
      ]
   },
   {
      id: "02",
      name: "Zeenat Fashions",
      initial: "Z",
      est: "1990",
      tagline: "Exclusive designs · Premium fabric feel · Domestic & export trade",
      about: "Zeenat Fashions is a premier fabric wholesale brand under IDG, known for its exclusive design sensibility and consistent premium feel across sarees, dress materials, and fabric yardage.",
      history: "Operating across key textile markets in India and select overseas destinations, Zeenat Fashions has built a loyal buyer base through proprietary design and reliable quality.",
      quote: "Every collection is designed in-house — no two seasons look the same. That exclusivity is why our buyers keep coming back.",
      offers: ["SAREES", "DRESS MATERIALS", "EXCLUSIVE DESIGNS", "EXPORT TRADE"],
      images: [
         "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
      ]
   },
   {
      id: "03",
      name: "Haya",
      initial: "H",
      est: "2005",
      tagline: "Curated aesthetics · Retailer-first approach · Quality wholesale",
      about: "Haya is a fabric wholesale brand that curates a refined range of textiles tailored to the modern retailer's preference for aesthetics, feel, and marketability.",
      history: "Serving distributors and retailers across India, Haya has positioned itself as a trusted name in quality-driven fabric wholesale with a focus on evolving market preferences.",
      quote: "Haya means modesty and grace — values we embed in every fabric we supply. Our retailers know the collection will always resonate with their customers.",
      offers: ["FABRIC WHOLESALE", "CURATED RANGE", "RETAILER SUPPLY", "DOMESTIC MARKETS"],
      images: [
         "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
         "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"
      ]
   },
   {
      id: "04",
      name: "Sanaa",
      initial: "S",
      est: "2010",
      tagline: "Design-led · Premium finishes · Domestic & international",
      about: "Sanaa is IDG's design-led premium fabric brand, offering a curated portfolio of finishes and patterns that appeal to both the domestic fashion trade and international textile buyers.",
      history: "With a focus on proprietary aesthetics and premium fabric quality, Sanaa has grown its presence in India's leading textile hubs and is expanding into international export partnerships.",
      quote: "Sanaa was built for buyers who won't compromise on design. Every roll that leaves our facility carries that promise.",
      offers: ["PREMIUM FINISHES", "FASHION TRADE", "EXPORT PARTNERSHIPS", "DESIGN-LED RANGE"],
      images: [
         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
         "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
      ]
   }
];

export const BrandPanel = () => {
   const [index, setIndex] = useState(0);
   const [isPaused, setIsPaused] = useState(false);
   const active = brands[index];

   useEffect(() => {
      if (isPaused) return;
      const interval = setInterval(() => {
         setIndex(i => (i + 1) % brands.length);
      }, 4000);
      return () => clearInterval(interval);
   }, [isPaused]);

   return (
      <div className="pt-5 bg-charcoal" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
         <div className="">
            <div className="mb-10 container-custom">
               <span className="dm-sans text-[10px] text-gold-light tracking-[0.25em] uppercase block mb-6">AMEEN SILK MILLS · SURAT, INDIA</span>
               <h2 className="cormorant text-[clamp(40px,6vw,80px)] text-cream font-light leading-none">
                  Four Brands. <span className="italic text-gold">One Standard.</span>
               </h2>
               <p className="dm-sans text-white/50 text-sm tracking-wide mt-6">Each brand below tells its own story. Click to explore.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 lg:p-10 rounded-[2px] mb-10">
               <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
                  {/* Left Panel */}
                  <div className="flex flex-col gap-10">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.35 }}
                           className="flex flex-col gap-10"
                        >
                           <div className="flex flex-col gap-6">
                              <div className="w-12 h-12 border-[1.5px] border-gold flex items-center justify-center">
                                 <span className="cormorant text-2xl text-gold font-medium">{active.initial}</span>
                              </div>
                              <div className="flex flex-col gap-1">
                                 <span className="dm-sans text-[10px] text-gold uppercase tracking-[0.2em] font-medium">BRAND 0{active.id} · EST. {active.est}</span>
                                 <h3 className="cormorant text-[clamp(32px,5vw,64px)] text-cream font-light leading-none">
                                    {active.name.split(' ')[0]} <span className="text-gold-light italic">{active.name.split(' ').slice(1).join(' ')}</span>
                                 </h3>
                              </div>
                              <p className="dm-sans text-cream/60 text-base">{active.tagline}</p>
                           </div>

                           <div className="h-px bg-white/10 w-full" />

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="flex flex-col gap-3">
                                 <span className="dm-sans text-[9px] text-text-muted uppercase tracking-widest">About</span>
                                 <p className="dm-sans text-[13px] text-cream/70 leading-relaxed">{active.about}</p>
                              </div>
                              <div className="flex flex-col gap-3">
                                 <span className="dm-sans text-[9px] text-text-muted uppercase tracking-widest">History</span>
                                 <p className="dm-sans text-[13px] text-cream/70 leading-relaxed">{active.history}</p>
                              </div>
                           </div>

                           <div className="flex flex-col gap-4">
                              <span className="dm-sans text-[9px] text-text-muted uppercase tracking-widest">What makes them different</span>
                              <div className="bg-white/5 p-6 border-l border-gold/40">
                                 <blockquote className="cormorant italic text-xl text-gold-light leading-relaxed">
                                    "{active.quote}"
                                 </blockquote>
                              </div>
                           </div>

                           <div className="flex flex-col gap-4">
                              <span className="dm-sans text-[9px] text-text-muted uppercase tracking-widest">What they offer</span>
                              <div className="flex flex-wrap gap-2">
                                 {active.offers.map((offer) => (
                                    <span key={offer} className="border border-white/20 px-3.5 py-1 rounded-[2px] dm-sans text-[10px] text-cream/70 uppercase tracking-widest whitespace-nowrap">
                                       {offer}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </motion.div>
                     </AnimatePresence>
                  </div>

                  {/* Right Panel */}
                  <div className="flex flex-col gap-4 h-full">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={index}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.4 }}
                           className="flex flex-col gap-4 h-full"
                        >
                           <div className="flex-1 aspect-[4/3] rounded-[4px] overflow-hidden">
                              <img src={active.images[0]} className="w-full h-full object-cover" alt={active.name} />
                           </div>
                           <div className="flex-1 aspect-[4/3] rounded-[4px] overflow-hidden">
                              <img src={active.images[1]} className="w-full h-full object-cover" alt={active.name} />
                           </div>
                           <div className="dm-sans text-[10px] text-cream/35 uppercase tracking-widest text-right mt-2 font-medium">Source: Ameen Silk Mills Archives</div>
                        </motion.div>
                     </AnimatePresence>
                  </div>
               </div>

               {/* Brand Navigation */}
               <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex flex-wrap items-center gap-8 lg:gap-12">
                     {brands.map((brand, i) => (
                        <button
                           key={brand.id}
                           onClick={() => setIndex(i)}
                           className={`dm-sans text-[11px] uppercase tracking-[0.18em] transition-all relative pb-2 ${index === i ? 'text-cream font-bold opacity-100' : 'text-cream opacity-35'}`}
                        >
                           {`0${brand.id} ${brand.name}`}
                           {index === i && (
                              <motion.div layoutId="brand-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                           )}
                        </button>
                     ))}
                  </div>
                  <button
                     onClick={() => setIsPaused(!isPaused)}
                     className="dm-sans text-[10px] text-gold-light uppercase tracking-[0.2em] font-bold"
                  >
                     {isPaused ? "▶ PLAY" : "|| PAUSE"}
                  </button>
               </div>
            </div>

            {/* Brand Summary Cards */}
            <div className="flex flex-col gap-10">
               <div className="container-custom">
                  <span className="dm-sans text-[14px] text-cream/50 uppercase tracking-widest block mb-1">AT A GLANCE</span>
                  <p className="cormorant text-2xl text-cream italic">All four brands, side by side.</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {brands.map((brand) => (
                     <div key={brand.id} className="border border-white/10 p-8 flex flex-col gap-8 relative group hover:border-gold/40 transition-all duration-500">
                        <div className="flex justify-between items-start">
                           <div className="w-9 h-9 border border-gold flex items-center justify-center">
                              <span className="cormorant text-xl text-gold font-medium">{brand.initial}</span>
                           </div>
                           <span className="text-gold opacity-10 group-hover:opacity-100 transition-opacity">↗</span>
                        </div>
                        <div className="flex flex-col gap-1">
                           <span className="dm-sans text-[9px] text-white/35 uppercase tracking-[0.1em]">EST. {brand.est}</span>
                           <h4 className="cormorant italic text-2xl text-cream">{brand.name}</h4>
                        </div>
                        <p className="dm-sans text-[12px] text-cream/50 leading-relaxed line-clamp-3">
                           {brand.about}
                        </p>
                        <div className="flex flex-wrap gap-2">
                           {brand.offers.slice(0, 2).map((off) => (
                              <span key={off} className="text-[9px] dm-sans bg-white/5 px-2 py-0.5 text-cream/40 uppercase tracking-widest">{off}</span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
