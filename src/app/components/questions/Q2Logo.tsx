import { useState } from 'react';
import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { Upload, Sparkles } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

export function Q2Logo({ value, onChange }: QuestionProps) {
  const [useInspiration, setUseInspiration] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label htmlFor="logo" className="text-xl text-gray-700 mb-4 block">
        {useInspiration ? "Upload Brand Inspiration" : "Upload your logo"}
      </Label>
      <motion.label
        htmlFor="logo"
        className={`flex items-center justify-center w-full h-56 px-4 transition bg-white/80 border-2 border-dashed rounded-2xl appearance-none cursor-pointer focus:outline-none group ${useInspiration ? 'border-yellow-300 hover:border-yellow-400 hover:bg-yellow-50' : 'border-gray-300 hover:border-[#39FF14] hover:bg-[#39FF14]/5'}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {useInspiration ? (
               <Sparkles className="w-16 h-16 text-yellow-400 group-hover:text-yellow-500 transition-colors" />
            ) : (
               <Upload className="w-16 h-16 text-gray-400 group-hover:text-[#39FF14] transition-colors" />
            )}
          </motion.div>
          <div className="text-center">
            <span className="block text-xl text-gray-600 group-hover:text-gray-800 mb-2">
              {value ? value.name : 'Click to upload or drag and drop'}
            </span>
            <span className="text-base text-gray-400">
               {useInspiration ? "Upload an image that inspires your brand" : "PNG or SVG format recommended"}
            </span>
          </div>
        </div>
        <input
          id="logo"
          type="file"
          className="hidden"
          accept=".png,.svg,.jpg,.jpeg"
          onChange={handleFileChange}
        />
      </motion.label>

      <div className="mt-6 flex items-center space-x-2">
        <Checkbox 
            id="no-logo" 
            checked={useInspiration}
            onCheckedChange={(checked) => setUseInspiration(checked === true)}
        />
        <label
          htmlFor="no-logo"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 cursor-pointer"
        >
          I don't have a logo yet (Upload inspiration instead)
        </label>
      </div>
    </motion.div>
  );
}
