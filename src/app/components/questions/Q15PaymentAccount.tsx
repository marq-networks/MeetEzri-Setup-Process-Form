import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { CreditCard } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
  data: any;
}

export function Q15PaymentAccount({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <CreditCard className="w-6 h-6 text-blue-600" />
        Is your payment account already set up?
      </Label>
      <RadioGroup value={typeof value === 'string' ? value : ''} onValueChange={onChange} className="space-y-4">
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="have-account" id="have-payment-account" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="have-payment-account" className="cursor-pointer text-gray-700 text-lg flex-1">
            Yes, it's ready to go
          </Label>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="need-help-setup" id="need-help-setup" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="need-help-setup" className="cursor-pointer text-gray-700 text-lg flex-1">
            No, let's set it up together
          </Label>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
