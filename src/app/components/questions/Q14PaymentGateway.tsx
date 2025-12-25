import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Input } from '../ui/input';
import { DollarSign, User, Lock } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q14PaymentGateway({ value, onChange }: QuestionProps) {
  // Determine current selection logic
  // value can be:
  // - string: 'stripe', 'paypal', 'no-account'
  // - string: custom value
  // - object: { provider: 'stripe'|'paypal', username: '', password: '' }
  
  let provider = '';
  let customValue = '';
  let credentials = { username: '', password: '' };

  if (typeof value === 'object' && value !== null) {
    provider = value.provider || '';
    credentials = { username: value.username || '', password: value.password || '' };
  } else if (typeof value === 'string') {
    if (['stripe', 'paypal', 'no-account'].includes(value)) {
      provider = value;
    } else {
      provider = 'custom';
      customValue = value;
    }
  }

  const isKnownOption = ['stripe', 'paypal', 'no-account'].includes(provider);
  const isCustom = provider === 'custom';
  const showCredentials = provider === 'stripe' || provider === 'paypal';

  const handleRadioChange = (val: string) => {
    if (val === 'custom') {
      // If switching to custom, we might want to reset or keep previous custom value
      // For now, let's just set it to empty string if it wasn't custom before
      onChange(''); 
    } else if (val === 'stripe' || val === 'paypal') {
      // Initialize object structure
      onChange({ provider: val, username: '', password: '' });
    } else {
      // 'no-account'
      onChange(val);
    }
  };

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleCredentialChange = (field: 'username' | 'password', newVal: string) => {
    onChange({
      provider,
      ...credentials,
      [field]: newVal
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-6 block flex items-center gap-3">
        <DollarSign className="w-6 h-6 text-green-600" />
        Which payment gateway do you prefer?
      </Label>
      <RadioGroup value={isCustom ? 'custom' : provider} onValueChange={handleRadioChange} className="space-y-4">
        {/* Stripe Option */}
        <motion.div 
          className="flex flex-col space-y-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="stripe" id="stripe" className="border-gray-400 text-[#39FF14] w-6 h-6" />
            <Label htmlFor="stripe" className="cursor-pointer text-gray-700 text-lg flex-1">
              Stripe <span className="text-green-600 text-base ml-2">(Recommended)</span>
            </Label>
          </div>
          {provider === 'stripe' && (
            <div className="pl-10 space-y-3 pt-2">
               <div className="space-y-2">
                <Label htmlFor="stripe-username" className="text-gray-600 flex items-center gap-2 text-sm">
                  <User className="w-3 h-3" />
                  Username / Email
                </Label>
                <Input
                  id="stripe-username"
                  value={credentials.username}
                  onChange={(e) => handleCredentialChange('username', e.target.value)}
                  placeholder="e.g. user@example.com"
                  className="bg-white text-black h-8 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stripe-password" className="text-gray-600 flex items-center gap-2 text-sm">
                  <Lock className="w-3 h-3" />
                  Password
                </Label>
                <Input
                  id="stripe-password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => handleCredentialChange('password', e.target.value)}
                  placeholder="••••••••"
                  className="bg-white text-black h-8 text-sm"
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* PayPal Option */}
        <motion.div 
          className="flex flex-col space-y-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="paypal" id="paypal" className="border-gray-400 text-[#39FF14] w-6 h-6" />
            <Label htmlFor="paypal" className="cursor-pointer text-gray-700 text-lg flex-1">
              PayPal
            </Label>
          </div>
          {provider === 'paypal' && (
            <div className="pl-10 space-y-3 pt-2">
               <div className="space-y-2">
                <Label htmlFor="paypal-username" className="text-gray-600 flex items-center gap-2 text-sm">
                  <User className="w-3 h-3" />
                  Username / Email
                </Label>
                <Input
                  id="paypal-username"
                  value={credentials.username}
                  onChange={(e) => handleCredentialChange('username', e.target.value)}
                  placeholder="e.g. user@example.com"
                  className="bg-white text-black h-8 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paypal-password" className="text-gray-600 flex items-center gap-2 text-sm">
                  <Lock className="w-3 h-3" />
                  Password
                </Label>
                <Input
                  id="paypal-password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => handleCredentialChange('password', e.target.value)}
                  placeholder="••••••••"
                  className="bg-white text-black h-8 text-sm"
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* No Account Option */}
        <motion.div 
          className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <RadioGroupItem value="no-account" id="no-account" className="border-gray-400 text-[#39FF14] w-6 h-6" />
          <Label htmlFor="no-account" className="cursor-pointer text-gray-700 text-lg flex-1">
            No Account
          </Label>
        </motion.div>

        {/* Custom Gateway Option */}
        <motion.div 
          className="flex flex-col space-y-4 p-6 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="custom" id="custom" className="border-gray-400 text-[#39FF14] w-6 h-6" />
            <Label htmlFor="custom" className="cursor-pointer text-gray-700 text-lg flex-1">
              Custom Gateway
            </Label>
          </div>
          {isCustom && (
            <Input 
              value={customValue}
              onChange={handleCustomInputChange}
              placeholder="Enter gateway name"
              className="bg-white text-black mt-2"
              autoFocus
            />
          )}
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
