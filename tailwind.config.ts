import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        primary: "#2FA060",
      },
      backgroundColor: {
        primary: "#F6F9F7",
        button: "#2FA060",
      },
      borderColor: {
        primary: "#F6F9F7",
        login: "rgba(47, 160, 96, 0.30)",
      },
      colors: {
        "active-sidebar": "#2FA060",
      },
    },
  },
  plugins: [],
};
export default config;
