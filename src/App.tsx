import Layout from './components/Layout'
import Loader from './components/Loader'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'

function App() {
  return (
    <>
      <Loader />
      <Layout>
        <div className="space-y-32">
          <About />
          <Experience />
          <Projects />
          <Certifications />
        </div>
      </Layout>
    </>
  )
}

export default App
