import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const iframeRef = useRef(null);

  const attemptPlay = () => {
    // 1. Play direct audio track extracted from YouTube video ivrumxRUz_Y
    if (audioRef.current) {
      audioRef.current.volume = 0.85;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }

    // 2. Play embedded YouTube iframe fallback
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: '' }),
          '*'
        );
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [85] }),
          '*'
        );
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
          '*'
        );
      } catch (e) {
        console.error(e);
      }
    }
  };

  const attemptPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
          '*'
        );
      } catch (e) {
        console.error(e);
      }
    }

    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      attemptPause();
    } else {
      attemptPlay();
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);

    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }

    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      try {
        const funcName = nextMute ? 'mute' : 'unMute';
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: funcName, args: '' }),
          '*'
        );
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    attemptPlay();

    const handleGesture = () => {
      attemptPlay();
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('scroll', handleGesture);
    };

    window.addEventListener('click', handleGesture);
    window.addEventListener('touchstart', handleGesture);
    window.addEventListener('scroll', handleGesture);

    return () => {
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('scroll', handleGesture);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Direct Local Audio Element for 0ms instant playback of YouTube track ivrumxRUz_Y */}
      <audio
        ref={audioRef}
        src="/background-music.webm"
        loop
        preload="auto"
      />

      {/* Embedded YouTube Iframe for video ivrumxRUz_Y */}
      <iframe
        ref={iframeRef}
        id="yt-audio-player"
        title="Background Music - ivrumxRUz_Y"
        src="https://www.youtube.com/embed/ivrumxRUz_Y?enablejsapi=1&autoplay=1&mute=0&loop=1&playlist=ivrumxRUz_Y&controls=0"
        className="w-1 h-1 absolute -top-[9999px] -left-[9999px] opacity-0 pointer-events-none"
        allow="autoplay"
      />

      {/* Floating Play & Pause Button */}
      <button
        onClick={togglePlay}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full gold-gradient-bg text-[#2C1A0E] shadow-2xl border border-[#D4AF37]/60 hover:brightness-110 transition-all duration-300 transform hover:scale-105 active:scale-95 glow-button cursor-pointer"
        aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
      >
        <div className="w-8 h-8 rounded-full bg-[#2C1A0E] text-[#D4AF37] flex items-center justify-center shadow-md">
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </div>

        <span className="font-poppins text-xs font-semibold tracking-wider uppercase text-[#2C1A0E] flex items-center gap-1.5">
          <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{isPlaying ? 'Pause Music' : 'Play Music'}</span>
        </span>

        {/* Animated Equalizer Bars when playing */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3 ml-1">
            <span className="w-0.5 h-full bg-[#2C1A0E] rounded-full animate-pulse" style={{ animationDuration: '0.6s' }} />
            <span className="w-0.5 h-2/3 bg-[#2C1A0E] rounded-full animate-pulse" style={{ animationDuration: '0.4s' }} />
            <span className="w-0.5 h-4/5 bg-[#2C1A0E] rounded-full animate-pulse" style={{ animationDuration: '0.8s' }} />
          </div>
        )}
      </button>

      {/* Mute/Unmute Volume Button */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-[#F9F6F0] text-[#2C1A0E] border border-[#D4AF37]/60 shadow-lg hover:scale-110 transition-transform cursor-pointer"
          aria-label={isMuted ? 'Unmute Music' : 'Mute Music'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-700" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#8A6529]" />
          )}
        </button>
      )}
    </div>
  );
}
