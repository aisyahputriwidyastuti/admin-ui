/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      body: ['Inter'],
      poppins :['Poppins'],
      colors: {
        primary: "#299D91",
      }
    },
  },
},
  plugins: [],
}

