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

export default function App() {
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar onStartProject={() => setProjectOpen(true)} />
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
      <Footer />

      <StartProject open={projectOpen} onClose={() => setProjectOpen(false)} />
    </div>
  );
}
