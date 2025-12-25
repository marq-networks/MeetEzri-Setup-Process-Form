import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle2, Sparkles, Edit, Send } from 'lucide-react';
import { GridPattern } from './GridPattern';

interface CompletionScreenProps {
  onEdit: () => void;
  onSubmit: () => void;
}

export function CompletionScreen({ onEdit, onSubmit }: CompletionScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(57, 255, 20, 0.2), transparent)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <GridPattern />
      
      {/* Floating celebration elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <Sparkles className="w-8 h-8 text-[#39FF14]" />
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-2xl min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <Card className="p-12 md:p-16 shadow-2xl border border-gray-200 bg-white/90 backdrop-blur-xl text-center">
            {/* Success icon with animation */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <CheckCircle2 className="w-28 h-28 text-[#39FF14]" />
                </motion.div>
                
                {/* Orbiting sparkles */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    animate={{
                      rotate: 360,
                      x: Math.cos((angle * Math.PI) / 180) * 60,
                      y: Math.sin((angle * Math.PI) / 180) * 60,
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                      delay: i * 0.2,
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-[#39FF14]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h1 
                className="mb-4 text-gray-900"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                All Questions Completed!
              </motion.h1>
            
              <p className="text-xl text-gray-700 mb-12">
                Review your responses and submit when ready, or go back to edit any answers.
              </p>

              {/* Action buttons */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-black text-white hover:bg-black/90 relative group overflow-hidden shadow-lg py-7"
                    onClick={onSubmit}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      Submit Responses
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-[#39FF14]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Button>
                </motion.div>
              
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-md py-7"
                    onClick={onEdit}
                  >
                    <Edit className="w-5 h-5 mr-2" />
                    Edit Responses
                  </Button>
                </motion.div>
              </div>

              <motion.div 
                className="mt-8 pt-8 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-sm text-gray-500">
                  Your responses are saved locally and will be submitted when you click the button above.
                </p>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
