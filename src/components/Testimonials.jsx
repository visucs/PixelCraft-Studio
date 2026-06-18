import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const row1 = [
  {
    text: '"PixelCraft delivered our landing page in 10 days. Our bounce rate dropped by 58% the first month. Genuinely the best investment we made."',
    name: 'Arjun Mehta',
    role: 'CEO, Fintrek.io',
    color: '#0071E3',
    initials: 'AM',
  },
  {
    text: '"I was skeptical about a remote agency, but PixelCraft over-delivered. The Figma mockup alone was worth the price. Clients love the new site."',
    name: 'Sarah Thompson',
    role: 'Product Manager, Luminary',
    color: '#5E5CE6',
    initials: 'ST',
  },
  {
    text: '"They redesigned our Shopify store and our conversion rate jumped 340% in the first month. Literally paid for itself 40× over."',
    name: 'Emma Clarke',
    role: 'Founder, Bloom & Thread',
    color: '#30D158',
    initials: 'EC',
  },
  {
    text: '"Our SaaS landing page now converts at 8.2%. The previous agency got us to 1.4%. PixelCraft\'s attention to detail is unmatched."',
    name: 'Marcus Osei',
    role: 'CTO, Nexora SaaS',
    color: '#FF9F0A',
    initials: 'MO',
  },
];

const row2 = [
  {
    text: '"Fastest agency I\'ve worked with. Delivered a 12-page site + custom animations in 18 days. On time, on budget, zero stress."',
    name: 'Priya Nair',
    role: 'Marketing Director, Verde Realty',
    color: '#0071E3',
    initials: 'PN',
  },
  {
    text: '"I\'ve never seen a web agency this thorough. They sent weekly Loom updates, asked smart questions, and the final product was flawless."',
    name: 'David Patel',
    role: 'IT Consultant, ScaleOps',
    color: '#C084FC',
    initials: 'DP',
  },
  {
    text: '"Our restaurant booking site went live in 2 weeks. Reservations doubled. The WhatsApp integration alone made us ₹2L extra revenue."',
    name: 'Kavya Reddy',
    role: 'Owner, Spice Route Dining',
    color: '#34C759',
    initials: 'KR',
  },
  {
    text: '"The customer support post-launch is phenomenal. They fixed a bug at 11 PM on a Sunday. That\'s the kind of team you want."',
    name: 'James Carter',
    role: 'Operations Manager, Growlytics',
    color: '#FF9F0A',
    initials: 'JC',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-white fill-white" />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.borderColor = `rgba(255,255,255,0.14)`;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div>
        <Stars />
        <p className="text-white/80 text-[14px] leading-relaxed">{item.text}</p>
      </div>

      <div className="flex items-center gap-3 mt-6">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${item.color}cc, ${item.color}55)`,
            border: `1.5px solid ${item.color}50`,
          }}
        >
          {item.initials}
        </div>
        <div>
          <div className="text-white text-sm font-semibold leading-tight">{item.name}</div>
          <div className="text-white/45 text-[12px] mt-0.5">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4"
        style={{
          animation: `marquee-${reverse ? 'reverse' : 'forward'} 35s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
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
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* Background glow — PixelCraft blue */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '500px',
          bottom: '-100px',
          right: '-100px',
          background: 'radial-gradient(ellipse, rgba(0,113,227,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          top: '-80px',
          left: '-60px',
          background: 'radial-gradient(ellipse, rgba(94,92,230,0.1) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Header */}
      <div ref={ref} className="section-reveal text-center px-6 mb-14">
        <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase mb-4">Testimonials</p>
        <h2 className="section-title text-white mb-4">
          What Our Clients
          <br />
          <span className="text-[#86868B]">Are Saying.</span>
        </h2>
        <p className="text-[#86868B] text-lg max-w-md mx-auto">
          Over 150 happy clients across India and beyond.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>

      {/* Stars summary */}
      <div className="text-center mt-12 px-6">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-[#86868B] text-sm">
          <span className="text-white font-semibold">4.5</span> average · 150+ client reviews
        </p>
      </div>
    </section>
  );
}
