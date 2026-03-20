
import React from 'react';

const ContactForm: React.FC = () => {

  return (
    <section id="contact" className="py-16 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          
          <div className="w-full lg:w-1/3 bg-blue-600 p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <span className="text-blue-200 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 sm:mb-6 block">Contact Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-tight">Request Your Cleaning Estimate</h2>
              <p className="text-blue-100 mb-8 sm:mb-12 font-light text-sm sm:text-base">
                Fill out the form for a free estimate or send us a text message. We will reply as soon as possible.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <i className="fa-solid fa-phone text-sm sm:text-base"></i>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-blue-200 font-bold mb-0.5 sm:mb-1">Call or Text</p>
                  <a
                    href="tel:+16786502983"
                    className="font-semibold text-lg sm:text-xl hover:underline decoration-white/60"
                  >
                    678 650 2983
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <i className="fa-solid fa-envelope text-sm sm:text-base"></i>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-blue-200 font-bold mb-0.5 sm:mb-1">Email Us</p>
                  <p className="font-semibold text-sm sm:text-base">cleaneshine@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 p-8 sm:p-12 lg:p-16">
            <form
              className="space-y-4 sm:space-y-6"
              action="https://formsubmit.co/joaopaulotwoads@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New cleaning estimate request from Clean & Shine site"
              />
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      name="fullName"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Service Type</label>
                    <select
                      name="serviceType"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm text-slate-600"
                    >
                      <option>Regular Cleaning</option>
                      <option>Commercial Cleaning</option>
                      <option>Move-in/Move-out Cleaning</option>
                    </select>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      placeholder="(404) 555-0000"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message / Details</label>
                  <textarea 
                    rows={3}
                    name="message"
                    placeholder="Tell us about your home size and requirements..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 sm:py-5 bg-blue-600 text-white font-bold tracking-[0.2em] uppercase text-xs sm:text-sm rounded-xl hover:bg-blue-700 transition-all shadow-xl disabled:opacity-70 flex items-center justify-center space-x-3 mt-4"
                >
                  <span>REQUEST ESTIMATE</span>
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
