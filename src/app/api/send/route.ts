
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const toEmail = process.env.TO_EMAIL || 'ramanandr7666@gmail.com';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    // In development mode, log the email to console if no API key is found
    if (!apiKey) {
      if (process.env.NODE_ENV === 'development') {
        const body = await request.json();
        console.log('--- DEVELOPMENT MODE (NO API KEY) ---');
        console.log('Contact Form Submission:', body);
        console.log('-------------------------------------');
        return Response.json({ message: 'Development mode: Email logged to console.' });
      }
      return Response.json({ error: 'Email service is not configured.' }, { status: 503 });
    }
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Rhevez <info@rhevez.com>',
      to: [toEmail],
      subject: `New Message from ${name}`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ message: 'Email sent successfully!', data });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return Response.json({ error: error.message || 'An unknown error occurred' }, { status: 500 });
  }
}
