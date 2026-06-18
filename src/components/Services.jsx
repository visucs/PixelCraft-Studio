import { useEffect, useRef } from 'react';
import { Palette, Code2, Fingerprint, Gauge, ShoppingBag, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Pixel-perfect, conversion-focused designs that command attention and inspire action across every device.',
    color: '#0071E3',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Clean, performant code built with modern stacks. Fast, accessible, and built to scale with your business.',
    color: '#00C6FF',
  },
  {
    icon: Fingerprint,
    title: 'Brand Identity',
    description: 'Strategic branding — logos, color systems, and visual language that make you unmistakably you.',
    color: '#9B5DE5',
  },
  {
    icon: Gauge,
    title: 'SEO & Performance',
    description: 'Speed, Core Web Vitals, and search visibility — we optimize for both humans and algorithms.',
    color: '#F72585',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description: 'Shopify and custom storefronts engineered to convert browsers into buyers at every touchpoint.',
    color: '#0071E3',
  },
  {
    icon: HeadphonesIcon,
    title: 'Maintenance & Support',
    description: 'Round-the-clock updates, security patches, and dedicated support so you never worry about downtime.',
    color: '#00C6FF',
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
      <div ref={ref} className="section-reveal flex flex-col items-center text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(0,113,227,0.1)', border: '1px solid rgba(0,113,227,0.2)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] animate-pulse" />
          <span className="text-[#0071E3] text-[11px] font-bold tracking-widest uppercase">Our Capabilities</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
          Full-Stack Creative <br/>
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)' }}>
            Services
          </span>
        </h2>
        <p className="text-[#86868B] text-lg max-w-xl mx-auto leading-relaxed font-medium">
          From concept to launch, we handle every layer of your digital presence with uncompromising quality and attention to detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <ServiceCard key={i} service={service} Icon={Icon} delay={i * 0.1} />
          );
        })}
      </div>
    </section>
  );
}

function ServiceCard({ service, Icon, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('revealed'), delay * 1000);
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className="section-reveal group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
        backdropFilter: 'blur(16px)'
      }}
    >
      {/* Top subtle border highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }} />
           
      {/* Ambient glowing background on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
           style={{ background: `radial-gradient(circle at top right, ${service.color} 0%, transparent 60%)` }} />

      <div className="relative p-10 flex flex-col h-full z-10">
        <div className="flex items-start justify-between mb-10">
          <div
            className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
              border: `1px solid ${service.color}40`,
              boxShadow: `0 0 30px ${service.color}20`
            }}
          >
            <Icon size={28} style={{ color: service.color }} />
          </div>
          
          <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 shadow-lg"
               style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
            <span style={{ color: service.color }} className="text-xl font-bold">→</span>
          </div>
        </div>
        
        <h3 className="text-white text-2xl md:text-3xl font-black mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
            style={{ backgroundImage: `linear-gradient(to right, #fff, ${service.color})` }}>
          {service.title}
        </h3>
        
        <p className="text-[#86868B] text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-1 font-medium">
          {service.description}
        </p>
      </div>
    </div>
  );
}
