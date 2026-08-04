import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-08-09T10:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-paper rounded-3xl p-4 sm:p-8 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Ambient Glow behind countdown */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 filter blur-2xl rounded-full pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 mb-5 space-y-1.5">
            <span className="font-poppins text-xs uppercase tracking-[0.3em] text-[#8A6529] font-semibold flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" /> Counting Down To The Big Day
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold">
              Save The Date
            </h2>
            <p className="font-cormorant text-base sm:text-lg text-[#8A6529] font-bold">
              Sunday, 09 August 2026 • Laurel Garden
            </p>
          </div>

          {/* Timer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {timerItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-3 sm:p-5 border border-[#D4AF37]/40 shadow-lg glow-button flex flex-col items-center justify-center"
              >
                <span className="font-playfair text-4xl sm:text-6xl font-bold gold-gradient-text tracking-tight">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="font-poppins text-xs uppercase tracking-widest text-[#8A6529] font-semibold mt-2">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {timeLeft.isPassed && (
            <div className="mt-8 relative z-10">
              <span className="inline-block px-6 py-2 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-bold text-sm tracking-wider uppercase">
                The Celebration Has Begun! 🎉
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
