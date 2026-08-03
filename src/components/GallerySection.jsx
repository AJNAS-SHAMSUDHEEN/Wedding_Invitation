import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery items with high resolution luxury wedding & floral photography
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      title: "Wedding Preparation",
      subtitle: "Moments of Joy",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      title: "Golden Decor",
      subtitle: "Islamic Floral Elegance",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      title: "Celebration",
      subtitle: "Sacred Bond",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      title: "Royal Stage",
      subtitle: "Warm Cream Aesthetics",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
      title: "Blessings & Flowers",
      subtitle: "Kannur Wedding",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      title: "Special Day",
      subtitle: "Midlaj & Rashmila",
    },
  ];

  return (
    <section id="gallery-section" className="relative py-16 px-4 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-poppins text-xs uppercase tracking-[0.3em] text-[#8A6529] font-semibold flex items-center justify-center gap-1.5">
            <ImageIcon className="w-4 h-4" /> Visual Memories
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-[#2C1A0E] font-semibold mt-2">
            Gallery Showcase
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(img)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-[#D4AF37]/30 relative aspect-4/3"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Glassmorphism Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="font-poppins text-[10px] tracking-widest text-[#E6C875] uppercase font-semibold">
                  {img.subtitle}
                </span>
                <h4 className="font-playfair text-xl font-bold flex items-center justify-between">
                  {img.title}
                  <ZoomIn className="w-5 h-5 text-[#D4AF37]" />
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-[#2C1A0E]/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[#F9F6F0] rounded-3xl p-3 sm:p-4 border-2 border-[#D4AF37] shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full gold-gradient-bg text-[#2C1A0E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>

                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full max-h-[75vh] object-contain rounded-2xl"
                />

                <div className="p-4 text-center">
                  <h3 className="font-playfair text-2xl font-bold text-[#2C1A0E]">
                    {selectedImage.title}
                  </h3>
                  <p className="font-poppins text-xs text-[#8A6529]">
                    {selectedImage.subtitle}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
