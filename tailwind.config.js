/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        snuff: {
          50: "#f3f3fa",
          100: "#e8eaf7",
          200: "#dadbf1",
          300: "#bcbde5",
          400: "#a5a1d8",
          500: "#9289cb",
          600: "#8170bb",
          700: "#6f5fa3",
          800: "#5a4f84",
          900: "#4c446b",
          950: "#2c283e",
        },
        indigo: {
          50: "#f2f4fc",
          100: "#e1e5f8",
          200: "#c9d2f4",
          300: "#a4b5ec",
          400: "#798fe1",
          500: "#4c5fd5",
          600: "#454fcb",
          700: "#3b3dba",
          800: "#363598",
          900: "#2f3079",
          950: "#22214a",
        },
        azure: {
          50: "#eef9ff",
          100: "#daf0ff",
          200: "#bce6ff",
          300: "#8fd7ff",
          400: "#59bfff",
          500: "#33a1fe",
          600: "#157ff3",
          700: "#156be0",
          800: "#1857b5",
          900: "#194b8f",
          950: "#142f57",
        },
      },
    },
  },
  plugins: [],
};
