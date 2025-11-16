export default function Footer() {
  return (
    <footer className="bg-[#0b0b12] py-10 text-white/60">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Cinematic. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#contact">Contact</a>
          <a className="hover:text-white" href="/test">System Check</a>
        </div>
      </div>
    </footer>
  )
}
