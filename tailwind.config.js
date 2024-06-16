/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackish-purple": "#2B283A",
        "greyish-purple": "#4A4E74",
        "light-green": "#59E391",
        "blueish-purple": "#5035FF",
        "off-white": "#F5F5F5",
        "dark-navy": "#0B2434"
      }
    },
  },
  plugins: [],
}

