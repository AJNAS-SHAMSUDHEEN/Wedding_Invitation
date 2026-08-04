import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown, Heart } from 'lucide-react';

export default function HeroCard() {
  const scrollToDetails = () => {
    const el = document.getElementById('couple-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for smooth staggered entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const itemScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 200 }
    },
  };

  const lineExpand = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 z-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl luxury-paper rounded-3xl p-6 sm:p-12 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden text-center"
      >
        {/* Outer Islamic Arch Frame Graphic */}
        <div className="absolute inset-3 sm:inset-4 border border-[#D4AF37]/40 rounded-2xl pointer-events-none" />
        <div className="absolute inset-5 sm:inset-6 border border-[#C59B27]/20 rounded-xl pointer-events-none" />

        {/* 1. Top Decorative Arch SVG Embellishment with Apex Dot */}
        <motion.div variants={itemFadeUp} className="flex justify-center mb-3">
          <svg className="w-56 sm:w-72 h-12 text-[#D4AF37]" viewBox="0 0 200 45" fill="none">
            {/* Top Outer Curved Arch Line */}
            <motion.path 
              d="M10,38 Q100,6 190,38" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Inner Parallel Curved Arch Line */}
            <motion.path 
              d="M30,38 Q100,16 170,38" 
              stroke="currentColor" 
              strokeWidth="0.8" 
              fill="none" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            {/* Top Apex Golden Dot */}
            <motion.circle 
              cx="100" 
              cy="18" 
              r="3.5" 
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
            />
          </svg>
        </motion.div>

        {/* 2. Bismillah Arabic Calligraphy */}
        <motion.div variants={itemFadeUp} className="mb-4">
          <p className="font-amiri text-3xl sm:text-4xl text-[#3E2A1E] font-bold leading-relaxed tracking-wide drop-shadow-sm">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="font-poppins text-[10px] sm:text-xs tracking-[0.25em] text-[#8A6529] uppercase mt-2 font-semibold max-w-xs mx-auto leading-relaxed">
            IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL
          </p>
        </motion.div>

        {/* 3. Golden Flourish Divider (Line — ❖ — Line) */}
        <motion.div variants={itemScale} className="flex items-center justify-center gap-3 my-5">
          <motion.div 
            variants={lineExpand}
            className="h-[1.5px] w-14 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37] origin-right" 
          />
          <motion.span 
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-[#C59B27] text-sm font-bold inline-block"
          >
            ❖
          </motion.span>
          <motion.div 
            variants={lineExpand}
            className="h-[1.5px] w-14 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37] origin-left" 
          />
        </motion.div>

        {/* 4. Wedding Invitation Title */}
        <motion.div variants={itemFadeUp} className="space-y-2 mb-3">
          <h1 className="font-playfair text-xs sm:text-sm tracking-[0.35em] text-[#8A6529] uppercase font-bold">
            WEDDING INVITATION
          </h1>
          {/* 5. Pulsing Golden Heart Icon */}
          <div className="flex justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.25, 1],
                filter: ["drop-shadow(0 0 2px rgba(212,175,55,0.4))", "drop-shadow(0 0 8px rgba(212,175,55,0.8))", "drop-shadow(0 0 2px rgba(212,175,55,0.4))"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-[#D4AF37] fill-current" />
            </motion.div>
          </div>
        </motion.div>

        {/* 6. Groom Name (Shahabas) - Elegant Calligraphy */}
        <motion.div variants={itemFadeUp} className="mt-4 mb-2">
          <motion.h2 
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-playfair text-5xl sm:text-6xl text-[#2C1A0E] font-normal italic tracking-wider font-serif inline-block cursor-default"
          >
            Shahabas
          </motion.h2>
        </motion.div>

        {/* 7. Elegant Oval Capsule Flanked Connector (— & —) */}
        <motion.div variants={itemScale} className="flex items-center justify-center gap-3 sm:gap-4 my-3">
          {/* Left Oval Capsule / Leaf Shape */}
          <div className="flex items-center">
            <div className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-5 h-2 rounded-full border border-[#D4AF37] gold-gradient-bg/20" />
          </div>

          <motion.span 
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="font-playfair italic text-2xl sm:text-3xl text-[#C59B27] font-bold px-1 inline-block"
          >
            &
          </motion.span>

          {/* Right Oval Capsule / Leaf Shape */}
          <div className="flex items-center">
            <div className="w-5 h-2 rounded-full border border-[#D4AF37] gold-gradient-bg/20" />
            <div className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* 8. Bride Name (Jumana) - Elegant Calligraphy */}
        <motion.div variants={itemFadeUp} className="mb-6">
          <motion.h2 
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-playfair text-5xl sm:text-6xl text-[#2C1A0E] font-normal italic tracking-wider font-serif inline-block cursor-default"
          >
            Jumana
          </motion.h2>
        </motion.div>

        {/* Honor / Family Text */}
        <motion.div variants={itemFadeUp} className="my-5 border-t border-b border-[#D4AF37]/30 py-4 px-2 space-y-1.5">
          <p className="font-poppins text-[10px] sm:text-xs tracking-[0.18em] text-[#8A6529] uppercase font-semibold leading-relaxed">
            TOGETHER WITH OUR FAMILIES WE REQUEST THE HONOR
          </p>
          <p className="font-poppins text-[10px] sm:text-xs tracking-[0.18em] text-[#8A6529] uppercase font-semibold leading-relaxed">
            OF YOUR PRESENCE AT THE NIKAH CEREMONY
          </p>
        </motion.div>

        {/* Date Display */}
        <motion.div variants={itemFadeUp} className="my-5 space-y-1">
          <p className="font-playfair text-3xl sm:text-4xl font-bold tracking-widest text-[#3E2A1E]">
            09 / 08 / 2026
          </p>
          <p className="font-poppins text-xs sm:text-sm tracking-[0.3em] font-semibold text-[#8A6529] uppercase">
            SUNDAY
          </p>
        </motion.div>

        {/* Venue Location Pin */}
        <motion.div 
          variants={itemScale}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-[#F5EEDC]/80 border border-[#D4AF37]/50 my-3 shadow-xs text-[#3E2A1E] cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 fill-current" />
          <span className="font-poppins text-xs sm:text-sm font-semibold tracking-wide">
            Laurel Garden, Ussanmotta, Punnol
          </span>
        </motion.div>

        {/* Insha Allah Calligraphy */}
        <motion.div variants={itemFadeUp} className="my-4">
          <p className="font-amiri text-2xl sm:text-3xl text-[#3E2A1E] font-bold tracking-wide">
            إنْ شَاءَ ٱللَّٰهُ
          </p>
        </motion.div>

        {/* Glowing Scroll Button */}
        <motion.div variants={itemFadeUp} className="text-center mt-6">
          <button
            onClick={scrollToDetails}
            className="glow-button ripple px-8 py-3.5 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-semibold text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 mx-auto cursor-pointer"
          >
            <span>View Full Details</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

