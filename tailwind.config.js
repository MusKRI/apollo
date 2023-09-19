/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#238e34",
        "main-text": "var(--text-main-color)",
        "body-text": "var(--text-body-color)",
      },
      gridTemplateColumns: {
        flexible: "repeat(auto-fill, minmax(250px, 1fr))",
      },

      screens: {
        "2lg": "1228px",
      },
    },
  },
  plugins: [],
};
