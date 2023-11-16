/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

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

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
