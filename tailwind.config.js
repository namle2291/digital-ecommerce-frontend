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
      animation: {
        slide_bottom: "slide-bottom 0.3s ease-out both",
      },
      keyframes: {
        "slide-bottom": {
          "0%": {
            padding: "0px 20px",
          },
          "100%": {
            padding: "12px 20px",
          },
        },
      },
    },
  },
  plugins: [],
};
