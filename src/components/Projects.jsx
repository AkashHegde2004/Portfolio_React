import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const Projects = () => {

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-darkBg relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-purple-900/20 to-purple-800/10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
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
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions built with passion and cutting-edge technology
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                rotateY: 2
              }}
              className="glassmorphism rounded-xl overflow-hidden card-tilt group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 group-hover:animate-bounce">
                    {project.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neonWhite group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Features */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-primary mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
                    className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                  >
                    View Project
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                    className="px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    GitHub
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:from-primary/80 hover:to-accent/80 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
