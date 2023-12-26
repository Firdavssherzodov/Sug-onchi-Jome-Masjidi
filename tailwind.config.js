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
          'bg-islomiy': "url(https://png.pngtree.com/thumb_back/fh260/background/20210414/pngtree-gorgeous-mysterious-islam-ramadan-valid-window-background-image_614029.jpgF)",
           
        }
      },

    },
    plugins: [require("flowbite/plugin")],
  }