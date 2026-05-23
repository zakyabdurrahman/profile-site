import { BrowserRouter, Routes, Route } from 'react-router'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './App.css'

function Home() {
  return (
    <>
      <title>zakyabdur.tech</title>
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
