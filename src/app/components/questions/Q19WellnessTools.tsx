import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Sparkles } from 'lucide-react';

interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
}

const wellnessToolOptions = [
  { name: 'Breathing Exercises', icon: '🫁' },
  { name: 'Meditation Timer', icon: '🧘' },
  { name: 'Mood Journal', icon: '📔' },
  { name: 'Gratitude Log', icon: '🙏' },
  { name: 'Sleep Tracker', icon: '😴' },
  { name: 'Stress Management', icon: '🌊' },
  { name: 'Goal Setting', icon: '🎯' },
  { name: 'Affirmations', icon: '✨' },
];

export function Q19WellnessTools({ value, onChange }: QuestionProps) {
  const selectedTools = value || [];

  const handleToggle = (toolName: string) => {
    const newTools = selectedTools.includes(toolName)
      ? selectedTools.filter((t: string) => t !== toolName)
      : [...selectedTools, toolName];
    onChange(newTools);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Label className="text-xl text-gray-700 mb-2 block flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-purple-500" />
        Which wellness tools should we include?
      </Label>
      <p className="text-base text-gray-500 mb-6">Select all that apply</p>
      <div className="grid grid-cols-2 gap-4">
        {wellnessToolOptions.map((tool, index) => (
          <motion.div 
            key={tool.name}
            className="flex items-center space-x-3 p-5 rounded-2xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            <Checkbox
              id={tool.name}
              checked={selectedTools.includes(tool.name)}
              onCheckedChange={() => handleToggle(tool.name)}
              className="border-gray-300 data-[state=checked]:bg-[#39FF14] data-[state=checked]:text-black data-[state=checked]:border-[#39FF14] w-6 h-6"
            />
            <Label htmlFor={tool.name} className="cursor-pointer text-gray-700 text-base flex items-center gap-2 flex-1">
              <span className="text-2xl">{tool.icon}</span>
              {tool.name}
            </Label>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
