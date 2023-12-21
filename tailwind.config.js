/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pokemon-solid": ["Pokemon Solid", "sans-serif"],
        "pokemon-pixel-regular": ["Pokemon Pixel Font Regular", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "@font-face": {
          fontFamily: "Pokemon Pixel Font Regular",
          src: `url("https://www.fontsaddict.com/fontface/pokemon-pixel-font-regular.ttf")`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
      })
    },
  ],
}
