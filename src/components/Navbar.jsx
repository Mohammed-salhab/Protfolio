import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from '../providers/ThemeProvider'; // Update path if needed
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [themeAnimating, setThemeAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  // SEO: Navigation links array for cleaner semantic mapping
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Education", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // --- SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      // Offset matches your fixed navbar height approx (around 100px) 
      // so it highlights just before the section hits the top.
      const scrollPosition = window.scrollY + 150; 

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          // Check if scroll position is within the section's bounds
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.href.substring(1)); // Remove '#' to get ID
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper to determine link classes
  const getLinkClass = (href) => {
    const linkId = href.substring(1);
    const isActive = activeSection === linkId;
    
    return `
      transition-colors duration-300 tracking-wide cursor-pointer
      ${isActive ? "text-primary font-bold" : "text-textPrimary hover:text-primary"}
    `;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-bgMain transition-colors duration-300 shadow-sm border-b border-transparent overflow-hidden">
      
      {/* LARGE SCREENS: Matches your original design exactly (px-14 py-5).
        MOBILE: Adjusts padding to px-6 to prevent overflow.
      */}
      <nav 
        className="w-full flex justify-between items-center px-6 md:px-14 py-5"
        role="navigation"
        aria-label="Main Navigation"
      >
        
        {/* LOGO: Visually identical to your h1, but semantically an anchor for SEO */}
        <a 
          href="#home" 
          className="text-2xl font-semibold leading-relaxed tracking-wide text-textPrimary hover:text-primary transition-colors"
          aria-label="Laura Portfolio Home"
        >
          Mohammed
        </a>

        {/* DESKTOP MENU 
           - 'hidden md:flex': Hides on mobile, shows exactly your layout on large screens.
           - Classes match your original exactly: gap-5, font-medium, leading-relaxed.
        */}
        <div className="hidden md:flex justify-between items-center gap-5 font-medium leading-relaxed">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              // UPDATED: Uses the helper function to apply active class
              className={getLinkClass(link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ACTIONS WRAPPER (Theme + Hamburger) */}
        <div className="flex items-center gap-4">
          
          {/* THEME TOGGLE (Your original code) */}
          <button
            onClick={() => {
              setThemeAnimating(true);
              toggleTheme();
              setTimeout(() => setThemeAnimating(false), 300);
            }}
            className={`
              p-2 rounded-full border border-textPrimary/60
              transition-all duration-300 ease-out
              hover:bg-primary/5
              text-textPrimary
              ${themeAnimating ? "scale-90 rotate-180" : "scale-100 rotate-0"}
            `}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === "light" ? (
              <Moon size={20} className="transition-transform duration-300" />
            ) : (
              <Sun size={20} className="transition-transform duration-300" />
            )}
          </button>

          {/* MOBILE MENU TOGGLE (Visible only on mobile) */}
          <button 
            className="md:hidden text-textPrimary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER 
          - Absolute positioned below navbar.
          - Only visible when isOpen is true.
      */}
      <div 
        className={`
          md:hidden absolute top-full left-0 w-full bg-bgMain 
          border-b border-textPrimary/10 shadow-xl
          transition-all duration-300 ease-in-out origin-top
          ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"}
        `}
      >
        <div className="flex flex-col items-center py-8 space-y-6 font-medium text-lg text-textPrimary">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              // UPDATED: Also applies to mobile menu links
              className={`w-full text-center py-2 ${getLinkClass(link.href)}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

    </header>
  );
};

export default Navbar;