import React from 'react'

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container mx-auto px-6 md:px-14">
        
        {/* Separator Line */}
        <div className="border-t border-textPrimary mb-8"></div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 leading-4 text-textPrimary">
          
          {/* Left: Copyright */}
          <div className=''>
            © 2026. All Rights Reserved
          </div>

          {/* Center: Credits */}
          {/* Corrected the typo 'Develpoment' from the image to 'Development' */}
          <div>
            Development by Mohammed
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
  {/* Facebook */}
  <a href="https://www.facebook.com/share/17MUtmQczk/" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </a>

  {/* Twitter */}
  {/* <a href="#" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  </a> */}

  {/* GitHub */}
  <a href="https://github.com/Mohammed-salhab" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/mohamed_salhab_?igsh=dW1rdDY1OGxmMG9j" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </a>
</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer