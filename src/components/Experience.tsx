import { useEffect, useRef } from 'react'

interface Experience {
  company: string
  url: string
  logo: string
  roles: { title: string; period: string }[]
  description: string
}

const experiences: Experience[] = [
  {
    company: "",
    url: "https://phiraka.com",
    logo: "https://phiraka.com/wp-content/themes/phiraka/assets/img/phiraka-logo.svg",
    roles: [{ title: "Software Engineer", period: "2024–Present" }],
    description: `
        I Developed and maintained mobile and web applications for HRIS and E-Office systems used by enterprise clients, 
        such as Bank Nano Syariah, Sinarmas, Pertamina Retail, Chemico Indonesia, and Government Organizations. In my time as Software Engineer
        I worked in developing employee performance asessment system, learning management, and employee monitoring. I always ensure quality,
        velocity and reliability in developing features and as a result our clients are satisfied with our product
      `,
  },
];

function ExperienceCard({ exp }: { exp: Experience }) {
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
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      className="rounded-xl border border-border bg-card p-8 md:p-10"
    >
      <div className="flex items-center gap-4 mb-6">
        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
          <img src={exp.logo} alt={`${exp.company} logo`} className="h-12 w-auto" />
        </a>
        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
          {exp.company}
        </a>
      </div>

      <div className="mb-4 space-y-1">
        {exp.roles.map((r) => (
          <p key={r.title} className="font-medium">
            {r.title} <span className="text-muted-foreground font-normal">({r.period})</span>
          </p>
        ))}
      </div>

      <p className="text-base leading-relaxed text-muted-foreground text-justify">
        {exp.description}
      </p>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto space-y-6">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} exp={exp} />
      ))}
    </section>
  )
}
