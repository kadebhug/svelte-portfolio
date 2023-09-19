/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',

  theme: {
    container:{
      center: true
    },
    colors: {
      'black': '#1b1b1e',
      'rich-black': '#0f0d19'
    },
    extend: {
      colors: {
        // flowbite-svelte
        primary: { 
          DEFAULT: '#fff8dc', 
          100: '#5f4c00', 
          200: '#be9800', 
          300: '#ffd21e', 
          400: '#ffe57c', 
          500: '#fff8dc', 
          600: '#fff9e2', 
          700: '#fffbea', 
          800: '#fffcf1', 
          900: '#fffef8' 
        },
        'pale-dogwood': '#e7c8b8',
        black: '#242424'
      }
    }
  }
};

module.exports = config;
