import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-darkBg relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-purple-900/20 to-purple-800/10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-2 bg-darkBg rounded-full overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7597.jpg?w=740"
                  alt="Akash Hegde - AIML Student & Web Developer"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  onLoad={() => console.log('Profile image loaded successfully')}
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback emoji (hidden by default) */}
                <div className="w-full h-full rounded-full flex items-center justify-center text-6xl" style={{ display: 'none' }}>
                  👨‍💻
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-neonWhite mb-4">
              Passionate About <span className="text-primary">Innovation</span>
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Akash Shreekant Hegde, passionate about creating web solutions, AI systems, and innovative projects. 
              Currently pursuing AIML and building unique tech ideas that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in technology spans across web development, AIML, and creating interactive user experiences. 
              I believe in the power of code and AI to transform ideas into reality and make a positive impact on people's lives.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glassmorphism p-4 rounded-lg text-center"
              >
                <h4 className="text-2xl font-bold text-primary">15+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glassmorphism p-4 rounded-lg text-center"
              >
                <h4 className="text-2xl font-bold text-primary">3+</h4>
                <p className="text-gray-300">Years Learning</p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
