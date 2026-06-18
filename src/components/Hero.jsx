import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero({ onStartProject }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-br from-[#0071E3]/20 via-[#9B5DE5]/10 to-[#00C6FF]/10 blur-[120px] rounded-full opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[500px] bg-[#1db954]/10 blur-[100px] rounded-full opacity-40" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wIDM5LjVoNDBNMC41IDB2NDBNMzkuNSAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)] opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071E3]/20 to-[#00C6FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C6FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C6FF]"></span>
            </span>
            <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Premium Web Design Studio</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-[1.05] mb-8"
        >
          We Build Websites <br className="hidden md:block" />
          <span
            className="bg-clip-text text-transparent relative inline-block mt-2 md:mt-0"
            style={{ backgroundImage: 'linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)' }}
          >
            That Win.
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0071E3] to-[#00C6FF] opacity-20 blur-2xl -z-10 rounded-full" />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[#86868B] text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Premium web design & development for brands that refuse to be ordinary.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0071E3] to-[#00C6FF] transition-all duration-300" />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#0071E3] to-[#00C6FF]" />
            <span className="relative text-white flex items-center gap-2 font-semibold tracking-wide">
              See Our Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button
            onClick={() => onStartProject ? onStartProject() : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-white/80 group-hover:text-white transition-colors tracking-wide">Start a Project</span>
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-[#86868B]"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black"
                  style={{
                    background: `linear-gradient(135deg, hsl(${i * 60 + 200}, 70%, 50%), hsl(${i * 60 + 220}, 70%, 40%))`,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                  }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-white/80">150+ happy clients</span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-sm font-medium text-white/80">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span>5.0 rating</span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-white/10" />
          <div className="text-sm font-medium text-white/80">7-day turnaround</div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

