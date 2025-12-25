import { Q1ProductName } from './Q1ProductName';
import { Q2Logo } from './Q2Logo';
import { Q3BrandColors } from './Q3BrandColors';
import { Q4BrandInspiration } from './Q4BrandInspiration';
import { Q5ThingsToAvoid } from './Q5ThingsToAvoid';
import { Q6DomainName } from './Q6DomainName';
import { Q7DomainNotes } from './Q7DomainNotes';
import { Q8CloudProvider } from './Q8CloudProvider';
import { Q9CloudAccount } from './Q9CloudAccount';
import { Q10PreferredRegion } from './Q10PreferredRegion';
import { Q11WhisperAPI } from './Q11WhisperAPI';
import { Q12LLMAccess } from './Q12LLMAccess';
import { Q13GPUServer } from './Q13GPUServer';
import { Q14PaymentGateway } from './Q14PaymentGateway';
import { Q15PaymentAccount } from './Q15PaymentAccount';
import { Q16FreeTrial } from './Q16FreeTrial';
import { Q17PaidPlans } from './Q17PaidPlans';
import { Q18MoodCheckIns } from './Q18MoodCheckIns';
import { Q19WellnessTools } from './Q19WellnessTools';
import { Q20UserHistory } from './Q20UserHistory';

export const questions = [
  { title: 'Product Name', field: 'productName', component: Q1ProductName },
  { title: 'Your Logo', field: 'logo', component: Q2Logo },
  { title: 'Brand Colors', field: 'brandColors', component: Q3BrandColors },
  { title: 'Brand Inspiration', field: 'brandInspiration', component: Q4BrandInspiration },
  { title: 'Things to Avoid', field: 'thingsToAvoid', component: Q5ThingsToAvoid },
  { title: 'Domain Name', field: 'domainName', component: Q6DomainName },
  { title: 'Domain Details', field: 'domainNotes', component: Q7DomainNotes },
  { title: 'Cloud Provider', field: 'cloudProvider', component: Q8CloudProvider },
  { title: 'Cloud Account', field: 'cloudAccountStatus', component: Q9CloudAccount },
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
