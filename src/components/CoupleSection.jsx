import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section id="couple-section" className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="font-poppins text-xs uppercase tracking-[0.3em] text-[#8A6529] font-semibold">
            Together With Their Families
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold mt-2">
            Groom & Bride
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card rounded-3xl p-4 sm:p-8 border border-[#D4AF37]/40 shadow-xl relative overflow-hidden"
        >
          {/* Background Corner Floral Ornaments */}
          <div className="absolute top-2 left-2 text-[#D4AF37]/20 pointer-events-none">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="20" cy="20" r="15" />
              <path d="M20 20 Q50 10 70 30 T20 20 Z" />
            </svg>
          </div>
          <div className="absolute bottom-2 right-2 text-[#D4AF37]/20 pointer-events-none transform rotate-180">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="20" cy="20" r="15" />
              <path d="M20 20 Q50 10 70 30 T20 20 Z" />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Groom Details */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="luxury-paper p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 text-center space-y-4 shadow-sm"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#8A6529] font-poppins text-xs tracking-widest font-semibold uppercase">
                GROOM
              </div>

              <div className="space-y-1">
                <h3 className="font-playfair text-3xl sm:text-4xl text-[#2C1A0E] font-semibold italic">
                  Shahabas
                </h3>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#D4AF37]/20">
                <p className="font-poppins text-xs tracking-wider text-[#8A6529] font-medium">
                  S/o
                </p>
                <p className="font-cormorant text-lg sm:text-xl font-bold text-[#3E2A1E]">
                  Shamsudheen KS
                </p>
                <p className="font-cormorant text-lg sm:text-xl font-bold text-[#3E2A1E]">
                  & Naseema
                </p>
              </div>
            </motion.div>

            {/* Center Heart Divider (Mobile & Desktop) */}
            <div className="md:hidden flex justify-center -my-3">
              <div className="w-12 h-12 rounded-full gold-gradient-bg text-[#2C1A0E] flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 fill-current" />
              </div>
            </div>

            {/* Bride Details */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="luxury-paper p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 text-center space-y-4 shadow-sm"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#8A6529] font-poppins text-xs tracking-widest font-semibold uppercase">
                BRIDE
              </div>

              <div className="space-y-1">
                <h3 className="font-playfair text-3xl sm:text-4xl text-[#2C1A0E] font-semibold italic">
                  Jumana
                </h3>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#D4AF37]/20">
                <p className="font-poppins text-xs tracking-wider text-[#8A6529] font-medium">
                  D/o
                </p>
                <p className="font-cormorant text-lg sm:text-xl font-bold text-[#3E2A1E]">
                  Risaludheen
                </p>
                <p className="font-cormorant text-lg sm:text-xl font-bold text-[#3E2A1E]">
                  & Fathimathu Shajiya (Late)
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
