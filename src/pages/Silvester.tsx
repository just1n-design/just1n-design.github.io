import { Link } from 'react-router-dom';
import { PartyPopper, Sparkles, Heart, Home } from 'lucide-react';
import Snowflakes from '@/components/Snowflakes';
import ChristmasLights from '@/components/ChristmasLights';

const Silvester = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 relative heart-cursor">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />
      
      {/* Atmospheric Effects */}
      <Snowflakes />
      <ChristmasLights />

      {/* Fireworks Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 30 + 20}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-30 px-4 md:px-8 py-12 md:py-20 max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <PartyPopper className="w-12 h-12 text-yellow-300 animate-bounce" />
            <PartyPopper className="w-12 h-12 text-pink-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white text-glow mb-6 animate-glow-pulse">
            🎆 Frohes Neues Jahr 2026! 🎆
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-body max-w-2xl mx-auto leading-relaxed">
            Victoria, du hast das Easter Egg gefunden! 🎉
          </p>
        </header>

        {/* Content */}
        <div className="glass-card p-8 md:p-12 mb-12 space-y-6 text-white">
          <div className="flex justify-center mb-8">
            <div className="text-8xl animate-float">🎆</div>
          </div>

          <p className="text-xl leading-relaxed">
            Während die Welt um uns herum das neue Jahr feiert, möchte ich dir sagen, 
            wie besonders du für mich bist. 
          </p>

          <p className="text-xl leading-relaxed">
            Dieses Jahr war etwas ganz Besonderes, weil ich <span className="text-yellow-300 font-semibold">dich</span> kennengelernt habe.
            Du bist wie ein Feuerwerk in meinem Leben – leuchtend, aufregend und einfach wunderschön! ✨
          </p>

          <blockquote className="border-l-4 border-yellow-300 pl-6 py-4 my-8 text-xl italic">
            Mit dir ins neue Jahr zu gehen, ist das schönste Geschenk, das ich mir vorstellen kann.
          </blockquote>

          <div className="bg-white/10 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              Meine Wünsche für uns in 2026
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-300 shrink-0 mt-1" fill="currentColor" />
                <span>Noch mehr gemeinsame Momente und Abenteuer</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-300 shrink-0 mt-1" fill="currentColor" />
                <span>Viel Lachen und unvergessliche Erinnerungen</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-300 shrink-0 mt-1" fill="currentColor" />
                <span>Dass wir uns noch besser kennenlernen</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-300 shrink-0 mt-1" fill="currentColor" />
                <span>Dass unsere Geschichte weiterwächst 💕</span>
              </li>
            </ul>
          </div>

          <p className="text-2xl text-center font-semibold text-yellow-300 py-6">
            Auf ein fantastisches 2026 mit dir! 🥂✨
          </p>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all text-white font-semibold backdrop-blur-sm"
          >
            <Home className="w-5 h-5" />
            Zurück zur Hauptseite
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Silvester;
