import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <Phone/>
      ),
      label: "Call me",
      value: "+963 954 029 250", // You can update this to your actual number: +963932200022
      link: "tel:+963 954 029 250"
    },
    {
      icon: (
        <Mail/>
      ),
      label: "Email me",
      value: "mohammadsalhab.dev@gmail.com", // You can update this to: f2002.a.z@gmail.com
      link: "mailto:mohammadsalhab.dev@gmail.com"
    },
    {
      icon: (
        <MapPin/>
      ),
      label: "Address",
      value: "Syria, Damascus, Midan",
      // link: "#"
    }
  ];

  return (
    <section className="px-6 md:px-14 py-18 md:py-32" id="contact">
      <div className="container mx-auto">
        
            <div className="mb-20">
              <span className="text-primary text-base md:text-xl font-medium leading-relaxed">Contact</span>
              <h2 className="text-4xl md:text-[40px] font-semibold leading-14 mt-2">
                Let’s Discuss Your <span className="text-primary">Project</span>
              </h2>
            </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-6 md:space-y-24">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="flex items-center gap-6 group"
                >
                  {/* Icon Box */}
                  <div className="w-16 h-14 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg group-hover:bg-[#4732a3] transition-colors">
                    {item.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="space-y-5">
                    <p className="text-textMuted leading-3.5 tracking-widest">{item.label}</p>
                    <p className="font-medium leading-4 tracking-wider group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
          </div>

          {/* Right Column: Form */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="w-full border border-border rounded-lg px-5 py-4 text-textPrimary placeholder-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full border border-border rounded-lg px-5 py-4 text-textPrimary placeholder-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full border border-border rounded-lg px-5 py-4 text-textPrimary placeholder-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <textarea 
                placeholder="Message" 
                rows="6"
                className="w-full border border-border rounded-lg px-5 py-4 text-textPrimary placeholder-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-white font-medium text-sm leading-relaxed py-4 px-12 rounded-lg transition-colors w-full md:w-auto"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact