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
    <section className="py-28 px-6 bg-[#030303]">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="section-reveal text-center mb-16">
          <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="section-title text-white mb-5">
            Got
            <br />
            <span className="text-[#86868B]">Questions?</span>
          </h2>
        </div>

        <div className="border border-white/[0.06] rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="accordion-item">
              <button
                className="w-full flex items-center justify-between px-7 py-6 text-left hover:bg-white/[0.02] transition-colors duration-200"
                onClick={() => toggle(i)}
              >
                <span className={`text-[15px] font-medium pr-4 ${openIndex === i ? 'text-white' : 'text-white/80'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === i ? 'bg-[#0071E3] text-white' : 'bg-white/[0.06] text-[#86868B]'
                }`}>
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                <p className="px-7 pb-6 text-[#86868B] text-[15px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
