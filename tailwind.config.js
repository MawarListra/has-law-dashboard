/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        sidebar: { max: "767px" },
        loginLogo: { raw: "(min-height: 300px)" },
      },
      colors: {
        "ui-gray-blue": {
          100: "#FFFFFF",
          97: "#F5F6F7",
          95: "#EDEFF2",
          90: "#DADEE6",
          80: "#ADB8CC",
          70: "#7D8FB3",
          60: "#6B7A99",
          50: "#4D5E80",
          40: "#334466",
          30: "#26334D",
          20: "#1A2233",
          10: "#0D111A",
        },
        "ui-blue": "#3361FF",
        "ui-red": "#E62E2E",
        "ui-green": "#29CC39",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar-hide"),
  ],
};
