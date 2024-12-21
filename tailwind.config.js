const { nextui } = require("@nextui-org/react");
const { li } = require("framer-motion/client");

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "1xl": "0 0px 3px 1px rgba(255, 119, 0, 0.3)",
        "2xl": "0 0px 20px 5px rgba(255, 119, 0, 0.3)",
        "3xl": "0 0px 30px 5px rgba(255, 119, 0, 0.3)",
      },
      colors: {
        light: "#FFFFFF",
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'serif'],
        quicksand: ['"Quicksand"', 'serif'],
      }
    },
  },
  plugins: [nextui()],
}

