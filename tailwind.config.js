/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0a",
        primary: "#6366f1", // Professional indigo
        accent: "#8b5cf6", // Subtle purple
        neonPink: "#ff3cac", // Keep for minimal use
        neonWhite: "#fdfbfb",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      backgroundImage: {
        'gradient-dark-neon': 'linear-gradient(to bottom, #0a0a0a, #581c87, #ff3cac)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #ff3cac, 0 0 10px #ff3cac, 0 0 15px #ff3cac',
          },
          '100%': { 
            textShadow: '0 0 10px #ff3cac, 0 0 20px #ff3cac, 0 0 30px #ff3cac',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #ff3cac, 0 0 10px #ff3cac, 0 0 15px #ff3cac',
          },
          '50%': {
            boxShadow: '0 0 10px #ff3cac, 0 0 20px #ff3cac, 0 0 30px #ff3cac',
          },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
