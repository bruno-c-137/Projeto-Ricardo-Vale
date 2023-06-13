/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1020px",
      lg: "1213px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        vermelho: {
          1: "#C61212",
        },
      },
    },
  },
  plugins: [],
};
