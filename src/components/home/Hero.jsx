import React from 'react'

import heroImage from '../../assets/Hero.png'
import heroBg from '../../assets/Hero-bg.svg'
import cv from '../../assets/MOHAMMED_SALHAB.pdf'


const Background = ({className}) => {
  return (
      <div className={`${className}`}>
          <div className='absolute -top-24 md:-top-40 lg:-top-60 left-20 md:left-0   lg:left-5 bg-primary rounded-full w-6 h-6 md:w-4 md:h-4 rotate-18'></div>
          <div className='absolute -top-10 md:-top-24 -right-24 md:right-5 bg-primary rounded-xl w-16 h-16 md:w-12 md:h-12 -rotate-16'></div>
          <div className='absolute top-16 left-16 md:top-0 md:-left-15 bg-primary rounded-full w-4 h-4 md:w-6 md:h-6 rotate-18'></div>
      </div>
  )
}

const Hero = () => {

  return (
    <section className='relative flex justify-between md:items-center flex-col md:flex-row px-14 pb-10 md:pb-44 overflow-hidden ' id="home">
        {/* BG for whole section (behind everything) */}
        <img src={heroBg} alt="" className='absolute inset-0 w-full h-full object-cover object-center z-10 pointer-events-none' aria-hidden />
        <div className='relative md:w-[50%] space-y-14 z-20'>
        <div className='absolute -top-10 left-0 w-full h-full bg-blue-400 opacity-15 blur-[100px] rounded-full'/>
            <h1 className='text-4xl md:text-[55px] leading-tight'>
                <p className='text-base md:text-xl font-medium leading-normal text-primary'>Welcome</p>
                HEY! I’m Mohammed, <span className='font-bold'>
Frontend Developer
                    </span> 

            </h1>
            <p className='w-fit md:w-96 text-base md:text-lg leading-relaxed'>Agency-quality Webflow websites with the personal touch of a freelancer.</p>
            <a href={cv} target='_blank' download className='px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-md'>Download CV</a>
        </div>
        <div className='relative z-0 md:w-[50%] md:80 lg:h-100 xl:h-120 h-72 mt-10 rounded-2xl overflow-hidden'>
            {/* 1. Mirror effect (bottom) */}
            <Background className="absolute z-50 top-36 md:top-48 right-12"/>
        <Background className="absolute z-50 bottom-24  left-10 md:left-36"/>
            <div className='absolute inset-0 bg-linear-120 from-blue-300/50 to-blue-200/50 backdrop-blur-sm' aria-hidden />
        </div>
        <img src={heroImage} alt="Mohammed" className='absolute z-20 bottom-4 md:bottom-58 lg:bottom-40 xl:bottom-32 right-0 lg:-right-5 xl:-right-10 h-86 md:h-80 lg:h-110 xl:h-140'/>
    </section>
  )
}

export default Hero