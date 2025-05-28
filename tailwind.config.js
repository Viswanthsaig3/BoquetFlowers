/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFE6E6',
          200: '#FFCCCC',
          300: '#FF9999',
          400: '#FF6666',
          500: '#FF3333',
          600: '#FF0000',
          700: '#CC0000',
          800: '#990000',
          900: '#660000',
        },
        secondary: {
          100: '#FFF5F8',
          200: '#FFEBF1',
          300: '#FFD6E4',
          400: '#FFC2D7',
          500: '#FFADCA',
          600: '#FF99BE',
          700: '#FF85B1',
          800: '#FF70A5',
          900: '#FF5C98',
        },
        dark: '#1E1E2E',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
