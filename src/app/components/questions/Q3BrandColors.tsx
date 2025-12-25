import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Palette } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q3BrandColors({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="brandColors" className="text-xl text-gray-700 mb-4 block flex items-center gap-3">
        <Palette className="w-6 h-6 text-purple-500" />
        What are your brand colors?
      </Label>
      <Input
        id="brandColors"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., #6366F1, #8B5CF6 or Blue and Purple"
        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all h-16 text-xl"
        autoFocus
      />
      <p className="text-sm text-gray-500 mt-3">You can use hex codes or color names</p>
    </motion.div>
  );
}
