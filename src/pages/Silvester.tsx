import { Link } from 'react-router-dom';
import { PartyPopper, Sparkles, Heart, Home, Plane, Mountain, Ship, Building2 } from 'lucide-react';
import FireworksEffect from '@/components/FireworksEffect';

const Silvester = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 relative heart-cursor overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />
      
      {/* Real Fireworks Effect */}
      <FireworksEffect />

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
        <div className="glass-card p-8 md:p-12 mb-12 space-y-8 text-white">
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

          {/* 2025 Rückblick */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 my-8 border border-pink-300/20">
            <h2 className="text-3xl font-display font-bold mb-4 text-center">
              2025 - Ein besonderes Jahr 🌟
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Ich weiß, dass dieses Jahr nicht immer leicht für dich war. Die Uni hat viel von dir verlangt, 
              und es gab Momente, in denen alles überwältigend schien. Aber weißt du was?
            </p>
            <p className="text-lg leading-relaxed text-yellow-300 font-semibold text-center py-3">
              Du hast es geschafft! Du bist so stark und ich bin unglaublich stolz auf dich! 💪✨
            </p>
            <p className="text-lg leading-relaxed">
              Trotz aller Herausforderungen bist du immer du geblieben – wunderschön, lächelnd und voller Leben.
              Das macht dich zu etwas ganz Besonderem, Victoria! 💕
            </p>
          </div>

          {/* Reiseziele für die Zukunft */}
          <div className="bg-white/10 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 justify-center">
              <Plane className="w-7 h-7 text-yellow-300" />
              Unsere Traumreisen 🌍
            </h2>
            <p className="text-lg mb-6 text-center italic">
              Die Welt wartet auf uns – lass uns zusammen die schönsten Orte entdecken!
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🗼</span>
                  <h3 className="text-xl font-semibold">Paris, Frankreich</h3>
                </div>
                <p className="text-sm text-white/80">Der Eiffelturm bei Nacht, romantische Spaziergänge an der Seine...</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Mountain className="w-7 h-7 text-blue-300" />
                  <h3 className="text-xl font-semibold">Zermatt, Schweiz</h3>
                </div>
                <p className="text-sm text-white/80">Die majestätischen Berge, kristallklare Luft und unvergessliche Ausblicke...</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Mountain className="w-7 h-7 text-green-300" />
                  <h3 className="text-xl font-semibold">Österreich</h3>
                </div>
                <p className="text-sm text-white/80">Die Berge erkunden, die wunderschöne Landschaft genießen...</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-7 h-7 text-yellow-300" />
                  <h3 className="text-xl font-semibold">Und noch viel mehr!</h3>
                </div>
                <p className="text-sm text-white/80">Jedes Abenteuer mit dir wird unvergesslich sein! 🌟</p>
              </div>
            </div>
          </div>

          {/* Unsere verrückten Träume */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-lg p-6 my-8 border-2 border-yellow-300/30">
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2 justify-center">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              Unsere verrückten Träume 💭✨
            </h2>
            <p className="text-lg mb-6 text-center">
              Lass uns groß träumen, Victoria! Eines Tages...
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Building2 className="w-8 h-8 text-yellow-300 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Dubai - Reich und frei 🏙️</h3>
                  <p className="text-white/90">Stell dir vor: Wir in Dubai, erfolgreich und glücklich!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Ship className="w-8 h-8 text-blue-300 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Unsere eigene Yacht ⛵</h3>
                  <p className="text-white/90">Über das Meer gleiten, Sonnenuntergänge genießen, einfach perfekt!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Plane className="w-8 h-8 text-pink-300 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Privatjet ✈️</h3>
                  <p className="text-white/90">Fliegen wohin wir wollen, wann wir wollen – absolute Freiheit!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-red-300 shrink-0" fill="currentColor" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Villen an den schönsten Orten 🏝️</h3>
                  <p className="text-white/90">
                    Malediven, Bali, Santorini... überall ein Zuhause, überall können wir das Leben genießen!
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-lg mt-6 text-yellow-300 font-semibold italic">
              Träume sind dazu da, wahr zu werden – und mit dir an meiner Seite fühlt sich alles möglich an! 🌟💫
            </p>
          </div>

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
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-300 shrink-0 mt-1" fill="currentColor" />
                <span>Dass wir erste Schritte zu unseren Träumen machen</span>
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
