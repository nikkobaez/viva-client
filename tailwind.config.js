/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "DM Serif Display",
        secondary: "Jost"
      },
      backgroundImage: {
        home: "url(/src/assets/images/home-living-room.png)"
      },
      colors: {
        primary: {
          default: "#292F36",
          hover: "#343E4A"
        },
        secondary: "#4D5053",
        accent: {
          default: "#CDA274",
          secondary: "#F4F0Ec",
          hover: "#B88C5D"
        }
      }
    },
  },
  plugins: [],
}

