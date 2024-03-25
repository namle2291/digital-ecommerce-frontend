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
        slide_bottom_right: "slide_bottom_right 0.4s ease-out both",
        slide_top_left: "slide_top_left 0.4s ease-out both",
        slide_opacity_start: "slide_opacity_start 0.5s ease-out both",
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
        slide_bottom_right: {
          "0%": {
            transform: "translateY(100px) translateX(260px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
            opacity: 0.1,
          },
        },
        slide_top_left: {
          "0%": {
            transform: "translateY(-100px) translateX(-260px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
            opacity: 0.1,
          },
        },
        slide_opacity_start: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
