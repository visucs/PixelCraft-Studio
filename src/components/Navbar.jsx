import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const links = ['Work', 'Services', 'Process', 'Pricing', 'Contact'];

export default function Navbar({ onStartProject, onContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLink = (link) => {
    if (link === 'Contact') { onContact?.(); setMobileOpen(false); return; }
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl'
            : 'bg-black/20 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0071E3] to-[#00C6FF] flex items-center justify-center">
              <span className="text-white font-black text-sm">P</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">PixelCraft</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleLink(link)}
                className="text-[#86868B] hover:text-white text-sm font-medium transition-colors duration-200 tracking-tight"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onStartProject}
              className="btn-blue text-sm px-5 py-2.5"
            >
              Start a Project <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-black/95 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLink(link)}
                  className="text-white text-xl font-medium text-left hover:text-[#0071E3] transition-colors"
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => { onStartProject(); setMobileOpen(false); }}
                className="btn-blue w-full justify-center mt-2"
              >
                Start a Project <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
