/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["poppins", "ui-sans-serif"],
      mulish: ["mulish", "Georgia"],
      sans: ["ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
