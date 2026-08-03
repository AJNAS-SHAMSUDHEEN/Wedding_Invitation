import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation, ExternalLink, Home } from 'lucide-react';

export default function EventTimeline() {
  const nikahMapUrl = "https://maps.app.goo.gl/1KUsQpPJ5yCh8ioY7";
  const groomMapUrl = "https://maps.app.goo.gl/a6da94FsVA5J4vdF6";

  return (
    <section id="events-section" className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
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
            Wedding Schedule
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold mt-2">
            Event Timeline & Venues
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-4 sm:space-y-6 relative">
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 transform -translate-x-1/2" />

          {/* Event 1: NIKAH */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/40 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#8A6529] font-poppins text-xs font-bold uppercase tracking-wider">
                    MAIN CEREMONY
                  </span>
                  <span className="font-poppins text-xs text-[#8A6529] font-medium">● 10:30 AM</span>
                </div>

                <h3 className="font-playfair text-3xl font-semibold text-[#2C1A0E]">
                  Nikah Ceremony
                </h3>

                <div className="space-y-2 text-[#3E2A1E] font-poppins text-sm">
                  <div className="flex items-center gap-2.5">
                    <Home className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span>Bride Residence</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold">Chalode, Kannur</span>
                  </div>
                  <div className="flex items-center gap-4 pt-1">
                    <span className="flex items-center gap-1.5 text-xs text-[#8A6529]">
                      <Calendar className="w-3.5 h-3.5" /> Sunday, 16 August 2026
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#8A6529]">
                      <Clock className="w-3.5 h-3.5" /> 10:30 AM
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <a
                  href={nikahMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ripple inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-semibold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-transform active:scale-95"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Event 2: RECEPTION */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/40 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#8A6529] font-poppins text-xs font-bold uppercase tracking-wider">
                    RECEPTION
                  </span>
                  <span className="font-poppins text-xs text-[#8A6529] font-medium">● Groom Residence</span>
                </div>

                <h3 className="font-playfair text-3xl font-semibold text-[#2C1A0E]">
                  Reception & Visit
                </h3>

                <div className="space-y-2 text-[#3E2A1E] font-poppins text-sm">
                  <div className="flex items-center gap-2.5">
                    <Home className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold">Darul Aman</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span>Koodali, Kannur</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <a
                  href={groomMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ripple inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 rounded-full border-2 border-[#D4AF37] text-[#8A6529] hover:bg-[#D4AF37]/15 font-poppins font-semibold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navigate to Venue</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
