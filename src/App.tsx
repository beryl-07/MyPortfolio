import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Experience from './pages/Experience'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/Experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
