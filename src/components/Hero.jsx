import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Animated Glow Orbs */}
      <div
        className="glow-orb animate-float"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,113,227,0.35) 0%, rgba(0,198,255,0.15) 40%, transparent 70%)',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        className="glow-orb animate-float-slow"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(120,40,200,0.25) 0%, transparent 70%)',
          bottom: '100px',
          right: '-100px',
          animationDelay: '-3s',
        }}
      />
      <div
        className="glow-orb animate-float"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0,198,255,0.2) 0%, transparent 70%)',
          bottom: '150px',
          left: '-50px',
          animationDelay: '-1.5s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-[#86868B]"
        >
          <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse" />
          Premium Web Design Studio
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-headline mb-6"
        >
          We Build Websites
          <br />
          <span className="bg-gradient-to-r from-[#0071E3] to-[#00C6FF] bg-clip-text text-transparent">
            That Win.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[#86868B] text-lg sm:text-[22px] font-light max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2 sm:px-0"
        >
          Premium web design & development for brands that refuse to be ordinary.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base w-full sm:w-auto justify-center"
          >
            See Our Work
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-base w-full sm:w-auto justify-center"
          >
            Start a Project
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#86868B]"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black"
                  style={{
                    background: `hsl(${i * 60 + 200}, 70%, 45%)`,
                  }}
                />
              ))}
            </div>
            <span className="text-sm">150+ happy clients</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/10" />
          <div className="flex items-center gap-1 text-sm">
            <span className="text-yellow-400">★★★★★</span>
            <span>5.0 rating</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/10" />
          <div className="text-sm">7-day turnaround</div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
