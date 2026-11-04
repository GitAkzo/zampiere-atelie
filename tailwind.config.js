/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF8F5',
          100: '#FAF0EB',
          200: '#F3DDD2',
          300: '#E7C1B0',
          400: '#D59D85',
          500: '#C27B62',
          600: '#AD634C',
          700: '#8E4F3C',
          800: '#754335',
          900: '#61392E',
        },
        gold: {
          100: '#FBF5E5',
          200: '#F6E7B9',
          300: '#EED588',
          400: '#E4BF59',
          500: '#D4AF37',
          600: '#B89225',
          700: '#917118',
        },
        canvas: '#FCFAF7',
        surface: '#FFFFFF',
        ink: '#2B231F',
        muted: '#7A6E66',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      scale: {
        98: '0.98',
      }
    },
  },
  plugins: [],
}

