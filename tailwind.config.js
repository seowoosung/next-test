/** @type {import('tailwindcss').Config} */
const colors = require("./colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      colors: colors.colors,
      screens: {
        "3xl": "1920px",
      },
    },
  },
  safelist: [
    "bg-customGray-100",
    "bg-customGray-200",
    "bg-customGray-300",
    "bg-customGray-400",
    "bg-customGray-500",
    "bg-customGray-600",
    "bg-customGray-700",
    "bg-customGray-800",
    "bg-customGray-900",
    "bg-customGray-1000",
    "text-customGray-200",
    "text-customGray-300",
    "text-customGray-400",
    "text-customGray-500",
    "text-customGray-600",
    "text-customGray-700",
    "text-customGray-800",
    "text-customGray-900",
    "bg-lightBlue",
    "bg-[#D8D9DA]",
    "bg-[#F3F4F6]",
    "bg-gray-200",
    "bg-gray-800",
    "text-white",
    "text-black",
    "text-orange",
    "bg-[#303345]",
    "bg-[#414358]",
    "bg-[#29272E]",
    "bg-[#343141]",
    "bg-[#1F1D24]",
  ],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
