import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         rye:["var(--font-Rye)"],
         Librebodoni:["var(--font-LibreBodoni)"]


    
      },
      colors:{
      custom :{
       brown : " #A29875",
       brown2 : "#787054",




      } ,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
