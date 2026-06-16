const items = [
  'E-Commerce', 'SaaS', 'Real Estate', 'Healthcare',
  'Fintech', 'Fashion', 'Restaurants', 'Startups',
  'EdTech', 'Legal', 'Travel', 'Non-Profits',
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <section className="py-6 bg-[#0A0A0A] border-y border-white/[0.05] overflow-hidden relative" style={{ contain: 'paint' }}>
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform transform-gpu">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6 text-white/70 text-[15px] font-medium tracking-widest uppercase transform-gpu">
            {item}
            <span className="text-[#0071E3] text-lg">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
