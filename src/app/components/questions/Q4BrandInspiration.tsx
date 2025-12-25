import { motion } from 'motion/react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Sparkles } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q4BrandInspiration({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="brandInspiration" className="text-xl text-gray-700 mb-4 block flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-yellow-500" />
        Any brand inspiration? <span className="text-gray-400 text-base">(Optional)</span>
      </Label>
      <Textarea
        id="brandInspiration"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., Clean like Apple, modern like Stripe, playful like Notion..."
        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all text-lg"
        rows={5}
        autoFocus
      />
    </motion.div>
  );
}
