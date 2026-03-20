
import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesGridProps {
  onSelectService: (service: Service) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800';
  };

  return (
    <section id="services" className="py-16 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 sm:mb-24 px-4">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Service Menu</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-950 mb-6 tracking-tight">Professional Specialties</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-40"></div>
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center rounded-xl shadow-xl text-blue-600">
                  <i className={`${service.icon} text-base sm:text-lg`}></i>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-950 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-1">
                  {service.description}
                </p>
                <button 
                  onClick={() => onSelectService(service)}
                  className="flex items-center space-x-3 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 group-hover:translate-x-2 transition-transform"
                >
                  <span>Service Details</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
