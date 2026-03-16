import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/AkashHegde2004' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/akash-hegde-955a7a2a6' },
    { name: 'Phone', icon: '📱', url: 'tel:9353289259' },
    { name: 'Email', icon: '📧', url: 'mailto:hegdeakash22032004@gmail.com' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-darkBg border-t border-primary/30 relative overflow-hidden">
      {/* Professional divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-primary mr-3"
              >
                ASH
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-neonWhite">Akash Hegde</h3>
                <p className="text-gray-400">AIML Student & Web Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Passionate about creating innovative web solutions and data-driven applications. 
              Always excited to collaborate on new projects and bring ideas to life.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-xl hover:text-neonPink hover:border-neonPink transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#6366f1' }}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-primary mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>📧</span>
                <span className="text-sm">hegdeakash22032004@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span>📍</span>
                <span className="text-sm">Available for Remote Work</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span>💼</span>
                <span className="text-sm">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Akash Hegde. All Rights Reserved.
            </p>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <motion.a
                href="#"
                whileHover={{ color: '#ff3cac' }}
                className="hover:text-neonPink transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#ff3cac' }}
                className="hover:text-neonPink transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-all duration-300 z-50 shadow-lg hover:shadow-primary/25"
          title="Back to Top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
