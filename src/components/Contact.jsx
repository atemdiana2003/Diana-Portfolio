import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { Mail, X, Send, MapPin, Phone, Code, Link } from 'lucide-react'

// Fallback icons for social media
const GitHubIcon = Code
const LinkedInIcon = Link
import { socialLinks, contactInfo } from '../data/social'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Create mailto link with form data - guaranteed to work
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      )
      const mailtoLink = `mailto:atemdiana10@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Show success message
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

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
    <section id="contact" className="section-padding bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations, opportunities, or just to say hello."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through the form or connect with me on social media.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-navy-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a href={`mailto:${socialLinks.email}`} className="text-navy-900 dark:text-white font-medium hover:text-navy-600 dark:hover:text-teal-400 transition-colors">
                    {socialLinks.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-navy-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-navy-900 dark:text-white font-medium">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-navy-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Availability</p>
                  <p className="text-navy-900 dark:text-white font-medium">{contactInfo.availability}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-lg flex items-center justify-center text-navy-600 dark:text-teal-400 hover:bg-navy-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={24} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-lg flex items-center justify-center text-navy-600 dark:text-teal-400 hover:bg-navy-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={24} />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-lg flex items-center justify-center text-navy-600 dark:text-teal-400 hover:bg-navy-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <X size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-navy-700">
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input-field ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
