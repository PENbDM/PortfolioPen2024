/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "1350":'1350px',
      "1150":'1150px',
    },
    extend: {
      zIndex:{
        '-1':'-1',
      },
      width:{
      "368":'368px',
      
      
      },
      height:{
        "1300":"1300px",
        "75":'75px',
        "650":'650px',
        "260":'260px'
      },
      colors:{
        "blackk": "#1A1F2C",
        "light-black": "#576076",
        "whitee": "#ffffff",
        "dark-theme-bg": "#000",
        "dark-theme-black": "#0E1018",
        "dark-theme-white": "#f0f2f5",
        "dark-theme-light-white": "rgba(240, 242, 245, 0.7)"
      }

    },

  },
  plugins: [],
}

