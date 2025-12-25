import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Upload } from 'lucide-react';

interface StepProps {
  data: any;
  updateData: (data: any) => void;
}

export function Step1ProductBrand({ data, updateData }: StepProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateData({ logo: file });
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        {/* Product Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Label htmlFor="productName" className="text-lg text-gray-700 mb-3 block">
            What's your product or company name?
          </Label>
          <Input
            id="productName"
            value={data.productName}
            onChange={(e) => updateData({ productName: e.target.value })}
            placeholder="e.g., MeetEzri"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all h-14 text-lg"
          />
        </motion.div>

        {/* Logo Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Label htmlFor="logo" className="text-lg text-gray-700 mb-3 block">
            Upload your logo
          </Label>
          <motion.label
            htmlFor="logo"
            className="flex items-center justify-center w-full h-40 px-4 transition bg-white/80 border-2 border-gray-300 border-dashed rounded-2xl appearance-none cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 focus:outline-none group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center space-y-3">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Upload className="w-10 h-10 text-gray-400 group-hover:text-[#39FF14] transition-colors" />
              </motion.div>
              <div className="text-center">
                <span className="block text-base text-gray-600 group-hover:text-gray-800 mb-1">
                  {data.logo ? data.logo.name : 'Click to upload or drag and drop'}
                </span>
                <span className="text-sm text-gray-400">PNG or SVG format</span>
              </div>
            </div>
            <input
              id="logo"
              type="file"
              className="hidden"
              accept=".png,.svg"
              onChange={handleFileChange}
            />
          </motion.label>
        </motion.div>

        {/* Brand Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Label htmlFor="brandColors" className="text-lg text-gray-700 mb-3 block">
            What are your brand colors?
          </Label>
          <Input
            id="brandColors"
            value={data.brandColors}
            onChange={(e) => updateData({ brandColors: e.target.value })}
            placeholder="e.g., #6366F1, #8B5CF6, or Blue and Purple"
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all h-14 text-lg"
          />
        </motion.div>

        {/* Brand Inspiration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Label htmlFor="brandInspiration" className="text-lg text-gray-700 mb-3 block">
            Any brand inspiration? <span className="text-gray-400 text-sm">(Optional)</span>
          </Label>
          <Textarea
            id="brandInspiration"
            value={data.brandInspiration}
            onChange={(e) => updateData({ brandInspiration: e.target.value })}
            placeholder="e.g., Clean like Apple, modern like Stripe, playful like Notion..."
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all text-base"
            rows={4}
          />
        </motion.div>

        {/* Things to Avoid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Label htmlFor="thingsToAvoid" className="text-lg text-gray-700 mb-3 block">
            Anything you want to avoid?
          </Label>
          <Textarea
            id="thingsToAvoid"
            value={data.thingsToAvoid}
            onChange={(e) => updateData({ thingsToAvoid: e.target.value })}
            placeholder="e.g., Too corporate, overly playful, bright neon colors..."
            className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#39FF14] focus:ring-[#39FF14]/30 transition-all text-base"
            rows={4}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
