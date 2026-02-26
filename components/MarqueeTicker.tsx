'use client';

import { motion } from 'framer-motion';

const items = [
  'Strength Meets Suppleness',
  '·',
  'Built Different. Bent Better.',
  '·',
  'The Body Is the Canvas.',
  '·',
  'Manchester, UK',
  '·',
  'Certified Flexibility Coach',
  '·',
  'Available for Bookings',
  '·',
];

export default function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden bg-brand-blue py-4 border-y border-brand-blue/20">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 18,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap gap-8"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-sans text-[11px] tracking-[0.25em] uppercase font-medium text-brand-black ${
              item === '·' ? 'opacity-50' : ''
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
