import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Globe } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q6DomainName({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="domainName" className="text-xl text-gray-700 mb-4 block flex items-center gap-3">
        <Globe className="w-6 h-6 text-blue-500" />
        What's your domain name?
      </Label>
      <Input
        id="domainName"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., yourcompany.com"
        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 h-16 text-xl"
        autoFocus
      />
    </motion.div>
  );
}
