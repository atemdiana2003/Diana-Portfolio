import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { Search, Layout, Code, Rocket, CheckCircle } from 'lucide-react'

const WorkProcess = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Understanding your requirements, goals, and target audience to create a solid foundation.'
    },
    {
      icon: Layout,
      title: 'Plan',
      description: 'Creating a detailed project plan with timelines, milestones, and technical specifications.'
    },
    {
      icon: Code,
      title: 'Design & Develop',
      description: 'Building your solution with clean code, modern technologies, and best practices.'
    },
    {
      icon: CheckCircle,
      title: 'Test',
      description: 'Rigorous testing to ensure functionality, performance, and user experience excellence.'
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'Launching your project and providing ongoing support and maintenance.'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="work-process" className="section-padding bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Work Process"
          subtitle="A systematic approach to delivering high-quality software solutions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-navy-500 via-teal-500 to-navy-500 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative text-center pt-4 md:pt-0"
                >
                  <div className="relative z-10">
                    <div className="relative inline-block mb-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white dark:bg-navy-800 rounded-full shadow-xl flex items-center justify-center border-4 border-navy-100 dark:border-navy-700">
                        <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-navy-600 dark:text-teal-400" />
                      </div>
                      <div className="hidden md:block absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-navy-600 dark:bg-teal-500 rounded-full text-white text-xs sm:text-sm font-bold flex items-center justify-center shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 dark:text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkProcess
