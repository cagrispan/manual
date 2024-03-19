import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-ed", "bg-hair"],
  theme: {
    colors: {
      "dark-green": "#0B3B3C",
      "mid-green": "#BDCDC5",
      "mid-dark-green": "#6D8A83",
      "light-green": "#E8EFE9",
      "dark-red": "#7E0707",
      white: "#FFFFFF",
    },
    backgroundImage: {
      hero: "url('/images/hero.png')",
      hair: "url('/images/hair.png')",
      ed: "url('/images/ed.png')",
    },
    letterSpacing: {
      widest: ".15em",
    },
  },
};
export default config;
