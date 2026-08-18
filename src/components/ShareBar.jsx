import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check, Copy, MessageCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function ShareBar() {
  const [copied, setCopied] = useState(false);

  const invitationUrl = window.location.href;
  const invitationTitle = "Nikah Ceremony Invitation | Jafakas A K & Dr. Najiya";
  const invitationText = "You are cordially invited to the Nikah Ceremony of Jafakas A K & Dr. Najiya on Saturday, 19 September 2026 at Kozhisseri.";

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationUrl);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#C59B27'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: invitationTitle,
          text: invitationText,
          url: invitationUrl,
        });
      } catch (err) {
        console.log('Native share error/cancelled', err);
      }
    } else {
      handleCopy();
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(invitationText + ' ' + invitationUrl)}`,
    },
    {
      name: 'Telegram',
      icon: Send,
      color: 'bg-sky-500 hover:bg-sky-600 text-white',
      url: `https://t.me/share/url?url=${encodeURIComponent(invitationUrl)}&text=${encodeURIComponent(invitationText)}`,
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(invitationUrl)}`,
    },
  ];

  return (
    <section className="relative py-4 sm:py-6 px-2 sm:px-4 z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/40 shadow-xl text-center space-y-4"
        >
          <div>
            <span className="font-poppins text-xs uppercase tracking-[0.3em] text-[#8A6529] font-semibold flex items-center justify-center gap-1.5">
              <Share2 className="w-4 h-4 text-[#D4AF37]" /> Spread The Joy
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#2C1A0E] font-semibold mt-1">
              Share Invitation
            </h3>
          </div>

          {/* Social Share Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Native Mobile Share if supported */}
            {typeof navigator !== 'undefined' && navigator.share && (
              <button
                onClick={handleNativeShare}
                className="px-5 py-3 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-semibold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-transform active:scale-95 flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share App</span>
              </button>
            )}

            {shareLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-3 rounded-full ${item.color} font-poppins font-medium text-xs tracking-wider shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center gap-2`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}

            {/* Copy Link Button */}
            <button
              onClick={handleCopy}
              className="px-5 py-3 rounded-full border-2 border-[#D4AF37] text-[#8A6529] hover:bg-[#D4AF37]/15 font-poppins font-medium text-xs uppercase tracking-wider shadow-sm transition-transform active:scale-95 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
