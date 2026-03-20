
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-24">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Help Center</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-950 mb-8 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg font-light">These are starter questions and can be replaced with your client-specific FAQ list anytime.</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                className="w-full px-10 py-8 text-left flex justify-between items-center transition-colors group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{faq.question}</span>
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 ${openIndex === index ? 'bg-blue-600 text-white rotate-45 border-blue-600 shadow-lg' : 'text-slate-400 hover:border-blue-500'}`}>
                  <i className="fa-solid fa-plus text-xs"></i>
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-10 pb-10 text-slate-600 leading-relaxed text-lg border-t border-slate-50 pt-6 font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
