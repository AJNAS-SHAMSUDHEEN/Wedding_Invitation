import React, { useEffect, useRef } from 'react';

export default function BackgroundParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate gold dust particles
    const particleCount = Math.min(Math.floor(width / 25), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      color: `rgba(${Math.floor(212 + Math.random() * 30)}, ${Math.floor(175 + Math.random() * 40)}, ${Math.floor(55 + Math.random() * 50)}, ${Math.random() * 0.5 + 0.2})`,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      pulse: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        // Wrap around screens
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for Gold Dust Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

      {/* Palm Leaf Shadow Overlay Top Left */}
      <div 
        className="absolute -top-16 -left-16 w-80 md:w-96 h-80 md:h-96 opacity-15 pointer-events-none transform -rotate-12 animate-float-leaves filter blur-[1px]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="#3E2A1E" className="w-full h-full">
          <path d="M10,10 Q60,90 180,180 Q100,100 10,10 Z" />
          <path d="M20,10 Q90,50 190,130 Q100,70 20,10 Z" />
          <path d="M10,30 Q80,110 160,195 Q90,120 10,30 Z" />
          <path d="M40,5 Q110,80 195,150 Q110,90 40,5 Z" />
        </svg>
      </div>

      {/* Palm Leaf Shadow Overlay Top Right */}
      <div 
        className="absolute -top-12 -right-12 w-80 md:w-96 h-80 md:h-96 opacity-15 pointer-events-none transform rotate-45 animate-float-leaves filter blur-[1px]"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="#3E2A1E" className="w-full h-full">
          <path d="M190,10 Q140,90 20,180 Q100,100 190,10 Z" />
          <path d="M180,10 Q110,50 10,130 Q100,70 180,10 Z" />
          <path d="M190,30 Q120,110 40,195 Q110,120 190,30 Z" />
        </svg>
      </div>
    </div>
  );
}
