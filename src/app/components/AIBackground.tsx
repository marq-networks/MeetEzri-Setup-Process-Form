import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Brain, Activity, Heart, Sparkles } from 'lucide-react';

export function AIBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Gradient backgrounds */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3), transparent)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(196, 181, 253, 0.25), transparent)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(134, 239, 172, 0.2), transparent)' }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating icons */}
      <motion.div
        className="absolute top-[15%] left-[10%]"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Brain className="w-16 h-16 text-blue-400/30" />
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-[15%]"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Heart className="w-20 h-20 text-pink-400/25" />
      </motion.div>

      <motion.div
        className="absolute top-[30%] right-[25%]"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Activity className="w-14 h-14 text-green-400/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[20%]"
        animate={{
          y: [0, -35, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Sparkles className="w-12 h-12 text-purple-400/30" />
      </motion.div>

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {particles.map((particle, i) => {
          if (i < particles.length - 1) {
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${particle.x}%`}
                y1={`${particle.y}%`}
                x2={`${particles[i + 1].x}%`}
                y2={`${particles[i + 1].y}%`}
                stroke="rgba(100, 100, 255, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  delay: particle.delay,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            );
          }
          return null;
        })}
      </svg>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5 + particle.delay,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Pulsing circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-purple-400/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            width: 80 + i * 20,
            height: 80 + i * 20,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Mind wave patterns */}
      <svg className="absolute bottom-0 left-0 w-full h-48 opacity-20">
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100",
              "M0,100 Q250,150 500,100 T1000,100 T1500,100 T2000,100",
              "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M0,120 Q300,80 600,120 T1200,120 T1800,120"
          stroke="rgba(196, 181, 253, 0.5)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,120 Q300,80 600,120 T1200,120 T1800,120",
              "M0,120 Q300,160 600,120 T1200,120 T1800,120",
              "M0,120 Q300,80 600,120 T1200,120 T1800,120",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* DNA helix inspired pattern */}
      <motion.div
        className="absolute right-0 top-1/4 w-32 h-96 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-full"
            style={{
              left: `${Math.sin(i * 0.5) * 50 + 50}%`,
              top: `${i * 8}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
