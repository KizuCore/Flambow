/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flambow: {
          primary: "#787fdc",
          primaryLighter: "#e5ebff",
          primaryDarker: "#344a9f",
          secondary: "#ffeb53",
          tertiary: "#ff682c",
          quaternary: "#fff3de",
          background: "#fbfcff",
          contrastLight: "#ffffff",
          contrastDark: "#1b1725",
          placeholder: "#878787",
        },
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        sofia: ['"Sofia Pro"', "sans-serif"],
        newake: ['"Newake-Demo"', "sans-serif"],
      },
      boxShadow: {
        flambow: "0 0 15px 0 rgba(0, 0, 0, 0.1)",
        button: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}
