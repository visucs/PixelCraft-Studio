import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Our Starter landing page takes 7 days, Growth sites take 14 days, and Premium custom projects take 21 days from kickoff. We rarely miss a deadline — it\'s something we take very seriously.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'Just a discovery call and your brand materials (logo, colors, copy if you have it). We guide you through the rest. Our onboarding process is designed to be as frictionless as possible.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes. Every project includes a support period, and we offer monthly maintenance retainers starting at $199/month. We handle updates, security patches, content changes, and performance monitoring.',
  },
  {
    question: 'What if I don\'t love the initial design?',
    answer:
      'We offer revision rounds based on your plan (3 for Starter, unlimited for Growth & Premium). In our experience, clients love the first round because we invest heavily in the discovery process upfront.',
  },
  {
    question: 'Do you work with clients outside the US?',
    answer:
      'Absolutely — we work with clients across 30+ countries. Our team operates asynchronously and we communicate via Slack, email, and video calls to accommodate any timezone.',
  },
  {
    question: 'Can I use my own hosting?',
    answer:
      'Yes. We can deploy to your preferred host (Vercel, Netlify, AWS, GoDaddy, etc.) or handle hosting on your behalf. We\'ll set everything up and hand you the keys at launch.',
  },
];

export default function FAQ() {
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

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#9B5DE5]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#00C6FF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="section-reveal flex flex-col items-center text-center mb-24">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9B5DE5]/20 to-[#00C6FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <div className="relative flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B5DE5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B5DE5]"></span>
              </span>
              <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">FAQ</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.05] relative">
            Got
            <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-0 ml-0 md:ml-4">
              <span className="text-transparent bg-clip-text relative z-10" style={{ backgroundImage: 'linear-gradient(135deg, #9B5DE5 0%, #00C6FF 100%)' }}>
                Questions?
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#9B5DE5] to-[#00C6FF] opacity-20 blur-2xl -z-10 rounded-full" />
            </span>
          </h2>
          <p className="text-[#86868B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to know about the process, pricing, and how we work.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: isOpen ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  border: '1px solid',
                  borderColor: isOpen ? 'rgba(155,93,229,0.3)' : 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: isOpen ? '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' : 'inset 0 1px 0 rgba(255,255,255,0.02)',
                  transform: isOpen ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                {/* Subtle internal glow on active */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-[#9B5DE5]/5 to-[#00C6FF]/5 opacity-0 transition-opacity duration-500 pointer-events-none ${isOpen ? 'opacity-100' : ''}`}
                />

                <button
                  className="w-full flex items-center justify-between px-6 md:px-8 py-6 text-left relative z-10"
                  onClick={() => toggle(i)}
                >
                  <span className={`text-base md:text-lg font-semibold tracking-wide pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 transform ${
                      isOpen 
                        ? 'bg-gradient-to-br from-[#9B5DE5] to-[#00C6FF] text-white rotate-180 shadow-[0_0_15px_rgba(155,93,229,0.4)]' 
                        : 'bg-white/[0.04] text-[#86868B] group-hover:bg-white/[0.08] group-hover:text-white group-hover:scale-110'
                    }`}
                  >
                    {isOpen ? <Minus size={16} className="transition-transform duration-500" /> : <Plus size={16} className="transition-transform duration-500" />}
                  </div>
                </button>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    maxHeight: isOpen ? '250px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 md:px-8 pb-8 text-white/60 text-base leading-relaxed relative z-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
