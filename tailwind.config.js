/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tbcBlue: "#00A1ED",
        hoverDark: "#2D3142",
        brightRed: "#DB222A",
      },
    },
  },
  plugins: [],
};
