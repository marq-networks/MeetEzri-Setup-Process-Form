import { motion } from 'motion/react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { DollarSign } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q17PaidPlans({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="paidPlans" className="text-xl text-gray-700 mb-4 block flex items-center gap-3">
        <DollarSign className="w-6 h-6 text-green-600" />
        What are your paid plan tiers?
      </Label>
      <Textarea
        id="paidPlans"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., 
Basic: $9.99/mo - 500 AI minutes
Premium: $19.99/mo - 1500 AI minutes  
Enterprise: Custom pricing - Unlimited"
        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 text-lg"
        rows={6}
        autoFocus
      />
    </motion.div>
  );
}
