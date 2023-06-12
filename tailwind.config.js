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
        amarelo: {
          1: "#FCFC30",
        },
        azul: {
          1: "#465EFF",
          2: "#54DCFC",
        },
        verde: {
          1: "#00EBD0",
        },
        roxo: {
          1: "#BDB6FF",
        },
        vermelho: {
          1: "#FB796D",
        },
      },
    },
  },
  plugins: [],
};
