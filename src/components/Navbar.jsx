import React from 'react';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Couple', href: '#couple-section' },
    { name: 'Events', href: '#events-section' },
    { name: 'Wishes', href: '#wishes-section' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div className="glass-card rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-xl border border-[#D4AF37]/40">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 font-playfair font-bold text-lg text-[#2C1A0E]">
          <span>Midlaj</span>
          <Heart className="w-3.5 h-3.5 fill-current text-[#C59B27]" />
          <span>Rashmila</span>
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-poppins text-xs uppercase tracking-wider text-[#8A6529] font-semibold hover:text-[#2C1A0E] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
