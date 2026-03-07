
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#F26B4A',
          orange: '#F26B4A',
          blue: '#6ED3F5',
          navy: '#0F2A33',
        },
        accent: {
          blue: '#0EA5E9',
          green: '#10B981',
          amber: '#F59E0B',
          red: '#EF4444',
        },
        gray: {
          50: '#F8FAFC',
          100: '#EAF2F5',
          200: '#D3E0E6',
          400: '#90A4AE',
          600: '#5E7481',
          900: '#10212A',
        },
        navy: {
          DEFAULT: '#0F2A33',
          dark: '#081C22',
        },
      }
    },
  },
  plugins: [],
}
