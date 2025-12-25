import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Database } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q20UserHistory({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <Database className="w-6 h-6 text-indigo-600" />
        How much conversation history should we keep?
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="basic" id="basic" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <div className="flex-1">
            <Label htmlFor="basic" className="cursor-pointer text-gray-700 text-lg block mb-1">
              Basic Memory
            </Label>
            <p className="text-sm text-gray-500">Last 30 days of conversations</p>
          </div>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="extended" id="extended" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <div className="flex-1">
            <Label htmlFor="extended" className="cursor-pointer text-gray-700 text-lg block mb-1">
              Extended Memory
            </Label>
            <p className="text-sm text-gray-500">Unlimited conversation history</p>
          </div>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
