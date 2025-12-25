import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Checkbox } from '../ui/checkbox';
import { Heart, Sparkles } from 'lucide-react';

interface StepProps {
  data: any;
  updateData: (data: any) => void;
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

export function Step5Wellness({ data, updateData }: StepProps) {
  const handleWellnessToolToggle = (tool: string) => {
    const currentTools = data.wellnessTools || [];
    const newTools = currentTools.includes(tool)
      ? currentTools.filter((t: string) => t !== tool)
      : [...currentTools, tool];
    updateData({ wellnessTools: newTools });
  };

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="space-y-8">
        {/* Mood Check-Ins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Label className="text-lg text-gray-700 mb-4 block flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500" />
            How often should we check in on mood?
          </Label>
          <RadioGroup
            value={data.moodCheckIns}
            onValueChange={(value) => updateData({ moodCheckIns: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="daily" id="daily" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="daily" className="cursor-pointer text-gray-700 text-base flex-1">
                Daily check-ins
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="weekly" id="weekly" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="weekly" className="cursor-pointer text-gray-700 text-base flex-1">
                Weekly check-ins
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="dont-overdo" id="dont-overdo" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="dont-overdo" className="cursor-pointer text-gray-700 text-base flex-1">
                Flexible (let users choose)
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>

        {/* Wellness Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Label className="text-lg text-gray-700 mb-2 block flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            Which wellness tools should we include?
          </Label>
          <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
          <div className="grid grid-cols-2 gap-3">
            {wellnessToolOptions.map((tool, index) => (
              <motion.div 
                key={tool.name}
                className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Checkbox
                  id={tool.name}
                  checked={(data.wellnessTools || []).includes(tool.name)}
                  onCheckedChange={() => handleWellnessToolToggle(tool.name)}
                  className="border-gray-300 data-[state=checked]:bg-[#39FF14] data-[state=checked]:text-black data-[state=checked]:border-[#39FF14]"
                />
                <Label htmlFor={tool.name} className="cursor-pointer text-gray-700 text-base flex items-center gap-2 flex-1">
                  <span className="text-xl">{tool.icon}</span>
                  {tool.name}
                </Label>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Label className="text-lg text-gray-700 mb-4 block">
            How much conversation history should we keep?
          </Label>
          <RadioGroup
            value={data.userHistory}
            onValueChange={(value) => updateData({ userHistory: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="basic" id="basic" className="border-gray-400 text-[#39FF14]" />
              <div className="flex-1">
                <Label htmlFor="basic" className="cursor-pointer text-gray-700 text-base block">
                  Basic Memory
                </Label>
                <p className="text-sm text-gray-500 mt-1">Last 30 days of conversations</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="extended" id="extended" className="border-gray-400 text-[#39FF14]" />
              <div className="flex-1">
                <Label htmlFor="extended" className="cursor-pointer text-gray-700 text-base block">
                  Extended Memory
                </Label>
                <p className="text-sm text-gray-500 mt-1">Unlimited conversation history</p>
              </div>
            </motion.div>
          </RadioGroup>
        </motion.div>
      </div>
    </motion.div>
  );
}
