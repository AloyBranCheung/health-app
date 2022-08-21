/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1200px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      colorHover: "200% 100%",
    },
    colors: {
      mainColor: "#F6FFFF",
      secondaryColor: "#FFE7E7",
      tertiaryColor: "#FDDD6D",
      mainFontColor: "#423066",
      white: "white",
      red: "red",
      gray: colors.gray,
      transparent: "transparent",
      gradientStart: "#fbf6ff",
      gradientVia1: "#ebd4ff",
      gradientTo: "#c9f5ff",
    },
    extend: {},
  },
  plugins: [],
};
