import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Projects />
   <Contact />
   <Footer />
  

    </>
  )
}

export default App
