/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1858A9",
        success: "#1E824C",
        danger: "#D92128",
        background: "#F9F5F3"
      }
    },
  },
  plugins: [],
}
