
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Cleaning"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-[400px] sm:h-[650px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-4 sm:-right-8 bg-slate-950 p-8 sm:p-12 shadow-2xl z-20 rounded-2xl transform lg:translate-x-12">
              <span className="block text-4xl sm:text-6xl font-bold text-blue-500 leading-none">15+</span>
              <span className="block text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-4">Years Experience</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="block text-blue-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-6">About Clean &amp; Shine</span>
            <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-8 leading-none tracking-tighter">Your Home, <br/> Our Priority.</h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-10 font-light italic">
              "We don't just clean homes, we care for the people inside them."
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-12">
              Clean &amp; Shine Services was created to bring hotel-level cleaning quality to homes and businesses in Georgia. Our philosophy is simple: dedication, care, and trust for your home from professionals who respect your space and your time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                  <i className="fa-solid fa-shield-heart text-slate-900"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-widest mb-2">Fully Insured</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Bonded and insured for your complete peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                  <i className="fa-solid fa-leaf text-slate-900"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-widest mb-2">Eco-Friendly</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Safe for your kids, your pets, and the planet.</p>
                </div>
              </div>
            </div>

            <button className="w-full sm:w-auto px-12 py-5 bg-slate-950 text-white font-bold tracking-[0.2em] uppercase text-xs rounded-xl hover:bg-blue-600 transition-all shadow-xl">
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
