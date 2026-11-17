/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./contact.html",
    "./portfolio.html",
    "./privacy.html",
    "./terms.html",
    "./_includes/**/*.njk",
    "./docs/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      }
    }
  },
  plugins: [],
}
