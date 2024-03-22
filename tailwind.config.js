/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "var(--main_color)",
        grey_color: "var(--grey_color)",
        text_grey: "var(--text_grey)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
