import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function RealEstate() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    { name: "Premium High-Rise", loc: "Vesu, Surat", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
    { name: "Luxury Residential", loc: "Adajan, Surat", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
    { name: "Premium Apartments", loc: "Pal, Surat", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80" },
    { name: "Iconic Development", loc: "Althan, Surat", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80" }
  ];

  useEffect(() => {
    gsap.to('.parallax-bg', {
      y: -100,
      scrollTrigger: {
        trigger: '.real-estate-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });

    gsap.to('.project-preview-img', {
      clipPath: 'inset(0% 0 0 0)',
      duration: 0.5,
      ease: 'power3.out',
      overwrite: true
    });
  }, [activeProject]);

  return (
    <div className="bg-cream">

      <section className="real-estate-hero relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Real Estate"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 to-charcoal/30" />
        </div>

        <div className="container-custom relative z-10 w-full flex flex-col gap-6">
          <div className="absolute right-0 top-0 pointer-events-none opacity-[0.03] text-[220px] cormorant text-white uppercase parallax-bg leading-none hidden lg:block">
            REAL ESTATE
          </div>
          <div>
            <span className="dm-sans text-[10px] text-gold-light tracking-[0.25em] uppercase block mb-6">Business Venture · 03</span>
            <h1 className="cormorant text-[clamp(60px,10vw,140px)] text-white font-light leading-[0.9] mb-8">
              Real Estate
            </h1>
            <p className="dm-sans text-white/70 text-lg md:text-xl max-w-xl tracking-wide underline decoration-gold/50 underline-offset-8">
              Premium Residential Landmarks Across Surat
            </p>
          </div>
        </div>
      </section>

      <section className="bg-olive py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-center">
          {[
            { tag: "Premium Projects", val: "12+" },
            { tag: "Residential Units", val: "1,163" },
            { tag: "Experience", val: "40+ Yrs" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 relative">
              {i > 0 && <div className="hidden lg:block absolute left-[-12%] top-0 h-full w-px bg-gold/30" />}
              <span className="cormorant text-6xl text-gold-light font-light">{stat.val}</span>
              <span className="dm-sans text-[11px] text-cream/60 uppercase tracking-widest">{stat.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="cormorant text-5xl text-text-dark mb-16">Selected Portfolio</h2>
            <div className="flex flex-col">
              {projects.map((project, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveProject(i)}
                  className="group py-10 border-b border-cream-deep cursor-pointer flex flex-col gap-4 transition-all duration-300"
                >
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                      <span className="dm-sans text-[10px] text-gold uppercase tracking-[0.2em]">0{i + 1} — Project</span>
                      <h3 className="cormorant text-4xl text-text-dark group-hover:italic transition-all duration-300">
                        {project.name}
                      </h3>
                    </div>
                    <span className="dm-sans text-xs text-text-muted tracking-wide mr-4">{project.loc}</span>
                  </div>

                  <div className="block lg:hidden mt-4 overflow-hidden">
                    <img src={project.img} alt={project.name} className="w-full aspect-video object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 sticky top-32 h-[500px] overflow-hidden items-center justify-center">
            <div className="w-[400px] h-[550px] relative">
              <img
                key={activeProject}
                src={projects[activeProject].img}
                alt="Project Preview"
                className="project-preview-img absolute inset-0 w-full h-full object-cover clip-path-reveal"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-center">
        <div className="container-custom">
          <h2 className="cormorant italic text-white text-[clamp(40px,6vw,80px)] font-light leading-tight mb-20 px-4">
            "Built on Precision. Delivered with Pride."
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-left">
            {[
              { title: "Superior Construction", desc: "Utilizing top-grade materials and structural engineering that exceeds safety benchmarks." },
              { title: "World-Class Amenities", desc: "Designed for modern living with focus on space, natural light, and community wellbeing." },
              { title: "Strategic Locations", desc: "Projects situated in Surat's most high-growth zones, ensuring lasting asset appreciation." }
            ].map((p, i) => (
              <div key={i} className="flex flex-col gap-6 pt-8 border-t border-gold/40">
                <h3 className="cormorant text-2xl text-cream">{p.title}</h3>
                <p className="dm-sans text-sm text-cream/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}