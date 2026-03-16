// Personal Information
export const PERSONAL_INFO = {
  name: "Akash Hegde",
  title: "AIML Student | Web Developer",
  email: "hegdeakash22032004@gmail.com",
  location: "Available for Remote Work",
  bio: "I'm Akash Shreekant Hegde, an AIML student passionate about Artificial Intelligence, Machine Learning, and Computer Vision. I enjoy building intelligent systems and solving real-world problems using deep learning and NLP."
}

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/AkashHegde2004",
  linkedin: "https://www.linkedin.com/in/akash-hegde-955a7a2a6",
  twitter: "#",
  email: "mailto:hegdeakash22032004@gmail.com"
}

// Spline 3D Model URLs
export const SPLINE_MODELS = {
  greeting: "https://prod.spline.design/uViPUFS8Aw3wR924/scene.splinecode",
  contact: "https://prod.spline.design/NSy20tEi5FFD41do/scene.splinecode"
}

// Skills Data
export const SKILLS = [
  { name: 'Python', level: 90, icon: '🐍', category: 'AIML' },
  { name: 'OpenCV', level: 85, icon: '👁️', category: 'AIML' },
  { name: 'NLP', level: 80, icon: '🗣️', category: 'AIML' },
  { name: 'Machine Learning', level: 85, icon: '🤖', category: 'AIML' },
  { name: 'Deep Learning', level: 80, icon: '🧠', category: 'AIML' },
  { name: 'TensorFlow', level: 75, icon: '📊', category: 'AIML' },
  { name: 'MediaPipe', level: 80, icon: '📐', category: 'AIML' },
  { name: 'Flask', level: 80, icon: '🌶️', category: 'backend' },
  { name: 'HTML', level: 85, icon: '🌐', category: 'frontend' },
  { name: 'CSS', level: 80, icon: '🎨', category: 'frontend' },
  { name: 'React', level: 70, icon: '⚛️', category: 'frontend' }
]

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: "Student Attentiveness Analysis",
    description: "An AI-powered classroom monitoring system designed to detect and analyze student attentiveness in real-time using computer vision techniques.",
    techStack: ["Python", "OpenCV", "MediaPipe", "Flask", "Firebase"],
    image: "👨‍🏫",
    features: [
      "Real-time face detection and tracking",
      "Detects attentiveness levels",
      "Displays student names above faces",
      "Stores attentiveness data"
    ],
    demoUrl: "https://github.com/AI22-MohamedRayan/working-attentiveness-and-attendence",
    githubUrl: "https://github.com/AI22-MohamedRayan/working-attentiveness-and-attendence"
  },
  {
    id: 2,
    title: "Fruit & Veg Classification",
    description: "A deep learning based image classification system that identifies different types of fruits and vegetables from images using Convolutional Neural Networks.",
    techStack: ["Python", "TensorFlow", "CNN", "Streamlit"],
    image: "🍎",
    features: [
      "Image classification using CNN",
      "Pretrained model for accuracy",
      "Image preprocessing & augmentation",
      "Streamlit web interface"
    ],
    demoUrl: "https://github.com/AkashHegde2004/Vegetable-and-Fruit-Classification-Using-CNN",
    githubUrl: "https://github.com/AkashHegde2004/Vegetable-and-Fruit-Classification-Using-CNN"
  },
  {
    id: 3,
    title: "Multilingual Sentiment Analysis",
    description: "A Natural Language Processing system that analyzes text from multiple languages and classifies it into positive, negative, or neutral sentiment.",
    techStack: ["Python", "NLP", "Machine Learning", "Flask"],
    image: "💬",
    features: [
      "Supports multiple languages",
      "Text preprocessing and tokenization",
      "Sentiment classification models",
      "Web interface for analysis"
    ],
    demoUrl: "https://github.com/AkashHegde2004/Multilingual-Sentiment-Analysis-Using-NLP",
    githubUrl: "https://github.com/AkashHegde2004/Multilingual-Sentiment-Analysis-Using-NLP"
  },
  {
    id: 4,
    title: "AI Code Debugger & Flowchart Gen",
    description: "An AI-powered development tool that analyzes source code, identifies errors, and generates visual flowcharts of the program execution.",
    techStack: ["Python", "NLP", "AI Models", "Flask"],
    image: "🛠️",
    features: [
      "Automatic code error detection",
      "AI-based debugging suggestions",
      "Flowchart generation",
      "Program logic visualization"
    ],
    demoUrl: "https://github.com/AkashHegde2004/Code-Debugger-and-Flow-Chart-Generator",
    githubUrl: "https://github.com/AkashHegde2004/Code-Debugger-and-Flow-Chart-Generator"
  }
]

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
