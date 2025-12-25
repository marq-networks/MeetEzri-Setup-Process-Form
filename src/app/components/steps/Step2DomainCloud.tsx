import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface StepProps {
  data: any;
  updateData: (data: any) => void;
}

export function Step2DomainCloud({ data, updateData }: StepProps) {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="space-y-6">
        {/* Domain Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Label htmlFor="domainName" className="text-lg text-gray-700 mb-3 block">
            What's your domain name?
          </Label>
          <Input
            id="domainName"
            value={data.domainName}
            onChange={(e) => updateData({ domainName: e.target.value })}
            placeholder="e.g., yourcompany.com"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 h-14 text-lg"
          />
        </motion.div>

        {/* Domain Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Label htmlFor="domainNotes" className="text-lg text-gray-700 mb-3 block">
            Where is your domain registered?
          </Label>
          <Textarea
            id="domainNotes"
            value={data.domainNotes}
            onChange={(e) => updateData({ domainNotes: e.target.value })}
            placeholder="e.g., GoDaddy, Namecheap, or account email if you know it"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 text-base"
            rows={3}
          />
        </motion.div>

        {/* Cloud Provider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Label className="text-lg text-gray-700 mb-3 block">
            Which cloud provider do you prefer?
          </Label>
          <Select value={data.cloudProvider} onValueChange={(value) => updateData({ cloudProvider: value })}>
            <SelectTrigger className="bg-white/80 border-gray-300 text-gray-900 h-14 text-lg">
              <SelectValue placeholder="Choose one (or we'll help you decide)" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="aws" className="hover:bg-[#39FF14]/10 text-base">AWS (Amazon Web Services)</SelectItem>
              <SelectItem value="gcp" className="hover:bg-[#39FF14]/10 text-base">GCP (Google Cloud)</SelectItem>
              <SelectItem value="azure" className="hover:bg-[#39FF14]/10 text-base">Azure (Microsoft)</SelectItem>
              <SelectItem value="no-idea" className="hover:bg-[#39FF14]/10 text-base">I'm not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Cloud Account Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Label className="text-lg text-gray-700 mb-3 block">
            Do you have a cloud account set up?
          </Label>
          <RadioGroup
            value={data.cloudAccountStatus}
            onValueChange={(value) => updateData({ cloudAccountStatus: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="have-account" id="have-account" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="have-account" className="cursor-pointer text-gray-700 text-base flex-1">
                Yes, I already have one
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="need-help" id="need-help" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="need-help" className="cursor-pointer text-gray-700 text-base flex-1">
                No, please help me set it up
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>

        {/* Preferred Region */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Label htmlFor="preferredRegion" className="text-lg text-gray-700 mb-3 block">
            Preferred hosting region? <span className="text-gray-400 text-sm">(USA is default)</span>
          </Label>
          <Input
            id="preferredRegion"
            value={data.preferredRegion}
            onChange={(e) => updateData({ preferredRegion: e.target.value })}
            placeholder="e.g., USA, Europe, Asia-Pacific"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 h-14 text-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
