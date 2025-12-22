import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface EasterEgg {
  type: 'silvester' | 'birthday';
  emoji: string;
  link: string;
  label: string;
  position: { top: number; left: number };
  velocity: { x: number; y: number };
}

const HiddenEasterEgg = () => {
  const [eggs, setEggs] = useState<EasterEgg[]>([]);

  useEffect(() => {
    // Get current date in German timezone
    const now = new Date();
    const germanTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    
    // Silvester Easter Egg: ab 30.12.2025 00:00 Uhr
    const silvesterStart = new Date('2025-12-30T00:00:00');
    
    // Birthday Easter Egg: ab 16.01.2026 00:00 Uhr
    const birthdayStart = new Date('2026-01-16T00:00:00');

    const activeEggs: EasterEgg[] = [];

    // Production mode: show eggs based on date
    if (germanTime >= birthdayStart) {
      activeEggs.push({
        type: 'birthday',
        emoji: '🎁',
        link: '/geburtstag',
        label: 'Geburtstags Überraschung',
        position: { top: Math.random() * 70 + 10, left: Math.random() * 70 + 10 },
        velocity: { x: (Math.random() - 0.5) * 0.3, y: (Math.random() - 0.5) * 0.3 },
      });
    } else if (germanTime >= silvesterStart) {
      activeEggs.push({
        type: 'silvester',
        emoji: '🎆',
        link: '/silvester',
        label: 'Silvester Überraschung',
        position: { top: Math.random() * 70 + 10, left: Math.random() * 70 + 10 },
        velocity: { x: (Math.random() - 0.5) * 0.3, y: (Math.random() - 0.5) * 0.3 },
      });
    }

    setEggs(activeEggs);

    // Animation loop - move eggs smoothly
    const interval = setInterval(() => {
      setEggs((prevEggs) =>
        prevEggs.map((egg) => {
          let newTop = egg.position.top + egg.velocity.y;
          let newLeft = egg.position.left + egg.velocity.x;
          let newVelX = egg.velocity.x;
          let newVelY = egg.velocity.y;

          // Bounce off edges
          if (newTop <= 5 || newTop >= 90) {
            newVelY = -newVelY;
            newTop = Math.max(5, Math.min(90, newTop));
          }
          if (newLeft <= 5 || newLeft >= 90) {
            newVelX = -newVelX;
            newLeft = Math.max(5, Math.min(90, newLeft));
          }

          return {
            ...egg,
            position: { top: newTop, left: newLeft },
            velocity: { x: newVelX, y: newVelY },
          };
        })
      );
    }, 50); // Update every 50ms for smooth movement

    return () => clearInterval(interval);
  }, []);

  if (eggs.length === 0) return null;

  return (
    <>
      {eggs.map((egg) => (
        <Link
          key={egg.type}
          to={egg.link}
          className="fixed z-50 transition-all duration-300 ease-in-out easter-egg-hover"
          style={{
            top: `${egg.position.top}%`,
            left: `${egg.position.left}%`,
          }}
          aria-label={egg.label}
          title={egg.label}
        >
          <span className="text-4xl md:text-5xl opacity-40 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer easter-egg-glow">
            {egg.emoji}
          </span>
        </Link>
      ))}
    </>
  );
};

export default HiddenEasterEgg;
