import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Ventures',
      dropdown: [
        { name: 'Textile', path: '/textile' },
        { name: 'Optical', path: '/optical' },
        { name: 'Real Estate', path: '/real-estate' },
        { name: 'Philanthropy', path: '/philanthropy' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[1000] transition-all duration-300",
      isScrolled ? "bg-cream/96 backdrop-blur-lg border-b border-gold/20 py-4 " : "bg-transparent py-6"
    )}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className={cn(
            "text-2xl cormorant font-medium tracking-tighter transition-all duration-300",
            isScrolled ? "text-text-dark" : "text-white"
          )}>
            IDG
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button
                  className={cn(
                    "text-[11px] dm-sans uppercase tracking-[0.18em] flex items-center gap-1 transition-colors",
                    isScrolled ? "text-text-dark" : "text-white/90"
                  )}
                  onMouseEnter={() => setActiveDropdown(link.name)}
                >
                  {link.name} <RiArrowDownSLine className="text-sm" />
                </button>
              ) : (
                <Link
                  to={link.path || '#'}
                  className={cn(
                    "text-[11px] dm-sans uppercase tracking-[0.18em] relative transition-colors",
                    isScrolled ? "text-text-dark" : "text-white/90",
                    location.pathname === link.path && "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-gold"
                  )}
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full left-0 mt-4 bg-cream border border-olive/15 rounded-[2px] shadow-lg min-w-[220px]"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-6 py-3.5 text-[11px] dm-sans uppercase tracking-[0.12em] text-text-dark hover:bg-cream-deep hover:border-l-[3px] hover:border-gold transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl "
          onClick={() => setIsMenuOpen(true)}
        >
          <RiMenuLine className={isScrolled ? "text-text-dark" : "text-white"} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[20000] bg-charcoal h-screen flex flex-col p-8"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-cream">
                <RiCloseLine />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-8 mt-0">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    {link.dropdown ? (
                      <div className="flex flex-col gap-4">
                        <span className="text-4xl cormorant text-cream font-medium">{link.name}</span>
                        <div className="flex flex-col gap-4 border-l border-gold/40 pl-6 ml-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-2xl cormorant text-cream/70"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.path || '#'}
                        className="text-4xl cormorant text-cream font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
