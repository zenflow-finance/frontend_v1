/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        ivory: "#fdfaf5",
        "zen-emerald": "#0f766e",
        "zen-saffron": "#f59e0b",
        "zen-sky": "#38bdf8",
        "zen-accent": "#0f766e"
      },
      boxShadow: {
        glow: "0 18px 45px -30px rgba(15, 118, 110, 0.7)",
        deep: "0 30px 80px -50px rgba(15, 23, 42, 0.35)"
      },
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Sora", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "zen-aurora":
          "radial-gradient(circle at top, rgba(245, 158, 11, 0.18), transparent 60%), radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.12), transparent 55%), radial-gradient(circle at 80% 10%, rgba(15, 118, 110, 0.15), transparent 55%)"
      },
      animation: {
        "float-slow": "float 10s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    }
  },
  plugins: []
};
