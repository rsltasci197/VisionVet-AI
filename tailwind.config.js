/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#34d399',
          light: '#6ee7b7',
        },
        blue: {
          DEFAULT: '#3b82f6',
          dark: '#1e40af',
        },
      },
    },
  },
  plugins: [],
}
