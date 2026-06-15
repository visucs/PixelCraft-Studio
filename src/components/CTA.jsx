import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA({ onStartProject }) {
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
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a40] via-black to-[#001030]" />

      {/* Glow orbs */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0,113,227,0.4) 0%, rgba(0,198,255,0.1) 50%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div ref={ref} className="section-reveal">
          <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase mb-6">Ready to Begin?</p>

          <h2 className="section-title text-white mb-6 leading-tight">
            Ready to Build
            <br />
            Something Great?
          </h2>

          <p className="text-[#86868B] text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s create a website your customers will never forget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="btn-primary text-base px-8 py-4"
              onClick={onStartProject}
            >
              Start Your Project Today
              <ArrowRight size={16} />
            </button>
            <button
              className="text-[#86868B] text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing →
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
            {[
              '🔒 Secure Process',
              '✓ Money-Back Guarantee',
              '⚡ 7-Day Design',
              '🌍 Remote-Friendly',
            ].map((badge, i) => (
              <div key={i} className="text-[#86868B] text-sm font-medium">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
