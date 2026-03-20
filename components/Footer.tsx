
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <img
              src="/images/Logo-fundo-tt.png"
              alt="Clean & Shine Services"
              className="h-16 w-auto object-contain mb-8"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Professional cleaning services in Georgia. Dedication, care, and trust for your home and business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg hover:text-blue-400 transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg hover:text-blue-400 transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-blue-400">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-blue-400">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Regular Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Move-in/Move-out Cleaning</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-blue-400">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Subscribe for cleaning tips and exclusive offers.</p>
            <form className="flex bg-white/5 rounded-xl p-1">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none px-4 py-2 text-sm flex-1 focus:outline-none text-white"
              />
              <button className="bg-blue-600 text-white px-4 py-2 text-xs font-bold uppercase rounded-lg">
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          <p>© 2026 Clean &amp; Shine Services. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
