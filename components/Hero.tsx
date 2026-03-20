
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10 text-center text-white pt-24 pb-16">
        <span className="inline-block bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-white font-semibold tracking-[0.18em] uppercase text-[9px] mb-6">
          Clean &amp; Shine Services • Georgia
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight drop-shadow-2xl">
          Spotless spaces. <br />
          <span className="text-blue-300 italic font-medium">Dedication, care, and trust.</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-10 text-slate-100 max-w-2xl mx-auto font-light leading-relaxed px-4">
          Professional Regular, Commercial, and Move-in/Move-out cleaning for homes and businesses across
          Georgia. A lighter, sophisticated approach to keeping your spaces always ready.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-6 sm:px-0">
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 font-bold tracking-[0.18em] uppercase text-[10px] rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            REQUEST A FREE ESTIMATE
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-semibold tracking-[0.18em] uppercase text-[10px] rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center space-x-3"
          >
            <span>VIEW SERVICES &amp; CHECKLIST</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <i className="fa-solid fa-chevron-down text-white/50 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
