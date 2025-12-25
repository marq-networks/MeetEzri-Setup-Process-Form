import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { DollarSign } from 'lucide-react';

interface StepProps {
  data: any;
  updateData: (data: any) => void;
}

export function Step4Payments({ data, updateData }: StepProps) {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="space-y-6">
        {/* Payment Gateway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Label className="text-lg text-gray-700 mb-4 block flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            Which payment gateway do you prefer?
          </Label>
          <RadioGroup
            value={data.paymentGateway}
            onValueChange={(value) => updateData({ paymentGateway: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="stripe" id="stripe" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="stripe" className="cursor-pointer text-gray-700 text-base flex-1">
                Stripe <span className="text-green-600 text-sm ml-2">(Recommended)</span>
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="paypal" id="paypal" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="paypal" className="cursor-pointer text-gray-700 text-base flex-1">
                PayPal
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="other" id="other" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="other" className="cursor-pointer text-gray-700 text-base flex-1">
                Something else
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>

        {/* Payment Account */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Label className="text-lg text-gray-700 mb-4 block">
            Is your payment account already set up?
          </Label>
          <RadioGroup
            value={data.paymentAccount}
            onValueChange={(value) => updateData({ paymentAccount: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="have-account" id="have-payment-account" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="have-payment-account" className="cursor-pointer text-gray-700 text-base flex-1">
                Yes, it's ready to go
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="need-help-setup" id="need-help-setup" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="need-help-setup" className="cursor-pointer text-gray-700 text-base flex-1">
                No, let's set it up together
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>

        {/* Free Trial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Label className="text-lg text-gray-700 mb-3 block">
            Free trial period
          </Label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="freeTrialDays" className="text-sm text-gray-600 mb-2 block">Days</Label>
              <Input
                id="freeTrialDays"
                type="number"
                value={data.freeTrialDays}
                onChange={(e) => updateData({ freeTrialDays: e.target.value })}
                placeholder="e.g., 7"
                className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 h-14 text-lg"
              />
            </div>
            <div>
              <Label htmlFor="freeTrialMinutes" className="text-sm text-gray-600 mb-2 block">AI Minutes</Label>
              <Input
                id="freeTrialMinutes"
                type="number"
                value={data.freeTrialMinutes}
                onChange={(e) => updateData({ freeTrialMinutes: e.target.value })}
                placeholder="e.g., 100"
                className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 h-14 text-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Paid Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Label htmlFor="paidPlans" className="text-lg text-gray-700 mb-3 block">
            What are your paid plan tiers?
          </Label>
          <Textarea
            id="paidPlans"
            value={data.paidPlans}
            onChange={(e) => updateData({ paidPlans: e.target.value })}
            placeholder="e.g., 
Basic: $9.99/mo - 500 AI minutes
Premium: $19.99/mo - 1500 AI minutes  
Enterprise: Custom pricing - Unlimited"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 text-base"
            rows={5}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
