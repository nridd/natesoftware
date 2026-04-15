import Nav from '../components/Nav'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-ink px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-taupe mb-4" style={{WebkitTextStroke: '4px #496b92', paintOrder: 'stroke fill'}}>
            Reach Out Today!
          </h1>
          <p className="text-primary/70 text-lg mb-10 leading-relaxed">
            Whether you want to collaborate on a project, ask a random question, or just get introduced — We'd love to make it happen. Or skip the form and{' '}
            <a href="/book" className="text-taupe hover:underline">book a time</a> with me today!
          </p>

          {submitted ? (
            <div className="bg-navy rounded-2xl p-8 text-center">
              <p className="text-taupe text-2xl font-bold mb-2">Message sent!</p>
              <p className="text-primary/70">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-taupe text-sm font-semibold">Name *</label>
                <input required name="name" value={formData.name} onChange={handleChange}
                  className="bg-navy border border-primary/20 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-taupe transition-colors"
                  placeholder="Your name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-taupe text-sm font-semibold">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange}
                  className="bg-navy border border-primary/20 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-taupe transition-colors"
                  placeholder="your@email.com" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-taupe text-sm font-semibold">Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange}
                  className="bg-navy border border-primary/20 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-taupe transition-colors"
                  placeholder="(optional)" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-taupe text-sm font-semibold">Subject</label>
                <input name="subject" value={formData.subject} onChange={handleChange}
                  className="bg-navy border border-primary/20 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-taupe transition-colors"
                  placeholder="What's this about?" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-taupe text-sm font-semibold">Message *</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={5}
                  className="bg-navy border border-primary/20 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-taupe transition-colors resize-none"
                  placeholder="Tell me what's on your mind..." />
              </div>

              {error && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
              <button type="submit" disabled={loading}
                className="bg-taupe text-ink font-bold px-8 py-4 rounded-full text-lg hover:bg-primary transition-colors mt-2 disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  )
}
