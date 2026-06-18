import { useState } from 'react';

// Premium 21st.dev style SVG icons
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.048 6.411 1.73 1.35 3.92 2.165 6.298 2.165 1.42 0 2.77-.29 4.006-.826zm-11.62-2.073c.232-.38 3.105-5.235 8.339-6.935.eviction-.09-.18-.012-.36.018-5.21.18-9.88.15-10.35.15-.062.006-.126.006-.188.006-.033.855.027 1.695.168 2.508.366 2.028 1.309 3.87 2.03 5.253zM2.43 9.768c.44.013 5.13.056 10.004-.15-1.27-2.256-2.638-4.15-2.852-4.42-2.934 1.385-5.02 3.913-5.152 4.57zm8.262-5.63c.22.28 1.64 2.18 2.89 4.5 2.756-.032 5.495-.677 7.5-1.813-.97-2.51-3.15-4.435-5.82-5.13-1.59.484-3.16 1.253-4.57 2.444zm5.34-1.39c2.35.76 4.28 2.52 5.21 4.79-1.92 1.08-4.47 1.7-7.02 1.73.04-.09.076-.178.116-.268.52-1.19 1.14-2.35 1.695-3.25v-.002z" />
  </svg>
);

const socials = [
  { icon: TwitterIcon,   href: 'https://twitter.com/pixelcraftstudio',   label: 'Twitter / X', hoverColor: '#fff',     glowColor: 'rgba(255,255,255,0.15)' },
  { icon: InstagramIcon, href: 'https://instagram.com/pixelcraftstudio', label: 'Instagram',   hoverColor: '#fd1d1d',  glowColor: 'rgba(253,29,29,0.25)'  },
  { icon: LinkedinIcon,  href: 'https://linkedin.com/company/pixelcraftstudio', label: 'LinkedIn', hoverColor: '#0A66C2', glowColor: 'rgba(10,102,194,0.28)'  },
  { icon: GitHubIcon,    href: 'https://github.com/pixelcraftstudio',    label: 'GitHub',      hoverColor: '#e6edf3',  glowColor: 'rgba(230,237,243,0.15)' },
  { icon: DribbbleIcon,  href: 'https://dribbble.com/pixelcraftstudio',  label: 'Dribbble',    hoverColor: '#ea4c89',  glowColor: 'rgba(234,76,137,0.25)'  },
];

export default function Footer({ onLegal, onContact }) {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleLinkClick = (e, target, action) => {
    e.preventDefault();
    if (action) action();
  };

  return (
    <footer className="relative overflow-hidden border-t" style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#030303' }}>
      
      {/* Ambient glow top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,113,227,0.08) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          
          {/* Brand Column */}
          <div className="flex flex-col gap-5 pr-4">
            <div 
              className="flex items-center gap-3 cursor-pointer select-none"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0071E3, #00C6FF)', boxShadow: '0 4px 14px rgba(0,113,227,0.35)' }}>
                <span className="text-white font-black text-lg">P</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight tracking-tight">PixelCraft Studio</p>
                <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mt-0.5">Premium Web Design</p>
              </div>
            </div>
            
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mt-2">
              We craft stunning, high-performance websites that convert visitors into clients. Built with precision for ambitious brands.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 mt-2">
              {socials.map(({ icon: Icon, href, label, hoverColor, glowColor }) => {
                const isHovered = hoveredSocial === label;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onMouseEnter={() => setHoveredSocial(label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{
                      color: isHovered ? hoverColor : 'rgba(255,255,255,0.4)',
                      background: isHovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                      borderColor: isHovered ? `${hoverColor}40` : 'rgba(255,255,255,0.06)',
                      boxShadow: isHovered ? `0 4px 16px ${glowColor}` : 'none',
                      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div>
            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Services</p>
            <ul className="flex flex-col gap-3.5">
              {['Landing Pages', 'E-Commerce', 'Web Applications', 'SaaS Platforms', 'UI/UX Redesign'].map(s => (
                <li key={s}>
                  <span className="text-white/50 text-sm hover:text-white transition-colors duration-200 cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div>
            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Company</p>
            <ul className="flex flex-col gap-3.5">
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Our Work</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Pricing</a></li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, null, onContact)} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Careers</a></li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div>
            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Legal</p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, 'privacy', () => onLegal?.('privacy'))} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, 'terms', () => onLegal?.('terms'))} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
            <p className="text-white/30 text-xs font-medium">
              © {new Date().getFullYear()} PixelCraft Studio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 text-white/20 text-xs font-medium">
            <span>Crafted with</span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="#0071E3" className="drop-shadow-[0_0_4px_rgba(0,113,227,0.5)]">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>by the PixelCraft team</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
