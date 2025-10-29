function Certifications() {
  return (
    <section id="certifications" className="space-y-8">
      <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>

      <div className="space-y-12">
        {/* Certification 1 */}
        <div className="space-y-2">
          <div className="mb-2">
            <span className="text-sm text-[#8892b0]">2024</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            Frontend Development
          </h4>
          <p className="text-[#8892b0] text-sm mb-2">Issuing Organization</p>
          <p className="text-[#8892b0]">
            Certification description or skills validated through this certification.
          </p>
        </div>

        {/* Certification 2 */}
        <div className="space-y-2">
          <div className="mb-2">
            <span className="text-sm text-[#8892b0]">2024</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            React.js Certification
          </h4>
          <p className="text-[#8892b0] text-sm mb-2">Issuing Organization</p>
          <p className="text-[#8892b0]">
            Advanced React.js concepts, hooks, state management, and modern frontend development practices.
          </p>
        </div>

        {/* Certification 3 */}
        <div className="space-y-2">
          <div className="mb-2">
            <span className="text-sm text-[#8892b0]">2023</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            UI/UX Design
          </h4>
          <p className="text-[#8892b0] text-sm mb-2">Issuing Organization</p>
          <p className="text-[#8892b0]">
            User interface and user experience design principles, design thinking, and prototyping.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="#"
          className="text-[#64ffda] hover:underline text-sm"
        >
          View All Certifications
        </a>
      </div>
    </section>
  )
}

export default Certifications

