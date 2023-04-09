/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Mulish', 'sans-serif'],
        mono: ['Rokkitt', 'monospace'],
      }
    },
  },
  plugins: [],
}