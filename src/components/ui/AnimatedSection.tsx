import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade-up' 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    'fade-up': 'translate-y-8 opacity-0',
    'fade-in': 'opacity-0',
    'scale-in': 'scale-95 opacity-0',
    'slide-left': '-translate-x-8 opacity-0',
    'slide-right': 'translate-x-8 opacity-0',
  };

  const visibleClasses = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-in': 'opacity-100',
    'scale-in': 'scale-100 opacity-100',
    'slide-left': 'translate-x-0 opacity-100',
    'slide-right': 'translate-x-0 opacity-100',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
