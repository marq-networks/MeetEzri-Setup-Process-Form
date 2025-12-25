import { motion } from 'motion/react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Alert, AlertDescription } from '../ui/alert';
import { Cpu } from 'lucide-react';

interface StepProps {
  data: any;
  updateData: (data: any) => void;
}

export function Step3AI({ data, updateData }: StepProps) {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Alert className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/50">
          <Cpu className="h-5 w-5 text-blue-600" />
          <AlertDescription className="text-gray-700 text-base">
            <strong className="text-gray-900">AI Infrastructure:</strong> These services will be billed directly to your accounts. We'll optimize everything for cost efficiency.
          </AlertDescription>
        </Alert>
      </motion.div>

      <div className="space-y-8">
        {/* Whisper API */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Label className="text-lg text-gray-700 mb-4 block">
            Do you have Whisper API access?
          </Label>
          <RadioGroup
            value={data.whisperAPI}
            onValueChange={(value) => updateData({ whisperAPI: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="have-whisper" id="have-whisper" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="have-whisper" className="cursor-pointer text-gray-700 text-base flex-1">
                Yes, I have Whisper API
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="need-whisper-help" id="need-whisper-help" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="need-whisper-help" className="cursor-pointer text-gray-700 text-base flex-1">
                No, help me set it up
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>

        {/* LLM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Label className="text-lg text-gray-700 mb-2 block">
            Language Model (LLM) Access
          </Label>
          <p className="text-sm text-gray-500 mb-4">We primarily use Llama with GPT as backup</p>
          <RadioGroup
            value={data.llmAccess}
            onValueChange={(value) => updateData({ llmAccess: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="have-llm" id="have-llm" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="have-llm" className="cursor-pointer text-gray-700 text-base flex-1">
                I have Llama/GPT API access
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="need-llm-help" id="need-llm-help" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="need-llm-help" className="cursor-pointer text-gray-700 text-base flex-1">
                Help me get API access
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>

        {/* GPU Server */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Label className="text-lg text-gray-700 mb-4 block">
            GPU Server Setup
          </Label>
          <RadioGroup
            value={data.gpuServer}
            onValueChange={(value) => updateData({ gpuServer: value })}
            className="space-y-3"
          >
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="have-gpu" id="have-gpu" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="have-gpu" className="cursor-pointer text-gray-700 text-base flex-1">
                I already have a GPU server
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="need-gpu-help" id="need-gpu-help" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="need-gpu-help" className="cursor-pointer text-gray-700 text-base flex-1">
                Help me set one up
              </Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 bg-white/60 cursor-pointer hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all"
              whileHover={{ x: 5 }}
            >
              <RadioGroupItem value="no-gpu-yet" id="no-gpu-yet" className="border-gray-400 text-[#39FF14]" />
              <Label htmlFor="no-gpu-yet" className="cursor-pointer text-gray-700 text-base flex-1">
                I don't have one yet
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>
      </div>
    </motion.div>
  );
}
