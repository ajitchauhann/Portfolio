import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const GMAIL_USER = process.env.GMAIL_USER;
// Gmail App Passwords are shown with spaces — strip them before use
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD ?? '').replace(/\s/g, '');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

transporter
  .verify()
  .then(() => console.log('SMTP ready — emails will be delivered to asingh72290@gmail.com'))
  .catch((err) => console.error('SMTP verify failed:', err.message));

const subjectLabels: Record<string, string> = {
  job: 'Job Opportunity',
  freelance: 'Freelance Project',
  coffee: 'Virtual Coffee',
  other: 'Other',
};

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields.' });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: 'asingh72290@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subjectLabels[subject] ?? subject} — ${name}`,
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
              <td style="padding: 8px 0; border-bottom: 1px solid #E6E4DE;">${subjectLabels[subject] ?? subject}</td>
            </tr>
          </table>

          <div style="background: #F7F6F2; padding: 16px; border-left: 3px solid #D4A853; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>

          <p style="margin: 24px 0 0; font-size: 12px; color: #9A9895;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    console.log(`[contact] Email sent: ${name} <${email}>`);
    res.json({ success: true });
  } catch (err: any) {
    console.error('[contact] sendMail failed:', err?.message || err);
    res.status(500).json({ error: err?.message || 'Failed to send email.' });
  }
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
