import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Loader2, Sparkles } from 'lucide-react';

const STEPS = ['About You', 'Your Project', 'Details'];

const projectTypes = [
  { label: 'Landing Page', emoji: '🚀' },
  { label: 'Business Website', emoji: '🏢' },
  { label: 'E-Commerce Store', emoji: '🛒' },
  { label: 'Portfolio Site', emoji: '🎨' },
  { label: 'Web App / SaaS', emoji: '⚙️' },
  { label: 'Redesign / Revamp', emoji: '✨' },
];

const budgets = [
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹60,000',
  '₹60,000+',
  'Not sure yet',
];

const timelines = [
  'ASAP (under 1 week)',
  '1 – 2 Weeks',
  '2 – 4 Weeks',
  '1 – 2 Months',
  'Flexible',
];

const sources = [
  'Google Search',
  'Instagram / Social Media',
  'Friend / Referral',
  'LinkedIn',
  'Other',
];

const empty = {
  name: '', email: '', phone: '', company: '',
  projectType: '', budget: '', timeline: '',
  description: '', source: '',
};

export default function StartProject({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // lock body scroll
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // reset on close
  useEffect(() => {
    if (!open) { setTimeout(() => { setStep(0); setForm(empty); setErrors({}); setSubmitted(false); }, 400); }
  }, [open]);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.name.trim()) e.name = 'Name is required';
      if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
      if (!form.phone.match(/^\+?[0-9\s\-]{8,}$/)) e.phone = 'Valid phone required';
    }
    if (step === 1) {
      if (!form.projectType) e.projectType = 'Select a project type';
      if (!form.budget) e.budget = 'Select a budget range';
      if (!form.timeline) e.timeline = 'Select a timeline';
    }
    if (step === 2) {
      if (form.description.trim().length < 20) e.description = 'Please describe your project (min 20 chars)';
      if (!form.source) e.source = 'Let us know how you found us';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep(s => s + 1); };
  const back = () => { setErrors({}); setStep(s => s - 1); };

  const submit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ease-out"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(30px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] flex flex-col animate-in fade-in zoom-in-95 duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-[200px] bg-gradient-to-b from-[#00C6FF]/10 to-transparent pointer-events-none rounded-t-[2rem]" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05]"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <SuccessScreen onClose={onClose} name={form.name} />
        ) : (
          <>
            {/* Header */}
            <div className="px-10 pt-10 pb-8 border-b border-white/[0.04] relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 bg-white/[0.03] border border-white/[0.05]">
                <Sparkles size={12} className="text-[#00C6FF]" />
                <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Start a Project</span>
              </div>
              <h2 className="text-white text-3xl font-black tracking-tight mb-8">
                {step === 0 && "Let's get to know you."}
                {step === 1 && "Tell us about your project."}
                {step === 2 && "A few more details."}
              </h2>

              {/* Step indicators */}
              <div className="flex items-center gap-3">
                {STEPS.map((label, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all duration-500 shadow-lg"
                        style={
                          i < step
                            ? { background: 'linear-gradient(135deg, #00C6FF, #9B5DE5)', color: '#fff', boxShadow: '0 0 15px rgba(0,198,255,0.4)' }
                            : i === step
                            ? { background: 'rgba(0,198,255,0.1)', color: '#00C6FF', border: '1.5px solid #00C6FF', boxShadow: '0 0 10px rgba(0,198,255,0.2)' }
                            : { background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.05)' }
                        }
                      >
                        {i < step ? <Check size={12} strokeWidth={3} /> : i + 1}
                      </div>
                      <span
                        className="text-[12px] font-bold hidden sm:inline tracking-wide transition-colors duration-300"
                        style={{ color: i <= step ? '#fff' : 'rgba(255,255,255,0.3)' }}
                      >
                        {label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="flex-1 w-8 sm:w-12 h-[2px] rounded-full bg-white/[0.04] overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] transition-all duration-700 ease-out"
                          style={{ width: i < step ? '100%' : '0%' }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form body */}
            <div className="px-10 py-8 flex-1 relative z-10">
              {step === 0 && <Step1 form={form} set={set} errors={errors} />}
              {step === 1 && <Step2 form={form} set={set} errors={errors} />}
              {step === 2 && <Step3 form={form} set={set} errors={errors} />}
            </div>

            {/* Footer nav */}
            <div className="px-10 pb-10 flex items-center justify-between gap-4 relative z-10">
              {step > 0 ? (
                <button
                  onClick={back}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white/50 hover:text-white hover:bg-white/[0.05] transition-all"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 2 ? (
                <button
                  onClick={next}
                  className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 overflow-hidden shadow-[0_0_20px_rgba(0,198,255,0.3)] hover:shadow-[0_0_30px_rgba(155,93,229,0.5)]"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    Continue <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={loading}
                  className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:active:scale-100 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  style={{ background: '#fff', color: '#000' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                    ) : (
                      <>Submit Request <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </span>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Step 1 ── */
function Step1({ form, set, errors }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Full Name *" error={errors.name}>
        <input
          value={form.name}
          onChange={e => set('name', e.target.value)}
          placeholder="Vishal Kumar"
          className={inputCls(errors.name)}
        />
      </Field>
      <Field label="Email Address *" error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={e => set('email', e.target.value)}
          placeholder="vishal@example.com"
          className={inputCls(errors.email)}
        />
      </Field>
      <Field label="Phone Number *" error={errors.phone}>
        <input
          type="tel"
          value={form.phone}
          onChange={e => set('phone', e.target.value)}
          placeholder="+91 98765 43210"
          className={inputCls(errors.phone)}
        />
      </Field>
      <Field label="Company / Brand Name" error={null}>
        <input
          value={form.company}
          onChange={e => set('company', e.target.value)}
          placeholder="Your company (optional)"
          className={inputCls(false)}
        />
      </Field>
    </div>
  );
}

/* ── Step 2 ── */
function Step2({ form, set, errors }) {
  return (
    <div className="flex flex-col gap-8">
      <Field label="What type of project? *" error={errors.projectType}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectTypes.map(({ label, emoji }) => (
            <button
              key={label}
              onClick={() => set('projectType', label)}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold text-left transition-all duration-300 ${
                form.projectType === label
                  ? 'bg-gradient-to-r from-[#00C6FF]/10 to-[#9B5DE5]/10 border-[#00C6FF]/50 text-white shadow-[0_0_20px_rgba(0,198,255,0.15)]'
                  : 'bg-white/[0.02] border-white/[0.05] text-white/60 hover:bg-white/[0.05] hover:text-white'
              } border`}
            >
              <span className="text-xl">{emoji}</span> {label}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Budget Range *" error={errors.budget}>
        <div className="flex flex-wrap gap-3">
          {budgets.map(b => (
            <button
              key={b}
              onClick={() => set('budget', b)}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 ${
                form.budget === b
                  ? 'bg-[#00C6FF]/15 border-[#00C6FF]/50 text-[#00C6FF] shadow-[0_0_15px_rgba(0,198,255,0.2)]'
                  : 'bg-white/[0.02] border-white/[0.05] text-white/50 hover:bg-white/[0.05] hover:text-white'
              } border`}
            >
              {b}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Preferred Timeline *" error={errors.timeline}>
        <div className="flex flex-wrap gap-3">
          {timelines.map(t => (
            <button
              key={t}
              onClick={() => set('timeline', t)}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 ${
                form.timeline === t
                  ? 'bg-[#9B5DE5]/15 border-[#9B5DE5]/50 text-[#9B5DE5] shadow-[0_0_15px_rgba(155,93,229,0.2)]'
                  : 'bg-white/[0.02] border-white/[0.05] text-white/50 hover:bg-white/[0.05] hover:text-white'
              } border`}
            >
              {t}
            </button>
          ))}
        </div>
      </Field>
    </div>
  );
}

/* ── Step 3 ── */
function Step3({ form, set, errors }) {
  return (
    <div className="flex flex-col gap-8">
      <Field label="Describe your project *" error={errors.description}>
        <textarea
          rows={5}
          value={form.description}
          onChange={e => set('description', e.target.value)}
          placeholder="Tell us what you want to build — goals, features, inspiration sites, any special requirements…"
          className={inputCls(errors.description) + ' resize-none'}
        />
      </Field>

      <Field label="How did you find us? *" error={errors.source}>
        <div className="flex flex-wrap gap-3">
          {sources.map(s => (
            <button
              key={s}
              onClick={() => set('source', s)}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 ${
                form.source === s
                  ? 'bg-gradient-to-r from-[#00C6FF]/15 to-[#9B5DE5]/15 border-[#00C6FF]/40 text-white shadow-[0_0_15px_rgba(0,198,255,0.2)]'
                  : 'bg-white/[0.02] border-white/[0.05] text-white/50 hover:bg-white/[0.05] hover:text-white'
              } border`}
            >
              {s}
            </button>
          ))}
        </div>
      </Field>

      {/* Summary card */}
      <div
        className="rounded-2xl p-6 relative overflow-hidden group"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/5 to-[#9B5DE5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <p className="text-[#00C6FF] font-bold uppercase tracking-widest mb-4 text-[10px] relative z-10 flex items-center gap-2">
          <Sparkles size={10} /> Review Details
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 relative z-10">
          {[
            ['Name', form.name],
            ['Email', form.email],
            ['Project', form.projectType],
            ['Budget', form.budget],
            ['Timeline', form.timeline],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-white/40 text-[11px] font-semibold tracking-wide uppercase mb-1">{k}</div>
              <div className="text-white/90 font-bold text-sm truncate">{v || '—'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Success ── */
function SuccessScreen({ onClose, name }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-10 py-20 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,198,255,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-8 relative"
        style={{ background: 'rgba(0,198,255,0.1)', border: '2px solid rgba(0,198,255,0.3)', boxShadow: '0 0 30px rgba(0,198,255,0.4)' }}
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-[#00C6FF]/20" />
        <Check size={32} className="text-[#00C6FF] relative z-10" strokeWidth={3} />
      </div>
      <h2 className="text-white text-3xl font-black tracking-tight mb-4">
        We got it, {name.split(' ')[0]}! 🎉
      </h2>
      <p className="text-[#86868B] text-base leading-relaxed max-w-sm mb-10 font-medium">
        Your project request has been successfully received. Our team will review the details and get back to you within{' '}
        <span className="text-white font-bold">24 hours</span>.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <a
          href="https://wa.me/919876543210?text=Hi%20PixelCraft%2C%20I%20just%20submitted%20a%20project%20request!"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(37,211,102,0.5)' }}
        >
          <div className="absolute inset-0 bg-[#25D366] opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 text-white flex items-center gap-2">💬 Chat on WhatsApp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
        </a>
        <button
          onClick={onClose}
          className="py-4 rounded-xl font-bold text-white/50 hover:text-white hover:bg-white/[0.05] transition-all border border-transparent hover:border-white/[0.05]"
        >
          Close Dashboard
        </button>
      </div>
    </div>
  );
}

/* ── Helpers ── */
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-white/60 text-[11px] font-bold uppercase tracking-wider mb-3">{label}</label>
      {children}
      {error && <p className="text-red-400 text-[11px] mt-2 font-bold flex items-center gap-1"><X size={12}/> {error}</p>}
    </div>
  );
}

const inputCls = (hasError) =>
  `w-full px-5 py-4 rounded-xl text-sm font-medium text-white placeholder-white/20 outline-none transition-all duration-300 ${
    hasError
      ? 'bg-red-500/5 border border-red-500/40 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]'
      : 'bg-white/[0.02] border border-white/[0.06] focus:border-[#00C6FF]/50 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(0,198,255,0.15)] hover:border-white/[0.1]'
  }`;
