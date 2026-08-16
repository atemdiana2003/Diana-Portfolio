import { motion } from 'framer-motion'
import { services } from '../data/services'
import SectionTitle from './SectionTitle'
import { Globe, Layout, Layers, Server, Database, Monitor, Wrench, Palette, Zap } from 'lucide-react'

const Services = () => {
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

  const getIcon = (iconName) => {
    const iconMap = {
      'Globe': Globe,
      'Layout': Layout,
      'Layers': Layers,
      'Server': Server,
      'Database': Database,
      'Monitor': Monitor,
      'Wrench': Wrench,
      'Palette': Palette
    }
    return iconMap[iconName] || Zap
  }

  return (
    <section id="services" className="section-padding bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services"
          subtitle="Professional services I offer to help bring your digital projects to life."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-navy-800 p-5 sm:p-6 rounded-2xl shadow-lg card-hover border border-gray-100 dark:border-navy-700 text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-navy-100 to-teal-100 dark:from-navy-700 dark:to-navy-600 rounded-2xl flex items-center justify-center">
                {(() => {
                  const IconComponent = getIcon(service.icon);
                  return IconComponent ? <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-navy-600 dark:text-teal-400" /> : null;
                })()}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-navy-900 dark:text-white mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
