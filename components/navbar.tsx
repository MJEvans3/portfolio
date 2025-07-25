"use client"

import { useState, useEffect } from "react"
import { Linkedin } from "lucide-react"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Update navbar style on scroll
          if (window.scrollY > 50) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }

          // Update active section based on scroll position
          const sections = ["home", "work", "education", "projects", "story", "contact"]

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= 150 && rect.bottom >= 150) {
                setActiveSection(section)
                break
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sectionOffsets: Record<string, number> = {
    home: 0,
    work: 45,
    education: 45,
    projects: 45,
    story: 45,
    contact: 45,
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Force a layout recalculation
      element.offsetHeight

      // Use section-specific offset if available, otherwise default to 100
      const offset = sectionOffsets[sectionId] ?? 100
      const offsetTop = element.offsetTop - offset

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and LinkedIn */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-xl font-bold transition-colors duration-300 transform hover:scale-110 ${
                scrolled
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600"
                  : "text-slate-900 hover:text-slate-700"
              }`}
            >
              MJE
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="lucide lucide-linkedin" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "work", label: "Work Experience" },
              { id: "education", label: "Education" },
              { id: "projects", label: "Projects" },
              { id: "story", label: "My Story" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-110 ${
                  activeSection === item.id ? "text-blue-600 font-semibold" : "text-slate-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-slate-600 hover:text-slate-900 focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
