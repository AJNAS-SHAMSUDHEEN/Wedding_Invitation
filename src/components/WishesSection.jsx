import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Heart, MessageSquare, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WishesSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Initial wishes state loaded from localStorage (defaulting to empty array)
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('wedding_wishes_midlaj_rashmila');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Filter out old test items if any exist
        return parsed.filter(w => !['Faris & Family', 'Shabeer VK', 'Ayesha NK'].includes(w.name));
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('wedding_wishes_midlaj_rashmila', JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: "Just now",
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setSubmitted(true);

    // Trigger golden celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#C59B27', '#E6C875', '#FAF7F2'],
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="wishes-section" className="relative py-6 sm:py-8 px-2 sm:px-4 z-10">
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
            <MessageSquare className="w-4 h-4" /> Guestbook & Prayers
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold mt-2">
            Send Your Blessings
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Wish Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass-card rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/40 shadow-xl mb-6"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="guest-name" className="block font-poppins text-xs font-semibold text-[#8A6529] uppercase tracking-wider mb-2">
                Your Full Name
              </label>
              <input
                id="guest-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Muhammed Ali"
                className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#D4AF37]/50 text-[#2C1A0E] font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div>
              <label htmlFor="guest-message" className="block font-poppins text-xs font-semibold text-[#8A6529] uppercase tracking-wider mb-2">
                Your Warm Message / Dua
              </label>
              <textarea
                id="guest-message"
                required
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your wishes and prayers for Midlaj & Rashmila..."
                className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#D4AF37]/50 text-[#2C1A0E] font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
              />
            </div>

            <button
              type="submit"
              className="ripple w-full py-4 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-98 glow-button"
            >
              <Send className="w-4 h-4" />
              <span>Send Wedding Wish</span>
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-poppins text-xs flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Thank you! Your wish has been posted successfully.</span>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Wishes List Display */}
        <div className="space-y-4">
          <h3 className="font-playfair text-2xl font-bold text-[#2C1A0E] text-center mb-6">
            Blessings from Friends & Family ({wishes.length})
          </h3>

          <div className="grid gap-4 max-h-[500px] overflow-y-auto pr-1">
            {wishes.length === 0 ? (
              <div className="luxury-paper p-8 rounded-2xl border border-[#D4AF37]/30 text-center space-y-2">
                <Heart className="w-8 h-8 text-[#D4AF37] mx-auto animate-pulse" />
                <p className="font-cormorant text-xl font-bold text-[#2C1A0E]">
                  Be the first to send your warm prayers!
                </p>
                <p className="font-poppins text-xs text-[#8A6529]">
                  Fill out the form above to share your blessing with Midlaj & Rashmila.
                </p>
              </div>
            ) : (
              wishes.map((w) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="luxury-paper p-5 rounded-2xl border border-[#D4AF37]/30 shadow-xs relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full gold-gradient-bg text-[#2C1A0E] font-bold font-poppins text-xs flex items-center justify-center">
                        {w.name.charAt(0)}
                      </div>
                      <span className="font-cormorant text-lg font-bold text-[#2C1A0E]">
                        {w.name}
                      </span>
                    </div>
                    <span className="font-poppins text-[10px] text-[#8A6529] font-medium">
                      {w.date}
                    </span>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm text-[#3E2A1E] leading-relaxed pl-10">
                    "{w.message}"
                  </p>
                  <div className="absolute top-4 right-4 text-[#D4AF37]/30">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
