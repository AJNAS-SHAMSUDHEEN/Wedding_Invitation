import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass } from 'lucide-react';

export default function MapSection() {
  const brideMap = "https://maps.app.goo.gl/1KUsQpPJ5yCh8ioY7";
  const groomMap = "https://maps.app.goo.gl/a6da94FsVA5J4vdF6";

  return (
    <section className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="font-poppins text-xs uppercase tracking-[0.3em] text-[#8A6529] font-semibold flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4" /> Location Guidance
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold mt-2">
            Interactive Venue Maps
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-[#8A6529] mt-2 max-w-md mx-auto">
            Click on any location below to open directions in Google Maps
          </p>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Bride Residence */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="glass-card rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/40 shadow-xl flex flex-col justify-between space-y-4 relative overflow-hidden"
          >
            {/* Top Map Banner Pattern */}
            <div className="h-32 rounded-2xl bg-gradient-to-br from-[#EFE8D8] to-[#F5EEDC] p-4 flex flex-col justify-between relative overflow-hidden border border-[#D4AF37]/30">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="flex justify-between items-start z-10">
                <span className="bg-[#D4AF37]/20 text-[#8A6529] font-poppins text-[10px] font-bold uppercase px-3 py-1 rounded-full backdrop-blur-xs">
                  Nikah Venue
                </span>
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5 fill-current text-[#2C1A0E]" />
                </div>
              </div>
              <div className="z-10">
                <span className="font-poppins text-xs text-[#8A6529] font-semibold uppercase tracking-wider block">
                  Chalode, Kannur
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold text-[#2C1A0E]">
                Bride Residence
              </h3>
              <p className="font-poppins text-xs text-[#5C3A21]">
                Chalode, Kannur, Kerala
              </p>
            </div>

            <a
              href={brideMap}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple w-full py-3.5 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-semibold text-xs uppercase tracking-widest shadow-md hover:brightness-110 transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Open Maps</span>
            </a>
          </motion.div>

          {/* Card 2: Groom Residence */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="glass-card rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/40 shadow-xl flex flex-col justify-between space-y-4 relative overflow-hidden"
          >
            {/* Top Map Banner Pattern */}
            <div className="h-32 rounded-2xl bg-gradient-to-br from-[#EFE8D8] to-[#F5EEDC] p-4 flex flex-col justify-between relative overflow-hidden border border-[#D4AF37]/30">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="flex justify-between items-start z-10">
                <span className="bg-[#D4AF37]/20 text-[#8A6529] font-poppins text-[10px] font-bold uppercase px-3 py-1 rounded-full backdrop-blur-xs">
                  Groom Residence
                </span>
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5 fill-current text-[#2C1A0E]" />
                </div>
              </div>
              <div className="z-10">
                <span className="font-poppins text-xs text-[#8A6529] font-semibold uppercase tracking-wider block">
                  Koodali, Kannur
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold text-[#2C1A0E]">
                Darul Aman
              </h3>
              <p className="font-poppins text-xs text-[#5C3A21]">
                Koodali, Kannur, Kerala
              </p>
            </div>

            <a
              href={groomMap}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple w-full py-3.5 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-semibold text-xs uppercase tracking-widest shadow-md hover:brightness-110 transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Open Maps</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
