/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Mulish', 'sans-serif'],
        mono: ['Rokkitt', 'monospace'],
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      }
    },
  },
  /* plugins: [require('@tailwindcss/line-clamp')], */
}