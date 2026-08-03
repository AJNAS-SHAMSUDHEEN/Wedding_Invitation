import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown, Heart } from 'lucide-react';

export default function HeroCard() {
  const scrollToDetails = () => {
    const el = document.getElementById('couple-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl luxury-paper rounded-3xl p-5 sm:p-8 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden"
      >
        {/* Outer Islamic Arch Frame Graphic */}
        <div className="absolute inset-3 sm:inset-4 border border-[#D4AF37]/40 rounded-2xl pointer-events-none" />
        <div className="absolute inset-5 sm:inset-6 border border-[#C59B27]/20 rounded-xl pointer-events-none" />

        {/* Decorative Top Arch SVG Embellishment */}
        <div className="flex justify-center mb-4">
          <svg className="w-48 sm:w-64 h-12 text-[#D4AF37]" viewBox="0 0 200 40" fill="none">
            <path d="M10,35 Q100,5 190,35" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M30,35 Q100,15 170,35" stroke="currentColor" strokeWidth="0.75" fill="none" />
            <circle cx="100" cy="18" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Bismillah Arabic Calligraphy */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-center mb-3"
        >
          <p className="font-amiri text-2xl sm:text-4xl text-[#3E2A1E] leading-relaxed tracking-wide drop-shadow-sm">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
          </p>
          <p className="font-poppins text-[10px] sm:text-xs tracking-[0.2em] text-[#8A6529] uppercase mt-2 font-medium">
            IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL
          </p>
        </motion.div>

        {/* Divider Flourish */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#C59B27] text-xs">❖</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Wedding Invitation Title */}
        <div className="text-center my-2">
          <h2 className="font-cormorant text-xs sm:text-sm tracking-[0.35em] text-[#8A6529] uppercase font-bold">
            WEDDING INVITATION
          </h2>
          <div className="flex justify-center items-center my-1 text-[#C59B27]">
            <Heart className="w-3.5 h-3.5 fill-current opacity-80" />
          </div>
        </div>

        {/* Couple Names Calligraphy Styling */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-center my-6 space-y-2"
        >
          <h1 className="font-playfair text-4xl sm:text-6xl text-[#2C1A0E] font-normal tracking-wide drop-shadow-xs italic">
            Midlaj
          </h1>
          
          <div className="flex items-center justify-center gap-3 py-1">
            <svg className="w-8 sm:w-12 h-4 text-[#D4AF37]" viewBox="0 0 40 15" fill="currentColor">
              <path d="M0,7 Q20,0 40,7 Q20,14 0,7 Z" opacity="0.6"/>
            </svg>
            <span className="font-cormorant text-2xl sm:text-3xl text-[#C59B27] italic font-semibold">&</span>
            <svg className="w-8 sm:w-12 h-4 text-[#D4AF37] transform scale-x-[-1]" viewBox="0 0 40 15" fill="currentColor">
              <path d="M0,7 Q20,0 40,7 Q20,14 0,7 Z" opacity="0.6"/>
            </svg>
          </div>

          <h1 className="font-playfair text-4xl sm:text-6xl text-[#2C1A0E] font-normal tracking-wide drop-shadow-xs italic">
            Rashmila
          </h1>
        </motion.div>

        {/* Date & Time Container Box matching image */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto max-w-md my-6 border border-[#D4AF37]/60 rounded-xl p-3 sm:p-4 bg-[#F5EEDC]/40 backdrop-blur-xs flex items-center justify-around text-center shadow-xs"
        >
          {/* Date Left */}
          <div className="flex items-center gap-2.5 px-2">
            <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#8A6529]">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block font-poppins text-[10px] tracking-wider text-[#8A6529] font-semibold uppercase">
                SUNDAY
              </span>
              <span className="block font-cormorant text-sm sm:text-base font-bold text-[#3E2A1E]">
                16 AUGUST 2026
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="h-10 w-[1px] bg-[#D4AF37]/50" />

          {/* Time Right */}
          <div className="flex items-center gap-2.5 px-2">
            <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#8A6529]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block font-cormorant text-sm sm:text-base font-bold text-[#3E2A1E]">
                10:30 AM
              </span>
            </div>
          </div>
        </motion.div>

        {/* Glowing "You're Invited" Scroll Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-6"
        >
          <button
            onClick={scrollToDetails}
            className="glow-button ripple px-8 py-3.5 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-semibold text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 mx-auto"
          >
            <span>You're Invited</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
