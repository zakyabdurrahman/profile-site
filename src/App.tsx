import { BrowserRouter, Routes, Route } from 'react-router'
import Hero from './components/Hero'
import Projects from './pages/Projects'
import './App.css'

function Home() {
  return (
    <>
      <title>zakyabdur.tech</title>
      <main>
        <Hero />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
