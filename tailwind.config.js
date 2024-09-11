/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#5eead4",
        colmnBackgroundColor: "white",
        mainBackgroundColor: "#99999940",
      },
    },
  },
  plugins: [],
};
