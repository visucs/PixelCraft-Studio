import { useEffect, useRef, useState } from 'react';
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
    color: '#9B5DE5',
    initials: 'ST',
  },
  {
    text: '"They redesigned our Shopify store and our conversion rate jumped 340% in the first month. Literally paid for itself 40× over."',
    name: 'Emma Clarke',
    role: 'Founder, Bloom & Thread',
    color: '#00C6FF',
    initials: 'EC',
  },
  {
    text: '"Our SaaS landing page now converts at 8.2%. The previous agency got us to 1.4%. PixelCraft\'s attention to detail is unmatched."',
    name: 'Marcus Osei',
    role: 'CTO, Nexora SaaS',
    color: '#1db954',
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
    color: '#9B5DE5',
    initials: 'DP',
  },
  {
    text: '"Our restaurant booking site went live in 2 weeks. Reservations doubled. The WhatsApp integration alone made us ₹2L extra revenue."',
    name: 'Kavya Reddy',
    role: 'Owner, Spice Route Dining',
    color: '#00C6FF',
    initials: 'KR',
  },
  {
    text: '"The customer support post-launch is phenomenal. They fixed a bug at 11 PM on a Sunday. That\'s the kind of team you want."',
    name: 'James Carter',
    role: 'Operations Manager, Growlytics',
    color: '#1db954',
    initials: 'JC',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1.5 mb-6">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-[#FBBF24] fill-[#FBBF24] drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[380px] h-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 group relative cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Hover Glow */}
      <div 
        className="absolute -inset-0.5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${item.color}30 0%, transparent 70%)` }}
      />
      
      {/* Glass Card */}
      <div 
        className="absolute inset-0 rounded-3xl bg-black/40 backdrop-blur-xl border transition-colors duration-500 pointer-events-none"
        style={{
          borderColor: isHovered ? `${item.color}50` : 'rgba(255,255,255,0.05)',
          boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)` : 'inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <Stars />
          <p className="text-white/90 text-[16px] leading-relaxed font-medium mb-8">
            {item.text}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <div className="relative">
            {/* Avatar Glow */}
            <div 
              className="absolute inset-0 blur-md rounded-full opacity-50 transition-transform duration-500"
              style={{ background: item.color, transform: isHovered ? 'scale(1.5)' : 'scale(1)' }}
            />
            {/* Avatar */}
            <div
              className="relative w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0 transition-transform duration-500"
              style={{
                background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                border: `2px solid ${item.color}50`,
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              {item.initials}
            </div>
          </div>
          <div>
            <div className="text-white text-[15px] font-bold tracking-tight">{item.name}</div>
            <div className="text-white/50 text-[13px] font-medium mt-0.5">{item.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-x-hidden group">
      <div
        className="flex gap-6 py-4 animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDirection: reverse ? 'reverse' : 'normal',
          animationDuration: '60s'
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
    <section id="testimonials" className="py-32 relative overflow-hidden bg-black">
      {/* Deep Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-[#00C6FF]/10 to-transparent blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-gradient-to-tr from-[#9B5DE5]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div ref={ref} className="section-reveal flex flex-col items-center text-center px-6 mb-20 relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071E3]/20 to-[#9B5DE5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071E3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071E3]"></span>
            </span>
            <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Testimonials</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.05] relative">
          What Our Clients
          <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-0 ml-0 md:ml-4">
            <span className="text-transparent bg-clip-text relative z-10" style={{ backgroundImage: 'linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)' }}>
              Are Saying.
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0071E3] to-[#00C6FF] opacity-20 blur-2xl -z-10 rounded-full" />
          </span>
        </h2>
        <p className="text-[#86868B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Over 150 happy clients across the globe. We don't just build websites; we build businesses.
        </p>
      </div>

      {/* Marquee Area with Fade Masks */}
      <div className="relative w-full">
        {/* Left/Right Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-[100px] md:w-[300px] bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[100px] md:w-[300px] bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <div className="flex flex-col gap-6 relative z-10">
          <MarqueeRow items={row1} reverse={false} />
          <MarqueeRow items={row2} reverse={true} />
        </div>
      </div>

      {/* Stars summary */}
      <div className="text-center mt-20 px-6 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="text-[#FBBF24] fill-[#FBBF24] drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
          ))}
        </div>
        <p className="text-[#86868B] text-[15px] font-medium tracking-wide">
          <span className="text-white font-bold text-lg mr-2">4.9/5</span> average rating from over 150+ reviews
        </p>
      </div>
    </section>
  );
}
