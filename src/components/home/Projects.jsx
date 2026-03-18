import { ArrowUpRight, CircleArrowOutUpRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';

const Projects = () => {
  return (
    <section className="px-6 md:px-14 py-20" id="projects">
      <div className="container mx-auto ">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-start mb-16 gap-6">
          <div className="">
            <span className="text-primary text-xl font-medium leading-relaxed">Portfolio</span>
            <h2 className="text-4xl md:text-[40px] font-semibold leading-14 tracking-tight mt-2">
              My Creative Works <br />
              Latest <span className="text-primary">Projects</span>
            </h2>
          </div>
          
          {/* Github Button */}
          <a href='https://github.com/Mohammed-salhab' className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4.5 rounded-lg font-medium text-sm leading-relaxed ransition-colors duration-150">
            View Github
            <ArrowUpRight/>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projectsData.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="group cursor-pointer block">
              
              {/* Project Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-primary/50 aspect-[4/3] mb-6 border border-primary/25">
                {/* Replace this div with your actual <img> tag */}
                <div className="w-full h-full bg-gradient-to-br from-primary/90 to-primary group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center text-textPrimary">
                   {/* Placeholder content - remove when you have images */}
                   <span className="font-bold text-2xl opacity-75">Project Image</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-[22px] font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="">
                    {project.stack}
                  </p>
                </div>

                {/* Arrow Icon Circle */}
                <div className="rounded-full flex items-center justify-center text-primary group-hover:text-textMuted transition-all duration-300">
                  <CircleArrowOutUpRight size={35}/>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects