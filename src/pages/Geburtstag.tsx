import { Link } from 'react-router-dom';
import { Cake, Gift, Heart, Sparkles, Home } from 'lucide-react';
import Snowflakes from '@/components/Snowflakes';
import ChristmasLights from '@/components/ChristmasLights';

const Geburtstag = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-red-700 relative heart-cursor">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />
      
      {/* Atmospheric Effects */}
      <Snowflakes />
      <ChristmasLights />

      {/* Floating Hearts & Gifts */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 25 + 20}px`,
            }}
          >
            {i % 2 === 0 ? '💝' : '🎁'}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-30 px-4 md:px-8 py-12 md:py-20 max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <Cake className="w-12 h-12 text-pink-300 animate-bounce" />
            <Gift className="w-12 h-12 text-yellow-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white text-glow mb-6 animate-glow-pulse">
            🎂 Alles Gute zum Geburtstag! 🎂
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-body max-w-2xl mx-auto leading-relaxed">
            Victoria, du hast das zweite Easter Egg gefunden! 🎉
          </p>
        </header>

        {/* Content */}
        <div className="glass-card p-8 md:p-12 mb-12 space-y-6 text-white">
          <div className="flex justify-center mb-8">
            <div className="text-8xl animate-float">🎁</div>
          </div>

          <p className="text-xl leading-relaxed">
            Heute ist ein ganz besonderer Tag – der Tag, an dem jemand ganz Wunderbares 
            auf die Welt gekommen ist: <span className="text-pink-300 font-bold text-2xl">DU!</span>
          </p>

          <p className="text-xl leading-relaxed">
            Ich bin so unglaublich dankbar, dass es dich gibt, Victoria. 
            Du machst die Welt zu einem schöneren Ort – und mein Leben zu etwas ganz Besonderem. 💕
          </p>

          <blockquote className="border-l-4 border-pink-300 pl-6 py-4 my-8 text-xl italic">
            An deinem Geburtstag wünsche ich dir alles Glück dieser Welt. 
            Du verdienst jeden Stern am Himmel, jedes Lächeln und jedes bisschen Magie! ✨
          </blockquote>

          <div className="bg-white/10 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-300" fill="currentColor" />
              Was ich dir zu deinem Geburtstag wünsche
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300 shrink-0 mt-1" />
                <span>Dass all deine Träume in Erfüllung gehen</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300 shrink-0 mt-1" />
                <span>Einen Tag voller Freude, Lachen und Liebe</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300 shrink-0 mt-1" />
                <span>Ein Jahr voller magischer Momente und Abenteuer</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300 shrink-0 mt-1" />
                <span>Dass wir noch viele besondere Augenblicke zusammen erleben 💖</span>
              </li>
            </ul>
          </div>

          <div className="text-center py-8">
            <p className="text-3xl font-display font-bold text-pink-300 mb-4">
              Du bist einzigartig! ✨
            </p>
            <p className="text-xl">
              Danke, dass du du bist. Danke, dass ich dich kennenlernen durfte.
              Ich hoffe, dass dieser Geburtstag genauso wundervoll wird wie du es bist!
            </p>
          </div>

          <p className="text-2xl text-center font-semibold text-yellow-300 py-6">
            Happy Birthday, Victoria! 🎉💕🎂
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

export default Geburtstag;
