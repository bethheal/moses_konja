module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your project structure
    "./public/index.html",            // Include the root HTML file if necessary
  ],
  theme: {
    extend: {
      fontFamily :{
        montserrat: ['Montserrate','sans-serif'],
        playfair:['Playfair Display',"serif"]
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],}

