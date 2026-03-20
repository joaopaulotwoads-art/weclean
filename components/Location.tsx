
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-0 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-50">
          <div className="w-full lg:w-3/5 h-[300px] sm:h-[500px] lg:h-[600px] relative overflow-hidden">
            <iframe
              title="Clean &amp; Shine Service Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.36643276856!2d-84.58411082697816!3d33.76763375741033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1715832132134!5m2!1sen!2sus"
              className="w-full h-full opacity-80"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full lg:w-2/5 bg-slate-900 text-white p-10 sm:p-16 flex flex-col justify-center">
            <span className="text-blue-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 sm:mb-6 block">Our Service Area</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-tight">Serving Homes &amp; Businesses Across Georgia</h2>
            <p className="text-slate-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg font-light">
              We cover multiple cities and neighborhoods across Georgia. Share your ZIP code when requesting
              an estimate and we will confirm availability for your address.
            </p>

            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center rounded-xl text-blue-400 shrink-0">
                  <i className="fa-solid fa-map-location-dot text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-0.5 sm:mb-1">Base Location</h4>
                  <p className="font-medium text-sm sm:text-base text-slate-200">Georgia, USA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center rounded-xl text-blue-400 shrink-0">
                  <i className="fa-solid fa-clock text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-0.5 sm:mb-1">Business Hours</h4>
                  <p className="font-medium text-sm sm:text-base text-slate-200">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-blue-600 text-white font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs rounded-xl hover:bg-blue-500 transition-all shadow-lg">
              CHECK YOUR ZIP CODE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
