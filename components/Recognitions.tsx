'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const recognitions = [
  {
    id: 'raw-experience',
    year: '2023',
    role: 'Special Guest',
    event: 'The Raw Experience',
    location: 'Calabar, Nigeria',
    description:
      'Invited as a special guest performer at one of the biggest fitness parties in Calabar — a high-energy event celebrating movement, strength, and community.',
    flier: '/images/raw-experience-flier.png',
    accent: '#E8D4C4',
    tag: 'Featured Guest',
  },
  {
    id: '9ja-green-card',
    year: '2021',
    role: 'Host Brand Ambassador',
    event: 'The 9ja Green Card',
    location: 'Ultra-Fit Fitness Center · Uyo, Akwa Ibom',
    description:
      'Served as Host Brand Ambassador for the Independence fitness event, representing the brand and leading the movement experience at Ultra-Fit Fitness Center in Uyo.',
    flier: '/images/9ja-green-card-flier.png',
    accent: '#F4C6C6',
    tag: 'Brand Ambassador',
  },
];

export default function Recognitions() {
  return (
    <section id="recognitions" className="relative bg-brand-black py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-lime/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-5"
        >
          <span className="block w-8 h-[1px] bg-brand-lime" />
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-brand-lime font-medium">
            Recognition
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
          Stages &{' '}
          <span className="italic text-gradient-lime">Milestones</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {recognitions.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative bg-brand-card border border-brand-border overflow-hidden group"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: item.accent, opacity: 0.7 }}
              />

              {/* Flier image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.flier}
                  alt={`${item.event} flier`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/30 to-transparent" />

                {/* Year badge */}
                <div
                  className="absolute top-4 left-4 font-sans text-[11px] tracking-widest uppercase font-medium px-3 py-1.5 border"
                  style={{ color: item.accent, borderColor: `${item.accent}50`, background: '#14141490' }}
                >
                  {item.year}
                </div>

                {/* Role tag */}
                <div
                  className="absolute top-4 right-4 font-sans text-[11px] tracking-widest uppercase font-medium px-3 py-1.5"
                  style={{ background: item.accent, color: '#080808' }}
                >
                  {item.tag}
                </div>
              </div>

              {/* Copy */}
              <div className="p-8">
                <p
                  className="font-sans text-[11px] tracking-[0.25em] uppercase font-medium mb-2"
                  style={{ color: item.accent }}
                >
                  {item.role}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-1">
                  {item.event}
                </h3>
                <p className="font-sans text-[12px] text-white/35 tracking-wide mb-5">
                  {item.location}
                </p>
                <p className="font-sans text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
