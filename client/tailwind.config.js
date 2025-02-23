/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#DBEAFE', // Light grey for background
        action: '#FF8000',      // Vibrant orange for call-to-action
        accent: '#219B9D',      // Teal for accents
        other: '#4C1F7A',       // Deep purple for text and secondary elements
      },
      fontFamily:{
        cabinSketch: ['Cabin Sketch', 'cursive'], // Custom font for headings
        openSans: ['Open Sans', 'sans-serif'],   // Body font
      }
    },
  },
  plugins: [],
}

