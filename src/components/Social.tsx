import { useEffect, useRef } from 'react'
import { GithubLogo, GithubLogoIcon, LinkedinLogo, LinkedinLogoIcon } from '@phosphor-icons/react'

export default function Social() {
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
      id="contact"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="px-6 py-12 md:py-16 max-w-5xl mx-auto flex flex-col items-center gap-6"
    >
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/zakyabdurrahman/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 text-muted-foreground hover:text-[#333] dark:hover:text-white transition-colors hover:scale-110 transition-transform"
        >
          <GithubLogoIcon size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/zakyabdurrahman/?locale=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 text-muted-foreground hover:text-[#0A66C2] transition-colors hover:scale-110 transition-transform"
        >
          <LinkedinLogoIcon size={32} />
        </a>
      </div>

      <a
        href="/resume.pdf"
        download
        className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        Download Resume (PDF)
      </a>

      <p className="text-sm text-muted-foreground mt-4">
        Built with React + TypeScript — 2026
      </p>
    </section>
  );
}
