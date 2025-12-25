import { motion } from 'motion/react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { FileText } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q7DomainNotes({ value, onChange }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="domainNotes" className="text-xl text-gray-700 mb-4 block flex items-center gap-3">
        <FileText className="w-6 h-6 text-green-500" />
        Where is your domain registered?
      </Label>
      <Textarea
        id="domainNotes"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., GoDaddy, Namecheap, Google Domains, or account email if you know it"
        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 text-lg"
        rows={4}
        autoFocus
      />
    </motion.div>
  );
}
