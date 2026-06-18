import { useEffect, useRef, useState } from 'react';
import { Zap, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { number: '150+', label: 'Websites Delivered', color: '#0071E3' },
  { number: '98%', label: 'Client Satisfaction', color: '#9B5DE5' },
  { number: '7-Day', label: 'Design Turnaround', color: '#00C6FF' },
];

const features = [
  {
    icon: Zap,
    title: 'Apple-Level Design',
    description: 'We obsess over every pixel, every interaction, every micro-moment until it feels inevitable.',
    color: '#0071E3'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We ship when we say we will — no excuses, no delays, no surprises. Your deadline is sacred.',
    color: '#9B5DE5'
  },
  {
    icon: TrendingUp,
    title: 'Conversion-First',
    description: 'Beautiful sites that actually drive results. Every design decision is backed by conversion strategy.',
    color: '#00C6FF'
  },
];

export default function WhyUs() {
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
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0071E3]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#9B5DE5]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={ref} className="section-reveal flex flex-col items-center text-center mb-24 relative">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071E3]/20 to-[#9B5DE5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <div className="relative flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071E3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071E3]"></span>
              </span>
              <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Why PixelCraft?</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.05] relative">
            The Studio That
            <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-0 ml-0 md:ml-4">
              <span className="text-transparent bg-clip-text relative z-10" style={{ backgroundImage: 'linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)' }}>
                Sets the Standard.
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0071E3] to-[#00C6FF] opacity-20 blur-2xl -z-10 rounded-full" />
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 0.15} />
          ))}
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FeatureBlock key={i} feature={feature} Icon={Icon} delay={i * 0.15} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
      className="section-reveal group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
        style={{ background: `radial-gradient(circle at center, ${stat.color}30 0%, transparent 70%)` }}
      />
      
      <div 
        className="relative bg-black/40 backdrop-blur-xl p-12 text-center rounded-3xl border transition-all duration-700 h-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          borderColor: isHovered ? `${stat.color}50` : 'rgba(255,255,255,0.05)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)` : 'inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        <div className="relative mb-4">
          {/* Animated Number Glow */}
          <div 
            className="absolute inset-0 blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-60"
            style={{ background: stat.color }}
          />
          <div 
            className="text-6xl md:text-7xl font-black tracking-tighter relative z-10 transition-all duration-700"
            style={{
              color: isHovered ? 'transparent' : '#fff',
              backgroundImage: isHovered ? `linear-gradient(135deg, #fff, ${stat.color})` : 'none',
              WebkitBackgroundClip: isHovered ? 'text' : 'border-box',
              backgroundClip: isHovered ? 'text' : 'border-box',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {stat.number}
          </div>
        </div>
        
        <p 
          className="text-[#86868B] text-lg font-medium tracking-wide transition-colors duration-500 relative z-10"
          style={{ color: isHovered ? '#fff' : '#86868B' }}
        >
          {stat.label}
        </p>

        {/* Ambient bottom reflection */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(to top, ${stat.color}10, transparent)` }}
        />
      </div>
    </div>
  );
}

function FeatureBlock({ feature, Icon, delay }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
      className="section-reveal group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
        style={{ background: `radial-gradient(circle at center, ${feature.color}30 0%, transparent 70%)` }}
      />

      <div 
        className="relative bg-black/40 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-700 h-full overflow-hidden"
        style={{
          borderColor: isHovered ? `${feature.color}50` : 'rgba(255,255,255,0.05)',
          transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)` : 'inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden"
            style={{
              background: isHovered ? `${feature.color}20` : 'rgba(255,255,255,0.03)',
              border: `1px solid ${isHovered ? `${feature.color}40` : 'rgba(255,255,255,0.05)'}`,
              transform: isHovered ? 'rotate(-10deg) scale(1.1)' : 'rotate(0) scale(1)'
            }}
          >
            <div 
              className="absolute inset-0 blur-md transition-opacity duration-500"
              style={{ background: feature.color, opacity: isHovered ? 0.3 : 0 }}
            />
            <Icon size={22} className="relative z-10 transition-colors duration-500" style={{ color: isHovered ? '#fff' : feature.color }} />
          </div>
          
          <h3 
            className="text-white font-bold text-xl tracking-tight transition-all duration-500"
            style={{
              color: isHovered ? 'transparent' : '#fff',
              backgroundImage: isHovered ? `linear-gradient(135deg, #fff, ${feature.color})` : 'none',
              WebkitBackgroundClip: isHovered ? 'text' : 'border-box',
              backgroundClip: isHovered ? 'text' : 'border-box',
            }}
          >
            {feature.title}
          </h3>
        </div>
        
        <p className="text-[#86868B] leading-relaxed text-[15px] font-medium transition-colors duration-500 group-hover:text-white/70">
          {feature.description}
        </p>

        {/* Ambient bottom reflection */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, ${feature.color}05 100%)` }}
        />
      </div>
    </div>
  );
}
