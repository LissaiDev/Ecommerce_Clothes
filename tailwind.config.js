/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        darkColor: "#1d242d",
        muted: "#f2f3f7",
        muted2: "#f7fcfc",
        footer: "#eaeef2",
        textMuted: "#b4b4b4"
      },
    },
  },
  plugins: [],
};
