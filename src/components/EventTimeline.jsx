import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function EventTimeline() {
  const venueMapUrl = "https://www.google.com/maps/search/?api=1&query=Kozhisseri";

  return (
    <section id="events-section" className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="font-poppins text-xs uppercase tracking-[0.3em] text-[#8A6529] font-semibold">
            Wedding Schedule
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold mt-2">
            Event & Venue
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Single Main Event Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl relative overflow-hidden text-center space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#8A6529] font-poppins text-xs font-bold uppercase tracking-widest">
            NIKAH CEREMONY
          </div>

          <h3 className="font-playfair text-3xl sm:text-4xl font-semibold text-[#2C1A0E]">
            Nikah Ceremony
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[#3E2A1E] font-poppins text-sm pt-2 border-t border-[#D4AF37]/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C59B27]" />
              <span className="font-medium">Saturday, 19 September 2026</span>
            </div>
            <div className="hidden sm:block text-[#D4AF37]">●</div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C59B27]" />
              <span className="font-medium">Nikah Day</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5EEDC]/60 border border-[#D4AF37]/30 space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#2C1A0E] font-semibold font-poppins text-base sm:text-lg">
              <MapPin className="w-5 h-5 text-[#C59B27] shrink-0 fill-current" />
              <span>Kozhisseri</span>
            </div>
            <p className="font-poppins text-xs text-[#8A6529]">
              Join us for the ceremony and blessings
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href={venueMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 transition-transform active:scale-95 glow-button"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Navigate on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

