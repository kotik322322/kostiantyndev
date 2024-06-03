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
        bgColor: "#FCF6F499",
        dark:"#1b1b1b",
        light:"#f5f5f5"
      },
      backgroundImage:{
        circularLight: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#000000 5px, #000000 30px)",
        circularLightLg: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#000000 5px, #000000 60px)",
        // circularDark: "repeating-radial-gradient(rgba(0,0,0,1) 2px,#ffffff 5px, #ffffff 100px)",
        // circularLightLg: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 80px)",
        // circularDarkLg: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px, #1b1b1b 80px)",
       },
    },
  },
  plugins: [],
};
export default config;
