import { ArrowUp } from 'lucide-react';
import React from 'react'

const experiences = [
    { title: "Front-End Developer Intern | VICA Web Solution", date: "25/07/2025 – 18/12/2025", desc: "Practical experience in web application development, Building interactive front-end components, Applying modern programming concepts in professional environment" },
    { title: "Front-End Developer Intern | Syrian Programmer Empowerment (Tamkeen)", date: "01/10/2024 – 28/06/2025", desc: "Gained hands-on experience in the end-to-end web development lifecycle, Applied modern front-end technologies to build responsive layouts and enhance user engagement, Participated in code reviews and agile workflows to streamline project delivery." },
  ];

const TimelineColumn = () => (
  <div className="flex flex-col md:flex-row w-full gap-10 md:gap-12">
    {experiences.map((item, index) => (
      <div key={index} className="relative w-full md:flex-1 md:min-w-0 md:basis-0">
        <div
          className="absolute left-[23px] sm:left-[31px] md:left-[39px] top-4 bottom-0 w-[2px] text-textPrimary transition-colors duration-300"
          style={{
            backgroundImage: 'linear-gradient(to bottom, currentColor 40%, transparent 40%)',
            backgroundSize: '2px 14px',
            backgroundRepeat: 'repeat-y'
          }}
        />
        <div className="flex gap-x-4 md:gap-x-6 group">
          <div className="relative flex-none w-12 sm:w-16 md:w-20 flex justify-center items-start pt-1">
            <div className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-bgMain border-2 border-dashed border-textPrimary flex items-center justify-center transition-colors duration-300 shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-primary rounded-full" />
            </div>
          </div>
          <div className="space-y-2 pt-1.5 min-w-0">
            <h3 className="flex flex-col text-lg sm:text-xl md:text-2xl font-medium text-textPrimary tracking-tighter transition-colors duration-300">
              <span>
                {item.title}
              </span>
              <span className='text-textMuted text-sm md:text-base'>
                {item.date}
              </span>
            </h3>
            <p className="text-textMuted text-sm md:text-base tracking-tighter max-w-lg transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Background = ({className}) => {
    return (
        <div className={`${className}`}>
            <div className='absolute -top-14 md:-top-20 -left-2 md:-left-24 bg-primary rounded-full w-2 h-2 md:w-4 md:h-4 rotate-18'></div>
            <div className='bg-primary rounded-xl w-8 h-8 md:w-12 md:h-12 -rotate-16'></div>
            <div className='absolute top-16 left-10 md:top-24 md:left-13 bg-primary rounded-full w-3 h-3 md:w-6 md:h-6 rotate-18'></div>
        </div>
    )
}

const Experience = () => {
  return (
    <section className="relative py-20" id="experience">
        <Background className="absolute top-36 md:top-48 right-12"/>
        <Background className="absolute bottom-0 left-10 md:left-36"/>
        <a href='#home' className='text-lg p-3 bg-primary text-white hover:bg-primary/90 rounded-xl absolute bottom-0 right-10'>
          <ArrowUp/>
        </a>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary text-base md:text-xl font-medium leading-relaxed uppercase">
            Education and Experience
          </span>
          {/* text-white (implied) -> text-textPrimary */}
          <h2 className="text-4xl md:text-[40px] leading-tight font-semibold mt-4 text-textPrimary transition-colors duration-300">
            Education & Experience
          </h2>
        </div>

        <div className="w-full mx-auto">
          <TimelineColumn />
        </div>
        <div className="relative w-full mt-10 md:mt-12">
        <div
          className="absolute left-[23px] sm:left-[31px] md:left-[39px] top-4 bottom-0 w-[2px] text-textPrimary transition-colors duration-300"
          style={{
            backgroundImage: 'linear-gradient(to bottom, currentColor 40%, transparent 40%)',
            backgroundSize: '2px 14px',
            backgroundRepeat: 'repeat-y'
          }}
        />
        <div className="flex gap-x-4 md:gap-x-6 group">
          <div className="relative flex-none w-12 sm:w-16 md:w-20 flex justify-center items-start pt-1">
            <div className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-bgMain border-2 border-dashed border-textPrimary flex items-center justify-center transition-colors duration-300 shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-primary rounded-full" />
            </div>
          </div>
          <div className="space-y-2 pt-1.5 min-w-0">
            <h3 className="flex flex-col text-lg sm:text-xl md:text-2xl font-medium text-textPrimary tracking-tighter transition-colors duration-300">
              <span>
              EDUCATION | Al Sham Private University – ASPU
              </span>
              <span className='text-textMuted text-sm md:text-base'>
              5th Year (Expected Graduation)
              </span>
            </h3>
            <p className="text-textMuted text-sm md:text-base tracking-tighter max-w-lg transition-colors duration-300">
            Bachelor's in Software & Information Technology
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience