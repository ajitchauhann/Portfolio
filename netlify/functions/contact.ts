import type { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const subjectLabels: Record<string, string> = {
  job: 'Job Opportunity',
  freelance: 'Freelance Project',
  coffee: 'Virtual Coffee',
  other: 'Other',
};

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = JSON.parse(event.body ?? '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON.' }) };
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields.' }) };
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD ?? '').replace(/\s/g, '');

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email service is not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in Netlify environment variables.' }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subjectLabels[subject ?? ''] ?? subject} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1A1918;">
          <h2 style="margin: 0 0 4px; font-size: 20px;">New message from your portfolio</h2>
          <p style="margin: 0 0 24px; color: #6B6965; font-size: 14px;">Sent via the contact form</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #E6E4DE; color: #6B6965; width: 100px;">Name</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #E6E4DE; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #E6E4DE; color: #6B6965;">Email</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #E6E4DE;"><a href="mailto:${email}" style="color: #D4A853;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #E6E4DE; color: #6B6965;">Subject</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #E6E4DE;">${subjectLabels[subject ?? ''] ?? subject}</td>
            </tr>
          </table>

          <div style="background: #F7F6F2; padding: 16px; border-left: 3px solid #D4A853; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>

          <p style="margin: 24px 0 0; font-size: 12px; color: #9A9895;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err: any) {
    console.error('[contact] sendMail failed:', err?.message || err);
    return { statusCode: 500, body: JSON.stringify({ error: err?.message || 'Failed to send email.' }) };
  }
};

export { handler };
