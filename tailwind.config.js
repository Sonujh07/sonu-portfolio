/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '236px',
        'sm': '540px',
          
        'md': '768px',
        
        'lg': '1024px',
       
      },
      // spacing: {
      //   // General (default) screen calculation
      //   'screen-small-size': 'calc(100vh + 4rem)', 

       
      // },
      colors: {
        'custom-blue': 'rgba(53, 59, 72,1.0)',
        'purpleCustom': '#a18cd1',
        'pinkCustom' : '#fbc2eb',
        'snowWhite' : '#effaff',
        'grayLender' : '#e5e6eb',
        'coolBlue' : '#189ad3',
        'shadeGreen' : '#3e5151',
        'shadeBrown' : '#decba4',
      },
      fontFamily: {
        // Register your custom font family here
          'roboto' : ['roboto'],
          'roboto-regular' : ['roboto-regular'],
          'raleway' : ['raleway']
       
      },
      backgroundImage: {
        'heroSectionBackground': "url('/src/assets/heroSectionBackground.png')",
        'custom-gradient': 'linear-gradient(to right, #243949 100%, #517fa4 100%)',
       
      }
      
    },
  },
  plugins: [],
}

