import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
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
            <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <input className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 sm:col-span-1" placeholder="Your name" />
              <input className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 sm:col-span-1" placeholder="Email" />
              <textarea rows="4" className="sm:col-span-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Project details" />
              <button className="sm:col-span-2 rounded-lg bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">Request a Demo</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
