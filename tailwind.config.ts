import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1100px",
      },
    },
    extend: {
      colors: {
        primary: "#BC477F",
        secondary: "#3C0344",
        "brand-dana": "#008FE9",
        "brand-bni": "#D35C2E",
        "brand-bri": "#00529c",
        "brand-shoope-pay": "#ee4e2e",
        "brand-line": "#06C755",
        "brand-whatsapp": "#27D045",
      },
      boxShadow: {
        card: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;",
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
        down: {
          from: { height: "0" },
          to: { height: "100%" },
        },
        up: {
          from: { height: "100%" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        down: "down 0.2s ease-out",
        up: "up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
