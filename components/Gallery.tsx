'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  caption: string;
  category: 'contortion' | 'fitness' | 'lifestyle';
  span?: 'tall' | 'wide' | 'normal';
};

const mediaItems: MediaItem[] = [
  // ── Contortion ─────────────────────────────────────────────────
  {
    id: 1,
    type: 'image',
    src: '/images/profile.jpg',
    caption: 'The Art of Balance',
    category: 'contortion',
    span: 'tall',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/symmetry.jpg',
    caption: 'Symmetry · @mjphotography_official',
    category: 'contortion',
    span: 'normal',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/art-passion.jpg',
    caption: "If your art doesn't consume you, you're not passionate enough",
    category: 'contortion',
    span: 'wide',
  },
  {
    id: 8,
    type: 'video',
    src: '/videos/first-pose.mp4',
    poster: '/images/profile.jpg',
    caption: "When I hit that first pose, just know it\u2019s about to get serious",
    category: 'contortion',
    span: 'normal',
  },
  {
    id: 9,
    type: 'video',
    src: '/videos/stretch-together.mp4',
    poster: '/images/symmetry.jpg',
    caption: 'I still think about this day we stretched together',
    category: 'contortion',
    span: 'tall',
  },
  // ── Fitness ────────────────────────────────────────────────────
  {
    id: 4,
    type: 'video',
    src: '/videos/yoga.mp4',
    poster: '/images/lifestyle2.jpg',
    caption: 'My heart is in the right place',
    category: 'fitness',
    span: 'normal',
  },
  {
    id: 10,
    type: 'video',
    src: '/videos/move-with-intention.mp4',
    poster: '/images/lifestyle1.jpg',
    caption: "Learn to MOVE with INTENTION \u2014 life isn\u2019t moving too fast, you are",
    category: 'fitness',
    span: 'wide',
  },
  {
    id: 11,
    type: 'video',
    src: '/videos/fitness-routine.mp4',
    poster: '/images/lifestyle2.jpg',
    caption: 'Been doing this 3–4 times a week for the past 2 years',
    category: 'fitness',
    span: 'normal',
  },
  // ── Lifestyle ──────────────────────────────────────────────────
  {
    id: 5,
    type: 'image',
    src: '/images/lifestyle1.jpg',
    caption: 'Busy, healthy & out the way',
    category: 'lifestyle',
    span: 'normal',
  },
  {
    id: 6,
    type: 'video',
    src: '/videos/lifestyle.mp4',
    poster: '/images/lifestyle1.jpg',
    caption: 'Living the vision',
    category: 'lifestyle',
    span: 'tall',
  },
  {
    id: 7,
    type: 'image',
    src: '/images/lifestyle2.jpg',
    caption: 'Grateful for every decision I made early in life',
    category: 'lifestyle',
    span: 'normal',
  },
  {
    id: 12,
    type: 'video',
    src: '/videos/clearing-draft.mp4',
    poster: '/images/lifestyle2.jpg',
    caption: 'Clearing my draft — always creating',
    category: 'lifestyle',
    span: 'normal',
  },
];

const categories = ['all', 'contortion', 'fitness', 'lifestyle'] as const;
type Category = (typeof categories)[number];

// PlayIcon SVG
function PlayIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="white">
      <path d="M1 1L13 8L1 15V1Z" />
    </svg>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  const filtered =
    activeFilter === 'all'
      ? mediaItems
      : mediaItems.filter((m) => m.category === activeFilter);

  return (
    <section id="gallery" className="relative bg-brand-black py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-lime/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="block w-8 h-[1px] bg-brand-lime" />
              <span className="font-sans text-xs tracking-[0.35em] uppercase text-brand-lime font-medium">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif font-light leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Movement as <span className="italic text-gradient-lime">Art</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-sans text-[11px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-brand-lime text-brand-black border-brand-lime'
                    : 'border-brand-border text-white/50 hover:border-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setLightboxItem(item)}
                className={`relative overflow-hidden group cursor-pointer bg-brand-card ${
                  item.span === 'tall' ? 'row-span-2' : ''
                } ${item.span === 'wide' ? 'col-span-2' : ''}`}
                style={{
                  aspectRatio:
                    item.span === 'tall'
                      ? '3/5'
                      : item.span === 'wide'
                      ? '16/7'
                      : '1/1',
                }}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                ) : (
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <PlayIcon />
                    </div>
                  )}
                  <p className="font-sans text-xs text-white/80 leading-snug line-clamp-2">{item.caption}</p>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-brand-lime mt-1">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/96 backdrop-blur-lg flex items-center justify-center p-6"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxItem.type === 'image' ? (
                <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src={lightboxItem.src}
                    alt={lightboxItem.caption}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
              ) : (
                <video
                  src={lightboxItem.src}
                  poster={lightboxItem.poster}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain"
                />
              )}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-sans text-white/80 text-sm">{lightboxItem.caption}</p>
                  <p className="font-sans text-[11px] tracking-widest uppercase text-brand-lime mt-1">
                    {lightboxItem.category}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="font-sans text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
