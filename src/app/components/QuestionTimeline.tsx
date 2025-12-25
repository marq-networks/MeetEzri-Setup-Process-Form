import { motion, AnimatePresence } from 'motion/react';
import { ReactNode, useState, useEffect } from 'react';

interface QuestionTimelineProps {
  currentStep: number;
  totalSteps: number;
  children: ReactNode;
  onStepClick?: (step: number) => void;
}

export function QuestionTimeline({ currentStep, totalSteps, children, onStepClick }: QuestionTimelineProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousStep, setPreviousStep] = useState(currentStep);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  // Calculate which 4 steps to show (sliding window)
  const getVisibleSteps = () => {
    const windowSize = 5; // Show 5 numbers at a time
    const centerPosition = 2; // Active step will be at index 2 (center position)
    
    let startStep = currentStep - centerPosition;
    
    // Handle edge cases at the beginning
    if (startStep < 1) {
      startStep = 1;
    }
    
    // Handle edge cases at the end
    if (startStep + windowSize - 1 > totalSteps) {
      startStep = Math.max(1, totalSteps - windowSize + 1);
    }
    
    const endStep = Math.min(startStep + windowSize - 1, totalSteps);
    
    const visible = [];
    for (let i = startStep; i <= endStep; i++) {
      visible.push(i);
    }
    return visible;
  };

  const visibleSteps = getVisibleSteps();

  // Detect step change and trigger animation
  useEffect(() => {
    if (currentStep !== previousStep) {
      setDirection(currentStep > previousStep ? 'forward' : 'backward');
      
      // Only trigger transition if the visible window changes
      const prevVisible = getVisibleStepsForStep(previousStep);
      const currVisible = visibleSteps;
      
      if (JSON.stringify(prevVisible) !== JSON.stringify(currVisible)) {
        setIsTransitioning(true);
        
        // Reset transition after animation completes
        const timeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
        
        return () => clearTimeout(timeout);
      }
      
      setPreviousStep(currentStep);
    }
  }, [currentStep, previousStep]);
  
  // Helper function to get visible steps for any step number
  function getVisibleStepsForStep(step: number) {
    const windowSize = 5; // Show 5 numbers at a time
    const centerPosition = 2; // Center position
    
    let startStep = step - centerPosition;
    
    if (startStep < 1) {
      startStep = 1;
    }
    
    if (startStep + windowSize - 1 > totalSteps) {
      startStep = Math.max(1, totalSteps - windowSize + 1);
    }
    
    const endStep = Math.min(startStep + windowSize - 1, totalSteps);
    
    const visible = [];
    for (let i = startStep; i <= endStep; i++) {
      visible.push(i);
    }
    return visible;
  }

  // Generate vertical positions for the timeline
  const generateStepPositions = () => {
    const positions: { x: number; y: number; step: number; index: number }[] = [];
    const centerY = 210; // 30% higher from center (600 * 0.35 = 210)
    const spacing = 70; // Tighter spacing between numbers
    
    visibleSteps.forEach((step, index) => {
      // Calculate offset from center (index 2 is center for 5 items: 0,1,2,3,4)
      const centerIndex = 2;
      const offsetFromCenter = index - centerIndex;
      
      positions.push({ 
        x: 200,
        y: centerY + (offsetFromCenter * spacing), // Center +/- spacing
        step: step,
        index: index
      });
    });
    return positions;
  };

  const stepPositions = generateStepPositions();

  return (
    <div className="relative w-full min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side: Timeline - Desktop */}
        <div className="hidden md:flex md:w-[320px] lg:w-[380px] flex-shrink-0 items-center justify-center py-12 relative overflow-hidden">
          {/* D-shaped circular transition overlay */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                className="absolute inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="relative"
                  style={{
                    width: '600px',
                    height: '600px',
                  }}
                >
                  {/* Half circle wipe effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 via-white/5 to-[#39FF14]/10 backdrop-blur-md"
                    style={{
                      clipPath: 'circle(0% at 50% 50%)',
                    }}
                    animate={{
                      clipPath: [
                        'circle(0% at 50% 50%)',
                        'circle(70% at 50% 50%)',
                        'circle(0% at 50% 50%)',
                      ],
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <svg 
            className="w-full h-full" 
            viewBox="0 0 400 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Glassmorphic gradient for future steps */}
              <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.08)" />
              </linearGradient>
              
              {/* Past step gradient with neon green */}
              <linearGradient id="pastGlassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.18)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
              
              {/* Active step gradient with neon green */}
              <linearGradient id="activeGlassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(57, 255, 20, 0.2)" />
                <stop offset="100%" stopColor="rgba(57, 255, 20, 0.1)" />
              </linearGradient>

              {/* Neon glow filter */}
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
                <feOffset dx="0" dy="0" result="offsetblur"/>
                <feFlood floodColor="#39FF14" floodOpacity="0.6"/>
                <feComposite in2="offsetblur" operator="in"/>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Subtle shadow for glass effect */}
              <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
                <feOffset dx="0" dy="4" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Vertical connecting line */}
            <motion.line
              key={`line-${visibleSteps[0]}`}
              x1={stepPositions[0]?.x}
              y1={stepPositions[0]?.y}
              x2={stepPositions[stepPositions.length - 1]?.x}
              y2={stepPositions[stepPositions.length - 1]?.y}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />

            {/* Progress line (completed portion) with neon green */}
            {currentStep > visibleSteps[0] && (
              <motion.line
                key={`progress-${visibleSteps[0]}-${currentStep}`}
                x1={stepPositions[0]?.x}
                y1={stepPositions[0]?.y}
                x2={stepPositions[Math.min(currentStep - visibleSteps[0], stepPositions.length - 1)]?.x}
                y2={stepPositions[Math.min(currentStep - visibleSteps[0], stepPositions.length - 1)]?.y}
                stroke="#39FF14"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            )}

            {/* Clickable step circles with glassmorphism */}
            <AnimatePresence mode="popLayout">
              {stepPositions.map((pos) => {
                const isActive = pos.step === currentStep;
                const isPast = pos.step < currentStep;
                const stepNum = pos.step.toString().padStart(2, '0');
                
                // Size based on POSITION (carousel depth effect)
                // Index 0 (top): smallest
                // Index 1: medium
                // Index 2 (center): largest
                // Index 3: medium
                // Index 4 (bottom): smallest
                const getSizeForPosition = (index: number) => {
                  if (index === 0 || index === 4) {
                    return { radius: 20, fontSize: 16, outerRing: 36 }; // small
                  } else if (index === 1 || index === 3) {
                    return { radius: 26, fontSize: 20, outerRing: 40 }; // medium
                  } else { // index === 2 (center)
                    return { radius: 32, fontSize: 26, outerRing: 44 }; // large
                  }
                };
                
                const size = getSizeForPosition(pos.index);
                const circleRadius = size.radius;
                const fontSize = size.fontSize;
                
                // Carousel wheel effect: numbers enter/exit from scrolling direction
                // Each number animates to its fixed position on screen
                const getInitialY = () => {
                  // New numbers come from the scroll direction
                  return direction === 'forward' ? pos.y + 300 : pos.y - 300;
                };
                
                const getExitY = () => {
                  // Old numbers exit in the scroll direction
                  return direction === 'forward' ? pos.y - 300 : pos.y + 300;
                };
                
                return (
                  <motion.g 
                    key={`step-${pos.step}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => onStepClick?.(pos.step)}
                    initial={{ 
                      opacity: 0,
                      y: getInitialY()
                    }}
                    animate={{ 
                      opacity: 1,
                      y: pos.y  // Animate to fixed position (carousel effect)
                    }}
                    exit={{ 
                      opacity: 0,
                      y: getExitY()
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      type: 'spring',
                      stiffness: 120,
                      damping: 20
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Outer highlight ring for future steps */}
                    {!isActive && !isPast && (
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r="44"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="1"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ 
                          scale: 1,
                          opacity: 1
                        }}
                        transition={{ 
                          delay: pos.index * 0.1,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15
                        }}
                      />
                    )}
                    
                    {/* Main glassmorphic circle background */}
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={circleRadius}
                      fill={isActive ? 'url(#activeGlassGradient)' : isPast ? 'url(#pastGlassGradient)' : 'url(#glassGradient)'}
                      stroke={isActive ? '#39FF14' : isPast ? '#39FF14' : 'rgba(255, 255, 255, 0.5)'}
                      strokeWidth={isActive ? '3' : isPast ? '2' : '2'}
                      filter={'url(#glassShadow)'}
                      animate={{ r: circleRadius }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 200,
                        damping: 15
                      }}
                    />

                    {/* Inner border for layered glass effect */}
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={circleRadius - 2}
                      fill="none"
                      stroke={isActive || isPast ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.15)'}
                      strokeWidth="1"
                      animate={{ r: circleRadius - 2 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    />

                    {/* Step number text */}
                    <motion.text
                      x={pos.x}
                      y={pos.y}
                      fontSize={fontSize}
                      fontWeight="700"
                      fill={isActive ? '#000000' : isPast ? '#39FF14' : 'rgba(255, 255, 255, 0.6)'}
                      dominantBaseline="middle"
                      textAnchor="middle"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        fontSize: fontSize
                      }}
                      transition={{ 
                        delay: pos.index * 0.15,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15
                      }}
                      style={{ 
                        fontFamily: 'DM Sans, sans-serif',
                        pointerEvents: 'none',
                        userSelect: 'none'
                      }}
                    >
                      {stepNum}
                    </motion.text>
                  </motion.g>
                );
              })}
            </AnimatePresence>
          </svg>
        </div>

        {/* Mobile timeline - horizontal at top */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-lg border-b border-white/10 z-30 px-4 flex items-center justify-center gap-3 overflow-hidden">
          {/* Mobile circular transition */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#39FF14]/10 via-white/5 to-[#39FF14]/10 backdrop-blur-md"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {visibleSteps.map((step, index) => {
              const isActive = step === currentStep;
              const isPast = step < currentStep;
              
              // Calculate horizontal scroll for mobile
              const exitX = direction === 'forward' ? -100 : 100;
              const initialX = direction === 'forward' ? 100 : -100;
              
              return (
                <motion.button
                  key={`mobile-${step}`}
                  onClick={() => onStepClick?.(step)}
                  className={`flex items-center justify-center rounded-full font-bold relative z-10 backdrop-blur-sm border shadow-xl transition-all duration-300 ${
                    isActive 
                      ? 'w-16 h-16 bg-gradient-to-b from-[#39FF14]/20 to-[#39FF14]/10 text-black border-[#39FF14] border-2' 
                      : isPast 
                      ? 'w-[52px] h-[52px] bg-white/10 text-[#39FF14] border-[#39FF14]' 
                      : 'w-[52px] h-[52px] bg-white/8 text-white/60 border-white/50 border-2'
                  }`}
                  initial={{ 
                    scale: 0, 
                    opacity: 0,
                    x: initialX
                  }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: 0
                  }}
                  exit={{ 
                    scale: 0.5, 
                    opacity: 0,
                    x: exitX
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1, borderColor: '#39FF14' }}
                  transition={{ 
                    delay: index * 0.08, 
                    type: 'spring', 
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  {/* Breathing effect for active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#39FF14]/20"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  )}
                  <span className="relative z-10">{step.toString().padStart(2, '0')}</span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right side: Content */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16 mt-20 md:mt-0">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full max-w-3xl"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}