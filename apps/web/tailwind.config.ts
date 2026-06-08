import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "rgb(var(--surface) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 0 80px rgba(124, 58, 237, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
