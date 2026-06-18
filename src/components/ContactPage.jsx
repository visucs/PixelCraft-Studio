import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowLeft, Phone, Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { Agentation } from 'agentation';

// Instagram â€” official filled brand icon
const InstagramIcon = ({ size = 13, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
  </svg>
);

// LinkedIn â€” official filled brand icon
const LinkedInIcon = ({ size = 13, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

// WhatsApp icon
const WhatsAppIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);


const infoCards = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 92949 79278',
    sub: 'Call for immediate assistance',
    href: 'tel:+919294979278',
    accent: '#0071E3',
    glow: 'rgba(0,113,227,0.22)',
    iconBg: 'rgba(0,113,227,0.13)',
    gradient: 'linear-gradient(135deg, rgba(0,113,227,0.08) 0%, transparent 60%)',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@pixelcraftstudio.com',
    sub: 'Send us your requirements',
    href: 'mailto:hello@pixelcraftstudio.com',
    accent: '#00C6FF',
    glow: 'rgba(0,198,255,0.2)',
    iconBg: 'rgba(0,198,255,0.10)',
    gradient: 'linear-gradient(135deg, rgba(0,198,255,0.07) 0%, transparent 60%)',
  },
  {
    icon: InstagramIcon,
    title: 'Instagram',
    value: '@pixelcraftstudio',
    sub: 'Follow for project updates',
    href: 'https://instagram.com/pixelcraftstudio',
    accent: '#fd1d1d',
    glow: 'rgba(253,29,29,0.2)',
    iconBg: 'rgba(253,29,29,0.10)',
    gradient: 'linear-gradient(135deg, rgba(131,58,180,0.08) 0%, rgba(253,29,29,0.06) 50%, transparent 70%)',
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn',
    value: 'PixelCraft Studio',
    sub: 'Connect with our team',
    href: 'https://linkedin.com/company/pixelcraftstudio',
    accent: '#0A66C2',
    glow: 'rgba(10,102,194,0.22)',
    iconBg: 'rgba(10,102,194,0.12)',
    gradient: 'linear-gradient(135deg, rgba(10,102,194,0.08) 0%, transparent 60%)',
  },
];

const services = [
  'Landing Page',
  'Business Website',
  'E-Commerce Store',
  'Portfolio Site',
  'Web App / SaaS',
  'Redesign / Revamp',
];

const emptyForm = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' };

export default function ContactPage({ onBack }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.match(/^\+?[0-9\s\-]{8,}$/)) e.phone = 'Valid phone required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Min 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          phone: form.phone,
          service: form.service || 'Not specified',
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      setSubmitted(true);
      setForm(emptyForm);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert('Failed to send email. Please try WhatsApp instead.');
    }
  };

  const sendWhatsApp = () => {
    if (!form.firstName || !form.message) {
      alert('Pehle naam aur message bharo!');
      return;
    }
    const phone = '919294979278';
    const text = encodeURIComponent(
      `Naam: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const whatsappMsg = encodeURIComponent(
    `Hi PixelCraft Studio! I'd like to discuss a project.\n\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\n\n${form.message}`
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <header
        className="sticky top-0 z-50 border-b border-white/[0.06]"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0071E3] to-[#00C6FF] flex items-center justify-center">
              <span className="text-white font-black text-sm">P</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">PixelCraft</span>
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-[#86868B] hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </button>
        </div>
      </header>

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#0071E3]/20 to-[#00C6FF]/10 blur-[100px] rounded-full opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[400px] bg-[#1db954]/10 blur-[80px] rounded-full opacity-30" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wIDM5LjVoNDBNMC41IDB2NDBNMzkuNSAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071E3]/20 to-[#00C6FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <div className="relative flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C6FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C6FF]"></span>
              </span>
              <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Accepting New Projects</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black tracking-tighter leading-[1.05] mb-8">
            Let's create <br className="hidden md:block" />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.5) 100%)' }}
            >
              something
            </span>{' '}
            <span
              className="bg-clip-text text-transparent relative inline-block"
              style={{ backgroundImage: 'linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)' }}
            >
              iconic.
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0071E3] to-[#00C6FF] opacity-20 blur-2xl -z-10 rounded-full" />
            </span>
          </h1>
          
          <p className="text-[#86868B] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Elevate your brand with world-class design and flawless engineering. Start a conversation with us today to explore the possibilities.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0071E3] to-[#00C6FF] transition-all duration-300" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#0071E3] to-[#00C6FF]" />
              <span className="relative text-white flex items-center gap-2 font-semibold tracking-wide">
                Start Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a
              href="mailto:hello@pixelcraftstudio.com"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Mail size={16} className="text-white/60 group-hover:text-white transition-colors" />
              <span className="text-white/80 group-hover:text-white transition-colors tracking-wide">hello@pixelcraftstudio.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* â”€â”€ INFO CARDS â”€â”€ */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Reach Us Via</span>
            <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {infoCards.map(({ icon: Icon, title, value, sub, href, accent, glow, iconBg, gradient }) => (
              <a
                key={title}
                href={href || undefined}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  textDecoration: 'none',
                  boxShadow: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 8px 32px ${glow}`;
                  e.currentTarget.style.borderColor = `${accent}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                {/* Top accent bar */}
                <span
                  className="block h-[3px] w-full transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)`, opacity: 0.7 }}
                />

                {/* Ambient gradient bg */}
                <span
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: gradient }}
                />

                <div className="relative flex flex-col p-5 flex-1">
                  {/* Icon + label row */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: iconBg, border: `1px solid ${accent}30` }}
                    >
                      <Icon size={17} style={{ color: accent }} />
                    </div>
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                    >
                      <ArrowRight size={13} style={{ color: accent }} />
                    </span>
                  </div>

                  {/* Label */}
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: `${accent}99` }}
                  >{title}</p>

                  {/* Value */}
                  <p className="text-white font-semibold text-sm leading-snug mb-1 break-all">{value}</p>

                  {/* Sub */}
                  <p className="text-white/35 text-[11px] leading-relaxed mt-auto pt-2">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ FORM + SIDEBAR â”€â”€ */}
      <section id="contact-form" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

          {/* LEFT â€” Premium Form */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 0 1px rgba(0,113,227,0.06), 0 24px 48px rgba(0,0,0,0.4)',
            }}
          >
            {/* Top blue glow accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, transparent 0%, #0071E3 40%, #00C6FF 60%, transparent 100%)' }}
            />
            {/* Ambient top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,113,227,0.09) 0%, transparent 70%)' }}
            />

            <div className="relative p-8">
              {submitted ? (
                /* â”€â”€ SUCCESS STATE â”€â”€ */
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,113,227,0.15), rgba(0,198,255,0.1))',
                      border: '1.5px solid rgba(0,198,255,0.4)',
                      boxShadow: '0 0 32px rgba(0,113,227,0.25)',
                    }}
                  >
                    {/* Checkmark */}
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#00C6FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-[11px] font-bold uppercase tracking-widest"
                    style={{ background: 'rgba(0,198,255,0.08)', border: '1px solid rgba(0,198,255,0.2)', color: '#00C6FF' }}
                  >
                    âœ“ Message Delivered
                  </div>
                  <h3 className="text-white text-2xl font-black mb-3 tracking-tight">You're all set! ðŸŽ‰</h3>
                  <p className="text-white/50 text-sm max-w-xs leading-relaxed mb-8">
                    Thanks <span className="text-white font-semibold">{form.firstName}</span>! We've received your message
                    and will respond within <span className="text-[#00C6FF] font-semibold">24 hours</span>.
                  </p>
                  <a
                    href={`https://wa.me/919294979278?text=${whatsappMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-0 rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #1db954 0%, #25D366 50%, #128c3e 100%)',
                      boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.48)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.3)'}
                  >
                    <span className="flex items-center justify-center w-12 h-12 flex-shrink-0" style={{ background: 'rgba(0,0,0,0.18)' }}>
                      <WhatsAppIcon size={17} />
                    </span>
                    <span className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.15)' }} />
                    <span className="flex flex-col items-start px-4 flex-1 text-left">
                      <span className="text-white font-bold text-sm">Also chat on WhatsApp</span>
                      <span className="text-white/70 text-[11px]">Instant reply guaranteed</span>
                    </span>
                    <span className="pr-4"><ArrowRight size={15} className="text-white/80" /></span>
                  </a>
                </div>
              ) : (
                <>
                  {/* Form header */}
                  <div className="flex items-start justify-between mb-7">
                    <div>
                      <h3 className="text-white text-xl font-black tracking-tight mb-1">Send us a Message</h3>
                      <p className="text-white/35 text-sm">Fill in details below â€” we'll reply within 24 hours</p>
                    </div>
                    {/* Step pill */}
                    <div
                      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold"
                      style={{ background: 'rgba(0,113,227,0.1)', border: '1px solid rgba(0,113,227,0.2)', color: '#0071E3' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] animate-pulse" />
                      Ready to send
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-0">

                    {/* â”€â”€ SECTION: Personal Info â”€â”€ */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#0071E3,#00C6FF)' }}>1</span>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Your Details</span>
                      <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    </div>

                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <PremiumField label="First Name" placeholder="Vishal" value={form.firstName}
                        onChange={v => set('firstName', v)} error={errors.firstName}
                        icon={<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                      />
                      <PremiumField label="Last Name" placeholder="Kumar" value={form.lastName}
                        onChange={v => set('lastName', v)} error={errors.lastName}
                        icon={<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                      />
                    </div>

                    {/* Email + Phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <PremiumField label="Email Address" placeholder="you@example.com" value={form.email}
                        onChange={v => set('email', v)} error={errors.email} type="email"
                        icon={<Mail size={14} />}
                      />
                      <PremiumField label="Phone Number" placeholder="+91 XXXXX XXXXX" value={form.phone}
                        onChange={v => set('phone', v)} error={errors.phone} type="tel"
                        icon={<Phone size={14} />}
                      />
                    </div>

                    {/* â”€â”€ SECTION: Project â”€â”€ */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#0071E3,#00C6FF)' }}>2</span>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Project Info</span>
                      <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    </div>

                    {/* Service chips */}
                    <div className="mb-3">
                      <p className="text-white/40 text-xs font-semibold mb-3 tracking-wide">Service Required <span className="text-white/20">(optional)</span></p>
                      <div className="flex flex-wrap gap-2">
                        {services.map(s => (
                          <button
                            key={s} type="button"
                            onClick={() => set('service', form.service === s ? '' : s)}
                            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                            style={{
                              background: form.service === s ? 'rgba(0,113,227,0.2)' : 'rgba(255,255,255,0.04)',
                              border: form.service === s ? '1px solid rgba(0,113,227,0.5)' : '1px solid rgba(255,255,255,0.08)',
                              color: form.service === s ? '#0071E3' : 'rgba(255,255,255,0.45)',
                              boxShadow: form.service === s ? '0 0 12px rgba(0,113,227,0.2)' : 'none',
                            }}
                          >{s}</button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <p className="text-white/40 text-xs font-semibold mb-2 tracking-wide">Message <span className="text-red-400">*</span></p>
                      <div
                        className="relative rounded-xl overflow-hidden"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: errors.message ? '1px solid rgba(239,68,68,0.4)' : '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={e => set('message', e.target.value)}
                          placeholder="Tell us about your project â€” goals, timeline, budget, or any questionsâ€¦"
                          className="w-full px-4 pt-3.5 pb-3 text-sm text-white placeholder-white/20 outline-none resize-none"
                          style={{ background: 'transparent' }}
                        />
                        <div className="absolute bottom-2.5 right-3 text-white/20 text-[10px] font-medium">
                          {form.message.length}/500
                        </div>
                      </div>
                      {errors.message && <p className="text-red-400 text-[11px] mt-1.5 font-medium">â†‘ {errors.message}</p>}
                    </div>

                    {/* â”€â”€ SUBMIT BUTTONS â”€â”€ */}
                    <div className="flex flex-col gap-3">
                      {/* WhatsApp Button */}
                      <button
                        type="button"
                        onClick={sendWhatsApp}
                        className="group relative w-full flex items-center gap-0 rounded-2xl overflow-hidden transition-all duration-300 active:scale-[0.98]"
                        style={{
                          background: 'linear-gradient(135deg, #1db954 0%, #25D366 50%, #128c3e 100%)',
                          boxShadow: '0 4px 24px rgba(37,211,102,0.28)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.42)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,211,102,0.28)'}
                      >
                        <span className="flex items-center justify-center w-14 h-14 flex-shrink-0" style={{ background: 'rgba(0,0,0,0.18)' }}>
                          <WhatsAppIcon size={20} />
                        </span>
                        <span className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.15)' }} />
                        <span className="flex flex-col items-start px-4 flex-1 text-left">
                          <span className="text-white font-bold text-sm leading-tight">Chat on WhatsApp</span>
                          <span className="text-white/70 text-[11px] mt-0.5">Instant reply guaranteed</span>
                        </span>
                        <span className="pr-4 transition-transform duration-300 group-hover:translate-x-0.5">
                          <ArrowRight size={16} className="text-white/80" />
                        </span>
                      </button>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                        <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">or</span>
                        <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                      </div>

                      {/* Email Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full flex items-center gap-0 rounded-2xl overflow-hidden transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: 'linear-gradient(135deg, #0055b3 0%, #0071E3 50%, #00a3ff 100%)',
                          boxShadow: '0 4px 24px rgba(0,113,227,0.30)',
                        }}
                        onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,113,227,0.48)'; }}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,113,227,0.30)'}
                      >
                        <span className="flex items-center justify-center w-14 h-14 flex-shrink-0" style={{ background: 'rgba(0,0,0,0.18)' }}>
                          {loading ? (
                            <span className="inline-block w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          ) : (
                            <Mail size={19} className="text-white" />
                          )}
                        </span>
                        <span className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.15)' }} />
                        <span className="flex flex-col items-start px-4 flex-1 text-left">
                          <span className="text-white font-bold text-sm leading-tight">
                            {loading ? 'Sending your messageâ€¦' : 'Send via Email'}
                          </span>
                          <span className="text-white/70 text-[11px] mt-0.5">
                            {loading ? 'Please wait' : 'We reply within 24 hours'}
                          </span>
                        </span>
                        {!loading && (
                          <span className="pr-4 transition-transform duration-300 group-hover:translate-x-0.5">
                            <ArrowRight size={16} className="text-white/80" />
                          </span>
                        )}
                      </button>
                    </div>

                  </form>
                </>
              )}
            </div>
          </div>

          {/* RIGHT â€” Sidebar */}
          <div className="flex flex-col gap-5">

            {/* â”€â”€ SIDEBAR: Unified Premium Card â”€â”€ */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col gap-0"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 0 0 1px rgba(0,113,227,0.04), 0 24px 48px rgba(0,0,0,0.35)',
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,113,227,0.6), rgba(0,198,255,0.4), transparent)' }} />

              {/* Decorative blobs */}
              <div className="absolute top-8 right-4 w-28 h-28 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,113,227,0.07) 0%, transparent 70%)' }} />
              <div className="absolute bottom-40 left-2 w-20 h-20 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.05) 0%, transparent 70%)' }} />

              <div className="relative p-5 flex flex-col gap-5">

                {/* â”€â”€ Availability Badge â”€â”€ */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Responding Now</span>
                  </div>
                  <span className="text-white/20 text-[10px] font-medium">Avg. reply &lt; 1hr</span>
                </div>

                {/* â”€â”€ QUICK CONTACT â”€â”€ */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="text-white/25 text-[10px] font-bold uppercase tracking-widest">Quick Contact</span>
                    <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                  </div>

                  <div className="flex flex-col gap-2">

                    {/* Phone */}
                    <a
                      href="tel:+919294979278"
                      className="group relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-250"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(0,113,227,0.07)';
                        e.currentTarget.style.borderColor = 'rgba(0,113,227,0.25)';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(0,113,227,0.12)', border: '1px solid rgba(0,113,227,0.2)' }}>
                        <Phone size={14} className="text-[#0071E3]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/35 text-[10px] font-bold uppercase tracking-widest mb-0.5">Call us directly</p>
                        <p className="text-white text-sm font-semibold">+91 92949 79278</p>
                      </div>
                      <ArrowRight size={13} className="text-[#0071E3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:hello@pixelcraftstudio.com"
                      className="group relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-250"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(0,198,255,0.05)';
                        e.currentTarget.style.borderColor = 'rgba(0,198,255,0.2)';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(0,198,255,0.10)', border: '1px solid rgba(0,198,255,0.2)' }}>
                        <Mail size={14} className="text-[#00C6FF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/35 text-[10px] font-bold uppercase tracking-widest mb-0.5">Drop us a mail</p>
                        <p className="text-white text-xs font-semibold truncate">hello@pixelcraftstudio.com</p>
                      </div>
                      <ArrowRight size={13} className="text-[#00C6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                    </a>

                    {/* WhatsApp â€” highlighted CTA */}
                    <a
                      href="https://wa.me/919294979278"
                      target="_blank" rel="noopener noreferrer"
                      className="group relative flex items-center gap-3.5 px-4 py-4 rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.99]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(18,140,62,0.1) 100%)',
                        border: '1px solid rgba(37,211,102,0.25)',
                        boxShadow: '0 4px 16px rgba(37,211,102,0.1)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.22) 0%, rgba(18,140,62,0.16) 100%)';
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.22)';
                        e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(18,140,62,0.1) 100%)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.1)';
                        e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)';
                      }}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}>
                        <WhatsAppIcon size={15} />
                      </div>
                      <div className="flex-1">
                        <p className="text-green-400/70 text-[10px] font-bold uppercase tracking-widest mb-0.5">Fastest response</p>
                        <p className="text-white text-sm font-bold">Chat on WhatsApp</p>
                      </div>
                      <div className="flex-shrink-0 flex items-center gap-1.5">
                        <span className="text-green-400/60 text-[10px] font-semibold hidden group-hover:inline">Open â†’</span>
                        <ArrowRight size={14} className="text-green-400 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </a>

                  </div>
                </div>

                {/* Divider */}
                <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

                {/* â”€â”€ FOLLOW OUR WORK â”€â”€ */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="text-white/25 text-[10px] font-bold uppercase tracking-widest">Follow Our Work</span>
                    <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                  </div>

                  <div className="flex flex-col gap-2">

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/pixelcraftstudio"
                      target="_blank" rel="noopener noreferrer"
                      className="group relative flex items-center gap-3.5 px-4 py-4 rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.99]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(131,58,180,0.12) 0%, rgba(253,29,29,0.08) 60%, rgba(252,176,69,0.05) 100%)',
                        border: '1px solid rgba(253,29,29,0.15)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(131,58,180,0.2) 0%, rgba(253,29,29,0.14) 60%, rgba(252,176,69,0.08) 100%)';
                        e.currentTarget.style.borderColor = 'rgba(253,29,29,0.3)';
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(253,29,29,0.15)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(131,58,180,0.12) 0%, rgba(253,29,29,0.08) 60%, rgba(252,176,69,0.05) 100%)';
                        e.currentTarget.style.borderColor = 'rgba(253,29,29,0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Instagram gradient icon */}
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', boxShadow: '0 2px 8px rgba(253,29,29,0.3)' }}>
                        <InstagramIcon size={15} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Instagram</p>
                        <p className="text-white text-sm font-bold">@pixelcraftstudio</p>
                        <p className="text-white/25 text-[10px] mt-0.5">Behind-the-scenes content</p>
                      </div>
                      <ArrowRight size={13} className="text-red-400/60 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/company/pixelcraftstudio"
                      target="_blank" rel="noopener noreferrer"
                      className="group relative flex items-center gap-3.5 px-4 py-4 rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.99]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(10,102,194,0.12) 0%, rgba(26,133,227,0.06) 100%)',
                        border: '1px solid rgba(10,102,194,0.18)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(10,102,194,0.2) 0%, rgba(26,133,227,0.1) 100%)';
                        e.currentTarget.style.borderColor = 'rgba(10,102,194,0.35)';
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(10,102,194,0.18)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(10,102,194,0.12) 0%, rgba(26,133,227,0.06) 100%)';
                        e.currentTarget.style.borderColor = 'rgba(10,102,194,0.18)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: '#0A66C2', boxShadow: '0 2px 8px rgba(10,102,194,0.35)' }}>
                        <LinkedInIcon size={15} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">LinkedIn</p>
                        <p className="text-white text-sm font-bold">PixelCraft Studio</p>
                        <p className="text-white/25 text-[10px] mt-0.5">Case studies & team updates</p>
                      </div>
                      <ArrowRight size={13} className="text-blue-400/60 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </a>

                  </div>
                </div>

                {/* â”€â”€ Bottom trust row â”€â”€ */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    {['V','K','A','R'].map((l, i) => (
                      <div key={i} className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white border border-black/40"
                        style={{ background: `hsl(${i * 60 + 200}, 70%, 45%)`, marginLeft: i > 0 ? '-6px' : 0, zIndex: 4 - i, position: 'relative' }}>
                        {l}
                      </div>
                    ))}
                    <span className="text-white/30 text-[10px] ml-2 font-medium">+12 this month</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 12 12" width="10" height="10" fill="#F59E0B"><path d="M6 1l1.4 2.9 3.1.4-2.3 2.2.6 3.1L6 8.1 3.2 9.6l.6-3.1L1.5 4.3l3.1-.4z"/></svg>
                    ))}
                    <span className="text-white/30 text-[10px] ml-1">5.0</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ── BOTTOM CTA ── */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-28 text-center group"
               style={{ 
                 background: 'rgba(255,255,255,0.03)',
                 border: '1px solid rgba(255,255,255,0.08)',
                 boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)',
                 backdropFilter: 'blur(20px)'
               }}>
            
            {/* Animated hover border */}
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                 style={{ boxShadow: 'inset 0 0 0 2px rgba(0,113,227,0.4), inset 0 0 20px rgba(0,113,227,0.2)' }} />

            {/* Decorative background elements inside the card */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wIDM5LjVoNDBNMC41IDB2NDBNMzkuNSAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-80" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[400px] bg-gradient-to-b from-[#0071E3]/30 via-[#00C6FF]/15 to-transparent blur-[90px] group-hover:opacity-80 opacity-50 transition-opacity duration-700" />
              {/* Bottom glow */}
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[200px] bg-gradient-to-t from-[#9B5DE5]/30 to-transparent blur-[70px] group-hover:opacity-80 opacity-50 transition-opacity duration-700" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0071E3] to-[#00C6FF] flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(0,113,227,0.6)] transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Send size={40} className="text-white" />
              </div>

              <h2 className="text-white text-5xl md:text-[5rem] lg:text-[6rem] font-black tracking-tighter mb-8 leading-[1.05]">
                Ready to elevate <br className="hidden md:block" />
                your digital presence?
              </h2>
              
              <p className="text-[#86868B] text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
                Join the ambitious brands building with PixelCraft Studio. Let's create something extraordinary together.
              </p>
              
              <a
                href="https://wa.me/919294979278?text=Hi%20PixelCraft%20Studio!%20I'd%20like%20to%20start%20a%20project."
                target="_blank" rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <div className="absolute inset-0 rounded-full bg-white text-black opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover/btn:shadow-[0_0_50px_rgba(255,255,255,0.5)]" />
                <span className="relative text-black flex items-center gap-2 tracking-wide font-black">
                  Start Your Project Journey <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMIUM FOOTER ── */}
      <footer className="relative overflow-hidden border-t" style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.6)' }}>

        {/* Ambient glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,113,227,0.08) 0%, transparent 70%)' }} />

        {/* ── Main footer content ── */}
        <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-8">

          {/* Top row: Logo + Nav + Social */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 pb-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>

            {/* Brand column */}
            <div className="flex flex-col gap-4 max-w-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0071E3, #00C6FF)', boxShadow: '0 4px 14px rgba(0,113,227,0.35)' }}>
                  <span className="text-white font-black text-base">P</span>
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight tracking-tight">PixelCraft Studio</p>
                  <p className="text-white/25 text-[10px] font-medium tracking-wider uppercase">Premium Web Design</p>
                </div>
              </div>
              <p className="text-white/35 text-sm leading-relaxed">
                We craft stunning, high-performance websites that convert visitors into clients. Built for ambitious brands.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-2 mt-1">
                {[
                  {
                    href: 'https://twitter.com/pixelcraftstudio',
                    label: 'Twitter / X',
                    hoverColor: '#fff',
                    glow: 'rgba(255,255,255,0.15)',
                    icon: (
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://instagram.com/pixelcraftstudio',
                    label: 'Instagram',
                    hoverColor: '#fd1d1d',
                    glow: 'rgba(253,29,29,0.25)',
                    icon: (
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://linkedin.com/company/pixelcraftstudio',
                    label: 'LinkedIn',
                    hoverColor: '#0A66C2',
                    glow: 'rgba(10,102,194,0.28)',
                    icon: (
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://github.com/pixelcraftstudio',
                    label: 'GitHub',
                    hoverColor: '#e6edf3',
                    glow: 'rgba(230,237,243,0.15)',
                    icon: (
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://dribbble.com/pixelcraftstudio',
                    label: 'Dribbble',
                    hoverColor: '#ea4c89',
                    glow: 'rgba(234,76,137,0.25)',
                    icon: (
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.048 6.411 1.73 1.35 3.92 2.165 6.298 2.165 1.42 0 2.77-.29 4.006-.826zm-11.62-2.073c.232-.38 3.105-5.235 8.339-6.935.eviction-.09-.18-.012-.36.018-5.21.18-9.88.15-10.35.15-.062.006-.126.006-.188.006-.033.855.027 1.695.168 2.508.366 2.028 1.309 3.87 2.03 5.253zM2.43 9.768c.44.013 5.13.056 10.004-.15-1.27-2.256-2.638-4.15-2.852-4.42-2.934 1.385-5.02 3.913-5.152 4.57zm8.262-5.63c.22.28 1.64 2.18 2.89 4.5 2.756-.032 5.495-.677 7.5-1.813-.97-2.51-3.15-4.435-5.82-5.13-1.59.484-3.16 1.253-4.57 2.444zm5.34-1.39c2.35.76 4.28 2.52 5.21 4.79-1.92 1.08-4.47 1.7-7.02 1.73.04-.09.076-.178.116-.268.52-1.19 1.14-2.35 1.695-3.25v-.002z" />
                      </svg>
                    ),
                  },
                ].map(({ href, label, icon, hoverColor, glow }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-250"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = hoverColor;
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.borderColor = `${hoverColor}40`;
                      e.currentTarget.style.boxShadow = `0 4px 16px ${glow}`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services links */}
            <div>
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest mb-4">Services</p>
              <ul className="flex flex-col gap-2.5">
                {['Landing Page', 'E-Commerce', 'Portfolio', 'Web App / SaaS', 'Redesign'].map(s => (
                  <li key={s}>
                    <span className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200 cursor-default">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest mb-4">Company</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: 'About Us', href: '#' },
                  { label: 'Our Work', href: '#' },
                  { label: 'Pricing', href: '#' },
                  { label: 'Contact', href: '#' },
                  { label: 'Privacy Policy', href: '#' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-white/25 text-xs">
                © {new Date().getFullYear()} PixelCraft Studio. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-1 text-white/15 text-xs">
              <span>Crafted with</span>
              <svg viewBox="0 0 24 24" width="11" height="11" fill="#0071E3" className="mx-0.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>by the PixelCraft team</span>
            </div>
          </div>

        </div>
      </footer>
      {/* Agentation: AI visual feedback tool â€” only in dev */}
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide">{label}</label>
      {children}
      {error && <p className="text-red-400 text-[11px] mt-1 font-medium">{error}</p>}
    </div>
  );
}

const inputCls = (hasError) =>
  `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:ring-1 ${
    hasError
      ? 'ring-1 ring-red-500/50 bg-red-500/5 border border-red-500/30'
      : 'bg-white/[0.04] border border-white/[0.08] focus:ring-[#0071E3] focus:border-[#0071E3]/50'
  }`;

// Premium icon-prefixed input field
function PremiumField({ label, placeholder, value, onChange, error, type = 'text', icon }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <p className="text-white/40 text-xs font-semibold mb-2 tracking-wide">
        {label} <span className="text-red-400">*</span>
      </p>
      <div
        className="flex items-center rounded-xl overflow-hidden transition-all duration-200"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: error
            ? '1px solid rgba(239,68,68,0.4)'
            : focused
            ? '1px solid rgba(0,113,227,0.5)'
            : '1px solid rgba(255,255,255,0.07)',
          boxShadow: focused && !error ? '0 0 0 3px rgba(0,113,227,0.1)' : 'none',
        }}
      >
        {/* Icon prefix */}
        <span
          className="flex items-center justify-center w-10 h-10 flex-shrink-0 transition-colors duration-200"
          style={{ color: focused ? '#0071E3' : 'rgba(255,255,255,0.25)' }}
        >
          {icon}
        </span>
        <span className="w-px self-stretch" style={{ background: focused ? 'rgba(0,113,227,0.2)' : 'rgba(255,255,255,0.05)' }} />
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none bg-transparent"
        />
      </div>
      {error && <p className="text-red-400 text-[11px] mt-1.5 font-medium">â†‘ {error}</p>}
    </div>
  );
}

