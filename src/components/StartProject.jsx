import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react';

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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl flex flex-col"
        style={{
          background: '#0A0A0A',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04) inset',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <X size={16} />
        </button>

        {submitted ? (
          <SuccessScreen onClose={onClose} name={form.name} />
        ) : (
          <>
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-white/[0.06]">
              <p className="text-[#0071E3] text-xs font-bold tracking-widest uppercase mb-2">
                Start a Project
              </p>
              <h2 className="text-white text-2xl font-black tracking-tight mb-4">
                {step === 0 && "Let's get to know you."}
                {step === 1 && "Tell us about your project."}
                {step === 2 && "A few more details."}
              </h2>

              {/* Step indicators */}
              <div className="flex items-center gap-2">
                {STEPS.map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300"
                        style={
                          i < step
                            ? { background: '#0071E3', color: '#fff' }
                            : i === step
                            ? { background: 'rgba(0,113,227,0.2)', color: '#0071E3', border: '1.5px solid #0071E3' }
                            : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)' }
                        }
                      >
                        {i < step ? <Check size={10} /> : i + 1}
                      </div>
                      <span
                        className="text-[11px] font-medium hidden sm:inline"
                        style={{ color: i === step ? '#fff' : 'rgba(255,255,255,0.3)' }}
                      >
                        {label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className="flex-1 h-px w-6 transition-all duration-500"
                        style={{ background: i < step ? '#0071E3' : 'rgba(255,255,255,0.08)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form body */}
            <div className="px-8 py-6 flex-1">
              {step === 0 && <Step1 form={form} set={set} errors={errors} />}
              {step === 1 && <Step2 form={form} set={set} errors={errors} />}
              {step === 2 && <Step3 form={form} set={set} errors={errors} />}
            </div>

            {/* Footer nav */}
            <div className="px-8 pb-8 flex items-center justify-between gap-4">
              {step > 0 ? (
                <button
                  onClick={back}
                  className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
                >
                  <ArrowLeft size={14} /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 2 ? (
                <button
                  onClick={next}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95"
                  style={{ background: '#0071E3', color: '#fff' }}
                >
                  Continue <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 disabled:opacity-60"
                  style={{ background: '#ffffff', color: '#000000' }}
                >
                  {loading ? (
                    <><Loader2 size={14} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Submit Request <ArrowRight size={14} /></>
                  )}
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
    <div className="flex flex-col gap-5">
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
    <div className="flex flex-col gap-6">
      <Field label="What type of project? *" error={errors.projectType}>
        <div className="grid grid-cols-2 gap-2">
          {projectTypes.map(({ label, emoji }) => (
            <button
              key={label}
              onClick={() => set('projectType', label)}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200"
              style={
                form.projectType === label
                  ? { background: 'rgba(0,113,227,0.15)', border: '1.5px solid #0071E3', color: '#fff' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }
              }
            >
              <span>{emoji}</span> {label}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Budget Range *" error={errors.budget}>
        <div className="flex flex-wrap gap-2">
          {budgets.map(b => (
            <button
              key={b}
              onClick={() => set('budget', b)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={
                form.budget === b
                  ? { background: 'rgba(0,113,227,0.15)', border: '1.5px solid #0071E3', color: '#0071E3' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }
              }
            >
              {b}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Preferred Timeline *" error={errors.timeline}>
        <div className="flex flex-wrap gap-2">
          {timelines.map(t => (
            <button
              key={t}
              onClick={() => set('timeline', t)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={
                form.timeline === t
                  ? { background: 'rgba(0,113,227,0.15)', border: '1.5px solid #0071E3', color: '#0071E3' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }
              }
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
    <div className="flex flex-col gap-5">
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
        <div className="flex flex-wrap gap-2">
          {sources.map(s => (
            <button
              key={s}
              onClick={() => set('source', s)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={
                form.source === s
                  ? { background: 'rgba(0,113,227,0.15)', border: '1.5px solid #0071E3', color: '#0071E3' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }
              }
            >
              {s}
            </button>
          ))}
        </div>
      </Field>

      {/* Summary card */}
      <div
        className="rounded-2xl p-4 text-xs"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="text-white/40 font-semibold uppercase tracking-widest mb-3 text-[10px]">Summary</p>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          {[
            ['Name', form.name],
            ['Email', form.email],
            ['Project', form.projectType],
            ['Budget', form.budget],
            ['Timeline', form.timeline],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-white/30">{k}</div>
              <div className="text-white/80 font-medium truncate">{v || '—'}</div>
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
    <div className="flex flex-col items-center justify-center text-center px-10 py-16">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ background: 'rgba(0,113,227,0.15)', border: '1.5px solid #0071E3' }}
      >
        <Check size={28} className="text-[#0071E3]" />
      </div>
      <h2 className="text-white text-2xl font-black tracking-tight mb-3">
        We got it, {name.split(' ')[0]}! 🎉
      </h2>
      <p className="text-[#86868B] text-sm leading-relaxed max-w-xs mb-8">
        Your project request has been received. Our team will review the details and get back to you within{' '}
        <span className="text-white font-semibold">24 hours</span>.
      </p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <a
          href="https://wa.me/919876543210?text=Hi%20PixelCraft%2C%20I%20just%20submitted%20a%20project%20request!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all"
          style={{ background: '#25D366', color: '#fff' }}
        >
          💬 Chat on WhatsApp
        </a>
        <button
          onClick={onClose}
          className="py-3 rounded-xl text-sm font-semibold text-white/50 hover:text-white transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* ── Helpers ── */
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-white/70 text-xs font-semibold mb-2 tracking-wide">{label}</label>
      {children}
      {error && <p className="text-red-400 text-[11px] mt-1.5 font-medium">{error}</p>}
    </div>
  );
}

const inputCls = (hasError) =>
  `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:ring-1 ${
    hasError
      ? 'ring-1 ring-red-500/60 bg-red-500/5 border border-red-500/30'
      : 'bg-white/[0.05] border border-white/[0.08] focus:ring-[#0071E3] focus:border-[#0071E3]/50'
  }`;
