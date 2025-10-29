function Writing() {
  return (
    <section id="writing" className="space-y-8">
      <h3 className="text-2xl font-bold text-white mb-8">Writing</h3>

      <div className="space-y-8">
        {/* Writing 1 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#8892b0]">2024</span>
          </div>
          <h4 className="text-xl font-bold text-white">
            5 Common Accessibility Pitfalls and How to Avoid Them
          </h4>
        </div>

        {/* Writing 2 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#8892b0]">2020</span>
          </div>
          <h4 className="text-xl font-bold text-white">
            Integrating Algolia Search with WordPress Multisite
          </h4>
        </div>

        {/* Writing 3 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#8892b0]">2019</span>
          </div>
          <h4 className="text-xl font-bold text-white">
            Building a Headless Mobile App CMS From Scratch
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Writing

