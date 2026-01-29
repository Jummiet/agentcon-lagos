
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Lufga', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Lufga', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#D2583C',
          orange: '#D2583C',
          blue: '#94AEBB',
          navy: '#2B3A4D',
        },
        accent: {
          blue: '#2563EB',
          green: '#059669',
          amber: '#F59E0B',
          red: '#DC2626',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          600: '#4B5563',
          900: '#111827',
        },
        navy: {
          DEFAULT: '#2B3A4D',
          dark: '#1a2332',
        },
      }
    },
  },
  plugins: [],
}
