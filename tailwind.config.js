/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A1628',
        'deep-teal': '#0D1B2A',
        'amber-primary': '#F59E0B',
        'amber-light': '#FCD34D',
        'orange-accent': '#FB923C',
        'amber-dark': '#D97706',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
