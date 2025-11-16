import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subheadingRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0b12] text-white">      
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b12]/60 via-[#0b0b12]/70 to-[#0b0b12]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
          Cinematic Landing Experience
        </p>
        <h1 ref={headingRef} className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
          Futuristic Web Experiences
        </h1>
        <p ref={subheadingRef} className="mt-4 max-w-2xl text-balance text-white/70">
          Immerse your audience with interactive 3D, fluid motion, and a cyberpunk aesthetic. Built with React, Tailwind, GSAP, and Spline.
        </p>
        <div ref={ctaRef} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#features" className="pointer-events-auto rounded-lg bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">
            Explore Features
          </a>
          <a href="#contact" className="pointer-events-auto rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Get a Demo
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b0b12] via-[#0b0b12]/80 to-transparent" />
    </section>
  )
}
