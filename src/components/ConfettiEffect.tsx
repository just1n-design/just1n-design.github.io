import { useEffect, useRef } from 'react';

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  width: number;
  height: number;
}

const ConfettiEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti: ConfettiPiece[] = [];
    let animationFrameId: number;

    const colors = ['#ff6b9d', '#c06c84', '#f67280', '#355c7d', '#6c5ce7', '#fdcb6e', '#e17055', '#74b9ff'];

    const createConfetti = (count: number) => {
      for (let i = 0; i < count; i++) {
        confetti.push({
          x: Math.random() * canvas.width,
          y: -20,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          width: 8 + Math.random() * 6,
          height: 12 + Math.random() * 8,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti = confetti.filter((piece) => {
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rotation += piece.rotationSpeed;
        piece.vy += 0.1; // Gravity

        if (piece.y > canvas.height + 20) return false;

        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate((piece.rotation * Math.PI) / 180);
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
        ctx.restore();

        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial burst
    createConfetti(100);

    // Continuous confetti
    const interval = setInterval(() => {
      createConfetti(5);
    }, 200);

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

export default ConfettiEffect;
