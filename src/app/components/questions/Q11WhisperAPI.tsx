import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Mic } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q11WhisperAPI({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <Mic className="w-6 h-6 text-blue-500" />
        Do you have Whisper API access?
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="have-whisper" id="have-whisper" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="have-whisper" className="cursor-pointer text-gray-700 text-lg flex-1">
            Yes, I have Whisper API
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="need-whisper-help" id="need-whisper-help" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="need-whisper-help" className="cursor-pointer text-gray-700 text-lg flex-1">
            No, help me set it up
          </Label>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
