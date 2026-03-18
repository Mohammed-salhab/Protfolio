import React from 'react'
import reachBg from '../../assets/ReachMe-bg.svg'
import { ArrowRight } from 'lucide-react'

const ReachMe = () => {
  return (
    <section className="relative flex justify-center items-center py-20 mt-10 text-white">
        <div className='w-[90%] h-105 absolute rotate-2 rounded-4xl bg-primary/75'></div>
        <div className='relative w-[90%] px-6 md:px-0 py-20 md:py-36 bg-primary rounded-4xl  flex justify-between md:justify-evenly items-center flex-col md:flex-row gap-14 md:gap-0'>
                    <img src={reachBg} alt="reach me bg"className='absolute top-0 left-0 w-full h-full object- z-0'/>
            <div className='space-y-5'>
                <h2 className='font-semibold text-3xl md:text-5xl leading-14'>Try me out, risk free!</h2>
                <p className='max-w-lg text-lg md:text-xl leading-7'>If you’re not happy with the design after the first draft, I’ll refund your deposit, <span className='font-bold'>no questions asked</span></p>
            </div>
            <a href='#contact' className='px-7 py-3 z-20 bg-white hover:bg-white/80 text-primary font-semibold rounded-md flex justify-center items-center gap-5'>
                <span className='text-sm leading-6 font-semibold'>
                    Contact
                    </span>
                    <ArrowRight/>
                </a>
        </div>
    </section>
  )
}

export default ReachMe