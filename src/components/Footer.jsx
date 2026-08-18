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
          See you at Kozhisseri on our special day.
        </p>

        <p className="font-poppins text-[10px] text-[#8A6529]/60 pt-4">
          Jafakas A K & Dr. Najiya Nikah Ceremony • 19 September 2026
        </p>

        {/* Designed by AJ Creations (WhatsApp Redirect) */}
        <div className="pt-2 flex items-center justify-center gap-1.5">
          <span className="font-poppins text-[10px] sm:text-xs text-[#8A6529]/70 font-medium">
            Designed by
          </span>
          <a
            href="https://wa.me/918921202909?text=Hi%20AJ%20Creations%2C%20I%20am%20interested%20in%20creating%20a%20digital%20wedding%20invitation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-poppins text-[10px] sm:text-xs font-bold text-[#8A6529] hover:text-[#2C1A0E] transition-all transform hover:scale-105 active:scale-95 underline underline-offset-4 decoration-[#D4AF37]/60 hover:decoration-[#D4AF37]"
          >
            <span>AJ Creations</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
