import { Link } from 'react-router-dom';
import { Cake, Gift, Heart, Sparkles, Home, Smile, PartyPopper } from 'lucide-react';
import ConfettiEffect from '@/components/ConfettiEffect';

const Geburtstag = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-red-700 relative heart-cursor overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />
      
      {/* Real Confetti Effect */}
      <ConfettiEffect />

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
        <div className="glass-card p-8 md:p-12 mb-12 space-y-8 text-white">
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

          {/* Besonderer 21. Geburtstag */}
          <div className="bg-gradient-to-r from-pink-900/60 to-purple-900/60 rounded-lg p-8 my-8 border-2 border-pink-300/40">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-display font-bold mb-2 text-yellow-300">
                🎂 Dein 21. Geburtstag! 🎂
              </h2>
              <p className="text-2xl text-pink-300 font-semibold">Ein ganz besonderer Meilenstein! ✨</p>
            </div>
            
            <p className="text-lg leading-relaxed mb-4">
              Victoria, du wirst 21! Das ist nicht nur irgendein Geburtstag – das ist der Beginn 
              eines aufregenden neuen Kapitels in deinem Leben!
            </p>

            <div className="bg-white/10 rounded-lg p-6 my-6">
              <p className="text-lg leading-relaxed mb-3">
                Ich wünsche dir, dass dieser Tag absolut <span className="text-yellow-300 font-bold">wundervoll</span> wird! 
                Feiere ausgelassen, lache viel, tanze bis deine Füße schmerzen und genieße jeden einzelnen Moment!
              </p>
              <p className="text-lg leading-relaxed text-pink-300 font-semibold text-center py-3">
                Du verdienst die beste Party aller Zeiten! 🎉🎊🎈
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Möge dein 21. Lebensjahr voller unvergesslicher Momente, großartiger Abenteuer 
              und wunderschöner Erinnerungen sein. Du hast es verdient, glücklich zu sein! 💖
            </p>
          </div>

          {/* Meine Wünsche von Herzen */}
          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/40 rounded-lg p-6 my-8 border border-pink-300/30">
            <h2 className="text-3xl font-display font-bold mb-6 text-center flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-red-400" fill="currentColor" />
              Das Beste von mir für dich
              <Heart className="w-8 h-8 text-red-400" fill="currentColor" />
            </h2>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-5 hover:bg-white/15 transition-all">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-pink-300 shrink-0 mt-1" fill="currentColor" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-pink-300">Bleib gesund! 💪</h3>
                    <p className="text-lg">
                      Deine Gesundheit ist das Wichtigste! Ich wünsche dir Kraft, Energie und dass du 
                      immer gut auf dich aufpasst. Du bist zu wertvoll, um dich nicht um dich selbst zu kümmern!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-5 hover:bg-white/15 transition-all">
                <div className="flex items-start gap-4">
                  <Smile className="w-8 h-8 text-yellow-300 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-300">Hab eine wundervolle Zeit! 🌟</h3>
                    <p className="text-lg">
                      Genieße jeden Moment, lache viel, sammle schöne Erinnerungen und lass dich von 
                      niemandem runterziehen. Du verdienst nur das Allerbeste!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-5 hover:bg-white/15 transition-all">
                <div className="flex items-start gap-4">
                  <PartyPopper className="w-8 h-8 text-pink-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-pink-400">Feiere wie nie zuvor! 🎉</h3>
                    <p className="text-lg">
                      Heute ist DEIN Tag! Lass es richtig krachen, hab Spaß mit deinen Liebsten und 
                      mach diesen Geburtstag zu einem, den du niemals vergisst!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-5 hover:bg-white/15 transition-all">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-yellow-300 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-300">Sei stolz auf dich! ✨</h3>
                    <p className="text-lg">
                      Schau, wie weit du gekommen bist! 21 Jahre voller Erlebnisse, Wachstum und 
                      wunderbarer Momente. Und das Beste kommt noch! Du bist unglaublich!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xl mt-8 text-pink-300 font-semibold italic border-t-2 border-pink-300/30 pt-6">
              Von ganzem Herzen wünsche ich dir das Allerbeste! 
              Du bist etwas ganz Besonderes für mich! 💖✨
            </p>
          </div>

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
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300 shrink-0 mt-1" />
                <span>Dass du immer so strahlend und wundervoll bleibst wie du bist</span>
              </li>
            </ul>
          </div>

          <div className="text-center py-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg">
            <p className="text-3xl font-display font-bold text-pink-300 mb-4">
              Du bist einzigartig! ✨
            </p>
            <p className="text-xl px-4">
              Danke, dass du du bist. Danke, dass ich dich kennenlernen durfte.
              Ich hoffe, dass dieser Geburtstag genauso wundervoll wird wie du es bist!
            </p>
          </div>

          <p className="text-3xl text-center font-bold text-yellow-300 py-6 animate-pulse">
            Happy 21st Birthday, Victoria! 🎉💕🎂🎊
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
