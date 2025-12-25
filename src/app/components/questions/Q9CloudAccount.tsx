import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Server } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q9CloudAccount({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <Server className="w-6 h-6 text-indigo-500" />
        Do you have a cloud account set up?
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="have-account" id="have-account" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="have-account" className="cursor-pointer text-gray-700 text-lg flex-1">
            Yes, I already have one
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="need-help" id="need-help" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="need-help" className="cursor-pointer text-gray-700 text-lg flex-1">
            No, please help me set it up
          </Label>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
