import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { Lightbulb, Target, Code, Users, Zap, Shield, Heart, Award } from 'lucide-react'

const WhyWorkWithMe = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: 'Problem-Solving Mindset',
      description: 'I approach challenges with analytical thinking and creative solutions.'
    },
    {
      icon: Code,
      title: 'Modern Development Practices',
      description: 'I use current technologies and follow industry best practices.'
    },
    {
      icon: Target,
      title: 'Responsive-First Approach',
      description: 'Every project is built to work seamlessly across all devices.'
    },
    {
      icon: Shield,
      title: 'Clean & Maintainable Code',
      description: 'I write code that is easy to understand, modify, and scale.'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'I stay updated with the latest technologies and development trends.'
    },
    {
      icon: Users,
      title: 'User-Focused Development',
      description: 'I prioritize user experience and accessibility in every project.'
    },
    {
      icon: Heart,
      title: 'Attention to Detail',
      description: 'I ensure every aspect of the project meets high quality standards.'
    },
    {
      icon: Award,
      title: 'Commitment to Quality',
      description: 'I deliver work that exceeds expectations and stands the test of time.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="why-work-with-me" className="section-padding bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Work With Me"
          subtitle="The qualities and values that make me a reliable partner for your projects."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg card-hover border border-gray-100 dark:border-navy-700"
            >
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-navy-100 to-teal-100 dark:from-navy-700 dark:to-navy-600 rounded-xl flex items-center justify-center">
                <reason.icon className="w-7 h-7 text-navy-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyWorkWithMe
