import React, { useState, useRef } from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import HeroCard from './components/HeroCard';
import CoupleSection from './components/CoupleSection';
import EventTimeline from './components/EventTimeline';
import MapSection from './components/MapSection';
import CountdownTimer from './components/CountdownTimer';
import OurStory from './components/OurStory';
import WishesSection from './components/WishesSection';
import ShareBar from './components/ShareBar';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import WelcomeModal from './components/WelcomeModal';

export default function App() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const audioPlayerRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsWelcomeOpen(false);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.playAudio();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden luxury-paper text-[#3E2A1E]">
      {/* Welcome Screen / Cover Overlay for 100% Instant Audio Playback */}
      <WelcomeModal isOpen={isWelcomeOpen} onOpen={handleOpenInvitation} />

      {/* Background Animated Palm Shadow & Floating Particle Canvas */}
      <BackgroundParticles />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-6 sm:space-y-10 pt-20 pb-8 px-2 sm:px-4">
        {/* Landing Hero Card */}
        <HeroCard />

        {/* Groom & Bride Details */}
        <CoupleSection />

        {/* Timeline Schedule */}
        <EventTimeline />

        {/* Interactive Location Maps */}
        <MapSection />

        {/* Countdown Timer to Aug 16, 2026 */}
        <CountdownTimer />

        {/* Sacred Union Quran Quote */}
        <OurStory />

        {/* Guestbook & Wishes */}
        <WishesSection />

        {/* Share Invitation Links */}
        <ShareBar />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Nasheed Audio Player */}
      <AudioPlayer ref={audioPlayerRef} />
    </div>
  );
}
