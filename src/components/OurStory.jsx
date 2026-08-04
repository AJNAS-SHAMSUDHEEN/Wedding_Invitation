import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="luxury-paper rounded-3xl p-5 sm:p-8 border border-[#D4AF37]/50 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Subtle Islamic Geometric Grid Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Top Quote Icon */}
          <div className="w-14 h-14 rounded-full gold-gradient-bg text-[#2C1A0E] mx-auto flex items-center justify-center shadow-lg mb-6">
            <Quote className="w-7 h-7 fill-current" />
          </div>

          {/* Arabic Surah Ar-Rum Verse */}
          <p className="font-amiri text-2xl sm:text-4xl text-[#3E2A1E] leading-relaxed mb-6 font-bold">
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>

          {/* English Translation */}
          <blockquote className="font-cormorant text-xl sm:text-2xl italic text-[#5C3A21] max-w-2xl mx-auto leading-relaxed">
            "And among His signs is that He created for you mates from among yourselves that you may find tranquility in them, and He placed between you affection and mercy."
          </blockquote>

          <div className="mt-4">
            <span className="font-poppins text-xs uppercase tracking-[0.25em] text-[#8A6529] font-bold">
              — Surah Ar-Rum (30:21)
            </span>
          </div>

          <div className="w-24 h-[1px] gold-gradient-bg mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
}
