import Layout from './components/Layout'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Writing from './pages/Writing'

function App() {
  return (
    <Layout>
      <div className="space-y-32">
        <About />
        <Experience />
        <Projects />
        <Writing />
      </div>
    </Layout>
  )
}

export default App
