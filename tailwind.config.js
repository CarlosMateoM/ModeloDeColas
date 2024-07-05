/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#292E45',
        'secondary': '#FCC398',
        'tertiary': '#FFFFFF',
        'quaternary': '#47A4AF',
        'quinary': '#FC707A',
      },
    },
  },
  plugins: [],
}

