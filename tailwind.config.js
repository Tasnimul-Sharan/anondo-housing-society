/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7941d",   // orange
        secondary: "#f7941d", // blue
        tertiary: "#8A2BE2",  // purple
        off_white: "#F9F9F9",
        border_color: "#e5e7eb",
        soft_black: "#1A1A1A",
      },
      keyframes: {
        ripple: {
          "0%": { boxShadow: "0 0 0 0 rgba(249, 155, 36, 0.6)" },
          "70%": { boxShadow: "0 0 0 30px rgba(249, 155, 36, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(249, 155, 36, 0)" },
        },
      },
      animation: {
        ripple: "ripple 2s infinite",
      },
    },
  },
  plugins: [],
};
