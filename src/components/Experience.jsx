import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import SectionTitle from './SectionTitle'
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="section-padding bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and hands-on experience in software development."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-navy-500 to-teal-500" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl shadow-xl card-hover border border-gray-100 dark:border-navy-700 relative">
                    <div className={`absolute top-8 ${index % 2 === 0 ? '-left-3 md:-right-3' : '-left-3 md:-left-3'} w-6 h-6 bg-teal-500 rounded-full border-4 border-white dark:border-navy-900`} />
                    
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <span className="px-3 py-1 bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-teal-400 text-sm font-medium rounded-full">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4">
                      <Building size={18} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-navy-700 dark:text-teal-400 mb-3 flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        Key Responsibilities:
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-navy-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
