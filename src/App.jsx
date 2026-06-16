import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StartProject from './components/StartProject';
import LegalPage from './components/LegalPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [projectOpen, setProjectOpen] = useState(false);
  const [legalTab, setLegalTab]       = useState(null); // null | 'privacy' | 'terms'
  const [showContact, setShowContact] = useState(false);

  const goBack = () => { window.scrollTo({ top: 0 }); };

  if (showContact) {
    return <ContactPage onBack={() => { setShowContact(false); goBack(); }} />;
  }

  if (legalTab) {
    return (
      <LegalPage
        defaultTab={legalTab}
        onBack={() => { setLegalTab(null); goBack(); }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar
        onStartProject={() => setProjectOpen(true)}
        onContact={() => setShowContact(true)}
      />
      <Hero onStartProject={() => setProjectOpen(true)} />
      <Marquee />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Testimonials />
      <Pricing onStartProject={() => setProjectOpen(true)} />
      <FAQ />
      <CTA onStartProject={() => setProjectOpen(true)} />
      <Footer
        onLegal={(tab) => setLegalTab(tab)}
        onContact={() => setShowContact(true)}
      />

      <StartProject open={projectOpen} onClose={() => setProjectOpen(false)} />
    </div>
  );
}
