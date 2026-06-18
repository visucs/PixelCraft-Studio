import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, BadgeCheck, Zap, Globe } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'Secure Process', color: '#00C6FF' },
  { icon: BadgeCheck, label: 'Money-Back Guarantee', color: '#1db954' },
  { icon: Zap,        label: '7-Day Design', color: '#FFD60A' },
  { icon: Globe,      label: 'Remote-Friendly', color: '#9B5DE5' },
];

export default function CTA({ onStartProject }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-black flex justify-center items-center">
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#00C6FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#9B5DE5]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0071E3]/20 blur-[200px] rounded-full pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl">
        <div 
          ref={ref} 
          className="section-reveal flex flex-col items-center text-center p-10 md:p-20 rounded-[3rem] relative overflow-hidden border border-white/[0.08]"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Internal Glow from bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#00C6FF]/10 to-transparent pointer-events-none" />

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C6FF]/20 to-[#9B5DE5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <div className="relative flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C6FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C6FF]"></span>
              </span>
              <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Ready to Begin?</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-[1] relative">
            Ready to Build
            <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-2">
              <span className="text-transparent bg-clip-text relative z-10" style={{ backgroundImage: 'linear-gradient(135deg, #00C6FF 0%, #9B5DE5 100%)' }}>
                Something Great?
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] opacity-30 blur-3xl -z-10 rounded-full" />
            </span>
          </h2>

          <p className="text-[#86868B] text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Let's create an unforgettable digital experience that drives real results for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 z-20 relative">
            <button
              className="group relative px-8 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-500"
              onClick={onStartProject}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: isHovered ? '0 0 40px rgba(0,198,255,0.4)' : '0 10px 30px rgba(0,0,0,0.5)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {/* Button Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              {/* Button Inner content */}
              <div className="relative z-10 flex items-center gap-3 text-white">
                Start Your Project
                <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </div>
            </button>
            <button
              className="text-[#86868B] text-base font-semibold hover:text-white transition-colors duration-300 flex items-center gap-2 group"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing 
              <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-4 relative z-20">
            {trustBadges.map(({ icon: Icon, label, color }, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-md group hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              >
                <div className="relative">
                  <div className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{ background: color }} />
                  <Icon size={16} style={{ color: color }} className="relative z-10 drop-shadow-md" strokeWidth={2.5} />
                </div>
                <span className="text-[#86868B] text-sm font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
