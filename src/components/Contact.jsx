import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/hegdeakash22032004@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Contact from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hegdeakash22032004@gmail.com',
      link: 'mailto:hegdeakash22032004@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/akash-hegde-955a7a2a6',
      link: 'https://www.linkedin.com/in/akash-hegde-955a7a2a6'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9353289259',
      link: 'tel:9353289259'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-darkBg relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-purple-900/20 to-purple-800/10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 md:p-12 rounded-xl text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Let's Connect!</h3>
            
            <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Feel free to reach out through any of these channels:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center p-6 rounded-xl bg-gray-800/30 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <span className="text-5xl mb-4 group-hover:animate-bounce">{info.icon}</span>
                  <p className="font-semibold text-white group-hover:text-primary transition-colors text-lg mb-2">{info.label}</p>
                  <p className="text-gray-400 text-sm break-all">{info.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-lg text-gray-300">
                <span className="text-primary font-semibold">Quick Response:</span> I typically respond within 24 hours!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glassmorphism p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your <span className="text-primary">Next Project</span>?
            </h3>
            <p className="text-gray-300 mb-8">
              Whether you need to discuss AIML, data analysis, or innovative tech solutions, 
              send me a message below or download my resume.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4 text-left mb-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <textarea 
                name="message" 
                placeholder="What would you like to discuss?" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows="4"
                className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
                  className={`px-8 py-3 bg-primary text-white font-semibold rounded-lg transition-all duration-300 shadow-lg ${
                    status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/80 hover:shadow-primary/25'
                  }`}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>
                <motion.a
                  href="/resume.pdf"
                  download="Akash_Hegde_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  Download Resume
                </motion.a>
              </div>
              
              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-medium text-center mt-2">
                  Message sent successfully!
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-medium text-center mt-2">
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
