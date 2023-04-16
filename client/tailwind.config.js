module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#4f46e5",
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        "josefin-sans": ["Josefin Sans"],
        "work-sans": ["Work Sans"],
        "cereal-font": ["Cereal Font"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
};