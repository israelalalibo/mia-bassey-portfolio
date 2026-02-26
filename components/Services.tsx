'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 'performance',
    category: 'Performance',
    title: 'Contortion & Performance',
    tagline: 'The art that stops rooms.',
    accent: 'brand-blue',
    accentHex: '#00D4FF',
    icon: '🎭',
    description:
      'Book Mia for corporate events, circus showcases, fashion shows, music videos, and brand activations. Her unique blend of athletic power and contortion artistry creates visuals that are impossible to ignore.',
    offerings: [
      'Live contortion & flexibility performances',
      'Brand activations & product launches',
      'Circus & variety show bookings',
      'Music video & film appearances',
      'Fashion & editorial shoots',
    ],
    cta: 'Enquire About Performances',
    note: 'Based in Manchester · Available UK-wide',
  },
  {
    id: 'coaching',
    category: 'Coaching',
    title: 'Fitness & Flexibility Coaching',
    tagline: 'Unlock your body\'s fullest potential.',
    accent: 'brand-lime',
    accentHex: '#AAFF00',
    icon: '🧘🏽‍♀️',
    description:
      'As a certified Stretch & Flexibility Coach with a Biochemistry degree, Mia combines scientific knowledge with lived movement experience. Her coaching is tailored, evidence-based, and transformational.',
    offerings: [
      '1-to-1 flexibility & stretch coaching',
      'Group mobility & flexibility classes',
      'Online coaching programmes',
      'Corporate wellness sessions',
      'Brand ambassador & fitness partnerships',
    ],
    cta: 'Book a Coaching Session',
    note: 'In-person (Manchester) & Online',
  },
];

const partnerLogos = [
  'Brand Partnerships',
  'Workshop Hosting',
  'Social Media Collabs',
  'Editorial Features',
  'Event Appearances',
];

export default function Services() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative bg-brand-dark py-28">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-5"
        >
          <span className="block w-8 h-[1px] bg-brand-blue" />
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-brand-blue font-medium">
            Work With Mia
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif font-light leading-tight mb-16"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
        >
          Two Ways to{' '}
          <span className="italic text-gradient-blue">Collaborate</span>
        </motion.h2>

        {/* Service cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative bg-brand-card border border-brand-border p-8 md:p-10 overflow-hidden group card-hover"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                style={{ background: service.accentHex, opacity: 0.6 }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accentHex}, transparent)`,
                  opacity: 0,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${service.accentHex}15 0%, transparent 70%)`,
                }}
              />

              {/* Category chip */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className="font-sans text-[11px] tracking-[0.25em] uppercase font-medium px-3 py-1.5 border"
                  style={{ color: service.accentHex, borderColor: `${service.accentHex}40` }}
                >
                  {service.category}
                </span>
                <span className="text-2xl">{service.icon}</span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-2">
                {service.title}
              </h3>
              <p
                className="font-serif italic text-base mb-5"
                style={{ color: service.accentHex }}
              >
                {service.tagline}
              </p>
              <p className="font-sans text-white/55 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Offerings list */}
              <ul className="space-y-3 mb-10">
                {service.offerings.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0"
                      style={{ background: service.accentHex }}
                    />
                    <span className="font-sans text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <button
                  onClick={scrollToContact}
                  className="w-full py-4 font-sans text-xs tracking-widest uppercase font-medium transition-all duration-300 border"
                  style={{
                    borderColor: service.accentHex,
                    color: service.accentHex,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = service.accentHex;
                    (e.currentTarget as HTMLButtonElement).style.color =
                      service.accent === 'brand-lime' ? '#080808' : '#080808';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.color = service.accentHex;
                  }}
                >
                  {service.cta}
                </button>
                <p className="text-center font-sans text-[11px] text-white/30">
                  {service.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also available for */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-brand-border p-8 md:p-10"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
            Also available for
          </p>
          <div className="flex flex-wrap gap-3">
            {partnerLogos.map((item) => (
              <span
                key={item}
                className="font-sans text-xs tracking-widest uppercase px-5 py-3 border border-brand-border text-white/50 hover:border-brand-blue hover:text-brand-blue transition-all duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
