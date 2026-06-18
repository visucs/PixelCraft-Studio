import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight, Globe, LayoutDashboard, Cpu, Tag, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Globe,
    price: '₹7,999',
    yearlySaving: null,
    tagline: 'Perfect for freelancers, coaches and local businesses looking to get online.',
    cta: 'Get Started',
    featured: false,
    color: '#00C6FF',
    features: [
      '1 Landing Page (up to 5 sections)',
      'Mobile-First Responsive Design',
      'Basic On-Page SEO',
      'WhatsApp & Contact Form',
      'Google Maps Embed',
      '3 Revision Rounds',
      '30-Day Free Support',
    ],
  },
  {
    name: 'Business',
    icon: LayoutDashboard,
    price: '₹24,999',
    yearlySaving: null,
    tagline: 'Ideal for growing startups and service businesses that need a full web presence.',
    cta: 'Get Started',
    featured: true,
    color: '#9B5DE5',
    features: [
      'Up to 8 Custom Pages',
      'Premium UI/UX Design (Figma)',
      'WordPress / Next.js CMS',
      'Advanced SEO + Schema Markup',
      'Google Analytics + Meta Pixel',
      'WhatsApp Chat Widget',
      'Unlimited Revisions',
      '90-Day Free Support',
    ],
  },
  {
    name: 'Enterprise',
    icon: Cpu,
    price: '₹59,999',
    yearlySaving: null,
    tagline: 'Designed for brands needing a full custom web app or E-Commerce platform.',
    cta: 'Get Started',
    featured: false,
    color: '#1db954',
    features: [
      'Full Custom Web App / E-Commerce',
      'Razorpay / Stripe Integration',
      'Admin Dashboard & CMS',
      'Custom Animations & Interactions',
      'REST API / Third-Party Integrations',
      'GST Invoice & Billing System',
      'Dedicated Project Manager',
      '6-Month Priority Support',
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Background Orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#9B5DE5]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#00C6FF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Giant watermark */}
      <div
        className="absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden"
        style={{ top: '50px' }}
      >
        <span
          className="font-black tracking-[0.15em] uppercase opacity-[0.02]"
          style={{
            fontSize: 'clamp(100px, 18vw, 250px)',
            color: 'white',
            lineHeight: 1,
            background: 'linear-gradient(180deg, #fff 0%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PLANS
        </span>
      </div>

      <div ref={ref} className="section-reveal max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9B5DE5]/20 to-[#00C6FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <div className="relative flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B5DE5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B5DE5]"></span>
              </span>
              <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Pricing Options</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight relative">
            Invest in your
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #fff 0%, #a0a0a0 100%)' }}> digital future.</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">One-Time Payment</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C6FF] shadow-[0_0_10px_rgba(0,198,255,0.6)]" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">Own It Forever</span>
            </div>
          </div>

          <p className="text-[#86868B] text-lg max-w-2xl mx-auto font-medium">
            Three premium tiers designed for Freelancers, Growing Businesses & Enterprises. No hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 relative z-20">
          <button
            className="group px-8 py-4 rounded-full border border-white/[0.1] bg-white/[0.02] backdrop-blur-xl text-white font-semibold hover:border-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 flex items-center gap-3 mx-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Need a custom quote? Let's talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, delay }) {
  const ref = useRef(null);
  const Icon = plan.icon;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), delay * 1000);
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`section-reveal relative p-8 md:p-10 flex flex-col rounded-[2.5rem] transition-all duration-500 ease-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: plan.featured ? 'rgba(155, 93, 229, 0.03)' : 'rgba(255,255,255,0.015)',
        backdropFilter: 'blur(24px)',
        border: plan.featured ? `1px solid rgba(155, 93, 229, 0.3)` : '1px solid rgba(255,255,255,0.08)',
        boxShadow: isHovered 
          ? `0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 40px ${plan.color}30` 
          : `0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)`,
        transform: plan.featured ? (isHovered ? 'scale(1.04) translateY(-10px)' : 'scale(1.02)') : (isHovered ? 'translateY(-10px)' : 'translateY(0)'),
        zIndex: isHovered ? 10 : (plan.featured ? 5 : 1),
      }}
    >
      {/* Featured Badge */}
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9B5DE5] to-[#00C6FF] text-white text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(155,93,229,0.5)] flex items-center gap-1.5">
          <Star size={12} className="fill-white" />
          Most Popular
        </div>
      )}

      {/* Internal Glow on Hover */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${plan.color}15 0%, transparent 60%)`,
          opacity: isHovered || plan.featured ? 1 : 0
        }}
      />

      {/* Top row: icon */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
          style={{
            background: `rgba(255,255,255,0.03)`,
            border: `1px solid rgba(255,255,255,0.1)`,
            boxShadow: `0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`
          }}
        >
          <div className="absolute inset-0 opacity-20" style={{ background: plan.color, filter: 'blur(10px)' }} />
          <Icon size={24} style={{ color: plan.featured ? '#fff' : plan.color }} strokeWidth={2} className="relative z-10" />
        </div>
        <h3 className="text-white/90 font-bold text-xl tracking-wide">{plan.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-4 relative z-10">
        <div className="flex items-baseline gap-1.5">
          <span className="text-white text-5xl font-black tracking-tighter" style={{ textShadow: `0 0 30px ${plan.color}40` }}>{plan.price}</span>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-[#86868B] text-sm leading-relaxed mb-8 font-medium h-12 relative z-10">{plan.tagline}</p>

      {/* CTA Button */}
      <button
        className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mb-8 transition-all duration-300 relative overflow-hidden group"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          background: plan.featured ? plan.color : 'rgba(255,255,255,0.05)',
          border: plan.featured ? `1px solid ${plan.color}` : '1px solid rgba(255,255,255,0.1)',
          color: plan.featured ? '#fff' : '#fff',
          boxShadow: plan.featured ? `0 10px 20px ${plan.color}40` : 'none',
        }}
      >
        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10 flex items-center gap-2">
          {plan.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </button>

      {/* Features List */}
      <div className="relative z-10 flex-grow">
        <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-5">What's Included</p>
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
                style={{
                  background: `rgba(255,255,255,0.05)`,
                  border: `1px solid rgba(255,255,255,0.1)`,
                }}
              >
                <Check size={10} style={{ color: plan.color }} strokeWidth={3} />
              </div>
              <span className="text-[#86868B] text-sm font-medium leading-relaxed group-hover/item:text-white transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

