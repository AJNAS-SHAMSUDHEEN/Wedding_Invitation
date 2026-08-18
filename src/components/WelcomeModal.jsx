import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Volume2, Sparkles, Heart } from 'lucide-react';

export default function WelcomeModal({ isOpen, onStartAudio, onClose, onOpen }) {
  const containerRef = useRef(null);
  const envelopeWrapRef = useRef(null);
  const flapRef = useRef(null);
  const flapInnerRef = useRef(null);
  const sealRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);
  const [isOpeningStarted, setIsOpeningStarted] = useState(false);

  // 1. Subtle Floating Gold Dust Background Particles (Pure lightweight 60fps Canvas)
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.8,
      speedY: -(Math.random() * 0.35 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += 0.02;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.05, currentOpacity)})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  // 2. Slow breathing / scale idle animation before user opens
  useEffect(() => {
    if (!isOpen || isOpeningStarted) return;

    const idleTween = gsap.to(envelopeWrapRef.current, {
      scale: 1.015,
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => {
      idleTween.kill();
    };
  }, [isOpen, isOpeningStarted]);

  if (!isOpen) return null;

  // 3. Cinematic GSAP Timeline Sequence upon clicking "OPEN INVITATION"
  const triggerCinematicOpening = () => {
    if (isOpeningStarted) return;
    setIsOpeningStarted(true);

    // Audio gesture trigger
    if (onStartAudio) onStartAudio();
    else if (onOpen) onOpen();

    const tl = gsap.timeline({
      onComplete: () => {
        if (onClose) onClose();
      },
    });

    // Kill any idle tweens on the envelope
    gsap.killTweensOf(envelopeWrapRef.current);

    // ==========================================
    // PHASE 1 — CAMERA APPROACH & BUTTON FADE
    // ==========================================
    tl.to(buttonRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power2.out',
    }, 0)
    .to(envelopeWrapRef.current, {
      scale: 1.12,
      y: 20,
      duration: 1.4,
      ease: 'power2.inOut',
    }, 0)

    // ==========================================
    // PHASE 2 — REALISTIC WAX SEAL RELEASE
    // ==========================================
    .to(sealRef.current, {
      scale: 1.06,
      rotateZ: -3,
      boxShadow: '0 18px 35px rgba(0,0,0,0.6)',
      duration: 0.5,
      ease: 'power1.out',
    }, 0.8)
    .to(sealRef.current, {
      rotateX: 15,
      y: -4,
      opacity: 0.95,
      duration: 0.4,
      ease: 'power1.inOut',
    }, 1.2)
    .to(sealRef.current, {
      opacity: 0,
      scale: 0.9,
      y: -10,
      duration: 0.45,
      ease: 'power2.in',
    }, 1.5)

    // ==========================================
    // PHASE 3 — ENVELOPE FLAP 3D UNFOLDING
    // ==========================================
    .to(flapRef.current, {
      rotateX: -180,
      duration: 1.5,
      ease: 'power2.inOut',
      boxShadow: '0 25px 40px rgba(0,0,0,0.3)',
    }, 1.6)
    // Adjust flap z-index dynamically once flipped back
    .set(flapRef.current, {
      zIndex: 5,
    }, 2.3)

    // ==========================================
    // PHASE 4 — INNER CARD EMERGENCE & REVEAL
    // ==========================================
    .to(cardRef.current, {
      y: -160,
      scale: 1.04,
      zIndex: 35,
      boxShadow: '0 30px 70px -10px rgba(0,0,0,0.65)',
      duration: 1.6,
      ease: 'power2.out',
    }, 2.2)

    // ==========================================
    // PHASE 5 — CINEMATIC TRANSITION TO WEBSITE
    // ==========================================
    .to(containerRef.current, {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(4px)',
      duration: 1.1,
      ease: 'power2.inOut',
    }, 4.2);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-3 sm:p-6 bg-[#110B07] overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse at center, #1F140D 0%, #0E0805 100%)',
      }}
    >
      {/* Subtle Golden Dust Floating Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Warm Ambient Backlight Glow */}
      <div className="absolute w-[360px] sm:w-[540px] h-[550px] sm:h-[720px] bg-[#D4AF37]/12 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Floating Music Speaker Indicator */}
      <div className="absolute top-5 right-5 z-40 w-9 h-9 rounded-full bg-white/90 shadow-lg border border-[#D4AF37]/40 flex items-center justify-center text-[#8E192B] pointer-events-none">
        <Volume2 className="w-4 h-4 animate-pulse" />
      </div>

      {/* CLOSED / OPENING LUXURY INVITATION ENVELOPE (Preserving visual artwork) */}
      <div
        ref={envelopeWrapRef}
        onClick={triggerCinematicOpening}
        className="relative w-full max-w-[360px] sm:max-w-[410px] h-[82vh] max-h-[620px] min-h-[480px] rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden cursor-pointer"
        style={{ perspective: 1400 }}
      >
        {/* 1. Envelope Back Base (Ivory / Champagne Textured Paper) */}
        <div className="absolute inset-0 bg-[#F5EDE0] border border-[#D4AF37]/60 overflow-hidden">
          {/* Subtle Paper Grain */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8A6529_1px,transparent_1px)] [background-size:12px_12px]" />
          
          {/* Inner Golden Double Border */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-[#D4AF37]/35 pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-[#C59B27]/15 pointer-events-none" />
        </div>

        {/* 2. INNER INVITATION CARD (Sliding smoothly upwards in Phase 4) */}
        <div
          ref={cardRef}
          className="absolute inset-x-3 sm:inset-x-4 top-4 bottom-4 luxury-paper rounded-2xl p-5 sm:p-7 border-2 border-[#D4AF37] text-center flex flex-col justify-between overflow-hidden shadow-md"
          style={{ zIndex: 10, transform: 'translate3d(0,0,0)' }}
        >
          {/* Gold Decorative Inner Frames */}
          <div className="absolute inset-2 border border-[#D4AF37]/45 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 border border-[#C59B27]/20 rounded-lg pointer-events-none" />

          {/* Bismillah Header */}
          <div className="pt-2">
            <p className="font-amiri text-2xl sm:text-3xl text-[#3E2A1E] font-bold leading-none">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-[1px] w-6 bg-[#D4AF37]" />
              <span className="font-cormorant text-[11px] tracking-[0.25em] text-[#8A6529] uppercase font-bold">
                NIKAH CEREMONY INVITATION
              </span>
              <div className="h-[1px] w-6 bg-[#D4AF37]" />
            </div>
          </div>

          {/* Couple Names */}
          <div className="my-auto py-2 space-y-1">
            <h3 className="font-playfair text-2xl sm:text-4xl text-[#2C1A0E] italic font-semibold leading-tight">
              Jafakas A K
            </h3>
            <span className="font-playfair text-lg text-[#C59B27] italic font-bold my-0.5 block">
              &
            </span>
            <h3 className="font-playfair text-2xl sm:text-4xl text-[#2C1A0E] italic font-semibold leading-tight">
              Dr. Najiya
            </h3>
          </div>

          {/* Date & Location */}
          <div className="border-t border-[#D4AF37]/30 pt-2.5 pb-1 space-y-0.5">
            <p className="font-playfair text-base sm:text-lg font-bold text-[#3E2A1E]">
              19 September 2026
            </p>
            <p className="font-poppins text-[10px] sm:text-xs tracking-wider text-[#8A6529] uppercase font-semibold">
              Saturday • Kozhisseri
            </p>
          </div>
        </div>

        {/* 3. Bottom & Side Envelope Flaps (Forming the pocket) */}
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 50% 53%)',
            background: 'linear-gradient(0deg, #F3EBDC 0%, #E8DEC8 100%)',
            boxShadow: '0 -4px 15px rgba(62, 42, 30, 0.12)',
          }}
        >
          <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="100" x2="50" y2="53" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.8" />
            <line x1="100" y1="100" x2="50" y2="53" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.8" />
          </svg>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none z-15"
          style={{
            clipPath: 'polygon(0 0, 0 100%, 50% 53%)',
            background: 'linear-gradient(135deg, #ECE2CD 0%, #E0D3B8 100%)',
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none z-15"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 50% 53%)',
            background: 'linear-gradient(225deg, #ECE2CD 0%, #DFD1B5 100%)',
          }}
        />

        {/* 4. Corner Burgundy & Cream Floral Artwork in 4 corners (Matching uploaded artwork) */}
        {/* Top-Left Floral Bouquet */}
        <div className="absolute top-0 left-0 w-32 sm:w-36 h-32 sm:h-36 pointer-events-none z-30">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <path d="M10,45 Q35,40 55,20 Q65,10 75,5" stroke="#C59B27" strokeWidth="1.2" opacity="0.85" />
            <path d="M20,65 Q45,55 60,35 Q70,20 85,15" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />
            <circle cx="55" cy="20" r="2.5" fill="#D4AF37" />
            <circle cx="65" cy="12" r="2" fill="#E6C875" />
            <circle cx="75" cy="5" r="2.5" fill="#D4AF37" />
            <circle cx="85" cy="15" r="2" fill="#D4AF37" />
            {/* Cream Blossom */}
            <circle cx="28" cy="18" r="16" fill="#FAF4EA" />
            <circle cx="28" cy="18" r="13" stroke="#E8DAC2" strokeWidth="1.5" fill="#F4EADB" />
            <path d="M22,12 Q28,6 34,12 Q40,18 34,24 Q28,30 22,24 Q16,18 22,12 Z" fill="#EDE0CC" stroke="#DFCFB6" strokeWidth="0.8" />
            <circle cx="28" cy="18" r="4.5" fill="#D5BF9E" />
            {/* Burgundy Floral */}
            <circle cx="16" cy="38" r="14" fill="#6B0F1B" />
            <circle cx="16" cy="38" r="11" fill="#881928" />
            <path d="M10,32 Q16,26 22,32 Q28,38 22,44 Q16,50 10,44 Q4,38 10,32 Z" fill="#9E2233" />
            <circle cx="16" cy="38" r="3.5" fill="#500912" />
            <circle cx="42" cy="40" r="8" fill="#7A1220" />
            <circle cx="42" cy="40" r="6" fill="#941B2B" />
          </svg>
        </div>

        {/* Top-Right Floral Bouquet */}
        <div className="absolute top-0 right-0 w-32 sm:w-36 h-32 sm:h-36 pointer-events-none z-30 transform scale-x-[-1]">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <path d="M10,45 Q35,40 55,20 Q65,10 75,5" stroke="#C59B27" strokeWidth="1.2" opacity="0.85" />
            <circle cx="55" cy="20" r="2.5" fill="#D4AF37" />
            <circle cx="65" cy="12" r="2" fill="#E6C875" />
            <circle cx="75" cy="5" r="2.5" fill="#D4AF37" />
            <circle cx="28" cy="18" r="16" fill="#FAF4EA" />
            <circle cx="28" cy="18" r="13" stroke="#E8DAC2" strokeWidth="1.5" fill="#F4EADB" />
            <circle cx="16" cy="38" r="14" fill="#6B0F1B" />
            <circle cx="16" cy="38" r="11" fill="#881928" />
            <path d="M10,32 Q16,26 22,32 Q28,38 22,44 Q16,50 10,44 Q4,38 10,32 Z" fill="#9E2233" />
          </svg>
        </div>

        {/* Bottom-Left Floral Corner */}
        <div className="absolute bottom-0 left-0 w-28 sm:w-32 h-28 sm:h-32 pointer-events-none z-30 transform scale-y-[-1]">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <path d="M10,45 Q35,40 55,20 Q65,10 75,5" stroke="#C59B27" strokeWidth="1.2" opacity="0.85" />
            <circle cx="55" cy="20" r="2.5" fill="#D4AF37" />
            <circle cx="16" cy="38" r="12" fill="#6B0F1B" />
            <circle cx="16" cy="38" r="9" fill="#881928" />
            <circle cx="36" cy="32" r="7" fill="#7A1220" />
          </svg>
        </div>

        {/* Bottom-Right Floral Corner */}
        <div className="absolute bottom-0 right-0 w-28 sm:w-32 h-28 sm:h-32 pointer-events-none z-30 transform scale-[-1]">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <path d="M10,45 Q35,40 55,20 Q65,10 75,5" stroke="#C59B27" strokeWidth="1.2" opacity="0.85" />
            <circle cx="55" cy="20" r="2.5" fill="#D4AF37" />
            <circle cx="16" cy="38" r="12" fill="#6B0F1B" />
            <circle cx="16" cy="38" r="9" fill="#881928" />
            <circle cx="36" cy="32" r="7" fill="#7A1220" />
          </svg>
        </div>

        {/* Bottom Lace Trim Filigree */}
        <div className="absolute bottom-0 inset-x-0 h-10 sm:h-12 pointer-events-none z-30 flex items-end">
          <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full opacity-60 text-[#D8C7A5]">
            <path d="M0,40 L400,40 L400,28 Q375,12 350,28 Q325,12 300,28 Q275,12 250,28 Q225,12 200,28 Q175,12 150,28 Q125,12 100,28 Q75,12 50,28 Q25,12 0,28 Z" fill="currentColor" />
            <path d="M0,28 Q25,12 50,28 Q75,12 100,28 Q125,12 150,28 Q175,12 200,28 Q225,12 250,28 Q275,12 300,28 Q325,12 350,28 Q375,12 400,28" stroke="#C59B27" strokeWidth="0.8" fill="none" />
            <circle cx="50" cy="24" r="1.5" fill="#D4AF37" />
            <circle cx="100" cy="24" r="1.5" fill="#D4AF37" />
            <circle cx="150" cy="24" r="1.5" fill="#D4AF37" />
            <circle cx="200" cy="24" r="1.5" fill="#D4AF37" />
            <circle cx="250" cy="24" r="1.5" fill="#D4AF37" />
            <circle cx="300" cy="24" r="1.5" fill="#D4AF37" />
            <circle cx="350" cy="24" r="1.5" fill="#D4AF37" />
          </svg>
        </div>

        {/* 5. TOP FLAP (3D Perspective Unfolding in Phase 3) */}
        <div
          ref={flapRef}
          className="absolute inset-x-0 top-0 h-full pointer-events-none overflow-visible"
          style={{
            zIndex: 30,
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front Face of Top Flap */}
          <div
            ref={flapInnerRef}
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 53%)',
              background: 'linear-gradient(180deg, #FBF6ED 0%, #EAE0CB 100%)',
              boxShadow: '0 8px 24px rgba(62, 42, 30, 0.25)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Gold Trim along V-edge */}
            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="50" y2="53" stroke="#D4AF37" strokeWidth="0.9" strokeOpacity="0.95" />
              <line x1="100" y1="0" x2="50" y2="53" stroke="#D4AF37" strokeWidth="0.9" strokeOpacity="0.95" />
              <line x1="2" y1="0" x2="50" y2="51" stroke="#C59B27" strokeWidth="0.4" strokeOpacity="0.5" />
              <line x1="98" y1="0" x2="50" y2="51" stroke="#C59B27" strokeWidth="0.4" strokeOpacity="0.5" />
            </svg>

            {/* Gold Filigree Ornament Printed on Flap (Above wax seal) */}
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 h-14 pointer-events-none text-[#C59B27]">
              <svg viewBox="0 0 120 60" className="w-full h-full" fill="none">
                <path d="M60,50 L60,10" stroke="currentColor" strokeWidth="1" />
                <path d="M60,25 Q40,15 25,30 Q35,45 60,35 Q85,45 95,30 Q80,15 60,25 Z" stroke="currentColor" strokeWidth="0.9" fill="none" />
                <path d="M60,15 Q45,2 35,18 Q48,26 60,20 Q72,26 85,18 Q75,2 60,15 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="60" cy="8" r="2.5" fill="currentColor" />
                <circle cx="60" cy="54" r="2" fill="currentColor" />
                <circle cx="20" cy="30" r="1.5" fill="currentColor" />
                <circle cx="100" cy="30" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Back Face of Top Flap (Revealed when flap rotates 180deg) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 53%)',
              background: 'linear-gradient(0deg, #E6D8BC 0%, #D8C7A4 100%)',
              transform: 'rotateX(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />
        </div>

        {/* 6. BURGUNDY WAX SEAL MEDALLION (Phase 2 Realistic Release) */}
        <div
          ref={sealRef}
          className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center pointer-events-auto"
        >
          {/* Subtle Ambient Pulse behind Seal */}
          <div className="absolute inset-0 rounded-full bg-[#8E192B]/30 blur-md pointer-events-none animate-pulse" />

          {/* 3D Deep Burgundy Scalloped Wax Seal */}
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#8E192B] via-[#66101B] to-[#3B050D] border-2 border-[#520912] shadow-[0_12px_28px_rgba(0,0,0,0.55)] flex items-center justify-center relative overflow-hidden">
            {/* Scalloped Wax Ridges */}
            <div className="absolute inset-0 rounded-full border-4 border-[#7A1322]/80 opacity-90 pointer-events-none" />
            
            {/* Top Gloss Reflection */}
            <div className="absolute inset-x-2 top-1 h-5 bg-gradient-to-b from-white/35 to-transparent rounded-t-full pointer-events-none" />

            {/* Inner Recessed Wax Bezel */}
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-[#D4AF37]/50 bg-[#590C16] shadow-inner flex items-center justify-center relative">
              {/* Golden Cursive Line-Art Spiral Heart */}
              <svg viewBox="0 0 50 50" className="w-8 h-8 sm:w-9 sm:h-9 text-[#D4AF37] filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]" fill="none">
                <path 
                  d="M25,38 C25,38 10,27 10,18 C10,12.5 14.5,9 19.5,9 C22.5,9 24.5,10.5 25,12 C25.5,10.5 27.5,9 30.5,9 C35.5,9 40,12.5 40,18 C40,27 25,38 25,38 Z" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M25,12 Q25,23 20,27 Q17,29 19,31 Q22,32 25,28" 
                  stroke="currentColor" 
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  opacity="0.8" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 7. PREMIUM "OPEN INVITATION" BUTTON (Near Lower Portion of Screen) */}
      <div
        ref={buttonRef}
        className="mt-6 sm:mt-8 text-center relative z-20 w-full max-w-xs"
      >
        <button
          onClick={triggerCinematicOpening}
          className="glow-button ripple w-full py-3.5 sm:py-4 rounded-full gold-gradient-bg text-[#2C1A0E] font-poppins font-bold text-xs sm:text-sm uppercase tracking-[0.25em] shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Sparkles className="w-4 h-4 text-[#2C1A0E]" />
          <span>Open Invitation</span>
        </button>
      </div>
    </div>
  );
}
