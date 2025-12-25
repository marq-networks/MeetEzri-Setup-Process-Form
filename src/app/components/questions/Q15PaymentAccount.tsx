import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Input } from '../ui/input';
import { CreditCard, Lock, User } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
  data: any;
}

export function Q15PaymentAccount({ value, onChange, data }: QuestionProps) {
  const gateway = data?.paymentGateway;
  const isCredentialsRequired = gateway === 'stripe' || gateway === 'paypal';

  if (isCredentialsRequired) {
    const currentVal = typeof value === 'object' && value !== null ? value : { username: '', password: '' };

    const updateField = (field: string, newVal: string) => {
      onChange({ ...currentVal, [field]: newVal });
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <Label className="text-xl text-gray-700 mb-2 block flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-blue-600" />
          Enter your {gateway === 'stripe' ? 'Stripe' : 'PayPal'} credentials
        </Label>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-600 flex items-center gap-2">
              <User className="w-4 h-4" />
              Username / Email
            </Label>
            <Input
              id="username"
              value={currentVal.username || ''}
              onChange={(e) => updateField('username', e.target.value)}
              placeholder="e.g. user@example.com"
              className="bg-white text-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-600 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={currentVal.password || ''}
              onChange={(e) => updateField('password', e.target.value)}
              placeholder="••••••••"
              className="bg-white text-black"
            />
          </div>
        </div>
      </motion.div>
    );
  }

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
