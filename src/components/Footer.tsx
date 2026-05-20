import { Link } from 'react-router-dom';
import { RiWhatsappLine } from 'react-icons/ri';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream pt-10 pb-4">
      <div className="container-custom">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-16 lg:gap-24">
          <div className="flex flex-col gap-6">
            <div className="text-4xl cormorant text-white font-medium tracking-tight">IDG</div>
            <p className="cormorant text-2xl italic text-gold-light max-w-sm">
              "Four Decades of Excellence, Ethics & Community."
            </p>
            <div className="w-20 h-px bg-gold" />
            <div className="dm-sans text-[11px] text-text-muted tracking-widest uppercase">
              Surat, Gujarat, India
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="dm-sans text-[10px] text-gold-light tracking-[0.25em] uppercase">
              Navigate
            </div>
            <div className="flex flex-col gap-4">
              {['Home', 'Textile', 'Optical', 'Real Estate', 'Philanthropy', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="dm-sans text-[13px] text-cream/70 hover:text-gold-light transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="dm-sans text-[10px] text-gold-light tracking-[0.25em] uppercase">
              Connect
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <a href="tel:+918511200626" className="dm-sans text-[13px] text-cream/70">+91  85112 00626</a>
                <a href="mailto:contact@idgsurat.com" className="dm-sans text-[13px] text-cream/70">contact@idgsurat.com</a>
              </div>
              <a
                href="https://wa.me/+918511200626?text=Hello%2C%20I'm%20interested%20in%20learning%20more%20about%20Ibrahim%20Dada%20Group."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-olive text-cream px-6 py-3.5 text-[11px] dm-sans uppercase tracking-[0.15em] hover:bg-olive-light transition-colors inline-block w-fit"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-2 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="dm-sans text-[11px] opacity-40">
            © 2025 Ibrahim Dada Group. All Rights Reserved.
          </div>
          <div className="dm-sans text-[11px] opacity-40">
            Surat · Gujarat · India
          </div>
        </div>
      </div>
    </footer>
  );
};
