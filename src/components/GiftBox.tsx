import { useState, useRef } from 'react';
import { Gift, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import btrGif from '@/assets/big-time-rush.gif';
import btrMusic from '@/assets/beautiful-christmas.mp3';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleGift = () => {
    setIsOpen(!isOpen);
    if (!isOpen && audioRef.current) {
      const audio = audioRef.current;

      // Lautstärke setzen
      audio.volume = 0.035;
      audio.muted = false;

      // Play starten
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(err => console.log('Autoplay blockiert', err));
      } else {
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.035; // Lautstärke sicherstellen
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative py-16">
      <audio ref={audioRef} src={btrMusic} loop />

      {!isOpen ? (
        <div
          className="relative mx-auto w-48 h-48 cursor-pointer group"
          onClick={toggleGift}
        >
          {/* Gift Box */}
          <div className="absolute inset-0 bg-gradient-to-br from-christmas-red to-red-700 rounded-lg gift-glow animate-gift-bounce group-hover:scale-110 transition-transform duration-300">
            {/* Ribbon Vertical */}
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-christmas-gold" />
            {/* Ribbon Horizontal */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 bg-christmas-gold" />
            {/* Bow */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="absolute -left-8 w-8 h-6 bg-christmas-gold rounded-full rotate-[-30deg]" />
                <div className="absolute -right-8 w-8 h-6 bg-christmas-gold rounded-full rotate-[30deg]" />
                <div className="w-6 h-6 bg-christmas-gold rounded-full z-10 relative" />
              </div>
            </div>
          </div>

          <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-primary text-sm animate-pulse whitespace-nowrap font-body">
            ✨ Klick mich an! ✨
          </p>
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <div className="glass-card max-w-md mx-auto p-6 md:p-8">
            {/* Record Player Effect */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg shadow-2xl" />
              <div
                className={`absolute inset-4 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-800 ${
                  isPlaying ? 'animate-record-spin' : ''
                }`}
              >
                <div className="absolute inset-2 rounded-full border border-neutral-700" />
                <div className="absolute inset-4 rounded-full border border-neutral-700" />
                <div className="absolute inset-6 rounded-full border border-neutral-700" />
                <div className="absolute inset-8 rounded-full border border-neutral-700" />
                <div className="absolute inset-[35%] rounded-full bg-christmas-red flex items-center justify-center">
                  <span className="text-[8px] text-foreground font-bold">BTR</span>
                </div>
              </div>
              <div
                className={`absolute top-4 right-4 w-1 h-20 bg-neutral-600 origin-top transition-transform duration-500 ${
                  isPlaying ? 'rotate-[25deg]' : 'rotate-[5deg]'
                }`}
              >
                <div className="absolute bottom-0 w-3 h-4 -left-1 bg-neutral-500 rounded-sm" />
              </div>
            </div>

            {/* GIF */}
            <div className="relative mb-6 rounded-lg overflow-hidden shadow-xl">
              <img src={btrGif} alt="Big Time Rush - Merry Christmas" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Song Info */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-display font-bold text-primary text-glow-soft">
                🎵 Beautiful Christmas
              </h3>
              <p className="text-muted-foreground font-body">Big Time Rush</p>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={togglePlay}
                className="w-14 h-14 rounded-full border-primary/50 hover:bg-primary/20 hover:border-primary"
              >
                {isPlaying ? <Pause className="w-6 h-6 text-primary" /> : <Play className="w-6 h-6 text-primary ml-1" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMute}
                className="w-14 h-14 rounded-full border-primary/50 hover:bg-primary/20 hover:border-primary"
              >
                {isMuted ? <VolumeX className="w-6 h-6 text-primary" /> : <Volume2 className="w-6 h-6 text-primary" />}
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6 italic font-body">
              Ein passendes Lied nur für dich 💕
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
