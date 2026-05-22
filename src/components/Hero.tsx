import { useEffect, useRef } from 'react'
import heroPhoto from '../assets/hero.png'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    requestAnimationFrame(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      className="flex flex-col md:flex-row items-center gap-8 px-6 py-16 max-w-5xl mx-auto"
    >
      {/* Photo */}
      <div className="shrink-0">
        <img
          src={heroPhoto}
          alt="Zaky Abdurrahman profile photo"
          className="w-40 md:w-64 aspect-square object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">Zaky Abdurrahman</h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">Software Engineer | HR &amp; LMS Platforms</h2>
        <p className="text-base md:text-lg leading-relaxed">
          I build software that helps people work and learn better. With 2 years of experience in HR and Learning Management Systems, I focus on clean, maintainable code and great user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center md:justify-start">
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Contact me
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-2.5 rounded-lg border border-border font-medium hover:bg-accent transition-colors"
          >
            View work
          </button>
        </div>
      </div>
    </section>
  )
}
