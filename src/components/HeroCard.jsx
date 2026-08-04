import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';

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
        className="w-full max-w-xl luxury-paper rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden text-center"
      >
        {/* Outer Islamic Arch Frame Graphic */}
        <div className="absolute inset-3 sm:inset-4 border border-[#D4AF37]/40 rounded-2xl pointer-events-none" />
        <div className="absolute inset-5 sm:inset-6 border border-[#C59B27]/20 rounded-xl pointer-events-none" />

        {/* Decorative Top Arch SVG Embellishment */}
        <div className="flex justify-center mb-4">
          <svg className="w-48 sm:w-64 h-10 text-[#D4AF37]" viewBox="0 0 200 40" fill="none">
            <path d="M10,35 Q100,5 190,35" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M30,35 Q100,15 170,35" stroke="currentColor" strokeWidth="0.75" fill="none" />
            <circle cx="100" cy="18" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Bismillah Arabic Calligraphy with Amiri font */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-4"
        >
          <p className="font-amiri text-3xl sm:text-4xl text-[#3E2A1E] font-bold leading-relaxed tracking-wide drop-shadow-sm">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="font-poppins text-[10px] sm:text-xs tracking-[0.25em] text-[#8A6529] uppercase mt-2 font-semibold">
            IN THE NAME OF ALLAH
          </p>
          <p className="font-poppins text-[9px] sm:text-[11px] tracking-[0.2em] text-[#8A6529] uppercase font-medium">
            THE MOST GRACIOUS & THE MOST MERCIFUL
          </p>
        </motion.div>

        {/* Divider Flourish */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#C59B27] text-xs">❖</span>
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Invitation Honor Text */}
        <div className="my-4 px-2 space-y-1">
          <p className="font-poppins text-[10px] sm:text-xs tracking-[0.18em] text-[#8A6529] uppercase font-semibold leading-relaxed">
            TOGETHER WITH OUR FAMILIES WE REQUEST THE HONOR
          </p>
          <p className="font-poppins text-[10px] sm:text-xs tracking-[0.18em] text-[#8A6529] uppercase font-semibold leading-relaxed">
            OF YOUR PRESENCE AT THE NIKAH CEREMONY OF
          </p>
        </div>

        {/* Center Monogram Emblem */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="my-6 flex justify-center"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#D4AF37] gold-gradient-bg/10 flex items-center justify-center p-2 shadow-md relative group">
            <div className="w-full h-full rounded-full border border-[#C59B27]/40 flex flex-col items-center justify-center">
              <span className="font-amiri text-2xl sm:text-3xl font-bold text-[#8A6529]">
                ش <span className="text-xs font-serif">&</span> ج
              </span>
            </div>
          </div>
        </motion.div>

        {/* Groom & Bride Details Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 items-center border-y border-[#D4AF37]/30 py-6"
        >
          {/* Bride (Jumana) */}
          <div className="space-y-1.5 text-center">
            <h2 className="font-amiri text-3xl sm:text-4xl text-[#3E2A1E] font-bold">
              جمانة
            </h2>
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#2C1A0E] font-medium italic">
              Jumana
            </h3>
            <p className="font-poppins text-xs text-[#8A6529] font-medium leading-relaxed pt-1">
              D/o Risaludheen &<br />
              Fathimathu Shajiya (Late)
            </p>
          </div>

          {/* Groom (Shahabas) */}
          <div className="space-y-1.5 text-center">
            <h2 className="font-amiri text-3xl sm:text-4xl text-[#3E2A1E] font-bold">
              شهباس
            </h2>
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#2C1A0E] font-medium italic">
              Shahabas
            </h3>
            <p className="font-poppins text-xs text-[#8A6529] font-medium leading-relaxed pt-1">
              S/o Shamsudheen KS &<br />
              Naseema
            </p>
          </div>
        </motion.div>

        {/* Date Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="my-5 space-y-1"
        >
          <p className="font-playfair text-3xl sm:text-4xl font-bold tracking-widest text-[#3E2A1E]">
            09 / 08 / 2026
          </p>
          <p className="font-poppins text-xs sm:text-sm tracking-[0.3em] font-semibold text-[#8A6529] uppercase">
            SUNDAY
          </p>
        </motion.div>

        {/* Venue Location Pin */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-[#F5EEDC]/80 border border-[#D4AF37]/50 my-3 shadow-xs text-[#3E2A1E]"
        >
          <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 fill-current" />
          <span className="font-poppins text-xs sm:text-sm font-semibold tracking-wide">
            Laurel Garden, Ussanmotta, Punnol
          </span>
        </motion.div>

        {/* Insha Allah Calligraphy */}
        <div className="my-5">
          <p className="font-amiri text-2xl sm:text-3xl text-[#3E2A1E] font-bold tracking-wide">
            إنْ شَاءَ ٱللَّٰهُ
          </p>
        </div>

        {/* Quranic Verse Calligraphy Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-6 pt-4 border-t border-[#D4AF37]/30"
        >
          <p className="font-amiri text-2xl sm:text-3xl text-[#8A6529] font-bold leading-relaxed">
            وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
        </motion.div>

        {/* Glowing Scroll Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-8"
        >
          <button
            onClick={scrollToDetails}
            className="glow-button ripple px-8 py-3.5 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-semibold text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 mx-auto"
          >
            <span>View Full Details</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

