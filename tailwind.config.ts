import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#f0f0f0',
      'secondary': '#3d51c9',
      'tertiary': '#4e7ad9',
      'success': '#7dd4a3',
      'warning': '#f2c32e',
      'error': '#c50e4a',
      'surface': '#2b2b2d'
    }
  },
  plugins: [],
};
export default config;
