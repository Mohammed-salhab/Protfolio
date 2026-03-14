import React from 'react'
import aboutImg from '../../assets/About-img.svg'

const About = () => {
    const skills = [
    { name: "HTML5", level: "90%" },
    { name: "CSS3", level: "85%" },
    { name: "Javascript", level: "85%" },
    { name: "TypeScript", level: "75%" },
    { name: "React", level: "90%" },
    { name: "Tailwind", level: "70%" },
    { name: "Bootstrap", level: "85%" },
    { name: "Git", level: "60%" },
    { name: "GitHub", level: "75%" },
  ];

  return (
    <section className="relative py-20 " id="about">

      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="w-full md:w-1/2 flex justify-center items-center z-10">
          <div className="relative w-full max-w-lg">
            <img src={aboutImg} className='w-full h-full'/>
            
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8 z-10">
          <div className="space-y-4">
            <h2 className="font-semibold text-3xl md:text-[40px] tracking-wider">About Me</h2>
            <p className="md:text-lg leading-7 tracking-wide">
            I am a dedicated Front-End Developer and a final-year Software Engineering student at Al-Sham Private University (ASPU). With a strong focus on React.js and TypeScript, I specialize in building responsive, user-centric web applications that solve real-world problems. Having completed intensive internships at leading local tech firms, I have honed my ability to transform complex designs into clean, maintainable code. I am passionate about modern CSS frameworks like Tailwind and Bootstrap and am always looking to push the boundaries of interactive web experiences.
            </p>
          </div>

          {/* Skill Progress Bars */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-5">
                <div className="flex justify-between items-center text-lg md:text-2xl font-semibold tracking-widest">
                  <span>{skill.name}</span>
                </div>
                {/* The Progress Bar Track */}
                <div className="relative h-2 md:h-3 w-full bg-[#EDECEC] rounded-full ">
                  {/* The Progress Fill */}
                  <div 
                    className="h-full bg-[#583FBC] rounded-full relative"
                    style={{ width: skill.level }}
                  >
                    {/* Tooltip Container */}
              <div className="absolute -right-2 -top-10 flex flex-col items-center group-hover:opacity-100 transition-opacity">
                {/* Tooltip Bubble */}
                <div className="bg-[#583FBC] text-white text-xs font-bold py-1 px-2 rounded-sm shadow-xl">
                  {skill.level}
                </div>
                {/* Tooltip Arrow (Triangle) */}
                <div className="w-2 h-2 bg-[#583FBC] rotate-45 -mt-1"></div>
              </div>
                    {/* The White Knob/Indicator */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#583FBC] rounded-full shadow-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About