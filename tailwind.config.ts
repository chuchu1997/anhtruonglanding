import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        // sm: "640px",
        // md: "768px",
        // lg: "960px",
        // xl: "1200px",
        sm: "576px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
    fontSize: {
      mobile: "0.6rem",
      tablet: "0.8rem",
      laptop: "1rem",
      pc: "1.25rem",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
      accent: "var(--font-pacifico)",
      cuprum: "var(--font-cuprum)",
    },
    extend: {
      backgroundImage: {
        "header-image": "url('/header/2.jpg')",
      },
      colors: {
        // backgroundFullWeb: "#ffffff",
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#63b8eb",
          hover: "#fff266",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
