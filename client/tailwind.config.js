/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 'andika-bold': ['Andika-Bold', 'sans-serif'],
      },
      screens: {
        laptop: '1366px',
        mobile: '650px'
      },
      colors: {}
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
};
