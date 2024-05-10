import { useState } from 'react'
import './App.scss'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import { Routes , Route} from 'react-router-dom'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
