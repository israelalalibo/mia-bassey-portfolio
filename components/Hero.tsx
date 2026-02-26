'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Slide = {
  src: string;
  label: string;
};

const slides: Slide[] = [
  { src: '/videos/yoga.mp4',              label: 'My heart is in the right place' },
  { src: '/videos/first-pose.mp4',        label: 'When I hit that first pose…' },
  { src: '/videos/move-with-intention.mp4', label: 'Learn to move with intention' },
  { src: '/videos/fitness-routine.mp4',   label: '3–4 times a week, every week' },
  { src: '/videos/lifestyle.mp4',         label: 'Busy, healthy & out the way' },
  { src: '/videos/stretch-together.mp4',  label: 'Moving together' },
  { src: '/videos/clearing-draft.mp4',    label: 'Always creating' },
];

// Max time per slide before auto-advancing (ms)
const SLIDE_DURATION = 9000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(Array(slides.length).fill(false));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // Auto-advance on video end or after SLIDE_DURATION
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(advance, SLIDE_DURATION);
  }, [advance]);

  // Play current video when index changes
  useEffect(() => {
    const vid = videoRefs.current[current];
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  const goTo = (i: number) => {
    if (i === current) return;
    const vid = videoRefs.current[current];
    if (vid) vid.pause();
    setCurrent(i);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Video stack ── */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <video
            key={slide.src}
            ref={(el) => { videoRefs.current[i] = el; }}
            src={slide.src}
            autoPlay={i === 0}
            loop={false}
            muted
            playsInline
            onCanPlay={() =>
              setLoaded((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              })
            }
            onEnded={() => { if (i === current) advance(); }}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{
              opacity: i === current && loaded[i] ? 1 : 0,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Fallback image until first video loads */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-top transition-opacity duration-700"
          style={{
            backgroundImage: "url('/images/profile.jpg')",
            opacity: loaded[current] ? 0 : 1,
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 video-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-brand-black/40" />
      </div>

      {/* ── Decorative vertical line ── */}
      <div className="absolute top-1/2 left-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-blue to-transparent -translate-y-1/2 ml-6 md:ml-12" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="block w-8 h-[1px] bg-brand-blue" />
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-brand-blue font-medium">
              Manchester · UK
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif font-light leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            <span className="block text-white">Bent</span>
            <span className="block italic text-gradient-blue">Not</span>
            <span className="block text-white">Broken.</span>
          </motion.h1>

          {/* Animated slide caption */}
          <div className="h-6 mt-6 mb-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="font-sans text-white/50 text-sm tracking-wide italic"
              >
                {slides[current].label}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <span>Book a Session</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex gap-10 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: 'BSc', label: 'Biochemistry' },
              { value: 'Certified', label: 'Flexibility Coach' },
              { value: 'MCR', label: 'Manchester' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-xl text-brand-blue font-medium">{stat.value}</p>
                <p className="font-sans text-[11px] tracking-widest uppercase text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Slide dots ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 right-6 md:right-12 z-10 flex flex-col items-center gap-2"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="group flex items-center gap-2"
          >
            <span className="font-sans text-[10px] text-white/30 group-hover:text-white/60 transition-colors tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`block transition-all duration-500 ${
                i === current
                  ? 'w-6 h-[2px] bg-brand-blue'
                  : 'w-2 h-[1px] bg-white/30 group-hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </motion.div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[2px] bg-white/5">
        <motion.div
          key={current}
          className="h-full bg-brand-blue"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
        />
      </div>

      {/* ── Scroll cue ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 group"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.button>
    </section>
  );
}
