import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: '#3D4451', 
          content: '#ffffff',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),

  ],
};
export default config;
