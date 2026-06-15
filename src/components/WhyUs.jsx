import { useEffect, useRef } from 'react';
import { Zap, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { number: '150+', label: 'Websites Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '7-Day', label: 'Design Turnaround' },
];

const features = [
  {
    icon: Zap,
    title: 'Apple-Level Design',
    description: 'We obsess over every pixel, every interaction, every micro-moment until it feels inevitable.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We ship when we say we will — no excuses, no delays, no surprises. Your deadline is sacred.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion-First',
    description: 'Beautiful sites that actually drive results. Every design decision is backed by conversion strategy.',
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
    <section className="py-28 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="section-reveal text-center mb-20">
          <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase mb-4">Why PixelCraft?</p>
          <h2 className="section-title text-white mb-5">
            The Studio That
            <br />
            <span className="text-[#86868B]">Sets the Standard.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    <div ref={ref} className="section-reveal bg-[#0A0A0A] p-10 text-center group hover:bg-[#0d1117] transition-colors duration-300">
      <div className="stat-number mb-2">{stat.number}</div>
      <p className="text-[#86868B] text-[15px] font-medium">{stat.label}</p>
    </div>
  );
}

function FeatureBlock({ feature, Icon, delay }) {
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
    <div ref={ref} className="section-reveal group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#0071E3]/15 flex items-center justify-center group-hover:bg-[#0071E3]/25 transition-colors">
          <Icon size={18} className="text-[#0071E3]" />
        </div>
        <span className="text-white/30 text-lg">✦</span>
        <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
      </div>
      <p className="text-[#86868B] leading-relaxed text-[15px]">{feature.description}</p>
    </div>
  );
}
