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
        <Route path="/MyPortfolio" element={<Home />} />
        <Route path="/MyPortfolio/about" element={<About />} />
        <Route path="/MyPortfolio/contact" element={<Contact />} />
        <Route path="/MyPortfolio/skills" element={<Skills />} />
        <Route path="/MyPortfolio/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
