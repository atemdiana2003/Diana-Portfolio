import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import SectionTitle from './SectionTitle'
import { Code, Layout, Atom, Wind, ArrowRight, Server, Zap, Database, Cloud, Table, GitBranch, Image, Shield, Bolt } from 'lucide-react'

// Fallback icon for GitHub
const GitHubIcon = Code

const Skills = () => {
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

  const categories = [
    { key: 'frontend', title: 'Frontend Development', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', title: 'Backend Development', color: 'from-green-500 to-emerald-500' },
    { key: 'databases', title: 'Databases', color: 'from-purple-500 to-pink-500' },
    { key: 'tools', title: 'Tools & Technologies', color: 'from-orange-500 to-red-500' }
  ]

  const getIcon = (iconName) => {
    const iconMap = {
      'Code': Code,
      'Layout': Layout,
      'Javascript': Code,
      'JavaScript': Code,
      'Atom': Atom,
      'Wind': Wind,
      'ArrowRight': ArrowRight,
      'Server': Server,
      'Zap': Zap,
      'Database': Database,
      'Cloud': Cloud,
      'Table': Table,
      'GitBranch': GitBranch,
      'Github': GitHubIcon,
      'GitHub': GitHubIcon,
      'Image': Image,
      'Api': ArrowRight,
      'Shield': Shield,
      'Bolt': Bolt
    }
    return iconMap[iconName] || Code
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Familiar':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    }
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Technical Skills"
          subtitle="A comprehensive overview of my technical expertise and development capabilities."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-10 lg:space-y-12"
        >
          {categories.map((category) => (
            <motion.div key={category.key} variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                <span className={`w-1 h-6 sm:h-8 bg-gradient-to-b ${category.color} rounded-full mr-3`} />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {skills[category.key].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-navy-800 p-4 sm:p-6 rounded-xl shadow-lg card-hover border border-gray-100 dark:border-navy-700"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-navy-50 to-teal-50 dark:from-navy-700 dark:to-navy-600 rounded-lg">
                        {(() => {
                          const IconComponent = getIcon(skill.icon);
                          return IconComponent ? <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-navy-600 dark:text-teal-400" /> : null;
                        })()}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <h4 className="font-semibold text-navy-900 dark:text-white mb-2 text-sm sm:text-base">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
