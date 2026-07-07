/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // A very dark gray/black for backgrounds
        foreground: "#e0e0e0", // Light gray for primary text
        muted: {
          DEFAULT: "#262626", // Dark gray for muted elements
          foreground: "#a3a3a3", // Medium gray for muted text
        },
        primary: {
          DEFAULT: "#6d28d9", // A deep violet for primary actions/branding
          foreground: "#ffffff", // White text on primary buttons
        },
        secondary: {
          DEFAULT: "#1a1a1a", // Slightly lighter dark gray for secondary backgrounds
          foreground: "#e0e0e0", // Light gray for secondary text
        },
        accent: {
          teal: "#0d9488", // Teal accent
          violet: "#7c3aed", // Violet accent
          amber: "#d97706", // Amber accent
          indigo: "#4f46e5", // Indigo accent
          coral: "#e07a5f", // Coral accent
        },
        border: "#262626", // Dark gray for borders
        card: {
          DEFAULT: "#1a1a1a", // Dark background for cards
          foreground: "#e0e0e0", // Light text for cards
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Clash Display", "sans-serif"], // Example for a strong display font
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
