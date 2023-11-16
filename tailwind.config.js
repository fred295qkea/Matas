/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

    
    colors:{
      "matas": {
        500: "#002643",
        400: "#284461",
        300: "#556882",
        200: "#8893A8",
        100: "#DEE1E9"
      },

      "mantas": {
        500: "#00395B",
        400: "#2774AE",
        300: "#44BDEE",
        200: "#81B0D2",
        100: "#CDDCED"
      }

    },
    },


  },
  plugins: [],
}
