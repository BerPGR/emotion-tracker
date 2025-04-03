/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        joy: "#FFD166",
        sadness: "#118AB2",
        anger: "#EF476F",
        calm: "#06D6A0",
        fear: "#073B4C",
        neutral: "#f0f0f0"
      }
    },
  },
  plugins: [],
}

