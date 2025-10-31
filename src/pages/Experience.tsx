function Experience() {
  return (
    <section id="experience" className="space-y-8">
  <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>

  <div className="relative">
    <div className="absolute left-0 top-0 bottom-0 border-l-2 border-[#233554]"></div>
    <div className="space-y-12 pl-6">
        {/* Experience 1 */}
        <div className="relative">
         
          <div className="mb-2">
            <span className="text-sm text-[#8892b0]">1.  July 2025 — Present</span>
          </div>
          <div className="absolute left-[-32px] top-[2.25rem] w-4 h-4 rounded-full bg-[#64ffda]"></div>
          <h4 className="text-xl font-bold text-white mb-2 ">
            Frontend Developer - <p className="text-[#8892b0] mb-1 text-sm">Zunipixel</p>
          </h4>
          
          <p className="text-[#8892b0] mb-4">
          • Developed and maintained responsive, reusable React components for enterprise-grade web dashboards.
Enhanced page load speed  
• Collaborated closely with UI/UX designers and backend (API) teams to deliver consistent, accessible, and
scalable interfaces.
• Implemented global state management using Redux Toolkit, ensuring predictable app behavior and cleaner code
structure.
• Integrated REST APIs and optimized data handling for faster user interaction and smoother UI performance.
• Worked with TypeScript, Tailwind CSS, and React Hooks to improve maintainability and development efficiency.
• Participated in code reviews, sprint planning, and bug triage, ensuring high-quality deliverables aligned with
Agile processes
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">React.js</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">JavaScript</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">TypeScript</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">HTML & SCSS</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Redux</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">REST Api's</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Postman</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Git & GitHub</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Json</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">UI/UX Design</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Figma</span>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative">
          <div className="absolute left-[-32px] top-[2.25rem] w-4 h-4 rounded-full bg-[#64ffda]"></div>
          <div className="mb-2">
            <span className="text-sm text-[#8892b0]">2. Nov 2024 — Jan 2025</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            Web Development Intern
          </h4>
           
          <p className="text-[#8892b0] mb-4">
            Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">JavaScript</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">HTML & SCSS</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Zira</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Node.js</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Ui/UX</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Web Development</span>
          </div>
        </div>

        
         
      </div>
    </div>

      <div className="mt-12">
        <a
          href="#"
          className="text-[#64ffda] hover:underline text-sm"
        >
          View Full Résumé
        </a>
      </div>
    </section>
  )
}

export default Experience

