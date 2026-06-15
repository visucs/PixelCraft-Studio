import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, FileText, ChevronRight } from 'lucide-react';

const privacySections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you contact us or place an order, we collect: Full name, Email address, Phone number, Company or brand name, Project details and requirements.',
      },
      {
        subtitle: 'Usage Data',
        text: 'We automatically collect certain information when you visit our website: IP address, Browser type and version, Pages visited and time spent, Referring URLs, Device type and operating system.',
      },
      {
        subtitle: 'Communication Data',
        text: 'Any messages, emails, or form submissions you send us are stored securely for the purpose of providing and improving our services.',
      },
    ],
  },
  {
    title: '2. How We Use Your Data',
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'Your data is primarily used to deliver the services you request — designing, building, and delivering your web project on time and to specification.',
      },
      {
        subtitle: 'Communication',
        text: 'We use your contact information to send project updates, invoices, and important service-related communications. We do not send unsolicited marketing emails without your consent.',
      },
      {
        subtitle: 'Improvement',
        text: 'Aggregated, anonymised usage data helps us understand how our website is used so we can improve it. This data cannot be used to identify you personally.',
      },
    ],
  },
  {
    title: '3. Cookies Policy',
    content: [
      {
        subtitle: 'What Are Cookies',
        text: 'Cookies are small text files stored on your device when you visit our website. They help us deliver a better experience by remembering your preferences.',
      },
      {
        subtitle: 'Types We Use',
        text: 'Essential cookies (required for the site to function), Analytics cookies (Google Analytics — to understand traffic patterns), and Preference cookies (to remember your settings).',
      },
      {
        subtitle: 'Managing Cookies',
        text: 'You can control and delete cookies through your browser settings. Note that disabling essential cookies may affect website functionality.',
      },
    ],
  },
  {
    title: '4. Third-Party Services',
    content: [
      {
        subtitle: 'Service Providers',
        text: 'We work with trusted third-party services: Google Analytics (usage tracking), Vercel / Railway (hosting), Stripe (payment processing), EmailJS / Formspree (contact forms). Each provider has their own privacy policy.',
      },
      {
        subtitle: 'Data Sharing',
        text: 'We do not sell, rent, or trade your personal information to third parties. Data is shared with service providers only to the extent necessary to operate our business.',
      },
      {
        subtitle: 'Links to Other Sites',
        text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.',
      },
    ],
  },
  {
    title: '5. Your Rights (GDPR)',
    content: [
      {
        subtitle: 'Right to Access',
        text: 'You have the right to request a copy of the personal data we hold about you at any time, free of charge.',
      },
      {
        subtitle: 'Right to Rectification',
        text: 'You can ask us to correct any inaccurate or incomplete personal data we hold about you.',
      },
      {
        subtitle: 'Right to Erasure',
        text: 'You may request that we delete your personal data. We will comply unless we have a legal obligation to retain it.',
      },
      {
        subtitle: 'Right to Portability',
        text: 'You can request your data in a structured, machine-readable format to transfer to another service provider.',
      },
      {
        subtitle: 'Right to Object',
        text: 'You may object to our processing of your data for marketing purposes at any time by contacting us directly.',
      },
    ],
  },
  {
    title: '6. Contact Information',
    content: [
      {
        subtitle: 'Data Controller',
        text: 'PixelCraft Studio is the data controller responsible for your personal information.',
      },
      {
        subtitle: 'Get in Touch',
        text: 'For any privacy-related queries, requests, or concerns, contact us at: hello@pixelcraftstudio.com\n\nWe aim to respond to all requests within 48 hours.',
      },
    ],
  },
];

const termsSections = [
  {
    title: '1. Services Offered',
    content: [
      {
        subtitle: 'Scope of Work',
        text: 'PixelCraft Studio provides digital design and development services including: Landing Pages, Business Websites, E-Commerce Stores, Portfolio Sites, Web Applications (SaaS), and Website Redesigns.',
      },
      {
        subtitle: 'Project Agreement',
        text: 'Each project begins with a written brief or agreement outlining scope, deliverables, timeline, and pricing. Work commences only after written confirmation and deposit payment.',
      },
      {
        subtitle: 'Revisions',
        text: 'Project packages include a specified number of revision rounds. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.',
      },
    ],
  },
  {
    title: '2. Intellectual Property Rights',
    content: [
      {
        subtitle: 'Client Ownership',
        text: 'Upon full payment, the client receives full ownership of the final deliverables — including source code, design files, and assets created specifically for their project.',
      },
      {
        subtitle: 'PixelCraft IP',
        text: 'PixelCraft Studio retains ownership of pre-existing tools, frameworks, libraries, and methodologies used during the project. These are licensed (not sold) to the client for use in the delivered product.',
      },
      {
        subtitle: 'Portfolio Rights',
        text: 'We reserve the right to showcase completed projects in our portfolio, case studies, and social media unless the client explicitly requests confidentiality in writing.',
      },
    ],
  },
  {
    title: '3. Payment Terms',
    content: [
      {
        subtitle: 'Pricing',
        text: 'All prices are quoted in Indian Rupees (INR) and represent one-time project fees unless otherwise agreed. No recurring or hidden charges.',
      },
      {
        subtitle: 'Payment Schedule',
        text: 'A 50% deposit is required before work begins. The remaining 50% is due upon project completion before final files are transferred.',
      },
      {
        subtitle: 'Late Payments',
        text: 'Invoices unpaid after 14 days may incur a late fee of 2% per month. We reserve the right to pause or terminate services for accounts with outstanding balances.',
      },
      {
        subtitle: 'Refunds',
        text: 'Deposits are non-refundable once work has commenced. If PixelCraft Studio cancels a project without cause, the full deposit will be refunded.',
      },
    ],
  },
  {
    title: '4. Limitation of Liability',
    content: [
      {
        subtitle: 'No Consequential Damages',
        text: 'PixelCraft Studio shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services or delivered products.',
      },
      {
        subtitle: 'Maximum Liability',
        text: 'Our total liability to you for any claim arising from our services shall not exceed the amount you paid us for the specific project giving rise to the claim.',
      },
      {
        subtitle: 'Third-Party Dependencies',
        text: 'We are not liable for failures, outages, or changes in third-party services (hosting providers, APIs, plugins) that may affect the delivered product.',
      },
    ],
  },
  {
    title: '5. Prohibited Activities',
    content: [
      {
        subtitle: 'Prohibited Uses',
        text: 'You agree not to use PixelCraft Studio services to create content that is: Illegal, harmful, or defamatory, Infringing on third-party intellectual property, Spreading misinformation or malware, Related to adult content, gambling, or illegal substances without proper licensing.',
      },
      {
        subtitle: 'Misrepresentation',
        text: 'You must provide accurate information about your business, its nature, and intended use of the website. Misrepresentation is grounds for immediate project termination without refund.',
      },
      {
        subtitle: 'Consequences',
        text: 'Violation of these terms gives PixelCraft Studio the right to terminate services immediately, retain all payments received, and pursue legal remedies if necessary.',
      },
    ],
  },
  {
    title: '6. Governing Law',
    content: [
      {
        subtitle: 'Jurisdiction',
        text: 'These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.',
      },
      {
        subtitle: 'Dispute Resolution',
        text: 'In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation before pursuing legal action.',
      },
      {
        subtitle: 'Amendments',
        text: 'PixelCraft Studio reserves the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms.',
      },
    ],
  },
];

export default function LegalPage({ defaultTab = 'privacy', onBack }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const sections = activeTab === 'privacy' ? privacySections : termsSections;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <header
        className="sticky top-0 z-50 border-b border-white/[0.06]"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0071E3] to-[#00C6FF] flex items-center justify-center">
              <span className="text-white font-black text-sm">P</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">PixelCraft Studio</span>
          </button>

          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-[#86868B] hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/25 mb-6">
          {activeTab === 'privacy'
            ? <Shield size={12} className="text-[#0071E3]" />
            : <FileText size={12} className="text-[#0071E3]" />
          }
          <span className="text-[#0071E3] text-xs font-semibold tracking-widest uppercase">
            {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          {activeTab === 'privacy' ? 'Your Privacy Matters.' : 'Terms & Conditions.'}
        </h1>
        <p className="text-[#86868B] text-lg max-w-2xl">
          {activeTab === 'privacy'
            ? 'We are committed to protecting your personal information and being transparent about how we use it.'
            : 'By using PixelCraft Studio services, you agree to the following terms. Please read them carefully.'}
        </p>
        <p className="text-[#86868B]/60 text-sm mt-3">Last updated: June 2025</p>
      </div>

      {/* Tab Switcher */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div
          className="inline-flex p-1 rounded-xl gap-1"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            { id: 'privacy', label: 'Privacy Policy', icon: Shield },
            { id: 'terms', label: 'Terms & Conditions', icon: FileText },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={
                activeTab === id
                  ? { background: '#0071E3', color: '#fff' }
                  : { color: 'rgba(255,255,255,0.5)', background: 'transparent' }
              }
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar TOC */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="sticky top-24">
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">Contents</p>
              <nav className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <a
                    key={i}
                    href={`#section-${i}`}
                    className="flex items-center gap-2 text-xs text-[#86868B] hover:text-white transition-colors py-1.5 group"
                  >
                    <ChevronRight size={10} className="text-[#0071E3] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div
                  key={i}
                  id={`section-${i}`}
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <h2 className="text-white text-xl font-bold tracking-tight mb-6 pb-4 border-b border-white/[0.06]">
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-6">
                    {section.content.map((item, j) => (
                      <div key={j}>
                        <h3 className="text-[#0071E3] text-sm font-bold mb-2 tracking-wide">
                          {item.subtitle}
                        </h3>
                        <p className="text-[#86868B] text-sm leading-relaxed whitespace-pre-line">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className="mt-10 rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(0,113,227,0.08) 0%, rgba(0,0,0,0) 100%)',
                border: '1px solid rgba(0,113,227,0.2)',
              }}
            >
              <p className="text-white font-semibold mb-2">Questions about our policies?</p>
              <p className="text-[#86868B] text-sm mb-5">
                We're happy to explain anything. Reach out directly.
              </p>
              <a
                href="mailto:hello@pixelcraftstudio.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: '#0071E3', color: '#fff' }}
              >
                hello@pixelcraftstudio.com
              </a>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#86868B] text-sm">© 2025 PixelCraft Studio. All rights reserved.</p>
          <p className="text-[#86868B] text-sm">
            Crafted with <span className="text-[#0071E3]">♥</span> by the PixelCraft team.
          </p>
        </div>
      </footer>
    </div>
  );
}
