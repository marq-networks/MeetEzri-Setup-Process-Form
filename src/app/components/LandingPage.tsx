import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap, Cpu } from 'lucide-react';
import { AnimatedSphere } from './AnimatedSphere';
import { GridPattern } from './GridPattern';
import { FloatingCard } from './FloatingCard';
import marqLogo from '../../assets/b50a1f14c33063011f99a0056a557c8da11ecf21.png';

interface LandingPageProps {
  onStartSetup: () => void;
}

export function LandingPage({ onStartSetup }: LandingPageProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(57, 255, 20, 0.15), transparent)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(57, 255, 20, 0.1), transparent)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Grid pattern overlay */}
      <GridPattern />
      
      {/* Animated 3D spheres */}
      <AnimatedSphere 
        className="absolute top-20 right-10 opacity-40"
        size={400}
        delay={0}
      />
      <AnimatedSphere 
        className="absolute bottom-20 left-10 opacity-30"
        size={300}
        delay={0.5}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Sparkles className="w-12 h-12 text-[#39FF14] opacity-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/3"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Zap className="w-16 h-16 text-[#39FF14] opacity-15" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div style={{ opacity, scale }}>
          {/* Logo with animated letters */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-12"
          >
            <motion.img 
              src={marqLogo} 
              alt="marQ Networks" 
              className="h-24 md:h-32 lg:h-40 w-auto object-contain mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Hero content with stagger animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl text-center space-y-8"
          >
            {/* Main headline with word-by-word animation */}
            <div className="text-5xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight">
              {['Build', 'systems.'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {['Not', 'noise.'].map((word, i) => (
                <motion.span
                  key={i + 2}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.2, duration: 0.6 }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              AI strategy, design, software, and growth — engineered for scale.
            </motion.p>

            {/* Description with slide-up animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="pt-4 pb-8"
            >
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                MARQ Networks designs and builds intelligent systems for modern businesses.
                From AI strategy to software and growth execution, everything is built for precision and performance.
              </p>
            </motion.div>

            {/* CTA Button with pulse animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2, type: 'spring' }}
              className="pt-4"
            >
              <Button
                size="lg"
                onClick={onStartSetup}
                className="group bg-black text-white hover:bg-black/90 px-10 py-7 text-lg relative overflow-hidden border-2 border-black shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.span 
                  className="relative z-10 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Cpu className="w-5 h-5" />
                  Start with Strategy
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.span>
                
                {/* Neon glow on hover */}
                <motion.div 
                  className="absolute inset-0 bg-[#39FF14] opacity-0 group-hover:opacity-20"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-4"
        >
          <FloatingCard delay={0} icon="⚡" text="Lightning Fast" />
          <FloatingCard delay={0.2} icon="🎯" text="Precision Built" />
          <FloatingCard delay={0.4} icon="🚀" text="Scale Ready" />
        </motion.div>

        {/* Bottom animated accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2.2, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-center"
          style={{
            background: 'linear-gradient(90deg, transparent, #39FF14, transparent)',
          }}
        />

        {/* Corner accents with animation */}
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#39FF14]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#39FF14]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
        />
      </div>
    </div>
  );
}
