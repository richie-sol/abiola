/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily:{
      sans:["Montserrat"],
      serif:["Comic Neue", "sans-serif"]
    },
    
    extend: {
      fontSize:{
        larger:"7rem",
        
      },
    },
  },
  plugins: [],
}

