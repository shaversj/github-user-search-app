/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
