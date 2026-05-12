/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#F9E1E6',
          200: '#F3C4CD',
          300: '#E99BAA',
          400: '#D4687F',
          500: '#B8405B',
          600: '#9B2D47',
          700: '#7B2040',
          800: '#6B1E3A',
          900: '#4A1228',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFFAF5',
          200: '#FFF5EB',
          300: '#FDEBD4',
          400: '#F5D5B0',
          500: '#E8C49A',
        },
        chocolate: {
          800: '#2D1810',
          900: '#1A0E0A',
        },
        rose: {
          soft: '#D4918B',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Outfit', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
