/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#030712",
        "custom-light": "#ffffff",
        "custom-primary": "#2892F9",
        "cs-syd-1": "#8FD7ED",
        "cs-syd-2": "#5ACAEC",
        "cs-syd-3": "#28B8E4",
        "cs-syd-4": "#22A3DC",
        "cs-syd-5": "#3292CC",
        "cs-syd-6": "#2D82BB",
        "cs-syd-7": "#2B6F9B",
        "cs-syd-8": "#26577C",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        carouselSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        showProjectContent: {
          "0%": {
            transform: "translateY(50px)",
            filter: "blur(30px)",
            opacity: 0,
          },
          "100%": { transform: "translateY(0)", filter: "blur(0)", opacity: 1 },
        },
        testimonialAutoSlide: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      transitionProperty: {
        width: "width",
      },
      animation: {
        carouselSlide: "carouselSlide 30s infinite linear",
        showProjectContentOrganisation:
          "showProjectContent 0.5s ease-in-out 0.7s forwards",
        showProjectContentTitle:
          "showProjectContent 0.5s ease-in-out 0.9s forwards",
        showProjectContentDescription:
          "showProjectContent 0.5s ease-in-out 1.1s forwards",
        showProjectContentButton:
          "showProjectContent 0.5s ease-in-out 1.3s forwards",
        testimonialAutoSlide: "testimonialAutoSlide 10s infinite linear",
      },
      gridTemplateColumns: {
        "40-60": "40% 60%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-outline": {
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "rgba(255,255,255, 0.3)",
          },
          ".text-outline-2": {
            "-webkit-text-stroke-width": "2px",
            "-webkit-text-stroke-color": "currentColor",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
  darkMode: "class",
};
