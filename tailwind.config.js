/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily : {
        OpenSans: ['Open Sans', 'sans-serif'],
        Righteous: ['Righteous', "sans-serif"],
        Nunito: ['Nunito', "sans-serif"],
        
     },
     colors : {
        primary: "#053ba3",
        textColors: {
          100: "#969696",
          200: "#fff"
        },
        backgroundColors: {
          100: "#00000",
          200: "#fff"
        },
      }
    },
    backgroundSize: {
      fullSize : "100% 100%"
    },
    backgroundImage: {
        backgroundRegister: "linear-gradient(rgba(0, 0, 0, .93), rgba(0, 0, 0, .93)), url(/image/movie-poster.jpg)"
    }
  },
  plugins: [require("@tailwindcss/forms")],
}
