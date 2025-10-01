/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "form-input-regular": ["MPLUS1p-Regular", "sans-serif"],
        "form-input-medium": ["MPLUS1p-Medium", "sans-serif"],
      },
      screens: {
        laptop: "1700px",
        mobile: "1133px",
      },
      colors: {
        testpink: "#ff00ff",
      },
    },
  },
  // "prettier-plugin-tailwindcss"
  plugins: [],
};
