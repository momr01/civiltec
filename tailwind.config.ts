import type { Config } from "tailwindcss";
import * as flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: "var(--green)",
        mainBlue: "var(--blue)",
        greenDark: "var(--greenDark)",
        blueDark: "var(--blueDark)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
