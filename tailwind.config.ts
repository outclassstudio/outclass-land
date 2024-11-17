import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        newSize: "11.11px",
      },
      keyframes: {
        slideinX: {
          "100%": { transform: "translateX(0%)" },
          "00%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideinX: "slideinX 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flyonui")],
  darkMode: "selector",
  flyonui: {
    themes: [],
  },
  safelist: [
    {
      pattern:
        /bg-(red|green|blue|yellow|gray|purple|pink|indigo|teal|orange|rose)-[0-9]{3}/,
    },
  ],
};
export default config;
