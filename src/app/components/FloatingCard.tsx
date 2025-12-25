import { motion } from 'motion/react';

interface FloatingCardProps {
  delay: number;
  icon: string;
  text: string;
}

export function FloatingCard({ delay, icon, text }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="hidden md:block"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 2,
        }}
        className="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl px-6 py-4 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="text-sm font-medium text-gray-800">{text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
