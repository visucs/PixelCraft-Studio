import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, FileText, ChevronRight, Sparkles } from 'lucide-react';
import { Agentation } from 'agentation';

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
    <>
      {import.meta.env.DEV && <Agentation />}
      <div className="min-h-screen bg-black text-white selection:bg-[#00C6FF]/30 selection:text-white relative overflow-hidden">
        {/* Background Mesh */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[600px] bg-gradient-to-br from-[#00C6FF]/10 to-[#9B5DE5]/10 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[500px] bg-gradient-to-tl from-[#0071E3]/10 to-[#00C6FF]/10 blur-[120px] rounded-full opacity-40" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wIDM5LjVoNDBNMC41IDB2NDBNMzkuNSAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)] opacity-40" />
        </div>

        {/* Floating Glass Header */}
        <header className="fixed top-0 inset-x-0 z-[100] flex justify-center px-4 pt-6">
          <div 
            className="relative w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-[2rem] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/[0.08]"
            style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}
          >
            {/* Logo */}
            <button onClick={onBack} className="group relative flex items-center gap-3 z-50">
              <div className="relative w-10 h-10 rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 bg-white/[0.03] border border-white/[0.05]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00C6FF]/20 to-[#9B5DE5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-white font-black text-lg relative z-10 group-hover:text-[#00C6FF] transition-colors duration-300">P</span>
              </div>
              <span className="text-white font-black text-xl tracking-tight relative z-10 hidden sm:block">
                Pixel<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 group-hover:from-[#00C6FF] group-hover:to-[#9B5DE5] transition-all duration-300">Craft</span>
              </span>
            </button>

            {/* Back Button */}
            <button
              onClick={onBack}
              className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 border border-white/[0.05] hover:border-[#00C6FF]/30 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/10 to-[#9B5DE5]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowLeft size={16} className="text-white/60 group-hover:text-white group-hover:-translate-x-1 transition-all relative z-10" /> 
              <span className="text-white/80 group-hover:text-white transition-colors relative z-10">Back to Home</span>
            </button>
          </div>
        </header>

        {/* Main Layout */}
        <div className="relative z-10 pt-40 pb-24">
          
          {/* Hero Header */}
          <div className="max-w-4xl mx-auto px-6 text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative group cursor-default" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C6FF]/20 to-[#9B5DE5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <div className="relative flex items-center gap-2">
                <Sparkles size={12} className="text-[#00C6FF]" />
                <span className="text-white/80 text-[11px] font-bold uppercase tracking-widest">
                  Legal & Transparency
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter text-white mb-6 leading-tight">
              {activeTab === 'privacy' ? 'Your Privacy ' : 'Terms & '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5]">
                {activeTab === 'privacy' ? 'Matters.' : 'Conditions.'}
              </span>
            </h1>
            
            <p className="text-[#86868B] text-lg md:text-xl max-w-2xl mx-auto font-medium">
              {activeTab === 'privacy'
                ? 'We are committed to protecting your personal information and being transparent about how we use it.'
                : 'By using PixelCraft Studio services, you agree to the following terms. Please read them carefully.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="max-w-4xl mx-auto px-6 mb-16 flex justify-center">
            <div
              className="inline-flex p-1.5 rounded-2xl gap-1 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
            >
              {[
                { id: 'privacy', label: 'Privacy Policy', icon: Shield },
                { id: 'terms', label: 'Terms & Conditions', icon: FileText },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`group relative flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === id ? 'text-white shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {activeTab === id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] rounded-xl opacity-90" />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Sidebar TOC */}
              <aside className="lg:w-72 flex-shrink-0 hidden lg:block">
                <div className="sticky top-32 p-6 rounded-[2rem]" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="text-[#00C6FF] text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C6FF]" /> Contents
                  </p>
                  <nav className="flex flex-col gap-2">
                    {sections.map((s, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className="flex items-start gap-3 text-[13px] text-[#86868B] font-medium hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/[0.03] group"
                      >
                        <ChevronRight size={14} className="text-[#00C6FF] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                        <span className="-ml-4 group-hover:ml-0 transition-all duration-200">{s.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Document Content */}
              <main className="flex-1 min-w-0 flex flex-col gap-8">
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#00C6FF]/5 to-transparent rounded-full blur-[80px]" />
                  
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-10 pb-4 border-b border-white/[0.05]">
                    Last updated: June 2025
                  </div>

                  <div className="flex flex-col gap-12 relative z-10">
                    {sections.map((section, i) => (
                      <div key={i} id={`section-${i}`} className="scroll-mt-32">
                        <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight mb-8">
                          {section.title}
                        </h2>
                        <div className="flex flex-col gap-8">
                          {section.content.map((item, j) => (
                            <div key={j} className="group relative pl-6 border-l-2 border-white/[0.08] hover:border-[#00C6FF] transition-colors duration-300">
                              <h3 className="text-[#00C6FF] text-lg font-bold mb-3 tracking-tight">
                                {item.subtitle}
                              </h3>
                              <p className="text-[#86868B] text-base leading-relaxed whitespace-pre-line group-hover:text-white/80 transition-colors duration-300">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div
                  className="mt-6 rounded-[2rem] p-10 text-center relative overflow-hidden group"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/10 to-[#9B5DE5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 max-w-lg mx-auto">
                    <p className="text-white text-2xl font-bold mb-3 tracking-tight">Have questions?</p>
                    <p className="text-[#86868B] text-base mb-8 font-medium">
                      We value transparency. If anything in our {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'} is unclear, reach out directly.
                    </p>
                    <a
                      href="mailto:hello@pixelcraftstudio.com"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,198,255,0.2)] hover:shadow-[0_0_30px_rgba(0,198,255,0.4)]"
                      style={{ background: 'linear-gradient(135deg, #00C6FF, #0071E3)', color: '#fff' }}
                    >
                      hello@pixelcraftstudio.com
                    </a>
                  </div>
                </div>
              </main>

            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/[0.05] py-8 px-6 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#86868B] text-sm font-medium">© 2025 PixelCraft Studio. All rights reserved.</p>
            <p className="text-[#86868B] text-sm font-medium">
              Crafted with <span className="text-[#00C6FF] animate-pulse">♥</span> by the PixelCraft team.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
