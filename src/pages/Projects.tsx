function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h3 className="text-2xl font-bold text-white mb-8">Projects</h3>

      <div className="space-y-12">
        {/* Project 1 */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">
            Build a Spotify Connected App
          </h4>
          <p className="text-[#8892b0]">
            Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">React</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Node.js</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Express</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Spotify API</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Styled Components</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">
            Spotify Profile
          </h4>
          <p className="text-[#8892b0]">
            Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">React</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Express</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Spotify API</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Heroku</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">
            Halcyon Theme
          </h4>
          <p className="text-[#8892b0]">
            Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
          </p>
          <p className="text-[#64ffda] text-sm">100k+ Installs</p>
        </div>

        {/* Project 4 */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">
            brittanychiang.com (v4)
          </h4>
          <p className="text-[#8892b0]">
            An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Gatsby</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Styled Components</span>
            <span className="px-3 py-1 bg-[#233554] text-[#64ffda] text-xs rounded">Netlify</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="#"
          className="text-[#64ffda] hover:underline text-sm"
        >
          View Full Project Archive
        </a>
      </div>
    </section>
  )
}

export default Projects

