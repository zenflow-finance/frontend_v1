/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slate: "#1f2937",
        mist: "#f1f5f9",
        sand: "#f8fafc",
        mint: "#e7f8f2",
        sea: "#0f766e",
        coral: "#f97316",
        sunrise: "#fde68a",
        cloud: "#e2e8f0"
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(15, 23, 42, 0.25)",
        glow: "0 16px 40px -28px rgba(15, 118, 110, 0.6)"
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Clash Display", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
