import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || `Request failed with ${res.status}`)
      }

      setStatus({ loading: false, success: 'Thanks! We will reach out shortly.', error: null })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0b12]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b12]/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-fuchsia-500" />
            <span className="text-sm font-semibold text-white/90">Cinematic</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="/test" className="hover:text-white">System Check</a>
            <a href="#contact" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-white/90 hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      <main className="overflow-hidden">
        <Hero />
        <Features />

        <section id="contact" className="bg-[#0b0b12] py-24 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Start your project</h2>
            <p className="mt-3 text-white/70">
              Tell us about your vision and we’ll craft a cinematic web experience tailored to your brand.
            </p>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2" noValidate>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 sm:col-span-1"
                placeholder="Your name"
                aria-label="Your name"
                required
                minLength={2}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 sm:col-span-1"
                placeholder="Email"
                aria-label="Email"
                required
              />
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="sm:col-span-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                placeholder="Project details"
                aria-label="Project details"
                required
                minLength={10}
              />
              <button
                type="submit"
                disabled={status.loading}
                className="sm:col-span-2 rounded-lg bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending…' : 'Request a Demo'}
              </button>
              {status.success && (
                <p className="sm:col-span-2 text-sm text-emerald-400" role="status">{status.success}</p>
              )}
              {status.error && (
                <p className="sm:col-span-2 text-sm text-red-400" role="alert">{status.error}</p>
              )}
            </form>
            <p className="mt-4 text-xs text-white/40">We’ll only use your details to contact you about your request.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
