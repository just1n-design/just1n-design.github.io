import { useState } from 'react';
import { Heart, Gift, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface PasswordOverlayProps {
  onSuccess: () => void;
}

const funnyErrors = [
  "Hmm, das war nicht ganz richtig... Versuch's nochmal Vicuschaaa💕",
  "Fast! Aber noch nicht ganz...🌟",
  "Netter Versuch! Aber der Schlüssel zu meinem Herzen ist ein anderer 😉",
  "Knapp daneben! Das Passwort ist es noch nicht 🎄",
  "Oops! Das Passwort tanzt noch irgendwo in deinem Kopf herum... 💫"
];

const PasswordOverlay = ({ onSuccess }: PasswordOverlayProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === 'tungtungtungtungtungtung' || password.toLowerCase() === 'tungtungtungpizdun') {
      onSuccess();
    } else {
      setShake(true);
      setError(funnyErrors[attempts % funnyErrors.length]);
      setAttempts(prev => prev + 1);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-accent/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={Math.random() * 30 + 20}
          />
        ))}
      </div>

      <div 
        className={`glass-card p-8 md:p-12 max-w-md mx-4 text-center relative ${shake ? 'animate-shake' : ''}`}
      >
        {/* Decorative Elements */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <Gift className="w-12 h-12 text-primary animate-gift-bounce" />
        </div>
        
        <Sparkles className="absolute top-4 right-4 w-6 h-6 text-primary/50 animate-twinkle" />
        <Sparkles className="absolute top-4 left-4 w-6 h-6 text-primary/50 animate-twinkle" style={{ animationDelay: '0.5s' }} />

        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary text-glow mb-4 mt-4">
          Für Victoria
        </h1>
        
        <p className="text-lg text-foreground/80 mb-2 font-body">
          Diese Seite ist nur für dich bestimmt... 💝
        </p>
        
        <p className="text-sm text-muted-foreground mb-6 font-body italic">
          Bitte gib das geheime Passwort ein, um fortzufahren
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Gib das Passwort ein..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center bg-secondary/50 border-primary/30 focus:border-primary text-lg py-6"
            />
            <Heart 
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent animate-heart-beat" 
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-6 text-lg font-display bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <Heart className="mr-2 h-5 w-5" />
            Öffnen
          </Button>
        </form>

        {error && (
          <p className="mt-4 text-accent text-sm animate-fade-in-up font-body">
            {error}
          </p>
        )}

        <p className="mt-6 text-xs text-muted-foreground font-body">
          Hinweis: Bekommst du, wenn du nicht weiterkommst 😂
          <br />
        
        </p>
      </div>
    </div>
  );
};

export default PasswordOverlay;
