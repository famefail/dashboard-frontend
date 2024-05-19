import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: { "grey-300": "#939494" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "search": "url('@/public/search.svg')"
      },
      backgroundColor: {
        "grey-300": "#BBC2C0",
        "grey-100": "#F3F3F3",
        "primary-500": "#243831",
        "primary-300": "#2B5F44",
        "success": "#49A569",
      },
    },
  },
  plugins: [],
};
export default config;
