import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function MapSection() {
  const venueAddress = "Kozhisseri, Kerala";
  const venueMapUrl = "https://www.google.com/maps/search/?api=1&query=Kozhisseri";
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(venueAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="map-section" className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="font-poppins text-xs uppercase tracking-[0.3em] text-[#8A6529] font-semibold flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4 text-[#D4AF37]" /> Interactive Map & Directions
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold mt-2">
            Location Navigation
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-[#8A6529] mt-2 max-w-md mx-auto">
            Kozhisseri, Kerala
          </p>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Embedded Google Map Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass-card rounded-3xl p-3 sm:p-5 border border-[#D4AF37]/40 shadow-2xl space-y-4 relative overflow-hidden"
        >
          {/* Header Bar inside card */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 sm:px-4 py-2 border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full gold-gradient-bg text-[#2C1A0E] flex items-center justify-center shadow-xs">
                <MapPin className="w-5 h-5 fill-current" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-playfair text-xl font-bold text-[#2C1A0E]">
                  Kozhisseri
                </h3>
                <p className="font-poppins text-xs text-[#8A6529]">
                  Kozhisseri, Kerala
                </p>
              </div>
            </div>

            <a
              href={venueMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-transform active:scale-95 shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 fill-current" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Embedded Google Maps iFrame */}
          <div className="relative w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-inner bg-[#F5EEDC]">
            <iframe
              title="Google Map Location - Kozhisseri, Kerala"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl filter saturate-[1.05]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


