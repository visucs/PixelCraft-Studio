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
      <div ref={ref} className="section-reveal text-center mb-16">
        <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase mb-4">What We Do</p>
        <h2 className="section-title text-white mb-5">
          Full-Stack Creative<br />
          <span className="text-[#86868B]">Services</span>
        </h2>
        <p className="text-[#86868B] text-lg max-w-xl mx-auto leading-relaxed">
          From concept to launch, we handle every layer of your digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    <div ref={ref} className="section-reveal service-card rounded-2xl p-8 group">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${service.color}20` }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>
      <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">{service.title}</h3>
      <p className="text-[#86868B] text-[15px] leading-relaxed">{service.description}</p>
      <div className="mt-6 flex items-center gap-2 text-[#0071E3] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more <span>→</span>
      </div>
    </div>
  );
}
