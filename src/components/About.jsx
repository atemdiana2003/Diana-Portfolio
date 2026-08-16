import { motion } from 'framer-motion'
import { Code, Layers, Zap, Award } from 'lucide-react'
import SectionTitle from './SectionTitle'

const About = () => {
  const stats = [
    { icon: Code, label: 'Technologies', value: '15+' },
    { icon: Layers, label: 'Projects', value: '10+' },
    { icon: Zap, label: 'Experience', value: '1+ Year' },
    { icon: Award, label: 'Certifications', value: 'Growing' }
  ]

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
    <section id="about" className="section-padding bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building practical digital solutions and creating meaningful user experiences."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-navy-100 to-teal-100 dark:from-navy-800 dark:to-navy-700 flex items-center justify-center shadow-2xl">
              <img 
                src="src/assets/profile_image0.png" 
                alt="Atem Diana - Software Engineer" 
                className="w-full h-full object-cover object-[0%_20%]"
                onError={(e) => {
                  e.target.src = "src/assets/profile_image0.png";
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500 rounded-2xl -z-10 opacity-20" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-navy-500 rounded-2xl -z-10 opacity-20" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a Computer Software Engineering student at CHITECHMA University Institute of Technology and Medical Affairs, with a deep passion for building practical digital solutions that make a real difference.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in software engineering is driven by curiosity and a commitment to continuous learning. I specialize in full-stack web development, with expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and modern frontend technologies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that are both functional and delightful. Whether it's building complex web applications or designing intuitive interfaces, I approach every project with attention to detail and a problem-solving mindset.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg card-hover"
                >
                  <stat.icon className="w-8 h-8 text-navy-600 dark:text-teal-500 mb-3" />
                  <div className="text-2xl font-bold text-navy-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
