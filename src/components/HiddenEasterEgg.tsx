import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type EasterEggType = 'silvester' | 'birthday' | null;

const HiddenEasterEgg = () => {
  const [activeEgg, setActiveEgg] = useState<EasterEggType>(null);
  const [position, setPosition] = useState({ top: '20%', left: '10%' });

  useEffect(() => {
    // Get current date in German timezone
    const now = new Date();
    const germanTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    
    // Silvester Easter Egg: ab 30.12.2025 00:00 Uhr
    const silvesterStart = new Date('2025-12-30T00:00:00');
    
    // Birthday Easter Egg: ab 16.01.2026 00:00 Uhr
    const birthdayStart = new Date('2026-01-16T00:00:00');

    if (germanTime >= birthdayStart) {
      setActiveEgg('birthday');
    } else if (germanTime >= silvesterStart) {
      setActiveEgg('silvester');
    }

    // Random position (avoiding edges)
    const randomTop = Math.random() * 60 + 20; // 20% to 80%
    const randomLeft = Math.random() * 60 + 20; // 20% to 80%
    setPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  }, []);

  if (!activeEgg) return null;

  const config = {
    silvester: {
      emoji: '🎆',
      link: '/silvester',
      label: 'Silvester Überraschung',
    },
    birthday: {
      emoji: '🎁',
      link: '/geburtstag',
      label: 'Geburtstags Überraschung',
    },
  };

  const { emoji, link, label } = config[activeEgg];

  return (
    <Link
      to={link}
      className="fixed z-50 transition-all duration-300 ease-in-out easter-egg-hover"
      style={{
        top: position.top,
        left: position.left,
      }}
      aria-label={label}
      title={label}
    >
      <span className="text-4xl md:text-5xl opacity-40 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer easter-egg-glow">
        {emoji}
      </span>
    </Link>
  );
};

export default HiddenEasterEgg;
