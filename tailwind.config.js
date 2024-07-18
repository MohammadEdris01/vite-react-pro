/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      

      fontFamily: {

        // refuler:['regular'],

        'Clash': ['Clash Display', 'sans-serif'],
        'Bony': ['Bonny', 'serif'],
        'Panchang': ['Panchang', 'sans-serif'],
        'Britney': ['Britney', 'cursive'],
        'Melodrama': ['Melodrama', 'serif'],
        'Rowan': ['Quilon', 'sans-serif'],
        'gamgote':['SupremelyLuxurious'],

        //custom font
        'regular':['Regular'],
        'fogtwo':['FogtwoNo5'],
        'adoria':['adoria'],
        'brolink':['brolink'],
        'dopeDisplay':['dopeDisplay'],
        'bestogram': ['bestogram'],
        'enigma': ['enigma'],
        'boruna': ['boruna'],
        'maginors': ['maginors'],
        'adora': ['adoria'],
        'dingers': ['dingers'],
        'major': ['major'],
        'bodware': ['bodware'],
        'saudager': ['saudager'],
        'fungka': ['fungka'],
        'falling': ['falling'],
        'alt': ['alt'],
        'jasmine': ['jasmine'],
        'greyet': ['greyet'],
        'raisa': ['raisa'],
        'vako': ['vako'],
        'Blue': ['Blue'],
        'blushing': ['blushing'],

        
      },




    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    // require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),  // default: 'standard'
    // require('tailwind-scrollbar'),

  ],
}

