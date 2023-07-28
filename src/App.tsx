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
        <Route path="/myportfolio" element={<Home />} />
        <Route path="/myportfolio/about" element={<About />} />
        <Route path="/myportfolio/contact" element={<Contact />} />
        <Route path="/myportfolio/skills" element={<Skills />} />
        <Route path="/myportfolio/Experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
