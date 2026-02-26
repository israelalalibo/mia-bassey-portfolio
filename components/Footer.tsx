'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-2xl font-light tracking-[0.2em] text-white">
              MIA<span className="text-brand-blue font-medium">.</span>
            </p>
            <p className="font-sans text-[11px] tracking-widest uppercase text-white/30 mt-1">
              Contortionist & Flexibility Coach
            </p>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {['About', 'Gallery', 'Services', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="font-sans text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors animated-underline"
              >
                {link}
              </button>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Instagram profile */}
            <a
              href="https://www.instagram.com/miabassey/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-brand-border flex items-center justify-center text-white/40 hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Instagram DM */}
            <a
              href="https://ig.me/m/miabassey"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 h-10 border border-brand-border text-white/40 text-[11px] tracking-widest uppercase font-sans hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-300"
              aria-label="Instagram DM"
            >
              DM
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/447836626727?text=Hi%20Mia!%20I%20found%20you%20through%20your%20website%20and%20would%20love%20to%20connect%20%E2%9C%A8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-brand-border flex items-center justify-center text-white/40 hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.528 5.845L0 24l6.335-1.652A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.993-3.63-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-white/25">
            © {new Date().getFullYear()} Mia Bassey. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-white/25">
            Manchester, United Kingdom 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}
