import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const SMTP_HOST = Deno.env.get("SMTP_HOST") || "";
const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "465");
const SMTP_USER = Deno.env.get("SMTP_USER") || "";
const SMTP_PASS = Deno.env.get("SMTP_PASS") || "";
const SMTP_FROM = Deno.env.get("SMTP_FROM") || "";
const ADMIN_EMAIL = Deno.env.get("ADMIN_NOTIFY_EMAIL") || "";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: { "Access-Control-Allow-Origin": "*" } });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { record } = await req.json();
    
    if (!record || !record.pdf_url) {
       return new Response("No record or PDF URL found", { status: 400 });
    }

    // Generate Signed URL for the PDF
    const { data: signedData, error: signError } = await supabase
      .storage
      .from('submissions')
      .createSignedUrl(record.pdf_url, 60 * 60); // 1 hour validity

    if (signError) {
      throw new Error("Failed to sign URL: " + signError.message);
    }

    const pdfDownloadUrl = signedData.signedUrl;

    // Fetch the PDF content to attach it
    const pdfResponse = await fetch(pdfDownloadUrl);
    const pdfArrayBuffer = await pdfResponse.arrayBuffer();
    const pdfBase64 = btoa(
      new Uint8Array(pdfArrayBuffer)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    // Send Email using direct SMTP call or a library
    // Since 'nodemailer' is Node-specific, we use a Deno-friendly approach or a simple fetch to an email service.
    // However, the user provided SMTP credentials. We can use 'deno-smtp' or similar, but for reliability in Edge Functions, 
    // it's often better to use an API (Resend, SendGrid). 
    // BUT the user EXPLICITLY provided SMTP creds.
    
    // We will use a basic SMTP client for Deno
    // Note: This is a simplified implementation. 
    
    // Construct the email payload
    // Using a service like Resend is standard for Supabase, but strictly following user request for SMTP:
    
    // We need to use a library that supports SMTP in Deno. 
    // 'https://deno.land/x/smtp@v0.7.0/mod.ts' is a common one.
    
    // DYNAMIC IMPORT to avoid loading if not needed (standard pattern)
    const { SmtpClient } = await import("https://deno.land/x/smtp@v0.7.0/mod.ts");

    const client = new SmtpClient();
    
    await client.connectTLS({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      username: SMTP_USER,
      password: SMTP_PASS,
    });

    await client.send({
      from: SMTP_FROM,
      to: ADMIN_EMAIL,
      subject: `New MeetEzri Setup Submission: ${record.product_name}`,
      content: `A new setup form has been submitted.\n\nProduct Name: ${record.product_name}\nSubmission ID: ${record.id}\n\nPlease find the PDF summary attached.`,
      attachments: [
        {
          filename: `setup_summary_${record.product_name}.pdf`,
          content: new Uint8Array(pdfArrayBuffer), // Use the raw buffer
        },
      ],
    });

    await client.close();

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
