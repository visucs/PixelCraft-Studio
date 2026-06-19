import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const projects = [
  {
    id: 'studynotion',
    name: 'StudyNotion',
    label: 'EdTech Platform',
    headline: 'Learn to code.\nAt your own pace.',
    url: 'https://studynotion-one-kappa.vercel.app/',
    colors: {
      bg: '#000814',
      accent: '#FFD60A',
      text: '#ffffff',
      sub: 'rgba(255,255,255,0.45)',
      glow: 'rgba(255,214,10,0.12)',
      orb1: '#FFD60A',
      orb2: '#12D8FA',
    },
  },
  {
    id: 'reelmind',
    name: 'ReelMind AI',
    label: 'AI · Movie Discovery',
    headline: 'Cinema, curated\nby intelligence.',
    url: 'https://movie-recommendations-chi.vercel.app/',
    colors: {
      bg: '#030712',
      accent: '#EAB308',
      text: '#ffffff',
      sub: 'rgba(255,255,255,0.45)',
      glow: 'rgba(234,179,8,0.12)',
      orb1: '#EAB308',
      orb2: '#F97316',
    },
  },
  {
    id: 'portfolio',
    name: 'Dev Portfolio',
    label: 'Personal Branding',
    headline: 'Your story,\ndesigned to impress.',
    url: 'https://fortfolioforclient-production.up.railway.app/',
    colors: {
      bg: '#05051a',
      accent: '#818CF8',
      text: '#ffffff',
      sub: 'rgba(255,255,255,0.45)',
      glow: 'rgba(129,140,248,0.14)',
      orb1: '#818CF8',
      orb2: '#C084FC',
    },
  },
];

const reviews = [
  {
    stars: 5,
    text: '"Best EdTech UI I\'ve used. The live editor and instructor dashboard are next-level."',
    author: 'Rohit Sharma',
    role: 'Web Developer, Bangalore',
    initials: 'RS',
    color: '#FFD60A',
    project: 'StudyNotion',
  },
  {
    stars: 5,
    text: '"ReelMind\'s AI taste profile is scarily accurate. Five films recommended, five loved."',
    author: 'Priya Kapoor',
    role: 'Film Enthusiast, Mumbai',
    initials: 'PK',
    color: '#EAB308',
    project: 'ReelMind AI',
  },
  {
    stars: 5,
    text: '"Got 3 job offers the week I launched this portfolio. The design alone opens doors."',
    author: 'Vishal Kumar',
    role: 'Full-Stack Developer, Pune',
    initials: 'VK',
    color: '#818CF8',
    project: 'Dev Portfolio',
  },
];

export default function Portfolio() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto relative">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#0071E3]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#9B5DE5]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div ref={ref} className="section-reveal flex flex-col items-center text-center mb-24 relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071E3]/20 to-[#00C6FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C6FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C6FF]"></span>
            </span>
            <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Featured Work</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.05] relative">
          Our Work
          <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-0 ml-0 md:ml-4">
            <span className="text-transparent bg-clip-text relative z-10" style={{ backgroundImage: 'linear-gradient(135deg, #00C6FF 0%, #1db954 100%)' }}>
              Speaks.
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00C6FF] to-[#1db954] opacity-20 blur-2xl -z-10 rounded-full" />
          </span>
        </h2>
        <p className="text-[#86868B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Real projects, live on the internet. Built with precision, designed for scale.
        </p>
      </div>

      {/* Project cards — full-width stacked */}
      <div className="flex flex-col gap-8 relative z-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Reviews */}
      <ReviewsSection />
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), index * 100);
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const lines = project.headline.split('\n');

  return (
    <div
      ref={ref}
      className="section-reveal group relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 block"
      style={{
        background: project.colors.bg,
        border: '1px solid',
        borderColor: isHovered ? `${project.colors.accent}40` : 'rgba(255,255,255,0.06)',
        height: '460px',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 30px 80px rgba(0,0,0,0.6), 0 0 80px ${project.colors.glow}` : '0 10px 30px rgba(0,0,0,0.3)',
      }}
      onClick={() => window.open(project.url, '_blank')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Hover Glow behind card bounds */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${project.colors.accent}15 0%, transparent 60%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Ambient orbs — large, blurred, subtle */}
      <div
        className="absolute pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.colors.orb1}22 0%, transparent 65%)`,
          top: '-150px',
          right: '-100px',
          filter: 'blur(70px)',
          transform: isHovered ? 'scale(1.1) translate(-20px, 20px)' : 'scale(1) translate(0, 0)',
        }}
      />
      <div
        className="absolute pointer-events-none transition-transform duration-1000 ease-out delay-75"
        style={{
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.colors.orb2}18 0%, transparent 65%)`,
          bottom: '-100px',
          left: '5%',
          filter: 'blur(60px)',
          transform: isHovered ? 'scale(1.2) translate(20px, -20px)' : 'scale(1) translate(0, 0)',
        }}
      />

      {/* Grid lines overlay — subtle Apple-like depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: isHovered ? '0.06' : '0.03',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-16">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span
              className="text-sm font-bold tracking-widest uppercase transition-colors duration-500"
              style={{ color: isHovered ? '#fff' : project.colors.accent }}
            >
              {project.label}
            </span>
          </div>
          {/* Template badge */}
          <span
            className="text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-500"
            style={{
              background: isHovered ? `${project.colors.accent}20` : `${project.colors.accent}12`,
              color: project.colors.accent,
              border: `1px solid ${project.colors.accent}30`,
              boxShadow: isHovered ? `0 0 20px ${project.colors.accent}40` : 'none',
            }}
          >
            ⚡ Template
          </span>
        </div>

        {/* Center — big headline */}
        <div className="transform transition-transform duration-500 group-hover:translate-x-2">
          <h3
            className="font-black tracking-tight leading-[1.05] mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: project.colors.text,
            }}
          >
            {lines.map((line, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="relative inline-block">
                    <span className="relative z-10 transition-colors duration-500" style={{ color: isHovered ? '#fff' : project.colors.accent }}>{line}</span>
                    <span className="absolute inset-0 blur-lg z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ color: project.colors.accent }}>{line}</span>
                  </span>
                ) : (
                  line
                )}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h3>

          {/* Visit link */}
          <div className="inline-flex items-center gap-3 font-bold text-base transition-all duration-500 group/link" style={{ color: project.colors.accent }}>
            <span className="border-b-2 border-transparent group-hover/link:border-current transition-all duration-300 pb-0.5">
              Launch {project.name}
            </span>
            <div className="bg-white/5 p-2 rounded-full backdrop-blur-sm group-hover/link:bg-current transition-colors duration-300">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-black"
              />
            </div>
          </div>
        </div>

        {/* Bottom row — project name small */}
        <div className="flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity duration-500">
          <span className="font-semibold text-sm" style={{ color: project.colors.sub }}>
            {project.name}
          </span>
        </div>
      </div>

      {/* Premium Glass Reflection on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${project.colors.orb1} 40%, ${project.colors.orb2} 60%, transparent 100%)`,
          boxShadow: `0 -2px 10px ${project.colors.glow}`,
        }}
      />
    </div>
  );
}

function ReviewsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-reveal mt-32 relative z-10">
      {/* Divider */}
      <div className="flex items-center gap-6 mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-white/[0.1]" />
        <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-[#FBBF24] fill-[#FBBF24] drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-bold tracking-wide">5.0 <span className="text-white/40 font-medium">· Client Reviews</span></span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/[0.1] to-white/[0.1]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review, delay }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), delay * 1000);
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="section-reveal rounded-[2rem] p-8 transition-all duration-500 relative overflow-hidden group cursor-default"
      style={{
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: isHovered ? `${review.color}30` : 'rgba(255,255,255,0.06)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)` : 'inset 0 1px 0 rgba(255,255,255,0.02)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div 
        className="absolute -inset-0.5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none z-0"
        style={{ background: `radial-gradient(circle at center, ${review.color}15 0%, transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Stars + project label on one row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-1">
            {[...Array(review.stars)].map((_, i) => (
              <Star key={i} size={14} className="text-[#FBBF24] fill-[#FBBF24] drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
            ))}
          </div>
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-all duration-500"
            style={{
              background: isHovered ? `${review.color}20` : `${review.color}12`,
              color: review.color,
              border: `1px solid ${review.color}30`,
              boxShadow: isHovered ? `0 0 15px ${review.color}30` : 'none',
            }}
          >
            {review.project}
          </span>
        </div>

        <p className="text-white/80 text-[16px] leading-relaxed mb-8 font-medium italic transition-colors duration-500 group-hover:text-white">
          {review.text}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <div className="relative">
             <div 
                className="absolute inset-0 blur-md rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500"
                style={{ background: review.color, transform: isHovered ? 'scale(1.4)' : 'scale(1)' }}
              />
            <div
              className="relative w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${review.color}, ${review.color}88)`,
                border: `2px solid ${review.color}50`,
                color: '#fff',
              }}
            >
              {review.initials}
            </div>
          </div>
          <div>
            <div className="text-white text-[15px] font-bold tracking-tight">{review.author}</div>
            <div className="text-white/50 text-[12px] font-medium mt-0.5 transition-colors duration-500 group-hover:text-white/70">{review.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
