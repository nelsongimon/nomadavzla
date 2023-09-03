import type { Config } from 'tailwindcss'

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
          "secondary-color": "#FFCE00",
          "gray-color": "#F6F6F6",
          "gray-strong-color": "#797979",
          "light-color": "#F6EBDC",
          "strong-color": "#B47D2E"
        }
    },
  },
  plugins: [],
}
export default config
