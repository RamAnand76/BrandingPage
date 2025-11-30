
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL || 'ramanandr7666@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'RE:INVENT <onboarding@resend.dev>',
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
