import { motion } from 'framer-motion'
import { education } from '../data/education'
import SectionTitle from './SectionTitle'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

const Education = () => {
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
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and formal training in software engineering."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 to-navy-500" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pl-1/2 md:text-left' : 'md:pr-1/2 md:text-right md:ml-auto'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:ml-auto'}`}>
                  <div className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl shadow-xl card-hover border border-gray-100 dark:border-navy-700 relative">
                    <div className={`absolute top-8 ${index % 2 === 0 ? '-left-3 md:-left-3' : '-left-3 md:-right-3'} w-6 h-6 bg-navy-500 rounded-full border-4 border-white dark:border-navy-900`} />
                    
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                      <GraduationCap size={18} className="mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>

                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {edu.school}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-navy-700 dark:text-teal-400 mb-3 flex items-center">
                        <BookOpen size={16} className="mr-2" />
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-teal-50 dark:bg-navy-700 text-teal-700 dark:text-teal-400 text-xs font-medium rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
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

export default Education
