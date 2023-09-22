/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero': "url('./assets/bg.jpg')",
  
        
        'strategiaiImg': "url('./assets/strategiai.jpg')",
        'implementacioImg': "url('./assets/implementacio.jpg')",
        'technologiaiImg': "url('./assets/technologiai.jpg')",
        'rendszeruzemeltetesImg': "url('./assets/rendszeruzemeltetes.jpg')",
        'alkalmazasImg': "url('./assets/alkalmazas.jpg')",
        'projektmenedzsmentImg': "url('./assets/projektmenedzsment.jpg')",
  
        'aboutBannerImg': "url('./assets/about.jpg')",
        'fillerImg': "url('./assets/filler.jpg')",

        'contactImg': "url('./assets/contact.jpg')",
  
      },
      colors:{
        'background': '#060606',
        'secondary': '#A4A4A4',
        'main': '#609FFF ',


      },
    },
    
  },
  plugins: [],
}

