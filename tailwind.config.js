// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#1B2C4A",
        "light-blue": "#8892b0",
        "stripe-bg": "#e6e6e6",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
