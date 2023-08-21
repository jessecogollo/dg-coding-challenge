/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontSize: {
      h1: ["20px", { lineHeight: "24px" }],
      overline: ["30px", { lineHeight: "36px" }],
      subtitle: ["20px", { lineHeight: "24px" }],
      body: ["16px", { lineHeight: "22px" }],
      xs: ["12px", { lineHeight: "16px" }],
    },
    extend: {
      colors: {
        primary: "#10344A",
        "grey-lighten-1": "#F1F1F1",
        grey: "#9CA7AF",
        "grey-darken-1": "#424242",
        "green-lighten-1": "#BAE2C8",
        green: "#69C78F",
        "red-lighten-1": "#D99CA1",
        red: "#C03644",
      },
    },
  },
  plugins: [],
};
