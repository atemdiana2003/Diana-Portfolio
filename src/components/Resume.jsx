import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import SectionTitle from './SectionTitle'

const Resume = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionTitle
              title="Download My Resume"
              subtitle="Want to know more about my experience and qualifications?"
              alignment="center"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-navy-800 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-navy-700"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-navy-100 to-teal-100 dark:from-navy-700 dark:to-navy-600 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-navy-600 dark:text-teal-400" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white">
                  Get the Full Picture
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
                  Download my CV to explore my education, technical skills, projects, and professional experience in detail.
                </p>
              </div>

              <a
                href="/Atem-Professional-CV.pdf"
                download
                className="btn-primary flex items-center space-x-3 text-lg px-8 py-4"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                PDF format • Updated 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
