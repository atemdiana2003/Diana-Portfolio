import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'
import { ExternalLink, ArrowRight, Code } from 'lucide-react'

// Fallback icon for GitHub
const GitHubIcon = Code

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects that demonstrate my technical skills and problem-solving abilities."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-navy-800 rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100 dark:border-navy-700"
            >
              <div className="aspect-video bg-gradient-to-br from-navy-100 to-teal-100 dark:from-navy-700 dark:to-navy-600 flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="text-3xl sm:text-4xl mb-2">🚀</div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Project screenshot placeholder
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-navy-700 dark:text-teal-400 mb-1 sm:mb-2">
                    Problem Solved:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {project.problem}
                  </p>
                </div>

                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-navy-700 dark:text-teal-400 mb-1 sm:mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight size={12} className="mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-navy-500 dark:text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-teal-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 sm:space-x-2 text-navy-600 dark:text-teal-400 hover:text-navy-800 dark:hover:text-teal-300 transition-colors text-xs sm:text-sm"
                  >
                    <GitHubIcon size={16} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 sm:space-x-2 text-navy-600 dark:text-teal-400 hover:text-navy-800 dark:hover:text-teal-300 transition-colors text-xs sm:text-sm"
                  >
                    <ExternalLink size={16} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
