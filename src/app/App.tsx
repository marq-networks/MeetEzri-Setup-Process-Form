import { useState } from 'react';
import { toast } from 'sonner';
import { SetupForm } from './components/SetupForm';
import { CompletionScreen } from './components/CompletionScreen';
import { supabase } from '../lib/supabase';
import { generateSetupPDF } from '../utils/pdfGenerator';

export default function App() {
  const [currentView, setCurrentView] = useState<'form' | 'complete'>('form');
  const [formData, setFormData] = useState<any>({});

  const handleComplete = (data: any) => {
    setFormData(data);
    setCurrentView('complete');
  };

  const handleEdit = () => {
    setCurrentView('form');
  };

  const handleSubmit = async () => {
    try {
      toast.info('Submitting your setup data...');

      let logoUrl = '';

      // Upload logo if it exists and is a File object
      if (formData.logo instanceof File) {
        const file = formData.logo;
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('logos')
          .upload(filePath, file);

        if (uploadError) {
          console.error('Error uploading logo:', uploadError);
          toast.error('Failed to upload logo, but continuing with submission...');
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from('logos')
            .getPublicUrl(filePath);
          logoUrl = publicUrl;
        }
      }

      // Prepare data for insertion (map camelCase to snake_case)
      const submissionData = {
        product_name: formData.productName,
        logo_url: logoUrl,
        brand_colors: formData.brandColors,
        brand_inspiration: formData.brandInspiration,
        things_to_avoid: formData.thingsToAvoid,
        domain_name: formData.domainName,
        domain_notes: formData.domainNotes,
        cloud_provider: formData.cloudProvider,
        cloud_account_status: formData.cloudAccountStatus,
        preferred_region: formData.preferredRegion,
        whisper_api: formData.whisperAPI,
        llm_access: formData.llmAccess,
        gpu_server: formData.gpuServer,
        payment_gateway: formData.paymentGateway,
        payment_account: formData.paymentAccount,
        free_trial: formData.freeTrial,
        paid_plans: formData.paidPlans,
        mood_check_ins: formData.moodCheckIns,
        wellness_tools: formData.wellnessTools,
        user_history: formData.userHistory,
      };

      // Generate PDF
      const pdfBlob = generateSetupPDF({ ...submissionData, logo_url: logoUrl });
      const pdfFileName = `setup_summary_${Date.now()}.pdf`;
      let pdfUrl = '';

      // Upload PDF
      const { error: pdfUploadError } = await supabase.storage
        .from('submissions')
        .upload(pdfFileName, pdfBlob, {
          contentType: 'application/pdf',
          upsert: false
        });

      if (pdfUploadError) {
        console.error('Error uploading PDF:', pdfUploadError);
        toast.warning('Failed to upload PDF summary, but proceeding with submission...');
      } else {
        // Get public URL (or private signed URL if bucket is private, but we set it to private so we might need signed URL for email)
        // For simplicity in this flow, we will assume we can generate a signed URL later or use the path
        // Actually, if the bucket is private (which is good for submissions), we should store the path.
        // But to email it easily via Edge Function without downloading, a signed URL is best.
        // For now, let's store the path.
        pdfUrl = pdfFileName;
      }
      
      const { error: insertError } = await supabase
        .from('setup_submissions')
        .insert([{ ...submissionData, pdf_url: pdfUrl }]);

      if (insertError) {
        throw insertError;
      }

      toast.success('Setup data submitted successfully!');
      // Optionally reset form or redirect
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <>
      {currentView === 'form' && <SetupForm onComplete={handleComplete} />}
      {currentView === 'complete' && (
        <CompletionScreen 
          onEdit={handleEdit} 
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}