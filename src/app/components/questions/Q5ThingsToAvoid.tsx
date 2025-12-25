import { motion } from 'motion/react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { X } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q5ThingsToAvoid({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="thingsToAvoid" className="text-xl text-gray-700 mb-4 block flex items-center gap-3">
        <X className="w-6 h-6 text-red-500" />
        Anything you want to avoid?
      </Label>
      <Textarea
        id="thingsToAvoid"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., Too corporate, overly playful, bright neon colors, cluttered layouts..."
        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all text-lg"
        rows={5}
        autoFocus
      />
    </motion.div>
  );
}
