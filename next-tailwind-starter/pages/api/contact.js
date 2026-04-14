import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, phone, subject, message } = req.body

  try {
    await resend.emails.send({
      from: 'Porch Swing Software <onboarding@resend.dev>',
      replyTo: email,
      to: 'porchswingsoftware@gmail.com',
      subject: subject || `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' })
  }
}
