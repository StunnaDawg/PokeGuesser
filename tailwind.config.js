/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pokemon-solid": ["Pokemon Solid", "sans-serif"],
        "pokemon-pixels": ["Pokemon pixels 1", "sans-serif"],
        "pokemon-pixels-2": ["Pokemon pixels 2", "sans-serif"],
      },
    },
  },
  plugins: [],
}
