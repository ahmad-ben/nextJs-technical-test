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
        'primary': '#1E2E5C',
        'secondary': '#2B7848'
      },
      listStyleType: {
        'lower-roman': 'lower-roman'
      }
    },
  },
  plugins: [],
};
export default config;
