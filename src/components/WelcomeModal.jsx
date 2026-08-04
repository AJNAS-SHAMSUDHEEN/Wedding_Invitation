import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Heart, Music } from 'lucide-react';

export default function WelcomeModal({ isOpen, onOpen }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1C140E]/90 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-paper max-w-md w-full rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-2xl text-center relative overflow-hidden"
        >
          {/* Subtle Islamic Arch & Flourish Ornaments */}
          <div className="absolute inset-3 border border-[#D4AF37]/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-5 border border-[#C59B27]/20 rounded-xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            {/* Top Bismillah */}
            <p className="font-amiri text-2xl sm:text-3xl text-[#3E2A1E] leading-relaxed drop-shadow-sm font-bold">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>

            <span className="font-cormorant text-xs tracking-[0.3em] text-[#8A6529] uppercase font-bold block">
              NIKAH CEREMONY INVITATION
            </span>

            {/* Couple Names */}
            <div className="py-2">
              <h1 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] italic font-semibold">
                Shahabas & Jumana
              </h1>
              <p className="font-cormorant text-sm text-[#8A6529] font-bold mt-1">
                Sunday, 09 August 2026 • Laurel Garden, Punnol
              </p>
            </div>

            <p className="font-poppins text-xs text-[#5C3A21] max-w-xs mx-auto leading-relaxed">
              Together with our families we request the honor of your presence.
            </p>

            {/* Glowing Open Invitation Button */}
            <div className="pt-3">
              <button
                onClick={onOpen}
                className="glow-button ripple w-full py-4 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MailOpen className="w-4 h-4" />
                <span>Open Invitation</span>
                <Music className="w-3.5 h-3.5 animate-bounce ml-1 text-[#2C1A0E]" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
