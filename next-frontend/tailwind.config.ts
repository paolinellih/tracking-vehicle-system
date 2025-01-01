import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        default: "#242526",
        main: "#0056b3",
        error: "#f35759",
        success: "#366912"
      },
      textColor: {
        primary: "#242526",
        constrast: "#ffffff"
      }
    },
  },
  plugins: [],
} satisfies Config;
