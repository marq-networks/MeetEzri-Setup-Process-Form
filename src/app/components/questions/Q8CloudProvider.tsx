import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Cloud } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q8CloudProvider({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-4 block flex items-center gap-3">
        <Cloud className="w-6 h-6 text-sky-500" />
        Which cloud provider do you prefer?
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-white/80 border-gray-300 text-gray-900 h-16 text-xl">
          <SelectValue placeholder="Choose one (or we'll help you decide)" />
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-200">
          <SelectItem value="aws" className="hover:bg-[#39FF14]/10 text-lg py-4">AWS (Amazon Web Services)</SelectItem>
          <SelectItem value="gcp" className="hover:bg-[#39FF14]/10 text-lg py-4">GCP (Google Cloud)</SelectItem>
          <SelectItem value="azure" className="hover:bg-[#39FF14]/10 text-lg py-4">Azure (Microsoft)</SelectItem>
          <SelectItem value="no-idea" className="hover:bg-[#39FF14]/10 text-lg py-4">I'm not sure yet</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
}
