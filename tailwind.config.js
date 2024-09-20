/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blue: "rgb(0, 65, 130)",
        lightred: "#f8ece4",
        lightgrey: "#f4f4f4",
        textcolor: "RGBA(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
