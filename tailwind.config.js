/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1440px',
      'xl': '1920px',
    },
    extend: {
      colors: {
        'ted-red': '#e62b1e',
        'dark': '#1a1a1a',
        'bg-default': '#080808',
        'bg-footer': '#0C0133',
      },
      fontFamily: {
        'sans': ['ABC Favorit Variable', 'system-ui', 'sans-serif'],
        'favorit': ['ABC Favorit Variable', 'system-ui', 'sans-serif'],
        'favorit-mono': ['ABC Favorit Mono Variable', 'monospace'],
      },
      keyframes: {
        'expand-vertical': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'expand-vertical': 'expand-vertical 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }
    },
  },
  plugins: [],
} 