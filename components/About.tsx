'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const traits = [
  {
    icon: '⚡',
    label: 'Power',
    desc: 'Trained in strength & conditioning with a foundation in biochemistry.',
  },
  {
    icon: '🌿',
    label: 'Suppleness',
    desc: 'Certified contortionist and flexibility coach with years of movement mastery.',
  },
  {
    icon: '🎓',
    label: 'Science',
    desc: 'BSc Biochemistry graduate — coaching backed by anatomy and physiology.',
  },
  {
    icon: '🌍',
    label: 'Journey',
    desc: 'Lagos → UK. Every step a new chapter in the pursuit of movement and excellence.',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="relative bg-brand-dark overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="block w-8 h-[1px] bg-brand-blue" />
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-brand-blue font-medium">
            The Story
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image stack */}
          <div ref={ref} className="relative">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/images/profile.jpg"
                alt="Mia Bassey — Flexibility Coach & Contortionist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -right-6 top-1/3 bg-brand-card border border-brand-border p-5 max-w-[180px] glow-blue"
            >
              <p className="font-serif text-3xl text-brand-blue font-light leading-none mb-2">
                Dual
              </p>
              <p className="font-serif text-3xl text-white font-light leading-none italic mb-3">
                Threat.
              </p>
              <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                Strength athlete meets contortion artist
              </p>
            </motion.div>

            {/* Second image overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 w-40 h-52 overflow-hidden border-2 border-brand-black"
            >
              <Image
                src="/images/symmetry.jpg"
                alt="Mia Bassey — Symmetry"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>
          </div>

          {/* Right — Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Allow me to{' '}
              <span className="italic text-gradient-blue">reintroduce</span>{' '}
              myself.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sans text-white/60 leading-relaxed mb-4 text-base"
            >
              My name is <strong className="text-white font-medium">Mia Bassey</strong> —
              Certified Stretch & Flexibility Coach, holding a BSc in Biochemistry and
              currently pursuing my MSc in Project Management.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="font-sans text-white/60 leading-relaxed mb-4 text-base"
            >
              My journey has been one of movement and growth. From Lagos to Uyo,
              through NYSC, and now the United Kingdom — every step has been a search
              for the life I envisioned. One where I could create something meaningful,
              inspire others, and leave my mark.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="font-sans text-white/60 leading-relaxed mb-10 text-base"
            >
              Now I&apos;m in a new chapter: building, evolving, and sharing the gift
              of movement, flexibility, and strength with those ready to unlock their
              fullest potential.
            </motion.p>

            {/* Traits grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {traits.map((t) => (
                <motion.div
                  key={t.label}
                  variants={itemVariants}
                  className="bg-brand-card border border-brand-border p-5 card-hover"
                >
                  <span className="text-xl mb-3 block">{t.icon}</span>
                  <p className="font-sans text-xs tracking-widest uppercase text-brand-blue mb-2 font-medium">
                    {t.label}
                  </p>
                  <p className="font-sans text-white/50 text-[13px] leading-relaxed">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Signature line */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-brand-border flex items-center gap-4"
            >
              <div>
                <p className="font-serif italic text-xl text-white">Your Flexibility Coach,</p>
                <p className="font-serif text-2xl text-brand-blue mt-1">Mia 🌸</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
