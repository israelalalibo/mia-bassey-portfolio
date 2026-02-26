'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// ── Social config ─────────────────────────────────────────────────────────────
const INSTAGRAM_HANDLE = 'miabassey';
const WHATSAPP_NUMBER  = '447836626727'; // international format, no +

// Build WhatsApp click-to-chat URL with pre-filled message
function buildWhatsAppUrl(name: string, email: string, inquiry: string, message: string): string {
  const text = [
    `Hi Mia! 👋`,
    ``,
    `My name is ${name || '[Name]'} and I found you through your website.`,
    inquiry ? `Inquiry type: ${inquiry}` : '',
    email   ? `Email: ${email}` : '',
    ``,
    message || '[Message]',
    ``,
    `Looking forward to hearing from you! ✨`,
  ]
    .filter((line) => line !== undefined)
    .join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Instagram profile / DM
const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const INSTAGRAM_DM_URL      = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

// ── Types ─────────────────────────────────────────────────────────────────────
type FormData = {
  name: string;
  email: string;
  inquiry: string;
  message: string;
};

const inquiryTypes = [
  'Performance Booking',
  'Flexibility Coaching',
  'Brand Partnership',
  'Workshop / Event',
  'Other',
];

// ── Icons ─────────────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.528 5.845L0 24l6.335-1.652A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.993-3.63-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace with your email service (EmailJS / Resend / Formspree)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('sent');
      setForm({ name: '', email: '', inquiry: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-transparent border border-brand-border px-5 py-4 font-sans text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue transition-colors duration-300';

  return (
    <section id="contact" className="relative bg-brand-black py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left — Info ─────────────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-5"
            >
              <span className="block w-8 h-[1px] bg-brand-blue" />
              <span className="font-sans text-xs tracking-[0.35em] uppercase text-brand-blue font-medium">
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Let&apos;s create{' '}
              <span className="italic text-gradient-blue">something</span>{' '}
              unforgettable.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-white/55 leading-relaxed mb-10 max-w-md"
            >
              Whether you&apos;re booking a performance, exploring coaching, or discussing
              a brand partnership — reach out via the form, WhatsApp, or Instagram DM.
            </motion.p>

            {/* ── Quick contact cards ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {/* WhatsApp card */}
              <a
                href={buildWhatsAppUrl('', '', '', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-brand-card border border-brand-border hover:border-[#25D366] transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                    <WhatsAppIcon />
                  </span>
                  <div>
                    <p className="font-sans text-sm text-white font-medium">Message on WhatsApp</p>
                    <p className="font-sans text-[12px] text-white/40 mt-0.5">
                      Tap to open a pre-filled enquiry
                    </p>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-[#25D366] transition-colors">
                  <ArrowIcon />
                </span>
              </a>

              {/* Instagram DM card */}
              <a
                href={INSTAGRAM_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-brand-card border border-brand-border hover:border-[#E1306C] transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] flex-shrink-0">
                    <InstagramIcon />
                  </span>
                  <div>
                    <p className="font-sans text-sm text-white font-medium">Send an Instagram DM</p>
                    <p className="font-sans text-[12px] text-white/40 mt-0.5">
                      @{INSTAGRAM_HANDLE} · Opens Instagram
                    </p>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-[#E1306C] transition-colors">
                  <ArrowIcon />
                </span>
              </a>

              {/* Instagram profile card */}
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-brand-card border border-brand-border hover:border-white/30 transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 flex-shrink-0">
                    <InstagramIcon />
                  </span>
                  <div>
                    <p className="font-sans text-sm text-white font-medium">View Instagram Profile</p>
                    <p className="font-sans text-[12px] text-white/40 mt-0.5">
                      @{INSTAGRAM_HANDLE}
                    </p>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">
                  <ArrowIcon />
                </span>
              </a>
            </motion.div>

            {/* Location / availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 pt-6 border-t border-brand-border"
            >
              {[
                { icon: '📍', label: 'Location', value: 'Manchester, United Kingdom' },
                { icon: '✈️', label: 'Availability', value: 'UK-wide · International on request' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="font-sans text-[11px] tracking-widest uppercase text-white/30 mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-white/60 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Form ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {status === 'sent' ? (
              <div className="bg-brand-card border border-brand-blue/30 p-12 text-center glow-blue">
                <div className="text-4xl mb-5">🌸</div>
                <h3 className="font-serif text-2xl text-white mb-3">Message received!</h3>
                <p className="font-sans text-white/55 text-sm leading-relaxed">
                  Thank you for reaching out. I&apos;ll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 btn-outline text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-sans text-[11px] tracking-widest uppercase text-white/40 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] tracking-widest uppercase text-white/40 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] tracking-widest uppercase text-white/40 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    required
                    value={form.inquiry}
                    onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                    style={{
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23666' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                    }}
                  >
                    <option value="" disabled>Select an option...</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t} style={{ background: '#141414', color: '#fff' }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[11px] tracking-widest uppercase text-white/40 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, event, or goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-sans text-xs text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Primary: Send via WhatsApp (form data pre-filled) */}
                <a
                  href={buildWhatsAppUrl(form.name, form.email, form.inquiry, form.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 font-sans text-xs tracking-widest uppercase font-medium transition-all duration-300 bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                  style={{ display: 'flex' }}
                >
                  <WhatsAppIcon />
                  <span>Send via WhatsApp</span>
                </a>

                {/* Divider */}
                <div className="flex items-center gap-4 py-1">
                  <span className="flex-1 h-px bg-brand-border" />
                  <span className="font-sans text-[11px] uppercase tracking-widest text-white/25">or</span>
                  <span className="flex-1 h-px bg-brand-border" />
                </div>

                {/* Secondary: email form submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary justify-center"
                >
                  {status === 'sending' ? (
                    <span className="animate-pulse">Sending…</span>
                  ) : (
                    <>
                      <span>Send by Email</span>
                      <ArrowIcon />
                    </>
                  )}
                </button>

                <p className="text-center font-sans text-[11px] text-white/25 pt-1">
                  I respond within 48 hours · All enquiries welcome
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
