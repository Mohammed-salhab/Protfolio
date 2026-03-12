import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import { projectsData } from '../data/projects';

// import projectImage from '../assets/Hero-img.png'
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, ArrowLeft, ExternalLink, Maximize2, X, Expand, CircleArrowOutUpRight } from 'lucide-react';

const Project = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const otherProjects = projectsData.filter(project => project.id !== id);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  // const projectImg = project?.image || projectImage;

  if (!project) {
    return (
      <div className="bg-bgMain min-h-screen text-textPrimary font-poppins transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-6 md:px-14 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/#projects" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bgMain min-h-screen text-textPrimary font-poppins transition-colors duration-300">
      
      {/* 1. Navbar Import */}
      <Navbar />

      <main className="container mx-auto px-6 md:px-14 pt-32 pb-20">
        
        {/* ========================================= */}
        {/* FEATURED PROJECT SECTION          */}
        {/* ========================================= */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          
          {/* LEFT: Project Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden bg-bgMain">
              {project.image ? <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              /> : <div className="relative overflow-hidden rounded-2xl bg-primary/50 aspect-[4/3] mb-6 border border-primary/25">
              {/* Replace this div with your actual <img> tag */}
              <div className="w-full h-full bg-gradient-to-br from-primary/90 to-primary group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center text-textPrimary">
                 {/* Placeholder content - remove when you have images */}
                 <span className="font-bold text-2xl opacity-75">Project Image</span>
              </div>
            </div>
}
              {/* Hover Overlay */}
              {project.image ? <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-20">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-primary transition-colors"
                  >
                   <CircleArrowOutUpRight size={60}/>
                  </a>
                )}
                <button
                  onClick={() => setFullscreenOpen(true)}
                  className="text-textPrimary hover:text-primary transition-colors"
                >
                  <Expand size={60} />
                </button>
              </div> : ''}
            </div>
          </div>

          {/* Fullscreen Image Modal */}
          {fullscreenOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setFullscreenOpen(false)}
            >
              <button
                onClick={() => setFullscreenOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* RIGHT: Project Details */}
          <div className="space-y-8">
            
            {/* Back Link */}
            <Link to="/#projects" className="inline-flex items-center gap-2 text-textMuted hover:text-primary transition-colors text-sm mb-4">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
            
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {project.title}
                </h1>
                <p className="text-textMuted text-sm font-medium">
                  {project.stack}
                </p>
              </div>
              {/* External Link Icon */}
              <a href="#" className="text-primary hover:text-white transition-all">
              <CircleArrowOutUpRight size={35}/>

              </a>
            </div>

            {/* Description */}
            <div className="space-y-4 text-textMuted leading-relaxed">
              <p>{project.desc}</p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-2 text-base">
                <span className="font-semibold text-textPrimary">Tech Stack :</span>
                <span className="text-textMuted">{project.stack}</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary/25"
              >
                <Github size={20} />
                <span>Github Repo</span>
              </a>
            </div>

          </div>
        </section>


        {/* ========================================= */}
        {/* DIVIDER                   */}
        {/* ========================================= */}
        <div className="py-8">
            <Divider />
        </div>


        {/* ========================================= */}
        {/* "THE BEST PROJECTS" GRID         */}
        {/* ========================================= */}
        {otherProjects.length > 0 && (
        <section className="space-y-12 mt-8">
            
            {/* Section Header with Controls */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="space-y-2">
                    <span className="text-primary font-medium tracking-wide">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        The Best <span className="text-primary">Projects</span>
                    </h2>
                </div>

                {/* Slider Controls (Visual Only) */}
                <div className="flex items-center gap-3">
                    <button className="p-3 rounded-full border border-textPrimary/20 text-textPrimary hover:border-primary hover:text-primary transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
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

        </section>
        )}

      </main>

      {/* 3. Footer Import */}
      <Footer />
      
    </div>
  )
}

export default Project