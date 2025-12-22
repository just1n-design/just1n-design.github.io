import { useMemo } from 'react';

const ChristmasLights = () => {
  const colors = ['red', 'green', 'gold', 'blue'] as const;
  
  const lights = useMemo(() => {
    const leftLights = Array.from({ length: 20 }, (_, i) => ({
      id: `left-${i}`,
      color: colors[i % 4],
      delay: i * 0.2,
      top: 5 + i * 4.5,
    }));
    
    const rightLights = Array.from({ length: 20 }, (_, i) => ({
      id: `right-${i}`,
      color: colors[(i + 2) % 4],
      delay: i * 0.2 + 0.1,
      top: 5 + i * 4.5,
    }));
    
    return { left: leftLights, right: rightLights };
  }, []);

  const getLightClasses = (color: typeof colors[number]) => {
    switch (color) {
      case 'red': return 'bg-christmas-red light-glow-red';
      case 'green': return 'bg-christmas-green light-glow-green';
      case 'gold': return 'bg-christmas-gold light-glow-gold';
      case 'blue': return 'bg-blue-400 light-glow-blue';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-20" aria-hidden="true">
      {/* Linke Seite */}
      <div className="absolute left-2 md:left-4 top-0 bottom-0">
        {lights.left.map((light) => (
          <div
            key={light.id}
            className={`absolute w-3 h-4 md:w-4 md:h-5 rounded-full animate-twinkle ${getLightClasses(light.color)}`}
            style={{
              top: `${light.top}%`,
              animationDelay: `${light.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Rechte Seite */}
      <div className="absolute right-2 md:right-4 top-0 bottom-0">
        {lights.right.map((light) => (
          <div
            key={light.id}
            className={`absolute w-3 h-4 md:w-4 md:h-5 rounded-full animate-twinkle ${getLightClasses(light.color)}`}
            style={{
              top: `${light.top}%`,
              animationDelay: `${light.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChristmasLights;
