
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ServicesGrid from './components/ServicesGrid';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Checklist from './components/Checklist';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import TrustBadges from './components/TrustBadges';
import { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Handle browser back button/navigation
  useEffect(() => {
    const handlePopState = () => {
      setSelectedService(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    window.history.pushState({ service: service.id }, '', `#service-${service.id}`);
  };

  const handleBackHome = () => {
    setSelectedService(null);
    window.history.pushState(null, '', '/');
  };

  const scrollToContact = () => {
    setSelectedService(null);
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      contactEl?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header onLogoClick={handleBackHome} />
      <main>
        {selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={handleBackHome}
            onContact={scrollToContact}
          />
        ) : (
          <>
            <Hero />
            <SocialProof />
            <ServicesGrid onSelectService={handleSelectService} />
            <Checklist />
            <BeforeAfterGallery />
            <AboutUs />
            <TrustBadges />
            <ContactForm />
            <Location />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
