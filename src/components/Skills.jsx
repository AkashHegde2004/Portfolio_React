import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS']
    },
    {
      title: "Backend Development", 
      skills: ['Python', 'Flask', 'Node.js', 'SQL', 'MongoDB']
    },
    {
      title: "AIML",
      skills: ['OpenCV', 'NLP', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'MediaPipe']
    },
    {
      title: "Programming Languages",
      skills: ['Python', 'JavaScript', 'C', 'Java', 'SQL']
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
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-darkBg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neonPink rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-gray-700/50 rounded-lg text-sm text-gray-300 text-center hover:bg-primary/20 hover:text-primary transition-all duration-200"
                  >
                    {skill}
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
