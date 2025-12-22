import { useEffect, useState, useMemo } from 'react';

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  // Optimierte Anzahl basierend auf Viewport
  const snowflakeCount = useMemo(() => {
    if (typeof window === 'undefined') return 40;
    const width = window.innerWidth;
    if (width < 768) return 25; // Mobile
    if (width < 1024) return 35; // Tablet
    return 50; // Desktop
  }, []);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: snowflakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * -15,
      opacity: Math.random() * 0.6 + 0.4,
    }));
    setSnowflakes(flakes);
  }, [snowflakeCount]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-snow drop-shadow-lg"
          >
            <path d="M12 0L12.9 3.3L16 2L14.3 5L17.6 4.1L14.9 7L18 8L14.7 9L18 10L14.9 11L17.6 13.9L14.3 13L16 16L12.9 14.7L12 18L11.1 14.7L8 16L9.7 13L6.4 13.9L9.1 11L6 10L9.3 9L6 8L9.1 7L6.4 4.1L9.7 5L8 2L11.1 3.3L12 0Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
