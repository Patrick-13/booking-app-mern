/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004602",
        secondary: "#06750a",
      },
    },
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};
