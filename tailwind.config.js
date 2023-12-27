/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-islomiy":
          "url(https://w.forfun.com/fetch/a6/a63ab6f44204a7b3254da63f933b7886.jpeg)",
      },
      colors: {
        color1: "  #059c94",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
