import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-6 sm:py-8 px-2 sm:px-4 border-t border-[#D4AF37]/30 z-10 text-center space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto space-y-3"
      >
        {/* Arabic In Sha Allah */}
        <p className="font-amiri text-3xl sm:text-4xl text-[#3E2A1E] font-bold tracking-wide">
          إنْ شَاءَ ٱللَّٰهُ
        </p>

        <div className="w-12 h-[1px] gold-gradient-bg mx-auto" />

        {/* English Prayers Text */}
        <p className="font-cormorant text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#8A6529]">
          Thank You For Your Prayers
        </p>

        <p className="font-poppins text-xs text-[#5C3A21] font-medium">
          See you at Laurel Garden on our special day.
        </p>

        <p className="font-poppins text-[10px] text-[#8A6529]/60 pt-6">
          Shahabas & Jumana Nikah Ceremony • 09 August 2026
        </p>
      </motion.div>
    </footer>
  );
}
