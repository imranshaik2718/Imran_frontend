import { useEffect, useState } from 'react'
import Chatbot from './Chatbot'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState('about')
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const mainElement = document.querySelector('main')
    if (!mainElement) return

    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'writing']
      const scrollPosition = mainElement.scrollTop + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll() // Check on initial load
    mainElement.addEventListener('scroll', handleScroll)
    return () => mainElement.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const mainElement = document.querySelector('main')
    const element = document.getElementById(sectionId)
    if (element && mainElement) {
      const offsetTop = element.offsetTop - 64 // Account for padding
      mainElement.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
  }

  return (
    <div 
      className="min-h-screen text-[#ccd6f6] relative overflow-hidden"
      style={{
        background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(90, 205, 218, 0.1), transparent 40%), #0a192f`
      }}
    >
      <div className="flex relative z-10">
        {/* Left Column - Fixed */}
        <aside className="fixed left-0 top-0 h-screen w-1/2 p-8 flex flex-col items-center justify-center z-20">
          <div className="w-full max-w-md text-left mb-12">
            <h1 className="text-5xl font-bold text-white mb-2">Imran Ali</h1>
            <p className="text-[#8892b0] text-lg mb-4">Front End Developer</p>
            <p className="text-[#8892b0] text-base">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>
          
          <nav className="w-full max-w-md space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className={`flex items-center gap-3 py-2 text-sm transition-colors uppercase tracking-wider text-left w-full ${
                activeSection === 'about'
                  ? 'text-[#64ffda]'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
            >
              <span className={`h-px transition-all ${activeSection === 'about' ? 'w-12 bg-[#64ffda]' : 'w-8 bg-[#8892b0]'}`}></span>
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`flex items-center gap-3 py-2 text-sm transition-colors uppercase tracking-wider text-left w-full ${
                activeSection === 'experience'
                  ? 'text-[#64ffda]'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
            >
              <span className={`h-px transition-all ${activeSection === 'experience' ? 'w-12 bg-[#64ffda]' : 'w-8 bg-[#8892b0]'}`}></span>
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`flex items-center gap-3 py-2 text-sm transition-colors uppercase tracking-wider text-left w-full ${
                activeSection === 'projects'
                  ? 'text-[#64ffda]'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
            >
              <span className={`h-px transition-all ${activeSection === 'projects' ? 'w-12 bg-[#64ffda]' : 'w-8 bg-[#8892b0]'}`}></span>
              Projects
            </button>
          </nav>

          <div className="w-full max-w-md mt-12 flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#64ffda] transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#64ffda] transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#64ffda] transition-colors"
              aria-label="CodePen"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.628 0-12 5.372-12 12 0 6.628 5.372 12 12 12 6.628 0 12-5.372 12-12 0-6.628-5.372-12-12-12zm0 21.163c-5.041 0-9.163-4.122-9.163-9.163s4.122-9.163 9.163-9.163 9.163 4.122 9.163 9.163-4.122 9.163-9.163 9.163zm3.378-10.804l-4.378 2.886v-5.772l4.378 2.886zm-6.756-2.886l4.378-2.886v5.772l-4.378-2.886zm6.756 7.544v-4.378l3.378-2.162v6.756l-3.378-0.216zm-9.378 2.162l3.378-2.162v4.378l-3.378-2.216v-4.378l-3.378 2.162v6.756l3.378 2.162z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#64ffda] transition-colors"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://goodreads.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#64ffda] transition-colors"
              aria-label="Goodreads"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/>
              </svg>
            </a>
          </div>
        </aside>

        {/* Right Column - Scrollable */}
        <main className="ml-[50%] w-1/2 overflow-y-auto h-screen relative z-10">
          <div className="px-12 py-16">
            {children}
          </div>
        </main>
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}

export default Layout
