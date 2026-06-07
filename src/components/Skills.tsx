import { useEffect, useRef } from 'react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import jsLogo from '@/assets/js.png'
import tsLogo from '@/assets/ts.png'
import pgsqlLogo from '@/assets/pgsql.png'
import python from '@/assets/python.png'

const skills = [
  { name: "JavaScript", src: jsLogo },
  { name: "TypeScript", src: tsLogo },
  { name: "PostgreSQL", src: pgsqlLogo },
  { name: "Python", src: python },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      className="px-6 py-16 max-w-5xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Technical Skills</h2>

      <div className="flex items-center justify-center gap-8">
        {skills.map((skill) => (
          <Tooltip key={skill.name}>
            <TooltipTrigger
              aria-label={skill.name}
              className="shrink-0 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </TooltipTrigger>
            <TooltipContent side="top" className="rounded-md">
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}
