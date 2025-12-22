import { useEffect, useRef, useState, ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
  icon?: ReactNode;
}

const ContentSection = ({ title, children, delay = 0, icon }: ContentSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={ref}
      className={`mb-12 md:mb-20 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="glass-card p-6 md:p-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-soft mb-6 flex items-center gap-3">
          {icon}
          {title}
        </h2>
        <div className="text-lg md:text-xl leading-relaxed text-foreground/90 font-body space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
