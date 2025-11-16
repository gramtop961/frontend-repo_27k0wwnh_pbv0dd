import { motion } from 'framer-motion'
import { Cpu, Sparkles, MoveRight, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Cinematic Motion',
    desc: 'Layered parallax, tasteful easing, and orchestrated entrances powered by GSAP.',
  },
  {
    icon: Cpu,
    title: 'Interactive 3D',
    desc: 'Live Spline scene brings depth with a cyberpunk vibe and responsive performance.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    desc: 'Responsive, accessible, and optimized for modern devices and retina displays.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Capabilities</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Built for impact</h2>
          </div>
          <a href="#contact" className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 md:flex">
            Get in touch <MoveRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur"
            >
              <f.icon className="mb-4 h-8 w-8 text-fuchsia-400" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
