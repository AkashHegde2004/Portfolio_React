import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { SPLINE_MODELS } from '../constants'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen bg-darkBg flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-purple-900/20 to-neonPink/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="text-primary">
              Akash Hegde
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            AIML Student | Web Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Spline 3D Model */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-96 lg:h-[500px] w-full"
        >
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
              </div>
            </div>
          }>
            <Spline
              scene={SPLINE_MODELS.greeting}
              className="w-full h-full"
              style={{
                background: 'transparent',
                willChange: 'transform'
              }}
              onLoad={() => {
                // Optimize performance after load
                console.log('3D Model loaded successfully');
              }}
            />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-primary"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
