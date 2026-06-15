import { useEffect, useRef } from 'react';
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
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div ref={ref} className="section-reveal text-center mb-20">
        <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase mb-4">Featured Work</p>
        <h2 className="section-title text-white mb-5">
          Our Work
          <br />
          <span className="text-[#86868B]">Speaks.</span>
        </h2>
        <p className="text-[#86868B] text-lg max-w-md mx-auto">
          Real projects, live on the internet.
        </p>
      </div>

      {/* Project cards — full-width stacked */}
      <div className="flex flex-col gap-5">
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
      className="section-reveal group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: project.colors.bg,
        border: '1px solid rgba(255,255,255,0.06)',
        height: '420px',
      }}
      onClick={() => window.open(project.url, '_blank')}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.colors.accent}25`;
        e.currentTarget.style.boxShadow = `0 30px 80px rgba(0,0,0,0.6), 0 0 80px ${project.colors.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Ambient orbs — large, blurred, subtle */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.colors.orb1}22 0%, transparent 65%)`,
          top: '-120px',
          right: '-80px',
          filter: 'blur(60px)',
          transition: 'opacity 0.6s',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.colors.orb2}18 0%, transparent 65%)`,
          bottom: '-80px',
          left: '10%',
          filter: 'blur(50px)',
        }}
      />

      {/* Grid lines overlay — subtle Apple-like depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-14">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: project.colors.accent }}
          >
            {project.label}
          </span>
          {/* Template badge */}
          <span
            className="text-[10px] font-semibold px-3 py-1 rounded-full"
            style={{
              background: `${project.colors.accent}12`,
              color: project.colors.accent,
              border: `1px solid ${project.colors.accent}25`,
            }}
          >
            ⚡ Template
          </span>
        </div>

        {/* Center — big headline */}
        <div>
          <h3
            className="font-black tracking-tight leading-[1.1] mb-6"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              color: project.colors.text,
            }}
          >
            {lines.map((line, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span style={{ color: project.colors.accent }}>{line}</span>
                ) : (
                  line
                )}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h3>

          {/* Visit link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group/link"
            style={{ color: project.colors.accent }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="border-b border-transparent group-hover/link:border-current transition-all duration-200">
              Visit {project.name}
            </span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Bottom row — project name small */}
        <div className="flex items-center justify-between">
          <span style={{ color: project.colors.sub, fontSize: '12px', fontWeight: 500 }}>
            {project.name}
          </span>
          {/* Animated ring on hover */}
          <div
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              borderColor: `${project.colors.accent}35`,
              background: `${project.colors.accent}08`,
            }}
          >
            <ArrowUpRight size={14} style={{ color: project.colors.accent }} />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${project.colors.orb1} 40%, ${project.colors.orb2} 60%, transparent 100%)`,
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
    <div ref={ref} className="section-reveal mt-20">
      {/* Divider */}
      <div className="flex items-center gap-6 mb-12">
        <div className="flex-1 h-px bg-white/[0.06]" />
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-[#86868B] text-sm ml-1 font-medium">5.0 · Client reviews</span>
        </div>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review, delay }) {
  const ref = useRef(null);

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
      className="section-reveal rounded-2xl p-7 border transition-all duration-400"
      style={{
        background: 'rgba(255,255,255,0.02)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = `${review.color}25`;
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Stars + project label on one row */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-0.5">
          {[...Array(review.stars)].map((_, i) => (
            <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span
          className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{
            background: `${review.color}12`,
            color: review.color,
            border: `1px solid ${review.color}25`,
          }}
        >
          {review.project}
        </span>
      </div>

      <p className="text-white/65 text-[14px] leading-relaxed mb-6 italic">{review.text}</p>

      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
          style={{
            background: `${review.color}15`,
            border: `1.5px solid ${review.color}40`,
            color: review.color,
          }}
        >
          {review.initials}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{review.author}</div>
          <div className="text-[#86868B] text-[11px] mt-0.5">{review.role}</div>
        </div>
      </div>
    </div>
  );
}
