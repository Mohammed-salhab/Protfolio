import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Divider from '../components/Divider'
import About from '../components/home/About'
import Experience from '../components/home/Experience'
import ReachMe from '../components/home/ReachMe'
import Projects from '../components/home/Projects'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <div className='relative bg-bgMain text-textPrimary font-poppins transition-colors duration-300 overflow-hidden'>
    <Navbar />
    <main className='pt-24 overflow-hidden'>
      <Hero/>
      <Divider/>
      <About/>
      <Experience/>
      <ReachMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
    </div>
  )
}

export default Home