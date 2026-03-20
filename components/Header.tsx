
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoAction = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-slate-950/85 backdrop-blur-md shadow-md py-3' : 'bg-slate-950/55 backdrop-blur-md py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={handleLogoAction}
          className="flex items-center space-x-3 group"
        >
          <img
            src="/images/Logo-fundo-tt.png"
            alt="Clean & Shine Services"
            className="h-11 sm:h-12 w-auto object-contain drop-shadow-lg"
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => onLogoClick?.()}
              className="text-xs font-bold uppercase tracking-widest hover:text-blue-300 transition-colors text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => onLogoClick?.()}
            className="px-6 py-2 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-blue-500 transition-all shadow-lg"
          >
            GET A QUOTE
          </a>
        </nav>

        <button
          className="lg:hidden text-2xl focus:outline-none text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col items-center justify-center space-y-8 z-40 animate-in fade-in duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setIsMenuOpen(false);
                onLogoClick?.();
              }}
              className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              onLogoClick?.();
            }}
            className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest"
          >
            BOOK NOW
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
