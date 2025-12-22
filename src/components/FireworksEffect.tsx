import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

const FireworksEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const colors = ['#ff0844', '#ffb199', '#ffd700', '#ff69b4', '#ff1493', '#ff6347'];

    const createFirework = (x: number, y: number) => {
      const particleCount = 30; // Reduced from 50 to 30
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 2 + Math.random() * 2.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 2,
        });
      }
    };

    const createHeartFirework = (x: number, y: number) => {
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        const t = (i / particleCount) * Math.PI * 2;
        // Heart shape equation
        const heartX = 16 * Math.pow(Math.sin(t), 3);
        const heartY = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        
        const velocity = 0.5 + Math.random() * 0.5;
        particles.push({
          x,
          y,
          vx: heartX * velocity * 0.1,
          vy: heartY * velocity * 0.1,
          alpha: 1,
          color: '#ff0844',
          size: 2 + Math.random() * 2,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // Gravity
        particle.alpha -= 0.01;

        if (particle.alpha <= 0) return false;

        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Create fireworks periodically (less frequent)
    const interval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.5);
      
      // 40% chance for heart firework, 60% normal
      if (Math.random() > 0.6) {
        createHeartFirework(x, y);
      } else {
        createFirework(x, y);
      }
    }, 2000); // Increased from 800ms to 2000ms

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default FireworksEffect;
