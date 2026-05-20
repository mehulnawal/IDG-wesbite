import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const categories = [
  { id: 'education', label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'housing', label: 'Housing' },
  { id: 'community', label: 'Community' }
];

const initiatives = [
  {
    id: 1,
    category: 'education',
    name: "Alfesani School",
    stat: "4,000+",
    label: "STUDENTS ENROLLED",
    desc: "Pre-nursery to Std XII in Gujarati and English medium — shaping leaders through faith, knowledge, and inspiration since 1997."
  },
  {
    id: 2,
    category: 'education',
    name: "Model Women's College",
    stat: "2023",
    label: "ESTABLISHED",
    desc: "A lush green campus in Gabheni dedicated to women's empowerment and professional education — offering B.Sc. Nursing and vocational courses."
  },
  {
    id: 3,
    category: 'education',
    name: "Arif Dada Library",
    stat: "Public",
    label: "OPEN TO ALL",
    desc: "A calm, serene study and reading centre for students and citizens of Surat — built to cultivate the habit of reading in a distraction-heavy world."
  },
  {
    id: 4,
    category: 'healthcare',
    name: "Aamena Sarvajanik Hospital",
    stat: "2018",
    label: "ESTABLISHED",
    desc: "A 5-storey multi-speciality hospital in Unn, Surat — with ICU, operation theatre, emergency care, and 10+ medical departments — world-class care at affordable rates."
  },
  {
    id: 5,
    category: 'healthcare',
    name: "Affordable Care Mission",
    stat: "West Surat",
    label: "COVERAGE AREA",
    desc: "ICU, operation theatre, emergency and trauma care — available to every section of the community regardless of financial background."
  },
  {
    id: 6,
    category: 'housing',
    name: "Rahat Society",
    stat: "900",
    label: "RESIDENTIAL UNITS",
    desc: "500 flats and 400 row houses built without any government aid — for the underprivileged sections of Surat's community. Completed in 1995–96."
  },
  {
    id: 7,
    category: 'housing',
    name: "Nishant & Aman Society",
    stat: "450",
    label: "RESIDENTIAL BLOCKS",
    desc: "Affordable housing at Adajan Patiya and Udhna, Surat — built on the same non-profit principles as Rahat Society."
  },
  {
    id: 8,
    category: 'community',
    name: "Dada Community Hall",
    stat: "Nominal",
    label: "RENTAL RATES",
    desc: "A well-equipped gathering space for weddings, cultural events, and community meetings — available to residents at very nominal rental rates."
  },
  {
    id: 9,
    category: 'community',
    name: "Hashimi Charitable Trust",
    stat: "1995",
    label: "FOUNDED",
    desc: "The umbrella trust behind every education, healthcare, housing, and community initiative of IDG — serving Surat for three decades."
  }
];

export const PhilanthropyTabs = () => {
  const [activeTab, setActiveTab] = useState<string | null>('education');

  const filtered = initiatives.filter(i => i.category === activeTab);

  const sectionRefs = useRef({});

  const handleTabClick = (id) => {
    const newTab = activeTab === id ? null : id;
    setActiveTab(newTab);
    if (newTab) {
      setTimeout(() => {
        sectionRefs.current[newTab]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  };

  return (
    <div className="my-15 bg-cream">
      <div className="container-custom">
        {/* MOBILE: Accordion (lg:hidden) */}
        <div className="flex flex-col gap-2 lg:hidden">
          {categories.map((cat) => {
            const isOpen = activeTab === cat.id;
            const catItems = initiatives.filter(i => i.category === cat.id);
            return (
              <div key={cat.id} ref={(el) => (sectionRefs.current[cat.id] = el)}>
                <button
                  onClick={() => handleTabClick(cat.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 rounded-[4px] border-[1.5px] dm-sans text-[13px] uppercase tracking-wider transition-all ${isOpen
                    ? 'bg-white border-gold border-l-[3px] text-text-dark font-bold'
                    : 'bg-transparent border-olive/20 text-text-dark'
                    }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      {isOpen && <span className="text-gold">•</span>}
                      {cat.label}
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-4 pt-4 pb-2">
                        {catItems.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white border border-cream-deep rounded-[8px] p-8 flex flex-col gap-6"
                          >
                            <div className="bg-gold text-white rounded-full px-3 py-1 w-fit dm-sans text-[9px] uppercase tracking-widest">
                              {item.category}
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3 className="cormorant text-2xl text-text-dark">{item.name}</h3>
                              <div className="w-8 h-[1px] bg-gold" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="cormorant text-4xl text-gold">{item.stat}</span>
                              <span className="dm-sans text-[9px] text-text-muted uppercase tracking-widest">{item.label}</span>
                            </div>
                            <div className="h-px bg-cream-deep w-full" />
                            <p className="dm-sans text-[13px] text-text-muted leading-relaxed line-clamp-3">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex gap-20">
          {/* Sidebar Tabs */}
          <div className="w-[28%] flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-[4px] border-[1.5px] dm-sans text-[13px] uppercase tracking-wider transition-all w-full ${activeTab === cat.id
                  ? 'bg-white border-gold border-l-[3px] text-text-dark font-bold'
                  : 'bg-transparent border-olive/20 text-text-dark hover:border-gold/50'
                  }`}
              >
                {activeTab === cat.id && <span className="text-gold">•</span>}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-[68%]">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout" initial={false}>
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    layout
                    className="bg-white border border-cream-deep rounded-[8px] p-8 flex flex-col gap-6 min-h-[260px] group hover:border-gold/50 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl"
                  >
                    <div className="bg-gold text-white rounded-full px-3 py-1 w-fit dm-sans text-[9px] uppercase tracking-widest">
                      {item.category}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="cormorant text-2xl text-text-dark group-hover:text-gold transition-colors">{item.name}</h3>
                      <div className="w-8 h-[1px] bg-gold" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="cormorant text-4xl text-gold">{item.stat}</span>
                      <span className="dm-sans text-[9px] text-text-muted uppercase tracking-widest">{item.label}</span>
                    </div>
                    <div className="h-px bg-cream-deep w-full" />
                    <p className="dm-sans text-[13px] text-text-muted leading-relaxed line-clamp-3">{item.desc}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Full Overview Section */}
        <div className="mt-10 text-center">
          <span className="dm-sans text-[10px] text-gold tracking-widest uppercase block mb-2">Every Initiative</span>
          <h2 className="cormorant text-[clamp(32px,5vw,64px)] text-text-dark mb-2">The full picture, at a glance.</h2>
          <p className="dm-sans text-text-muted text-sm mb-10">Every school, hospital, home, and community space IDG has ever built.</p>
          {/* <div className="flex justify-center mb-16 text-gold opacity-50 tracking-tighter">—— ✦ ——</div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {initiatives.map((item) => (
              <div key={item.id} className="bg-white border border-cream-deep rounded-[8px] p-7 flex flex-col gap-5 hover:border-gold/50 transition-all duration-300">
                <span className="dm-sans text-[8px] text-text-muted uppercase tracking-[0.2em]">{item.category}</span>
                <h3 className="cormorant text-xl text-text-dark">{item.name}</h3>
                <div className="flex flex-col">
                  <span className="cormorant text-2xl text-gold leading-none">{item.stat}</span>
                  <span className="dm-sans text-[8px] text-text-muted uppercase tracking-widest mt-1">{item.label}</span>
                </div>
                <p className="dm-sans text-[12px] text-text-muted leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};
