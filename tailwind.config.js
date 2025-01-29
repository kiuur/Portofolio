/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Ins/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
