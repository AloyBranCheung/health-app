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
      black: "black",
      modalBackground: "rgba(0, 0, 0, 0.5)",
      gray: colors.gray,
      transparent: "transparent",
      gradientStart: "#fbf6ff",
      gradientVia1: "#ebd4ff",
      gradientTo: "#c9f5ff",
      cardStart: "#c3b4ff",
      cardMiddle: "#f4e1ff",
      cardEnd: "#a9f0ff",
    },
    extend: {
      backgroundImage: {
        "card-radial-gradient":
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,239,250,1) 50%, rgba(230,251,255,0.23573179271708689) 100%)",
      },
      gridTemplateRows: {
        stopStretching: "auto minmax(0, 1fr)",
      },
      spacing: {
        modal: "22rem",
      },
    },
  },
  plugins: [],
};
