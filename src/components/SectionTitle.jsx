import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, alignment = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-6 sm:mb-8 md:mb-10 ${alignmentClasses[alignment]}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-2 sm:mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
      <div className={`w-16 sm:w-20 h-1 bg-gradient-to-r from-navy-600 to-teal-500 mt-3 sm:mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}

export default SectionTitle
