import { BrowserRouter, Routes, Route } from 'react-router'
import { TooltipProvider } from './components/ui/tooltip'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

function Home() {
  return (
    <>
      <title>zakyabdur.tech</title>
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </>
  )
}

export default function App() {
  return (
    <TooltipProvider delay={200}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  )
}
