import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Gift } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
  data?: any;
}

export function Q16FreeTrial({ value, onChange }: QuestionProps) {
  const handleChange = (field: string, val: string) => {
    onChange({ ...value, [field]: val });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <Gift className="w-6 h-6 text-pink-500" />
        Free trial period
      </Label>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="freeTrialDays" className="text-base text-gray-600 mb-3 block">Trial Days</Label>
          <Input
            id="freeTrialDays"
            type="number"
            value={value?.days || ''}
            onChange={(e) => handleChange('days', e.target.value)}
            placeholder="e.g., 7"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 h-16 text-xl"
            autoFocus
          />
        </div>
        <div>
          <Label htmlFor="freeTrialMinutes" className="text-base text-gray-600 mb-3 block">AI Minutes</Label>
          <Input
            id="freeTrialMinutes"
            type="number"
            value={value?.minutes || ''}
            onChange={(e) => handleChange('minutes', e.target.value)}
            placeholder="e.g., 100"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 h-16 text-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}
