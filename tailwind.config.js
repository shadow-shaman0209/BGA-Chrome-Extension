const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgaBlue: {
          DEFAULT: "#4065a3",
          light: "#4871b6",
          lighter: "#7aa6d5",
        },
        bgaGreen: {
          DEFAULT: "#199c97",
          light: "#1db7b1",
        },
        bgaOrange: {
          DEFAULT: "#f0b555",
          light: "#F5DDBA",
          lighter: "#fdf2e1",
        },
        gray: {
          350: "#b0b4ba",
        },
      },
      animation: {
        "pulse-0.5": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
    },
  },
  variants: {},
  plugins: [],
};
