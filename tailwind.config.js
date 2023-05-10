/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primaryorange: '#ff7700',
        boxesgrey: '#212121',
      },
      colors: {},
      animation: {
        pulseupdown: 'pulseupdown 2s ease-out infinite',
      },
      keyframes: {
        pulseupdown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}
