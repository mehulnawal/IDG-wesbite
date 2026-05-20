import { RiWhatsappLine, RiMailLine, RiPhoneLine } from 'react-icons/ri';

export default function Contact() {
  return (
    <div className="bg-cream">

      <section className="min-h-[70vh] bg-charcoal flex flex-col justify-center px-6 lg:px-20 relative overflow-hidden">
        <div className="container-custom text-center">
          <h1 className="cormorant italic text-[clamp(64px,12vw,160px)] text-cream font-light leading-none mb-8">
            Let's Talk <span className="text-gold blink">|</span>
          </h1>
          <p className="dm-sans text-cream/50 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-12">
            Reach out via WhatsApp, email, or phone. We're always open for conversations about new ventures or community partnerships.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(80px, 10vw, 140px)' }} className="container-custom relative -top-16 lg:-top-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            icon={<RiWhatsappLine />}
            label="WhatsApp"
            detail="+918511200626"
            href="https://wa.me/+918511200626?text=Hello%2C%20I'm%20interested%20in%20learning%20more%20about%20Ibrahim%20Dada%20Group."
            cta="Open WhatsApp"
            isPrimary
          />
          <ContactCard
            icon={<RiMailLine />}
            label="Email"
            detail="contact@idgsurat.com"
            href="mailto:contact@idgsurat.com"
            cta="Send Email"
            isAccent
          />
          <ContactCard
            icon={<RiPhoneLine />}
            label="Phone"
            detail="+91 8511200626"
            href="tel:+918511200626"
            cta="Call Now"
          />
        </div>
      </section>


      <section className="pb-10 bg-cream text-center">
        <div className="container-custom flex flex-col items-center gap-6">
          <h2 className="cormorant text-4xl text-text-dark font-medium">Ibrahim Dada Group</h2>
          <div className="flex flex-col gap-2">
            <span className="dm-sans text-xs text-gold tracking-[0.2em] uppercase">Surat, Gujarat, India</span>
            <span className="dm-sans text-sm text-text-muted opacity-60">contact@idgsurat.com  ·  +918511200626</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon, label, detail, href, cta, isPrimary = false, isAccent = false }: { icon: React.ReactNode, label: string, detail: string, href: string, cta: string, isPrimary?: boolean, isAccent?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="group bg-white border border-cream-deep p-12 lg:p-16 flex flex-col gap-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gold"
    >
      <div className={`text-4xl ${isPrimary ? 'text-olive' : isAccent ? 'text-gold' : 'text-charcoal'}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="cormorant italic text-4xl text-text-dark group-hover:text-gold transition-colors duration-300">{label}</h3>
        <span className="dm-sans text-sm text-text-muted">{detail}</span>
      </div>
      <div className={`inline-block w-fit px-8 py-4 dm-sans text-[11px] uppercase tracking-widest transition-all duration-300 ${isPrimary ? 'bg-olive text-cream group-hover:bg-olive-light' : isAccent ? 'border border-gold text-text-dark group-hover:bg-gold group-hover:text-white' : 'bg-charcoal text-cream'}`}>
        {cta} →
      </div>
    </a>
  );
}
