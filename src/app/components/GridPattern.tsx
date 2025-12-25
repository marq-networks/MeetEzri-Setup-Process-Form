import { motion } from 'motion/react';

export function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-10">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(10, 10, 10, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>
          
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(57, 255, 20, 0.3)" />
            <stop offset="50%" stopColor="rgba(10, 10, 10, 0.2)" />
            <stop offset="100%" stopColor="rgba(57, 255, 20, 0.3)" />
          </linearGradient>
        </defs>
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated diagonal lines */}
        <motion.line
          x1="0"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        <motion.line
          x1="0"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.7 }}
        />

        <motion.line
          x1="30%"
          y1="0"
          x2="30%"
          y2="100%"
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, delay: 0.9 }}
        />
      </svg>
    </div>
  );
}
