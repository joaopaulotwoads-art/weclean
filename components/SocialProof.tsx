
import React from 'react';
import { GOOGLE_MAPS_REVIEWS_URL, TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Real feedback from recent Google reviews by Clean &amp; Shine clients in Georgia.
          </p>
          <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200">
            <span className="text-sm font-bold text-slate-900">5.0</span>
            <span className="text-amber-500 text-xs">★★★★★</span>
            <span className="text-xs text-slate-500">Based on 13 Google reviews</span>
          </div>
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <i className="fa-brands fa-google text-sm" />
            <span>View Google Reviews</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 relative group transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex mb-0 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-xs sm:text-sm" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  Google Review
                </span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base italic mb-8 leading-relaxed font-light">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-bold text-slate-950 text-base sm:text-lg">{t.name}</h4>
                <p className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.2em] mt-2">
                  {t.role}
                </p>
              </div>
              <i className="fa-solid fa-quote-right absolute top-6 right-8 text-slate-100 text-5xl -z-0 pointer-events-none group-hover:text-blue-50 transition-colors" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-heart text-blue-500" />
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-user-check text-blue-500" />
            <span>Background-Checked Team</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-badge-check text-blue-500" />
            <span>Satisfaction Focused Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
