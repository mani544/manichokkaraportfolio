/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* ------------------------------
         Infinite Marquee Animation
      ------------------------------ */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // correct for 2x duplicated content
        },
      },

      animation: {
  marquee: "marquee 45s linear infinite",
},


      /* ------------------------------
         Brand Colors (optional upgrade)
      ------------------------------ */
      colors: {
        background: "#020617",
        primary: "#0EA5A4",
        accent: "#38BDF8",
        muted: "#64748B",
        text: "#E5E7EB",
      },

      boxShadow: {
        glow: "0 0 40px rgba(14,165,164,0.25)",
      },
    },
  },
  plugins: [],
};

