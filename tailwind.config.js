/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.28)',
        'glow-purple': '0 0 34px rgba(168, 85, 247, 0.28)',
      },
    },
  },
  plugins: [],
};
