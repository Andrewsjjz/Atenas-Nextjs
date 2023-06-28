/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato'],
      },
      colors: {
        orange2: {
          '50' : '#E57C23',
          '100' : '#ff983f',
          '150' : '#F8F1F1'
        }
      }
    },
  },
  plugins: [],
}

