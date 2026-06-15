import { useEffect, useRef } from 'react';
import { Check, ArrowRight, Globe, LayoutDashboard, Cpu, Tag } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Globe,
    price: '₹7,999',
    yearlySaving: null,
    tagline: 'Perfect for freelancers, coaches and local businesses looking to get online.',
    cta: 'Get Started',
    featured: false,
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
    <section id="pricing" className="py-28 px-6 relative overflow-hidden">
      {/* Giant watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ top: '-40px' }}
      >
        <span
          className="font-black tracking-[0.15em] uppercase"
          style={{
            fontSize: 'clamp(80px, 14vw, 180px)',
            color: 'rgba(255,255,255,0.025)',
            lineHeight: 1,
          }}
        >
          PRICING
        </span>
      </div>

      <div ref={ref} className="section-reveal max-w-7xl mx-auto relative z-10">
        {/* Header row — 3 columns */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-14">
          {/* Left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/25 mb-4">
              <Tag size={12} className="text-[#0071E3]" />
              <span className="text-[#0071E3] text-xs font-semibold tracking-widest uppercase">Pricing</span>
            </div>
            <h2 className="text-white text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Our pricing plans
            </h2>
          </div>

          {/* Center — one-time badge */}
          <div className="flex-shrink-0">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white text-sm font-semibold">One-Time · Per Project</span>
            </div>
          </div>

          <div className="flex-1 lg:text-right">
            <p className="text-[#86868B] text-sm leading-relaxed max-w-xs lg:ml-auto">
              Three plans for Freelancers, Growing Businesses &amp; Enterprises — pay once, own it forever.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button
            className="px-8 py-3.5 rounded-full border border-white/[0.1] text-white/70 text-sm font-semibold hover:border-white/20 hover:text-white transition-all duration-300 hover:bg-white/[0.04]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View More & Custom Quotes →
          </button>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, delay }) {
  const ref = useRef(null);
  const Icon = plan.icon;

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
      className="section-reveal relative rounded-2xl p-7 flex flex-col transition-all duration-300"
      style={{
        background: plan.featured ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: plan.featured
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: plan.featured ? '0 0 0 1px rgba(255,255,255,0.06) inset' : 'none',
      }}
      onMouseEnter={(e) => {
        if (!plan.featured) {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.035)';
        }
      }}
      onMouseLeave={(e) => {
        if (!plan.featured) {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
        }
      }}
    >
      {/* Savings badge — never shown (no subscription) */}

      {/* Top row: icon + price */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: plan.featured ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Icon size={20} className="text-white" strokeWidth={1.5} />
        </div>

        <div className="text-right">
          <div className="flex items-baseline gap-1.5">
            <span className="text-white text-3xl font-black tracking-tight">{plan.price}</span>
            <span className="text-[#86868B] text-xs font-medium">/ Project</span>
          </div>

        </div>
      </div>

      {/* Name + tagline */}
      <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>
      <p className="text-[#86868B] text-[13px] leading-relaxed mb-6">{plan.tagline}</p>

      {/* CTA */}
      <button
        className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 mb-7"
        style={
          plan.featured
            ? {
                background: '#ffffff',
                color: '#000000',
              }
            : {
                background: 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.1)',
              }
        }
        onMouseEnter={(e) => {
          if (!plan.featured) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          } else {
            e.currentTarget.style.opacity = '0.9';
          }
        }}
        onMouseLeave={(e) => {
          if (!plan.featured) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          } else {
            e.currentTarget.style.opacity = '1';
          }
        }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {plan.cta} <ArrowRight size={14} />
      </button>

      {/* Features */}
      <div>
        <p className="text-white text-sm font-semibold mb-4">Features:</p>
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background: plan.featured ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Check size={11} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[#86868B] text-[13px] leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
