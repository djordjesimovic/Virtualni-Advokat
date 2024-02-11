/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      colors: {
        'light-gray': '#F0F0F0',
        'black': '#151515',
        'white': '#FFFFFF'
      },
      backgroundImage: {
        'userImage' : 'src/assets/user.png'
      }
    },
  },
  plugins: [],
}

