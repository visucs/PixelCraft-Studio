import { useEffect, useRef } from 'react';
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
    color: '#5E5CE6',
    tag: 'Week 1–2',
  },
  {
    icon: Monitor,
    number: '03',
    title: 'Build',
    description: 'Clean, performant code. Every design detail implemented pixel-perfectly, tested on all devices and browsers.',
    color: '#30D158',
    tag: 'Week 2–3',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch',
    description: 'Seamless deployment, speed optimization, and hands-on post-launch support for a flawless go-live.',
    color: '#FF9F0A',
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
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,113,227,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={sectionRef} className="section-reveal text-center mb-20">
          <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase mb-4">How We Work</p>
          <h2 className="section-title text-white mb-5">
            From Idea to
            <br />
            <span className="text-[#86868B]">Live in Weeks.</span>
          </h2>
          <p className="text-[#86868B] text-lg max-w-xl mx-auto">
            A streamlined, transparent process built around your timeline.
          </p>
        </div>

        {/* Timeline Row */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px">
            <div
              className="w-full h-full"
              style={{
                background: 'repeating-linear-gradient(90deg, #0071E3 0px, #0071E3 8px, transparent 8px, transparent 20px)',
                animation: 'dash-move 2s linear infinite',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10 items-stretch">
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
    >
      {/* Card */}
      <div
        className="relative rounded-2xl p-7 border transition-all duration-500 cursor-default overflow-hidden h-full"
        style={{
          background: 'linear-gradient(145deg, #0D0D0D 0%, #111 100%)',
          borderColor: 'rgba(255,255,255,0.07)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = step.color + '60';
          e.currentTarget.style.boxShadow = `0 0 40px ${step.color}18, 0 20px 50px rgba(0,0,0,0.5)`;
          e.currentTarget.style.transform = 'translateY(-6px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Background number watermark */}
        <div
          className="absolute -top-4 -right-3 text-[80px] font-black leading-none select-none pointer-events-none"
          style={{ color: `${step.color}08`, fontVariantNumeric: 'tabular-nums' }}
        >
          {step.number}
        </div>

        {/* Step circle + icon */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)`,
              boxShadow: `0 0 20px ${step.color}50`,
            }}
          >
            {step.number}
          </div>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{ background: `${step.color}18` }}
          >
            <Icon size={16} style={{ color: step.color }} />
          </div>
          <span
            className="ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{
              color: step.color,
              background: `${step.color}15`,
              border: `1px solid ${step.color}30`,
            }}
          >
            {step.tag}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-white text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
        <p className="text-[#86868B] text-[14px] leading-relaxed">{step.description}</p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
          style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
        />
      </div>
    </div>
  );
}
