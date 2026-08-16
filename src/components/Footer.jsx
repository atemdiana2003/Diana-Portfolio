import { motion } from 'framer-motion'
import { X, Mail, ArrowUp, Code, Link } from 'lucide-react'

// Fallback icons for social media
const GitHubIcon = Code
const LinkedInIcon = Link
import { socialLinks } from '../data/social'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">ATEM DIANA</h3>
            <p className="text-gray-400 mb-2 sm:mb-3 text-base sm:text-lg">
              Computer Software Engineer & Full-Stack Web Developer
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Building modern, responsive, and scalable web applications that solve real-world problems.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Connect</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-navy-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-navy-700 transition-all duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-navy-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-navy-700 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-navy-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-navy-700 transition-all duration-300"
                aria-label="Twitter"
              >
                <X size={20} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-navy-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-navy-700 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2026 Atem Diana. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
