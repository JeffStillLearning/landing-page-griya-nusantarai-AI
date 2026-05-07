import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        dark: "var(--color-dark)",
        parchment: "var(--color-parchment)",
        muted: "var(--color-muted)",
        danger: "var(--color-danger)",
        success: "var(--color-success)",
        cta: {
          DEFAULT: "var(--color-secondary)",
          hover: "#B8903E", // Manual hover color if needed or use opacity
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        input: "var(--radius-input)",
        image: "10px",
        badge: "var(--radius-badge)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        cta: "var(--shadow-cta)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-bottom": "slide-in-from-bottom 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
