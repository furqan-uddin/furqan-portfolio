/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Core Theme */
        batBlack: "#0B0D10",
        batGray: "#1F2937",
        batSoft: "#161B22",

        /* Accents */
        batBlue: "#2563EB",
        batYellow: "#FACC15",

        /* Utility */
        surface: "#F8FAFC",
        borderLight: "#E2E8F0",
        borderDark: "#1E293B",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        fade: "fade 0.4s ease-out forwards",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        fade: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
