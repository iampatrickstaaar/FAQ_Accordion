/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'white': '#ffffff',
      'lightpink': '#f9f0ff',
      'graypurple': '#8c6991',
      'darkpurple': '#2f1533',
    },
    fontFamily: {
      sans: ['Work Sans'],
    },
    
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/background-pattern-desktop.svg')",
      }
    },
  },
  plugins: [],
}

