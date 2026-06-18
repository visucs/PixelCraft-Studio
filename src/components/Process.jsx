import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Monitor, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'We dig deep into your brand, goals, and competition to build the perfect strategic foundation.',
    color: '#0071E3',
    tag: 'Week 1',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description: 'High-fidelity mockups delivered in 7 days. You see exactly what you\'re getting before a single line is written.',
    color: '#9B5DE5',
    tag: 'Week 1–2',
  },
  {
    icon: Monitor,
    number: '03',
    title: 'Build',
    description: 'Clean, performant code. Every design detail implemented pixel-perfectly, tested on all devices and browsers.',
    color: '#00C6FF',
    tag: 'Week 2–3',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch',
    description: 'Seamless deployment, speed optimization, and hands-on post-launch support for a flawless go-live.',
    color: '#1db954',
    tag: 'Week 3–4',
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#9B5DE5]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={sectionRef} className="section-reveal flex flex-col items-center text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9B5DE5]/20 to-[#00C6FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <div className="relative flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B5DE5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B5DE5]"></span>
              </span>
              <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">How We Work</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.05] relative">
            From Idea to
            <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-0 ml-0 md:ml-4">
              <span className="text-transparent bg-clip-text relative z-10" style={{ backgroundImage: 'linear-gradient(135deg, #9B5DE5 0%, #00C6FF 100%)' }}>
                Live in Weeks.
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#9B5DE5] to-[#00C6FF] opacity-20 blur-2xl -z-10 rounded-full" />
            </span>
          </h2>

          <p className="text-[#86868B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A streamlined, transparent process built around your timeline. We move fast without breaking things.
          </p>
        </div>

        {/* Timeline Row */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-px bg-white/5">
            <div
              className="w-full h-full bg-gradient-to-r from-transparent via-[#9B5DE5] to-transparent opacity-50"
              style={{
                animation: 'pulse-slow 4s ease-in-out infinite',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 items-stretch">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return <ProcessCard key={i} step={step} Icon={Icon} index={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, Icon, index }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('revealed'), index * 120);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="section-reveal group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Hover Glow */}
      <div 
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
        style={{ background: `radial-gradient(circle at center, ${step.color}40 0%, transparent 70%)` }}
      />

      {/* Card */}
      <div
        className="relative rounded-3xl p-8 border transition-all duration-700 h-full flex flex-col bg-black/40 backdrop-blur-xl"
        style={{
          borderColor: isHovered ? `${step.color}60` : 'rgba(255,255,255,0.05)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)` : 'inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        {/* Step Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            {/* Number background glow */}
            <div 
              className="absolute inset-0 blur-lg rounded-full opacity-50 transition-all duration-500"
              style={{ 
                background: step.color,
                transform: isHovered ? 'scale(1.5)' : 'scale(1)'
              }}
            />
            {/* Number Badge */}
            <div
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-lg transition-transform duration-500"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
                border: '1px solid rgba(255,255,255,0.1)',
                transform: isHovered ? 'rotate(-5deg) scale(1.1)' : 'rotate(0) scale(1)',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              {step.number}
            </div>
          </div>

          {/* Time Tag */}
          <span
            className="text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider transition-colors duration-500"
            style={{
              color: isHovered ? '#fff' : step.color,
              background: isHovered ? step.color : `${step.color}15`,
              border: `1px solid ${isHovered ? step.color : `${step.color}30`}`,
              boxShadow: isHovered ? `0 0 15px ${step.color}50` : 'none'
            }}
          >
            {step.tag}
          </span>
        </div>

        {/* Icon & Title */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <Icon size={24} style={{ color: step.color }} className={`transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`} />
            <h3 
              className="text-2xl font-bold tracking-tight transition-all duration-500"
              style={{
                color: isHovered ? 'transparent' : '#fff',
                backgroundImage: isHovered ? `linear-gradient(135deg, #fff, ${step.color})` : 'none',
                WebkitBackgroundClip: isHovered ? 'text' : 'border-box',
                backgroundClip: isHovered ? 'text' : 'border-box',
              }}
            >
              {step.title}
            </h3>
          </div>
        </div>

        <p className="text-[#86868B] text-[15px] leading-relaxed font-medium transition-colors duration-500 group-hover:text-white/70">
          {step.description}
        </p>

        {/* Ambient background reflection */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, ${step.color}05 100%)`
          }}
        />
      </div>
    </div>
  );
}
