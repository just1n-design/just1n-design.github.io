import { useState } from 'react';
import { Heart, Snowflake, Sparkles, Stars, TreePine, Gift } from 'lucide-react';
import PasswordOverlay from '@/components/PasswordOverlay';
import Snowflakes from '@/components/Snowflakes';
import ChristmasLights from '@/components/ChristmasLights';
import GiftBox from '@/components/GiftBox';
import ContentSection from '@/components/ContentSection';
import SpecialDateBanner from '@/components/SpecialDateBanner';
import HiddenEasterEgg from '@/components/HiddenEasterEgg';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <PasswordOverlay onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-christmas-gradient relative heart-cursor">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />
      
      {/* Atmospheric Effects */}
      <Snowflakes />
      <ChristmasLights />
      
      {/* Hidden Easter Eggs */}
      <HiddenEasterEgg />

      {/* Main Content */}
      <main className="relative z-30 px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 md:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Snowflake className="w-6 h-6 text-primary animate-spin-slow" />
            <span className="text-muted-foreground font-body text-lg">Ein besonderes Geschenk für dich</span>
            <Snowflake className="w-6 h-6 text-primary animate-spin-slow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary text-glow mb-6 animate-glow-pulse">
            Frohe Weihnachten, Victoria
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-body max-w-2xl mx-auto leading-relaxed">
            Diese Seite habe ich nur für dich gemacht, Vicaa 💕
          </p>
          
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 text-accent animate-heart-beat"
                style={{ animationDelay: `${i * 0.15}s` }}
                fill="currentColor"
              />
            ))}
          </div>
        </header>

        {/* Special Date Banner */}
        <SpecialDateBanner />

        {/* Christmas Section */}
        <ContentSection 
          title="Weihnachten mit Dir" 
          icon={<TreePine className="w-8 h-8 text-christmas-green" />}
          delay={100}
        >
          <p>
            Weißt du, was mein schönstes Weihnachtsgeschenk ist? <span className="text-primary font-semibold">Dich kennenzulernen!</span>
          </p>
          <p>
            In dieser magischen Zeit des Jahres denke ich darüber nach, wie unglaublich 
            glücklich du mich machst. Jeder Moment mit dir ist wie ein kleines Wunder, 
            und ich bin so dankbar, dass ich dich kennengelernt habe.
          </p>
          <blockquote className="romantic-quote text-center py-4 border-l-4 border-primary/30 pl-6 my-6">
            Du bist der Stern auf meinem Weihnachtsbaum, 
            das Licht in meinen dunklen Nächten, 
            und das Lächeln in meinem Herzen.
          </blockquote>
        </ContentSection>

        {/* Our Story Section */}
        <ContentSection 
          title="Wie alles begann" 
          icon={<Heart className="w-8 h-8 text-accent" fill="currentColor" />}
          delay={200}
        >
          <p>
            Erinnerst du dich an den Moment, als wir uns das erste Mal begegnet sind?
            Mein Herz hat sofort gewusst, dass du etwas Besonderes bist.
          </p>
          <p>
            Seitdem sind so viele wundervolle Momente vergangen. Jedes Lachen, 
            jede Nachricht, jedes Gespräch... all das macht unsere Geschichte so einzigartig 
            und wunderschön.
          </p>
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1" />
            <Sparkles className="w-6 h-6 text-primary animate-twinkle" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1" />
          </div>
          <p className="text-center italic text-primary">
            Und unsere Geschichte hat gerade erst begonnen...
          </p>
        </ContentSection>

        {/* What I Want to Tell You Section */}
        <ContentSection 
	  title="Was ich dir sagen will" 
	  icon={<Stars className="w-8 h-8 text-christmas-gold" />}
	  delay={300}
		>
		  <p>
			<span className="text-2xl">V</span>ictoria, irgendwie freue ich mich jedes Mal,
			wenn wir schreiben oder quatschen. Es passieren immer witzige und interessante Dinge.
		  </p>

		  <ul className="space-y-3 my-6">
			<li className="flex items-start gap-3">
			  <Heart className="w-5 h-5 text-accent shrink-0 mt-1" fill="currentColor" />
			  <span>Danke für die kleinen Momente, die ich mit dir erleben darf</span>
			</li>

			<li className="flex items-start gap-3">
			  <Heart className="w-5 h-5 text-accent shrink-0 mt-1" fill="currentColor" />
			  <span>Danke, dass du so bist wie du bist, das macht alles viel leichter</span>
			</li>

			<li className="flex items-start gap-3">
			  <Heart className="w-5 h-5 text-accent shrink-0 mt-1" fill="currentColor" />
			  <span>Mit dir zu schreiben bringt irgendwie gute Laune in den Tag</span>
			</li>

			<li className="flex items-start gap-3">
			  <Heart className="w-5 h-5 text-accent shrink-0 mt-1" fill="currentColor" />
			  <span>Schön, dass wir uns gerade auf diese kleine Entdeckungsreise einlassen und uns immer besser kennenlernen</span>
			</li>
		  </ul>

		  <p className="text-lg text-center text-primary font-medium">
			Ich bin gespannt, welche Überraschungen wir noch zusammen entdecken ✨
		  </p>
		</ContentSection>


        {/* Future Wishes Section */}
        <ContentSection 
          title="Was ich mir wünsche" 
          icon={<Sparkles className="w-8 h-8 text-glow" />}
          delay={400}
        >
          <p>
            Wenn ich an die Zukunft denke, sehe ich so viele wundervolle Möglichkeiten vor uns:
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-secondary/30 p-4 rounded-lg border border-primary/20">
              <p className="text-primary font-semibold mb-2">✨ Mehr Zeit mit dir</p>
              <p className="text-sm text-muted-foreground">Dich noch besser kennenlernen</p>
            </div>
            <div className="bg-secondary/30 p-4 rounded-lg border border-primary/20">
              <p className="text-primary font-semibold mb-2">🎢 Gemeinsame Abenteuer</p>
              <p className="text-sm text-muted-foreground">Die Welt zusammen erkunden</p>
            </div>
            <div className="bg-secondary/30 p-4 rounded-lg border border-primary/20">
              <p className="text-primary font-semibold mb-2">💫 Unendlich viele Momente</p>
              <p className="text-sm text-muted-foreground">Lachen und unvergessliche Erinnerungen</p>
            </div>
            <div className="bg-secondary/30 p-4 rounded-lg border border-primary/20">
              <p className="text-primary font-semibold mb-2">🌟 Wer weiß was noch</p>
              <p className="text-sm text-muted-foreground">Das Beste kommt noch...</p>
            </div>
          </div>
          <p className="text-center">
            Egal was kommt, ich freue mich auf jeden Moment mit dir.
          </p>
        </ContentSection>

        {/* Gift Section */}
        <section className="mb-16 md:mb-24 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-soft mb-4 flex items-center justify-center gap-3">
            <Gift className="w-8 h-8" />
            Ein Geschenk für dich
          </h2>
          <p className="text-foreground/70 mb-8 font-body">
            Klicke auf das Geschenk, um es zu öffnen... 🎁
          </p>
          <GiftBox />
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-primary/20">
          <p className="text-2xl md:text-3xl font-display font-bold text-primary text-glow mb-4">
            Frohe Weihnachten, Victoria 💕
          </p>
          <p className="text-muted-foreground font-body">
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <Heart className="w-6 h-6 text-accent animate-heart-beat" fill="currentColor" />
            <Sparkles className="w-5 h-5 text-primary animate-twinkle" />
            <Heart className="w-6 h-6 text-accent animate-heart-beat" fill="currentColor" style={{ animationDelay: '0.3s' }} />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
