import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#162088",
          blueDark: "#0e155c",
          yellow: "#FCBE43",
          yellowHover: "#e5a732",
          red: "#d21113",
          dark: "#171A1D",
          charcoal: "#212429",
          slate: "#394046",
          body: "#333333",
          muted: "#666666",
          lightGray: "#F7F8F9",
          border: "#EAEAEA",
        },
      },
      fontFamily: {
        sans: ["var(--font-mulish)", "Mulish", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px rgba(0, 0, 0, 0.08)",
        cardHover: "0 20px 40px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
