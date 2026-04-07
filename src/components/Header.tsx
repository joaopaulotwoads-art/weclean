import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[99] flex items-center h-[var(--header-offset)] min-h-[var(--header-offset)] transition-colors duration-300 ${isScrolled ? 'bg-slate-950/85 backdrop-blur-md shadow-md' : 'bg-slate-950/55 backdrop-blur-md'}`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center w-full min-h-0">
          <a
            href="/"
            className="flex items-center gap-3 group shrink-0 mr-6 sm:mr-8 lg:mr-12 xl:mr-16"
          >
            <img
              src="/images/logo-header.png"
              alt="Clean & Shine"
              className="h-14 w-auto max-w-[min(72vw,18rem)] object-contain object-left sm:h-16 md:h-[4.25rem] lg:max-w-[20rem]"
              decoding="async"
              width={444}
              height={315}
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-8 shrink-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest hover:text-blue-300 transition-colors text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="px-6 py-2.5 bg-white text-slate-950 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-slate-100 transition-all shadow-lg ring-1 ring-white/80"
            >
              GET A QUOTE
            </a>
          </nav>

          <button
            className="lg:hidden relative z-[101] text-2xl focus:outline-none text-white"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[100] flex min-h-[100dvh] w-full flex-col overflow-y-auto overscroll-contain"
          style={{ backgroundColor: '#0f172a' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex shrink-0 items-start justify-end px-5 pt-[max(1.75rem,env(safe-area-inset-top,0px))] pb-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white text-2xl shadow-lg ring-1 ring-white/10 hover:bg-slate-700 transition-colors"
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center gap-8 px-6 pb-16 pt-4 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl sm:text-3xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 px-10 py-4 bg-white text-slate-950 rounded-full font-bold uppercase tracking-widest shadow-lg"
            >
              REQUEST ESTIMATE
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
