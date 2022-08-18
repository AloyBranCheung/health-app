/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1200px",
    },
    colors: {
      mainColor: "#F6FFFF",
      secondaryColor: "#FFE7E7",
      tertiaryColor: "#FDDD6D",
      mainFontColor: "#423066",
      white: "white",
      test: "red",
    },
    extend: {},
  },
  plugins: [],
};
