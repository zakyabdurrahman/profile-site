import { useEffect, useRef } from 'react'

const roles = [
  { title: 'Software Engineer', period: '2024–Present' },
]

const COMPANY_URL = 'https://phiraka.com'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <div
        ref={ref}
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
        className="rounded-xl border border-border bg-card p-8 md:p-10"
      >
        {/* Logo + company name — both link to product page */}
        <div className="flex items-center gap-4 mb-6">
          <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <img
              src="https://phiraka.com/wp-content/themes/phiraka/assets/img/phiraka-logo.svg"
              alt="Phiraka logo"
              className="h-12 w-auto"
            />
          </a>
          
        </div>

        {/* Roles */}
        <div className="mb-4 space-y-1">
          {roles.map((r) => (
            <p key={r.title} className="font-medium">
              {r.title} <span className="text-muted-foreground font-normal">({r.period})</span>
            </p>
          ))}
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-muted-foreground">
          {/* TODO: replace */}
          We build HR and Learning Management Software that helps organizations manage their people and training programs. I work across the full stack, building features, improving performance, and maintaining code quality.
        </p>
      </div>
    </section>
  )
}
