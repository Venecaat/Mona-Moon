/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui : {
    themes: [
      "autumn",
      "dracula",
      {
        monamoon_light: {
          "primary": "#51087e",
          "primary-content": "#fcd57e",
          "secondary": "#cea9fc",
          "accent": "#FFFFFF",
          "accent-content": "#51087e",
          "neutral": "#000000",
          "base-100": "#fcd57e",
          "base-content": "#000000",
          "info": "#67e8f9",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#f0757d",
        },
        monamoon_dark: {
          "primary": "#fcd57e",
          "primary-content": "#51087e",
          "secondary": "#cea9fc",
          "accent": "#ffffff",
          "accent-content": "#000000",
          "neutral": "#fcd57e",
          "base-100": "#51087e",
          "base-content": "#fcd57e",
          "info": "#67e8f9",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#f0757d",
        },
      },
    ],
    utils: true,
  },
}

