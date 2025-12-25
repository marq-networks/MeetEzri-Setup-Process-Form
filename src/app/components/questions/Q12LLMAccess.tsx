import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Cpu } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q12LLMAccess({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Alert className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/50">
        <Cpu className="h-5 w-5 text-blue-600" />
        <AlertDescription className="text-gray-700 text-base">
          We primarily use <strong>Llama</strong> with <strong>GPT</strong> as backup
        </AlertDescription>
      </Alert>

      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <Cpu className="w-6 h-6 text-purple-500" />
        Do you have Language Model (LLM) access?
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="have-llm" id="have-llm" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="have-llm" className="cursor-pointer text-gray-700 text-lg flex-1">
            I have Llama/GPT API access
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="need-llm-help" id="need-llm-help" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="need-llm-help" className="cursor-pointer text-gray-700 text-lg flex-1">
            Help me get API access
          </Label>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
