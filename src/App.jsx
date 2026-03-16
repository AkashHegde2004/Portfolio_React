import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load components for better performance
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-neonWhite overflow-x-hidden">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </motion.main>
    </div>
  )
}

export default App
