import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface AnimatedSphereProps {
  className?: string;
  size?: number;
  delay?: number;
}

export function AnimatedSphere({ className = '', size = 300, delay = 0 }: AnimatedSphereProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: mousePosition.x,
        y: mousePosition.y,
        rotate: 360,
      }}
      transition={{ 
        duration: 1.5,
        delay,
        scale: { type: 'spring', stiffness: 100, damping: 20 },
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        x: { type: 'spring', stiffness: 50, damping: 30 },
        y: { type: 'spring', stiffness: 50, damping: 30 },
      }}
      style={{ width: size, height: size }}
    >
      <div className="relative w-full h-full">
        {/* Main sphere with gradient */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-gray-200"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(57, 255, 20, 0.05))',
            boxShadow: '0 10px 80px rgba(57, 255, 20, 0.2), inset 0 0 60px rgba(57, 255, 20, 0.1)',
          }}
          animate={{
            boxShadow: [
              '0 10px 80px rgba(57, 255, 20, 0.2), inset 0 0 60px rgba(57, 255, 20, 0.1)',
              '0 10px 100px rgba(57, 255, 20, 0.3), inset 0 0 80px rgba(57, 255, 20, 0.15)',
              '0 10px 80px rgba(57, 255, 20, 0.2), inset 0 0 60px rgba(57, 255, 20, 0.1)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Animated neon edge */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid rgba(57, 255, 20, 0.4)',
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full rounded-full overflow-hidden opacity-30">
          <defs>
            <pattern
              id={`sphere-grid-${delay}`}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(57, 255, 20, 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill={`url(#sphere-grid-${delay})`}
          />
        </svg>
        
        {/* Inner glow pulse */}
        <motion.div 
          className="absolute inset-[20%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
}
