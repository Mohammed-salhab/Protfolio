// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Divider from './components/Divider'
// import About from './components/About'
// import Experience from './components/Experience'
// import ReachMe from './components/ReachMe'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
import Home from './Pages/Home';
import Project from './Pages/Project';
import { ThemeProvider } from './providers/ThemeProvider'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/project/:id" Component={Project}></Route>
        {/* <Route path="/register" Component={Register}></Route> */}
      </Routes>
    </Router>
    {/* <div className='relative bg-bgMain text-textPrimary font-poppins transition-colors duration-300'>
    <Navbar />
    <main className='pt-24'>
      <Hero/>
      <Divider/>
      <About/>
      <Experience/>
      <ReachMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
    </div> */}
    </ThemeProvider>
  )
}

export default App
