
import React, { useEffect } from 'react';
import { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onContact: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800';
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[60vh] overflow-hidden bg-slate-100">
        <img 
          src={service.image} 
          alt={service.title} 
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <button 
              onClick={onBack}
              className="text-white/70 hover:text-white mb-8 flex items-center justify-center space-x-2 mx-auto uppercase tracking-widest text-[10px] font-bold transition-colors"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back to all services</span>
            </button>
            <h1 className="text-4xl sm:text-7xl font-bold text-white mb-6 tracking-tighter">{service.title}</h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-slate-950 mb-8 uppercase tracking-tight">Premium Service Overview</h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-10 font-light">
              {service.longDescription}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-3">
                <i className="fa-solid fa-circle-info text-blue-500"></i>
                <span>Why choose our {service.title}?</span>
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                Every member of our team is specifically trained for our {service.title.toLowerCase()} protocols. We use high-grade equipment and specialized chemicals to ensure a level of clean that exceeds industry standards.
              </p>
              <button 
                onClick={onContact}
                className="px-10 py-4 bg-blue-600 text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-blue-700 transition-all shadow-xl"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Need Immediate Help?</h4>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call or Text</p>
                      <a
                        href="tel:+16786502983"
                        className="font-bold text-lg hover:underline decoration-blue-500/60"
                      >
                        678 650 2983
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Online Booking</p>
                      <p className="font-bold text-lg">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group rounded-3xl overflow-hidden h-64 shadow-2xl bg-blue-600">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800" 
                  alt="Quality Assurance" 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center p-8 text-center text-white backdrop-blur-[2px]">
                  <div>
                    <h5 className="font-bold text-xl mb-2">Quality Guarantee</h5>
                    <p className="text-xs text-blue-100">If you're not satisfied, we'll re-clean for free.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
