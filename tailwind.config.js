/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mmcm: "url('./src/assets/mmcm.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        darker: ["Darker Grotesque", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        brico: ["Bricolage Grotesque", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        league: ["League Gothic", "Helvetica"],
      },
      colors: {
        svene: "#B7AB98",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "4.104rem",
        "7xl": "5.208rem",
        "8xl": "6.208rem",
        "9xl": "7.208rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
        "13xl": "15rem",
        "answer-xl": "15rem",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        sikip: "-24px",
        widerist: "0.7rem",
      },
    },
  },
  plugins: [],
};
