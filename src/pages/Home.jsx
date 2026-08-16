import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Services from '../components/Services'
import WorkProcess from '../components/WorkProcess'
import WhyWorkWithMe from '../components/WhyWorkWithMe'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <WorkProcess />
      <WhyWorkWithMe />
      <Resume />
      <Contact />
    </div>
  )
}

export default Home
