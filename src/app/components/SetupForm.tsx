import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import { QuestionTimeline } from './QuestionTimeline';
import { AIBackground } from './AIBackground';
import marqLogo from '../../assets/b50a1f14c33063011f99a0056a557c8da11ecf21.png';

// Import all questions directly
import { Q1ProductName } from './questions/Q1ProductName';
import { Q2Logo } from './questions/Q2Logo';
import { Q3BrandColors } from './questions/Q3BrandColors';
import { Q4BrandInspiration } from './questions/Q4BrandInspiration';
import { Q5ThingsToAvoid } from './questions/Q5ThingsToAvoid';
import { Q6DomainName } from './questions/Q6DomainName';
import { Q7DomainNotes } from './questions/Q7DomainNotes';
import { Q8CloudProvider } from './questions/Q8CloudProvider';
import { Q9CloudAccount } from './questions/Q9CloudAccount';
import { Q10PreferredRegion } from './questions/Q10PreferredRegion';
import { Q11WhisperAPI } from './questions/Q11WhisperAPI';
import { Q12LLMAccess } from './questions/Q12LLMAccess';
import { Q13GPUServer } from './questions/Q13GPUServer';
import { Q14PaymentGateway } from './questions/Q14PaymentGateway';
import { Q15PaymentAccount } from './questions/Q15PaymentAccount';
import { Q16FreeTrial } from './questions/Q16FreeTrial';
import { Q17PaidPlans } from './questions/Q17PaidPlans';
import { Q18MoodCheckIns } from './questions/Q18MoodCheckIns';
import { Q19WellnessTools } from './questions/Q19WellnessTools';
import { Q20UserHistory } from './questions/Q20UserHistory';

const questions: {
  title: string;
  field: string;
  component: React.ComponentType<any>;
  optional?: boolean;
}[] = [
  { title: 'Product Name', field: 'productName', component: Q1ProductName },
  { title: 'Your Logo', field: 'logo', component: Q2Logo },
  { title: 'Brand Colors', field: 'brandColors', component: Q3BrandColors },
  { title: 'Brand Inspiration', field: 'brandInspiration', component: Q4BrandInspiration },
  { title: 'Things to Avoid', field: 'thingsToAvoid', component: Q5ThingsToAvoid },
  { title: 'Domain Name', field: 'domainName', component: Q6DomainName },
  { title: 'Domain Details', field: 'domainNotes', component: Q7DomainNotes },
  { title: 'Cloud Provider', field: 'cloudAccountStatus', component: Q9CloudAccount },
  { title: 'Hosting Region', field: 'preferredRegion', component: Q10PreferredRegion },
  { title: 'Whisper API', field: 'whisperAPI', component: Q11WhisperAPI },
  { title: 'Language Model', field: 'llmAccess', component: Q12LLMAccess },
  { title: 'GPU Server', field: 'gpuServer', component: Q13GPUServer },
  { title: 'Payment Gateway', field: 'paymentGateway', component: Q14PaymentGateway },
  { title: 'Payment Account', field: 'paymentAccount', component: Q15PaymentAccount },
  { title: 'Free Trial', field: 'freeTrial', component: Q16FreeTrial },
  { title: 'Paid Plans', field: 'paidPlans', component: Q17PaidPlans },
  { title: 'Mood Check-Ins', field: 'moodCheckIns', component: Q18MoodCheckIns },
  { title: 'Wellness Tools', field: 'wellnessTools', component: Q19WellnessTools },
  { title: 'User History', field: 'userHistory', component: Q20UserHistory },
];

interface SetupFormProps {
  onComplete: (data: Record<string, any>) => void;
}

export function SetupForm({ onComplete }: SetupFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const totalQuestions = questions.length;

  const updateData = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    const currentQuestionData = questions[currentQuestion - 1];
    const currentValue = formData[currentQuestionData.field];

    // Check if field is required and empty
    // if (!currentQuestionData.optional && (currentValue === undefined || currentValue === '' || currentValue === null)) {
    //   toast.error('Please fill in this field to continue');
    //   return;
    // }

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentQuestion(step);
  };

  const currentQuestionData = questions[currentQuestion - 1];
  const QuestionComponent = currentQuestionData.component;

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-10" />
      
      {/* Ambient animated backgrounds */}
      <AIBackground />

      {/* Header - only show on desktop */}
      <motion.div 
        className="fixed top-8 left-8 z-20 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={marqLogo} 
          alt="marQ networks" 
          className="h-12 w-auto object-contain"
        />
      </motion.div>

      {/* Mobile header */}
      <motion.div 
        className="md:hidden fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-20 px-4 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img 
          src={marqLogo} 
          alt="marQ networks" 
          className="h-8 w-auto object-contain"
        />
      </motion.div>

      {/* Question Timeline */}
      <QuestionTimeline currentStep={currentQuestion} totalSteps={totalQuestions} onStepClick={handleStepClick}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Question Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl mb-3 text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                {currentQuestionData.title}
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Question {currentQuestion} of {totalQuestions}
              </motion.p>
            </motion.div>

            {/* Question Content Card */}
            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl border border-gray-200/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <QuestionComponent 
                value={formData[currentQuestionData.field]} 
                onChange={(value: any) => updateData(currentQuestionData.field, value)}
                data={formData}
              />
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div 
              className="flex justify-between items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestion === 1}
                  className="gap-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-800 disabled:opacity-30 shadow-md px-5 py-5 md:px-6 md:py-6"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleNext}
                  className="gap-2 bg-black text-white hover:bg-black/90 relative group overflow-hidden shadow-xl px-6 py-5 md:px-8 md:py-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="hidden sm:inline">
                      {currentQuestion === totalQuestions ? 'Complete Setup' : 'Next Question'}
                    </span>
                    <span className="sm:hidden">
                      {currentQuestion === totalQuestions ? 'Complete' : 'Next'}
                    </span>
                    {currentQuestion !== totalQuestions && (
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    )}
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-[#39FF14]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.2 }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Progress indicator */}
            <motion.div
              className="text-center pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-3 bg-gray-100/80 backdrop-blur-sm rounded-full px-5 py-2">
                <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#39FF14]"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-600">
                  {Math.round((currentQuestion / totalQuestions) * 100)}%
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </QuestionTimeline>
    </div>
  );
}