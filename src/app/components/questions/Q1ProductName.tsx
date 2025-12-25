import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q1ProductName({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="productName" className="text-xl text-gray-700 mb-4 block">
        What's your product or company name?
      </Label>
      <Input
        id="productName"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., MeetEzri, WellnessAI, MindfulApp"
        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all h-16 text-xl"
        autoFocus
      />
    </motion.div>
  );
}
