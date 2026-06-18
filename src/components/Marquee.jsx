import { Sparkles } from 'lucide-react';

const items = [
  'E-Commerce', 'SaaS', 'Real Estate', 'Healthcare',
  'Fintech', 'Fashion', 'Restaurants', 'Startups',
  'EdTech', 'Legal', 'Travel', 'Non-Profits',
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <section 
      className="py-5 bg-transparent relative overflow-hidden flex items-center justify-center border-y border-white/[0.03]" 
      style={{ contain: 'paint' }}
    >
      {/* Background glow behind marquee */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#00C6FF]/5 to-black pointer-events-none" />

      {/* Edge Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform transform-gpu">
        {repeated.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-8 mx-8 transform-gpu group cursor-default">
            {/* The Text Item */}
            <span className="text-white/40 group-hover:text-white/90 text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-500 flex items-center gap-2">
              <Sparkles size={14} className="text-[#9B5DE5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500">
                {item}
              </span>
            </span>
            
            {/* The Separator */}
            <div className="relative flex items-center justify-center w-1.5 h-1.5">
              <div className="absolute w-1.5 h-1.5 rounded-full bg-[#00C6FF] opacity-50 blur-[2px]" />
              <div className="w-1 h-1 rounded-full bg-white relative z-10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
