import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Code, Link } from 'lucide-react'

// Fallback icons for social media
const GitHubIcon = Code
const LinkedInIcon = Link

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden bg-white dark:bg-navy-950">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-teal-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block px-4 py-2 bg-navy-100 dark:bg-navy-800 rounded-full">
              <span className="text-navy-700 dark:text-teal-400 font-medium text-sm">
                Welcome to my portfolio
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-navy-200 dark:border-navy-700 shadow-xl">
              <img 
                src="/assets/profile_image0.png" 
                alt="Atem Diana" 
                className="w-full h-full object-cover object-[0%_20%]"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 dark:text-white mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-navy-600 to-teal-500 bg-clip-text text-transparent">Atem Diana</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium"
          >
            Computer Software Engineer & Full-Stack Web Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            "I build modern, responsive, and scalable web applications that solve real-world problems and create meaningful digital experiences."
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 text-center"
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500 dark:hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 text-center"
            >
              <span>Contact Me</span>
            </a>
            <a
              href="/Atem Professional CV.pdf"
              download
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 text-center"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 sm:space-x-6"
          >
            <a
              href="https://github.com/atemdiana2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-navy-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-navy-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/atem-diana?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-navy-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-navy-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="mailto:atemdiana10@gmail.com"
              className="p-3 bg-gray-100 dark:bg-navy-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-navy-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-navy-400 dark:border-teal-400 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-3 bg-navy-400 dark:bg-teal-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
