/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F8FAFC',
        customBlue: '#D9EAFD',
        customDarkBlue: '#0892A5',
        customDarkGray: '#9AA6B2',
      }
    },
  },
  plugins: [],
}

