import { useEffect, useState } from 'react';
import { Sparkles, PartyPopper, Cake } from 'lucide-react';

type SpecialDate = 'silvester' | 'birthday' | null;

const SpecialDateBanner = () => {
  const [specialDate, setSpecialDate] = useState<SpecialDate>(null);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1; // 0-indexed
    const day = today.getDate();

    // Silvester: 31. Dezember
    if (month === 12 && day === 31) {
      setSpecialDate('silvester');
    }
    // Victorias Geburtstag: 14. Februar (als Beispiel - kann angepasst werden)
    else if (month === 2 && day === 14) {
      setSpecialDate('birthday');
    }
  }, []);

  if (!specialDate) return null;

  const content = {
    silvester: {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Frohes Neues Jahr, meine Liebe! 🎆",
      message: "Möge dieses neue Jahr uns noch mehr wundervolle Momente zusammen bringen. Ich liebe dich! 💕",
      gradient: "from-purple-500 via-pink-500 to-orange-500",
    },
    birthday: {
      icon: <Cake className="w-8 h-8" />,
      title: "Happy Birthday, Victoria! 🎂",
      message: "Heute feiern wir den Tag, an dem die Welt ein Stück schöner wurde - dein Geburtstag! Ich liebe dich unendlich! 💝",
      gradient: "from-pink-500 via-rose-500 to-red-500",
    },
  };

  const { icon, title, message, gradient } = content[specialDate];

  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 md:p-8 mb-12 bg-gradient-to-r ${gradient}`}>
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white/30 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            size={Math.random() * 20 + 10}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center text-white">
        <div className="flex justify-center mb-4 animate-float">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
          {title}
        </h2>
        <p className="text-lg md:text-xl font-body opacity-90">
          {message}
        </p>
      </div>
    </div>
  );
};

export default SpecialDateBanner;
