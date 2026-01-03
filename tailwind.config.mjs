import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        deco: ["var(--font-deco)", ...fontFamily.sans],
      },
      colors: {
        deco: {
          gold: "#D4AF37",
          navy: "#0F172A",
          teal: "#0F766E",
          cream: "#FDF4DC",
          bronze: "#CD7F32",
        },
      },
      borderRadius: {
        deco: "0.375rem",
        "deco-lg": "0.75rem",
      },
      boxShadow: {
        "deco-glow": "0 0 1rem rgba(212, 175, 55, 0.3)",
      },
      animation: {
        "deco-fade": "decoFade 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
