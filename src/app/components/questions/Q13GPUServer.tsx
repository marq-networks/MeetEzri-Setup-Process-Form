import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Zap } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q13GPUServer({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <Zap className="w-6 h-6 text-yellow-500" />
        GPU Server Setup
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="have-gpu" id="have-gpu" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="have-gpu" className="cursor-pointer text-gray-700 text-lg flex-1">
            I already have a GPU server
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="need-gpu-help" id="need-gpu-help" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="need-gpu-help" className="cursor-pointer text-gray-700 text-lg flex-1">
            Help me set one up
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="no-gpu-yet" id="no-gpu-yet" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="no-gpu-yet" className="cursor-pointer text-gray-700 text-lg flex-1">
            I don't have one yet
          </Label>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
