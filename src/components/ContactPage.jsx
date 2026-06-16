import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowLeft, Phone, Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';

const InstagramIcon = ({ size = 13, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = ({ size = 13, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);


const infoCards = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 70790 92440',
    sub: 'Call us for immediate assistance',
    href: 'tel:+917079092440',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@pixelcraftstudio.com',
    sub: 'Send us your requirements',
    href: 'mailto:hello@pixelcraftstudio.com',
  },
  {
    icon: InstagramIcon,
    title: 'Instagram',
    value: '@pixelcraftstudio',
    sub: 'Follow us for updates',
    href: 'https://instagram.com/pixelcraftstudio',
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn',
    value: 'PixelCraft Studio',
    sub: 'Connect with our team',
    href: 'https://linkedin.com/company/pixelcraftstudio',
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

      {/* ── HERO ── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,113,227,0.18) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/25 mb-6">
            <MessageCircle size={12} className="text-[#0071E3]" />
            <span className="text-[#0071E3] text-xs font-bold tracking-widest uppercase">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5">
            Get In{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)' }}
            >
              Touch
            </span>
          </h1>
          <p className="text-[#86868B] text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to build something great? Let's discuss your project and bring your vision to life.
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#0071E3', color: '#fff' }}
          >
            Start Your Journey <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-2">Contact Information</h2>
            <p className="text-[#86868B] text-sm">Multiple ways to reach us. Choose what's most convenient for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoCards.map(({ icon: Icon, title, value, sub, href }) => (
              <a
                key={title}
                href={href || undefined}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group block rounded-2xl p-6 transition-all duration-300 hover:border-[#0071E3]/40"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(0,113,227,0.12)', border: '1px solid rgba(0,113,227,0.2)' }}
                >
                  <Icon size={18} className="text-[#0071E3]" />
                </div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">{title}</p>
                <p className="text-[#0071E3] font-semibold text-sm mb-1">{value}</p>
                <p className="text-[#86868B] text-xs">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section id="contact-form" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

          {/* LEFT — Form */}
          <div
            className="rounded-2xl p-8 bg-white/5 border border-white/10 relative overflow-hidden transform-gpu isolate"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0,113,227,0.12)', border: '1.5px solid #0071E3' }}
                >
                  <Send size={24} className="text-[#0071E3]" />
                </div>
                <h3 className="text-white text-2xl font-black mb-3">Message Sent! 🎉</h3>
                <p className="text-[#86868B] text-sm max-w-xs leading-relaxed">
                  Thanks {form.firstName}! We've received your message and will get back to you within{' '}
                  <span className="text-white font-semibold">24 hours</span>.
                </p>
                <a
                  href={`https://wa.me/919313202075?text=${whatsappMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                  style={{ background: '#25D366', color: '#fff' }}
                >
                  💬 Also chat on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-white text-xl font-bold tracking-tight mb-1">Send us a Message</h3>
                <p className="text-[#0071E3] text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="First Name *" error={errors.firstName}>
                      <input value={form.firstName} onChange={e => set('firstName', e.target.value)}
                        placeholder="Vishal" className={inputCls(errors.firstName)} />
                    </Field>
                    <Field label="Last Name *" error={errors.lastName}>
                      <input value={form.lastName} onChange={e => set('lastName', e.target.value)}
                        placeholder="Kumar" className={inputCls(errors.lastName)} />
                    </Field>
                  </div>

                  <Field label="Email Address *" error={errors.email}>
                    <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                      placeholder="your.email@example.com" className={inputCls(errors.email)} />
                  </Field>

                  <Field label="Phone Number *" error={errors.phone}>
                    <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                      placeholder="+91 XXXXX XXXXX" className={inputCls(errors.phone)} />
                  </Field>

                  <Field label="Service Required" error={null}>
                    <select value={form.service} onChange={e => set('service', e.target.value)}
                      className={inputCls(false) + ' cursor-pointer'}
                      style={{ background: '#0a0a0a' }}
                    >
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>

                  <Field label="Message *" error={errors.message}>
                    <textarea rows={5} value={form.message} onChange={e => set('message', e.target.value)}
                      placeholder="Tell us about your project needs, goals, timeline, or any questions…"
                      className={inputCls(errors.message) + ' resize-none'} />
                  </Field>

                  <a
                    href={`https://wa.me/919313202075?text=${whatsappMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{ background: '#25D366', color: '#fff' }}
                  >
                    <MessageCircle size={16} /> Send Message via WhatsApp
                  </a>

                  <button type="submit" disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                    style={{ background: '#0071E3', color: '#fff' }}
                  >
                    {loading ? 'Sending…' : <><Send size={14} /> Send via Email</>}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* RIGHT — Sidebar */}
          <div className="flex flex-col gap-4">

            {/* Quick Contact */}
            <div
              className="rounded-2xl p-6 bg-white/5 border border-white/10 relative overflow-hidden transform-gpu isolate"
            >
              <h3 className="text-white font-bold text-base mb-4">Quick Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+917079092440"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:border-white/20 bg-white/5 border border-white/10 text-white/80"
                >
                  <Phone size={15} className="text-[#0071E3]" />
                  <div>
                    <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">Call Now</p>
                    <p>+91 70790 92440</p>
                  </div>
                </a>
                <a
                  href="mailto:hello@pixelcraftstudio.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:border-white/20 bg-white/5 border border-white/10 text-white/80"
                >
                  <Mail size={15} className="text-[#0071E3]" />
                  <div>
                    <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">Email Us</p>
                    <p>hello@pixelcraftstudio.com</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/917079092440"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 bg-[#25D366] text-white"
                >
                  <MessageCircle size={15} />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">WhatsApp</p>
                    <p>Instant response guaranteed</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Follow Our Work */}
            <div
              className="rounded-2xl p-6 bg-white/5 border border-white/10 relative overflow-hidden transform-gpu isolate"
            >
              <h3 className="text-white font-bold text-base mb-1">Follow Our Work</h3>
              <p className="text-[#86868B] text-xs mb-4 leading-relaxed">Stay updated with our latest work and behind-the-scenes content</p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://instagram.com/pixelcraftstudio"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', color: '#fff' }}
                >
                  <InstagramIcon size={14} /> Instagram
                </a>
                <a
                  href="https://linkedin.com/company/pixelcraftstudio"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 hover:opacity-90"
                  style={{ background: '#0A66C2', color: '#fff' }}
                >
                  <LinkedInIcon size={14} /> LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="px-6 py-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(0,113,227,0.07) 0%, transparent 60%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,113,227,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
            Let's Build Something<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)' }}
            >
              Great Together
            </span>
          </h2>
          <p className="text-[#86868B] text-base mb-8 leading-relaxed">
            Your vision deserves to be built beautifully. Contact us today and let's start planning your perfect web project.
          </p>
          <a
            href="https://wa.me/919313202075?text=Hi%20PixelCraft%20Studio!%20I'd%20like%20to%20start%20a%20project."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#0071E3', color: '#fff' }}
          >
            Start Your Project Journey <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#86868B] text-sm">© 2025 PixelCraft Studio. All rights reserved.</p>
          <p className="text-[#86868B] text-sm">
            Crafted with <span className="text-[#0071E3]">♥</span> by the PixelCraft team.
          </p>
        </div>
      </footer>
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
