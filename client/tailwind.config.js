/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        video: 'url("/video.mp4")',
        about: 'url("/Blogging-bro.png")',
        services: 'url("/Boombox-amico.png")',
      }
    },
  },
  plugins: [],
}