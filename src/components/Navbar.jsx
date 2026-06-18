import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Sun, Moon } from 'lucide-react';

const links = ['Work', 'Services', 'Process', 'Pricing', 'Contact'];

export default function Navbar({ onStartProject, onContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update the document class for theme handling
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLink = (link) => {
    if (link === 'Contact') { onContact?.(); setMobileOpen(false); return; }
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const ThemeToggle = () => (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden group transition-all duration-300 border border-white/[0.05] hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.05] no-invert"
      aria-label="Toggle Theme"
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00C6FF]/10 to-[#9B5DE5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait" initial={false}>
          {isDarkMode ? (
            <motion.div
              key="moon"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 10 }}
              className="absolute"
            >
              <Moon size={18} className="text-[#00C6FF]" fill="currentColor" fillOpacity={0.2} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 10 }}
              className="absolute"
            >
              <Sun size={18} className="text-[#FFA700]" fill="currentColor" fillOpacity={0.2} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div 
          className={`w-full max-w-7xl mx-4 transition-all duration-500 rounded-full border ${
            scrolled
              ? 'bg-white/[0.02] backdrop-blur-2xl border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.5)] px-6 py-3'
              : 'bg-transparent border-transparent px-4 py-4'
          }`}
          style={{
            boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' : 'none',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/20 to-[#9B5DE5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-white font-black text-lg relative z-10" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>P</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight hidden sm:block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-white/60 transition-all duration-300">
                PixelCraft
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 relative">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLink(link)}
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 z-10"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${hoveredLink === link ? 'text-white' : 'text-[#86868B]'}`}>
                    {link}
                  </span>
                  
                  {/* Hover Pill Background */}
                  {hoveredLink === link && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-white/[0.06] rounded-full border border-white/[0.05]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA & Theme */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              
              <button
                onClick={onStartProject}
                className="group relative px-6 py-2.5 rounded-full font-bold text-sm overflow-hidden transition-all duration-500 text-white"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 0 20px rgba(0,198,255,0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,198,255,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,198,255,0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                {/* Internal hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/80 to-[#9B5DE5]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <span className="flex items-center gap-2">
                  Start Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle & Theme */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button
                className="text-white p-2 rounded-full border border-white/[0.05] hover:bg-white/[0.05] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl pt-28 px-6 flex flex-col"
          >
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#00C6FF]/10 to-transparent pointer-events-none" />
            
            <div className="flex flex-col gap-2 relative z-10">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLink(link)}
                  className="group flex items-center justify-between text-white text-3xl font-black tracking-tight text-left py-4 border-b border-white/[0.05] hover:pl-4 transition-all duration-300"
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] transition-all duration-300">
                    {link}
                  </span>
                  <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 text-[#00C6FF] transition-opacity duration-300" />
                </button>
              ))}
            </div>

            <div className="mt-12 relative z-10">
              <button
                onClick={() => { onStartProject(); setMobileOpen(false); }}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] text-white font-bold text-lg shadow-[0_10px_30px_rgba(0,198,255,0.4)] flex justify-center items-center gap-3"
              >
                <Sparkles size={20} />
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
