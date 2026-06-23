import { useCallback, useEffect, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import img from '../assets/phiro.png'
import nanori from '../assets/nanori.png'
import stockpanel from '../assets/spanel.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'

interface Project {
  title: string
  type: 'Work' | 'Personal'
  description: string
  image?: string
  links: { url: string; label: string }[]
}

const projects: Project[] = [
  {
    title: "Phiro Neo (formerly Phiro HCMS)",
    type: "Work",
    description:
      "I work as an developer with the team behind Phiro Neo, and all-in-one integrated HRIS product with all features you would need from Employee Attendance, Time Management to Performance Assessment. I mostly worked on the Performance, Job Portal and LMS Module. I Developed features to make managing and monitoring employee performance and training easier",
    links: [
      {
        url: "https://phiraka.com/produk/phiro-hcms/",
        label: "View Product Page",
      },
    ],
    image: img,
  },
  {
    title: "Nanori",
    type: "Personal",
    description: `Reading Japanese names can be notoriously difficult, even for native speakers, due to complex kanji combinations and obscure nanori (name-specific) readings. Standard dictionaries often fall short, leaving users to guess the correct pronunciation. This web application streamlines the process by dynamically generating and displaying all possible combinations of kunyomi, onyomi, and nanori readings for any given kanji combination. Additionally, it integrates a comprehensive Japanese names and kanjis dictionary featuring over 700,000 entries sourced from KANJIDIC2, an open source japanese english kanji dictionary made by Jim Breen, allowing users to instantly verify authentic and rare names.`,
    links: [
      {
        url: "https://github.com/zakyabdurrahman/nanori",
        label: "View Source Code",
      },
      {
        url: "https://www.youtube.com/watch?v=2GHc0xwvNE0",
        label: "View Showcase",
      },
    ],
    image: nanori,
  },
  {
    title: "Stockpanel",
    type: "Personal",
    description: "A lightweight, secure native desktop application designed to track net capital allocations, realized returns (gains from selling stock), and dividends. Written using Java, JavaFX library, and Hibernate ORM",
    links: [
      {
        url: "https://github.com/zakyabdurrahman/stock-panel",
        label: "View Source Code"
      }, 
      {
        url: "https://github.com/zakyabdurrahman/stock-panel/releases/tag/v1.1.0",
        label: "Windows Installer"
      }
    ],
    image: stockpanel
  }
];

function ProjectCard({ project }: { project: Project }) {
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
      className="rounded-xl border border-border bg-card p-6 md:p-8 h-full flex flex-col gap-4"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="aspect-video rounded-lg object-cover w-full"
        />
      ) : (
        <div className="aspect-video rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-sm">
          Screenshot
        </div>
      )}

      <div className="flex items-center gap-3">
        <Badge
          variant={project.type === 'Work' ? 'secondary' : 'outline'}
          className="rounded-full shrink-0"
        >
          {project.type}
        </Badge>
        <h3 className="font-semibold text-base">{project.title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline me-4"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  

  

  useEffect(() => {
    
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)


    return () => {
      clearTimeout(resumeTimeoutRef.current)
      api.off('select', onSelect)
      
    }
  }, [api])

  const handleDotClick = useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  const sectionRef = useRef<HTMLElement>(null)

  //this only called once when scroll to bottom and 
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
      id="projects"
      ref={sectionRef}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      className="px-6 py-16 max-w-5xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center">Projects</h2>

      <div className="max-w-3xl mx-auto mt-8">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.title}>
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
