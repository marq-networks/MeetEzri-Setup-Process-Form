import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Heart } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q18MoodCheckIns({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <Heart className="w-6 h-6 text-pink-500" />
        How often should we check in on mood?
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="daily" id="daily" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="daily" className="cursor-pointer text-gray-700 text-lg flex-1">
            Daily check-ins
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="weekly" id="weekly" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="weekly" className="cursor-pointer text-gray-700 text-lg flex-1">
            Weekly check-ins
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="dont-overdo" id="dont-overdo" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="dont-overdo" className="cursor-pointer text-gray-700 text-lg flex-1">
            Flexible (let users choose)
          </Label>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
