import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          "primary-color": "#000000",
          "secondary-color": "#d39d4e",
          "gray-color": "#F6F6F6",
          "gray-strong-color": "#797979",
          "light-color": "#FEF6D8",
          "strong-color": "#C99400"
        }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
export default config
